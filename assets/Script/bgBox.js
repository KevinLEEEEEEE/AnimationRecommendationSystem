
cc.Class({
  extends: cc.Component,

  properties: {
    campNode: {
      default: null,
      type: cc.Node,
    },
    gapY: {
      default: 0,
    },
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.on('moveToTop', this.moveToTop, this);
    this.node.on('moveToMiddle', this.moveToMiddle, this);
    this.node.on('moveToBottom', this.moveToBottom, this);

    this.calc();
  },

  calc() {
    const canvasHeight = this.node.parent.height;
    const bgHeight = this.node.height;

    this.gapY = (bgHeight - canvasHeight) / 2;
  },

  moveToTop({ resolve }) {
    this.campNode.active = false;

    this.moveBgY(-this.gapY, resolve);
  },

  moveToMiddle({ resolve }) {
    this.campNode.active = false;

    this.moveBgY(0, resolve);
  },

  moveToBottom({ resolve }) {
    this.campNode.active = true;

    this.moveBgY(this.gapY, resolve);
  },

  moveBgY(y, resolve) {
    cc.tween(this.node)
      .to(0.8, { position: cc.v2(0, y) })
      .call(resolve)
      .start();
  },

});
