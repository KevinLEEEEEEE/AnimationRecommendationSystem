
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
        },
        choicesList: {
          default: []
        },
        isFirstRound: {
          default: true,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      this.readyForStart();
    },

    start() {
      this.runGameIndex(12);
    },

    readyForStart() {
      this.hideCardBox();

      this.hideNoodleGod();

      this.hideRecommendBox();

      this.moveBgToMiddle();

      this.choicesList = [];
    },

    runGameIndex(index) {
      const { content, nodeType: currNodeType, nextArray, currIndex } = gameFlow[index];

      console.log(`【GameController】: New Cycle, currIndex: ${ currIndex }`);

      this.getMainStep(currNodeType, content)
        .then((index = 0) => {
          console.log("【GameController】: Finish prev Cycle\n");

          this.scheduleOnce(() => {
            this.runGameIndex(nextArray[index]);
          }, this.beforeNewCycle);
        })
        .catch(() => {
          console.log("【GameController】: Error!");
        })
    },

    getMainStep(currNodeType, content) {
      switch(currNodeType) {
        case nodeType.textNode: 
          return this.runTextStep(content);
        case nodeType.cardNode:
          return this.runCardStep(content);
        case nodeType.animationNode:
          return this.runAnimationStep(content);
        case nodeType.summeryNode:
          return this.runSummeryStep(this.choicesList);
        case nodeType.recommendNode:
          return this.runRecommendStep(content);
        case nodeType.refreshNode: 
          return this.runRefreshStep(content);
        default:
          return Promise.resolve;
      }
    },

    // --------------------- Steps ------------------------

    runTextStep(content) {
      return new Promise((resolve) => {
        this.dialogBoxNode.emit("newDialog", {
          content,
          resolve,
        })
      })

    },

    runCardStep(content) {
      return new Promise((resolve) => {
        this.showCardBox();

        this.cardBoxNode.emit("newCard", {
          content,
          resolve,
        })
      })
      .then((index) => {
        this.choicesList.push(content[index]);
        
        return this.hideCardBoxWithAnimation();
      })
    },

    runRecommendStep(content) {
      return new Promise((resolve) => {
        this.showRecommendBox();

        this.recommendBoxNode.emit("newRecommend", {
          resolve,
        })
      })
      .then((index) => {
        return this.runTextStep("您选择了： " + index + "号推荐" + content[index]);
      })
      .then(() => {
        return this.hideRecommendBoxWithAnimation();
      })
    },

    runAnimationStep(currNodeType) {
      switch(currNodeType) {
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

    runSummeryStep(list) {
      const content = `就决定是你啦！${ list[0].name }便当配${ list[1].name }与${ list[2].name }！`;

      return this.runTextStep(content);
    },

    runRefreshStep(content) {
      this.readyForStart();

      if (this.isFirstRound === true) {
        this.isFirstRound = false;

        return this.runTextStep(content[0]);
      } else {
        return this.runTextStep(content[1]);
      }
    },

    // --------------------- Animations ------------------------

    moveBgToMiddle() {
      return this.moveBgY(0);
    },

    moveBgToBottom() {
      return this.moveBgY(480);
    },

    moveBgToTop() {
      return this.moveBgY(-480);
    },

    moveBgY(y) {
      return new Promise((resolve) => {
        cc.tween(this.bgNode)
        .to(1, { position: cc.v2(0, y) })
        .call(resolve())
        .start();
      })
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
        cc.tween(this.cardBoxNode)
        .to(0.07, { opacity: 0 })
        .call(() => {
          this.cardBoxNode.active = false;
          this.cardBoxNode.opacity = 255;
          this.cardBoxNode.scale = 1;
  
          resolve();
        })
        .start();
      })
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

        this.noodleGodNode.emit("godShow", {
          resolve,
        })
      })

    },

    hideNoodleGodWithAnimation() {
      return new Promise((resolve) => {
        this.noodleGodNode.emit("godHide", {
          resolve,
        })
      })
      .then(() => {
        return this.hideNoodleGod();
      })
    },

    showRecommendBox() {
      this.recommendBoxNode.active = true;

      return Promise.resolve();
    },

    hideRecommendBox() {
      this.recommendBoxNode.active = false;

      return Promise.resolve();
    },

    hideRecommendBoxWithAnimation() {
      return new Promise((resolve) => {
        cc.tween(this.recommendBoxNode)
        .to(0, { opacity: 100})
        .to(0.15, { opacity: 0, scale: 8 }, { easing: 'easeInSine'})
        .call(() => {
          this.recommendBoxNode.active = false;
          this.recommendBoxNode.opacity = 255;
          this.recommendBoxNode.scale = 1;
  
          resolve();
        })
        .start();
      })
    }
});
