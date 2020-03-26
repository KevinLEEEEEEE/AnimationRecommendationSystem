
cc.Class({
    extends: cc.Component,

    properties: {
        btnNode: {
          default: null,
          type: cc.Node,
        },
        textNode: {
          default: null,
          type: cc.Node,
        },
        beforeType: {
          default: 0.0,
          type: cc.Float,
        },
        beforeNext: {
          default: 0.0,
          type: cc.Float,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      this.hideBtn();

      this.node.on("newDialog", this.newDialog, this);
    },

    newDialog({content, resolve}) {
      console.log("【DialogBox】: receive controller request")

      this.scheduleOnce(() => {
        this.hideBtn();

        this.emitTypeContent(content, resolve);
      }, this.beforeType);
    },

    emitTypeContent(content, parentResolve) {
      new Promise((resolve) => {
        this.textNode.emit("startType", {
          content,
          resolve,
        })
      })
      .then(() => {
        console.log("【DialogBox】: type finished");

        this.scheduleOnce(() => {
          this.showBtn();

          parentResolve();
        }, this.beforeNext);

      })
    },

    showBtn() {
      this.btnNode.active = true;
    },

    hideBtn() {
      this.btnNode.active = false;
    },

    // update (dt) {},
});
