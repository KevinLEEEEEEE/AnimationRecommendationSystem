
cc.Class({
  extends: cc.Component,

  properties: {
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.on('addCurtain', this.addCurtain, this);
  },

  start() {

  },

  addCurtain(name, curtain) {

  },

  loadMainPage() {
    cc.director.loadScene('main');
  },

  // update (dt) {},
});
