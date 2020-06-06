
cc.Class({
  extends: cc.Component,

  properties: {
    curtainContainer: {
      default: null,
      type: cc.Label,
    },
    animeName: '',
  },

  // LIFE-CYCLE CALLBACKS:

  sendCurtain() {
    cc.find('Canvas').emit('addCurtain', this.animeName, this.curtainContainer.string);
  },

  // update (dt) {},
});
