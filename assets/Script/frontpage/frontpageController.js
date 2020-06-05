
cc.Class({
  extends: cc.Component,

  properties: {
    noodleGodNode: {
      default: null,
      type: cc.Node,
    },
    muskNode: {
      default: null,
      type: cc.Node,
    },
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.canLoadMainPage = true;
  },

  start() {
    cc.director.preloadScene('game', () => {
      cc.log('【FrontpageController】Game scene preloaded');
    });
  },

  loadMainPage() {
    if (!this.canLoadMainPage) {
      return;
    }

    this.canLoadMainPage = false;

    this.playLoadAnimation();

    this.scheduleOnce(() => { // OMG
      this.loadScene();
    }, 0.50);
  },

  playLoadAnimation() {
    this.noodleGodNode.getComponent(cc.Animation).play('sceneTransition');

    this.muskNode.getComponent(cc.Animation).play('transitionMuskShow');
  },

  loadScene() {
    cc.director.loadScene('game');
  },

  // update (dt) {},
});
