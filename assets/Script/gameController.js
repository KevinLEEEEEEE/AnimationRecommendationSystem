
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
        recommendBoxNode: {
          default: null,
          type: cc.Node,
        },
        beforeNewCycle: {
          default: 0.0,
          type: cc.Float,
        }
    },

    currNextTextResolve: null,

    choicesList: null,

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      this.readyForStart();

      this.node.on("mousedown", this.clickRespond, this);
    },

    start() {
      this.runGameIndex(32);
    },

    readyForStart() {
      this.hideCardBox();

      this.hideNoodleGod();

      this.hideRecommendBox();

      this.choicesList = [];
    },

    runGameIndex(index) {
      const { content, nodeType: currNodeType, next, index: currIndex } = gameFlow[index];

      console.log("【GameController】: New Cycle, index: " + currIndex);

      new Promise((resolve) => {
        switch(currNodeType) {
          case nodeType.textNode: 
            this.runTextStep(content, resolve);
            break;
          case nodeType.cardNode:
            this.runCardStep(content, resolve);
            break;
          case nodeType.animationNode:
            this.runAnimationStep(content, resolve);
            break;
          case nodeType.summeryNode:
            this.runSummeryStep(this.choicesList, resolve);
            break;
          case nodeType.recommendNode:
            this.runRecommendStep(content, resolve);
            break;
          case nodeType.refreshNode: 
            this.runRefreshStep(content, resolve);
            break;
          default:
        }
      })
      .then((nextIndex) => {
        console.log("【GameController】: Finish prev Cycle");

        this.scheduleOnce(() => {
          this.runGameIndex(next[nextIndex]);
        }, this.beforeNewCycle);
      })
      .catch(() => {
        console.log("【GameController】: Error!");
      })
    },

    // steps

    runTextStep(content, parentResolve) {
      new Promise((resolve) => {
        this.dialogBoxNode.emit("newDialog", {
          content,
          resolve,
        })
      })
      .then(() => {
        return new Promise((resolve) => {
          this.currNextTextResolve = resolve;
        })
      })
      .then(() => {
        parentResolve(0);
      })
    },

    clickRespond() {
      if (this.currNextTextResolve !== null) {
        const resolve = this.currNextTextResolve;

        this.currNextTextResolve = null;

        resolve();
      }
    },

    runCardStep(content, parentResolve) {
      this.showCardBox();

      new Promise((resolve) => {
        this.cardBoxNode.emit("newCard", {
          content,
          resolve,
        })
      })
      .then((index) => {
        this.hideCardBox();

        this.choicesList.push(content[index]);

        parentResolve(index);
      })
    },

    runRecommendStep(content, parentResolve) {
      this.showRecommendBox();

      new Promise((resolve) => {
        this.recommendBoxNode.emit("newRecommend", {
          resolve,
        })
      })
      .then((index) => {
        this.runTextStep("您选择了： " + index + "号推荐" + content[index], () => {
          this.hideRecommendBox();

          parentResolve(0);
        });
      })
    },

    runAnimationStep(content, parentResolve) {
      new Promise((resolve) => {
        switch(content) {
          case animationNode.showNoodleGod: 
            this.showNoodleGodWithAnimation(resolve);
            break;
          case animationNode.hideNoodleGod:
            this.showNoodleGod();
            this.hideNoodleGodWithAnimation(resolve);
            break;
          case animationNode.moveBgToMiddle:
            this.moveBgToMiddle(resolve);
            break;
          case animationNode.moveBgToBottom:
            this.moveBgToBottom(resolve);
            break;
          case animationNode.moveBgToTop:
            this.moveBgToTop(resolve);
            break;
          default:
        }
      })
      .then(() => {
        parentResolve(0);
      })
    },

    runSummeryStep(list, resolve) {
      const content = `就决定是你啦！${ list[0].name }便当配${ list[1].name }与${ list[2].name }！`;

      this.runTextStep(content, resolve);
    },

    runRefreshStep(content, resolve) {
      this.readyForStart();

      this.runTextStep(content, resolve);
    },

    // animations

    moveBgToMiddle(resolve) {
      this.moveBg(resolve, 0);
    },

    moveBgToBottom(resolve) {
      this.moveBg(resolve, 480);
    },

    moveBgToTop(resolve) {
      this.moveBg(resolve, -480);
    },

    moveBg(resolve, y) {
      cc.tween(this.bgNode)
        .to(1, { position: cc.v2(0, y) })
        .call(resolve())
        .start();
    },

    showDialogBox() {
      this.dialogBoxNode.active = true;
    },

    hideDialogBox() {
      this.dialogBoxNode.active = false;
    },

    showCardBox() {
      this.cardBoxNode.active = true;
    },

    hideCardBox() {
      this.cardBoxNode.active = false;
    },

    showNoodleGod() {
      this.noodleGodNode.active = true;
    },

    hideNoodleGod() {
      this.noodleGodNode.active = false;
    },

    showNoodleGodWithAnimation(parentResolve) {
      this.showNoodleGod();

      new Promise((resolve) => {
        this.noodleGodNode.emit("godShow", {
          resolve,
        })
      })
      .then(() => {
        parentResolve();
      })
    },

    hideNoodleGodWithAnimation(parentResolve) {
      new Promise((resolve) => {
        this.noodleGodNode.emit("godHide", {
          resolve,
        })
      })
      .then(() => {
        this.hideNoodleGod();

        parentResolve();
      })
    },

    showRecommendBox() {
      this.recommendBoxNode.active = true;
    },

    hideRecommendBox() {
      this.recommendBoxNode.active = false;
    }

    // update (dt) {},
});
