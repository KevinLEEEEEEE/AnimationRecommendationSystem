
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
    speakerLabelNode: {
      default: null,
      type: cc.Label,
    },
    beforeType: {
      default: 0.0,
    },
  },

  // LIFE-CYCLE CALLBACKS:

  currDialogResolve: null,

  onLoad() {
    this.node.on('newDialog', this.newDialog, this);
  },

  newDialog({ content, resolve }) {
    this.currDialogResolve = resolve;

    this.scheduleOnce(() => {
      this.emitTypeContent(content);
    }, this.beforeType);
  },

  emitTypeContent(text) {
    new Promise((resolve) => {
      this.textNode.emit('startType', {
        content: text,
        resolve,
      });
    })
      .then(() => {
        this.currDialogResolve();
      });
  },
});
