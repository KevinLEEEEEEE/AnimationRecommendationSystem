
const { gameFlow, nodeType, animationNode } = require('./gameFlow');

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
    this.runGameIndex(10);
  },

  runGameIndex(index) {
    const {
      content, nodeType: currNodeType, nextArray, currIndex,
    } = gameFlow[index];

    console.log(`\n【GameController】: New Cycle：${currIndex}`);

    this.runMainStep(currNodeType, content)
      .then((nextIndex) => {
        this.scheduleOnce(() => {
          this.runGameIndex(nextArray[this.checkIndex(nextIndex)]);
        }, this.beforeNewCycle);
      })
      .catch((e) => {
        console.error(`【GameController】: Error!, details: ${e}`);
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
        return this.runSummeryStep();
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
        const recommendContent = this.getRecommendContent(content);
        const text = `【${gemContent}色推荐宝石】 ${recommendContent}是一部。。。的动漫，后续内容有待完善`;

        return this.runTextStep(text);
      })
      .then(() => this.hidegemBoxWithAnimation());
  },

  getGemContent(index) {
    switch (index) {
      case 0:
        return '红';
      case 1:
        return '绿';
      case 2:
        return '银';
      default:
        return '红';
    }
  },

  getRecommendContent(animeList) {
    return animeList[this.getRandomInt(animeList.length)];
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

  runSummeryStep() {
    return this.runTextStep(this.getSummeryContent());
  },

  getSummeryContent() {
    const list = this.choicesList;

    return `就决定是你啦！${list[0].name}便当配${list[1].name}与${list[2].name}！`;
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

  hidegemBoxWithAnimation() {
    return new Promise((resolve) => {
      this.gemBoxNode.emit('recommendHide', {
        resolve,
      });
    })
      .then(() => this.hidegemBox());
  },
});
