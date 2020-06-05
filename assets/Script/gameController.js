
const { gameFlow, nodeType, animationNode } = require('./setting&flow/gameFlow');

cc.Class({
  extends: cc.Component,

  properties: {
    bgNode: {
      default: null,
      type: cc.Node,
    },
    noodleGodNode: {
      default: null,
      type: cc.Node,
    },
    dialogBoxNode: {
      default: null,
      type: cc.Node,
    },
    cardBoxNode: {
      default: null,
      type: cc.Node,
    },
    gemBoxNode: {
      default: null,
      type: cc.Node,
    },
    beforeNewCycle: {
      default: 0.0,
    },
    choicesList: {
      default: [],
    },
    isFirstRound: {
      default: true,
    },
  },

  // LIFE-CYCLE CALLBACKS:


  start() {
    this.runGameIndex(0);
  },

  runGameIndex(index) {
    const {
      content, nodeType: currNodeType, nextArray, currIndex,
    } = gameFlow[index];

    cc.log(`【GameController】：New Cycle：${currIndex}`);

    this.runMainStep(currNodeType, content)
      .then((nextIndex) => {
        this.scheduleOnce(() => {
          this.runGameIndex(nextArray[this.checkIndex(nextIndex)]);
        }, this.beforeNewCycle);
      })
      .catch((e) => {
        cc.error(`【GameController】：Error!, details: ${e}`);
      });
  },

  checkIndex(index) {
    return typeof index === 'number' ? index : 0;
  },

  runMainStep(currNodeType, content) {
    switch (currNodeType) {
      case nodeType.textNode:
        return this.runTextStep(content);
      case nodeType.cardNode:
        return this.runCardStep(content);
      case nodeType.animationNode:
        return this.runAnimationStep(content);
      case nodeType.summeryNode:
        return this.runSummeryStep(content);
      case nodeType.recommendNode:
        return this.runRecommendStep(content);
      case nodeType.refreshNode:
        return this.runRefreshStep();
      default:
        return Promise.resolve;
    }
  },

  // --------------------- Steps ------------------------

  runTextStep(content) {
    return new Promise((resolve) => {
      this.dialogBoxNode.emit('newDialog', {
        content,
        resolve,
      });
    });
  },

  runCardStep(content) {
    return new Promise((resolve) => {
      this.showCardBox();

      this.cardBoxNode.emit('newCard', {
        content,
        resolve,
      });
    })
      .then((index) => new Promise((resolve) => {
        this.choicesList.push(content[index]);

        this.hideCardBoxWithAnimation()
          .then(() => {
            resolve(index);
          });
      }));
  },

  runRecommendStep(content) {
    return new Promise((resolve) => {
      this.showgemBox();

      this.gemBoxNode.emit('newRecommend', {
        resolve,
      });
    })
      .then((index) => {
        const gemContent = this.getGemContent(index);
        const recommendContent = this.getRecommendContent(content.text);
        const text = `【开启${gemContent}】你需要的是${recommendContent}`;

        const newContent = {
          speaker: content.speaker,
          text,
        };

        return this.runTextStep(newContent);
      })
      .then(() => this.hideGemBoxWithAnimation());
  },

  getGemContent(index) {
    switch (index) {
      case 0:
        return '红色脉动宝石';
      case 1:
        return '绿色翡翠宝石';
      case 2:
        return '银色光辉宝石';
      default:
        return '红色脉动宝石';
    }
  },

  getRecommendContent(animeList) {
    let recommendHistory = this.getRecommendHistory();
    let avaiList = this.excludeArray(animeList, recommendHistory);

    cc.log(`【GameController】：get current history: ${recommendHistory}`);

    if (avaiList.length === 0) {
      this.clearRecommendHistory();

      avaiList = animeList;
      recommendHistory = [];

      cc.log('【GameController】：run out of recommendation list');
    }

    const recommendation = avaiList[this.getRandomInt(avaiList.length)];

    recommendHistory.push(recommendation);
    this.setRecommendHistory(recommendHistory);

    cc.log(`【GameController】：set new history: ${recommendHistory}`);

    return recommendation;
  },

  excludeArray(targetArray, excludes) {
    return targetArray.filter((element) => excludes.indexOf(element) === -1);
  },

  getRecommendHistory() {
    const history = cc.sys.localStorage.getItem('recommendHistory');

    if (history) {
      return JSON.parse(history);
    }

    return [];
  },

  setRecommendHistory(data) {
    cc.sys.localStorage.setItem('recommendHistory', JSON.stringify(data));
  },

  clearRecommendHistory() {
    this.setRecommendHistory([]);
  },

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },

  runAnimationStep(currNodeType) {
    switch (currNodeType) {
      case animationNode.showNoodleGod:
        return this.showNoodleGodWithAnimation();
      case animationNode.hideNoodleGod:
        return this.hideNoodleGodWithAnimation();
      case animationNode.moveBgToMiddle:
        return this.moveBgToMiddle();
      case animationNode.moveBgToBottom:
        return this.moveBgToBottom();
      case animationNode.moveBgToTop:
        return this.moveBgToTop();
      default:
        return Promise.resolve();
    }
  },

  runSummeryStep(content) {
    const newContent = {
      speaker: content.speaker,
      text: this.getSummeryContent(),
    };

    return this.runTextStep(newContent);
  },

  getSummeryContent() {
    const [{ name: name1 }, { name: name2 }, { name: name3 }] = this.choicesList;

    return `就决定是你啦！${name1}便当配${name2}与${name3}！`;
  },

  runRefreshStep() {
    this.choicesList = [];

    return Promise.all([
      this.hideCardBox(),
      this.hideNoodleGod(),
      this.hidegemBox(),
      this.moveBgToMiddle(),
    ]);
  },

  // --------------------- Animations ------------------------

  moveBgToMiddle() {
    return new Promise((resolve) => {
      this.bgNode.emit('moveToMiddle', {
        resolve,
      });
    });
  },

  moveBgToBottom() {
    return new Promise((resolve) => {
      this.bgNode.emit('moveToBottom', {
        resolve,
      });
    });
  },

  moveBgToTop() {
    return new Promise((resolve) => {
      this.bgNode.emit('moveToTop', {
        resolve,
      });
    });
  },

  showDialogBox() {
    this.dialogBoxNode.active = true;

    return Promise.resolve();
  },

  hideDialogBox() {
    this.dialogBoxNode.active = false;

    return Promise.resolve();
  },

  showCardBox() {
    this.cardBoxNode.active = true;

    return Promise.resolve();
  },

  hideCardBox() {
    this.cardBoxNode.active = false;

    return Promise.resolve();
  },

  hideCardBoxWithAnimation() {
    return new Promise((resolve) => {
      this.cardBoxNode.emit('cardHide', {
        resolve,
      });
    })
      .then(() => this.hideCardBox());
  },

  showNoodleGod() {
    this.noodleGodNode.active = true;

    return Promise.resolve();
  },

  hideNoodleGod() {
    this.noodleGodNode.active = false;

    return Promise.resolve();
  },

  showNoodleGodWithAnimation() {
    return new Promise((resolve) => {
      this.showNoodleGod();

      this.noodleGodNode.emit('godShow', {
        resolve,
      });
    });
  },

  hideNoodleGodWithAnimation() {
    return new Promise((resolve) => {
      this.noodleGodNode.emit('godHide', {
        resolve,
      });
    })
      .then(() => this.hideNoodleGod());
  },

  showgemBox() {
    this.gemBoxNode.active = true;

    return Promise.resolve();
  },

  hidegemBox() {
    this.gemBoxNode.active = false;

    return Promise.resolve();
  },

  hideGemBoxWithAnimation() {
    return new Promise((resolve) => {
      this.gemBoxNode.emit('recommendHide', {
        resolve,
      });
    })
      .then(() => this.hidegemBox());
  },
});
