
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
        },
        beforeBtn: {
          default: 0.0,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    isTypeFinished: false,

    currDialogResolve: null,

    onLoad () {
      this.node.on("newDialog", this.newDialog, this);
    },

    onDisable() {
      this.hideBtn();
    },

    newDialog({content, resolve}) {
      console.log("【DialogBox】: receive message: newDialog")

      this.currDialogResolve = resolve;

      this.scheduleOnce(() => {
        this.emitTypeContent(content);
      }, this.beforeType);
    },

    emitTypeContent(content) {
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

          this.isTypeFinished = true;
        }, this.beforeBtn);

      })
    },

    nodeClick() {
      if (this.isTypeFinished === true && this.currDialogResolve !== null) {
        this.currDialogResolve();

        this.isTypeFinished = false;

        this.currDialogResolve = null;

        this.hideBtn()
      }
    },

    showBtn() {
      this.btnNode.active = true;
    },

    hideBtn() {
      this.btnNode.active = false;
    },
});
