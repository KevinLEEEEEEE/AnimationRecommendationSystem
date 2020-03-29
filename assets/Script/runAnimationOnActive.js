
cc.Class({
  extends: cc.Component,

  properties: {
  },

  // LIFE-CYCLE CALLBACKS:

  onEnable() {
    this.getComponent(cc.Animation).play();
  },
});
