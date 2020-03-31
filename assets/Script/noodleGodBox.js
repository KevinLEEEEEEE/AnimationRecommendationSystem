const { GlobalSetting } = require('./globalSetting');

cc.Class({
  extends: cc.Component,

  properties: {
    noodleNode: {
      default: null,
      type: cc.Node,
    },
    bgNode: {
      default: null,
      type: cc.Node,
    },
    showSound: {
      default: null,
      type: cc.AudioClip,
    },
    hideSound: {
      default: null,
      type: cc.AudioClip,
    },
    noodleGodHideY: {
      default: 0.0,
    },
    noodleGodShowY: {
      default: 0.0,
    },
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.on('godShow', this.godShow, this);
    this.node.on('godHide', this.godHide, this);
  },

  onEnable() {
    this.reset();
  },

  reset() {
    this.bgNode.opacity = 0;
  },

  godShow({ resolve }) {
    this.playShowSound();

    cc.tween(this.bgNode)
      .to(0.8, { opacity: 180 })
      .start();

    cc.tween(this.noodleNode)
      .to(1.2, {
        position: cc.v2(this.noodleNode.position.x, this.noodleGodShowY),
        angle: 360,
        scale: 1,
      })
      .call(resolve)
      .start();
  },

  godHide({ resolve }) {
    this.playHideSound();

    cc.tween(this.bgNode)
      .to(1.5, { opacity: 0 })
      .start();

    cc.tween(this.noodleNode)
      .to(1.5, { position: cc.v2(this.noodleNode.position.x, this.noodleGodHideY), scale: 0.5 })
      .call(resolve)
      .start();
  },

  playShowSound() {
    cc.audioEngine.play(this.showSound, false, GlobalSetting.volume);
  },

  playHideSound() {
    cc.audioEngine.play(this.hideSound, false, GlobalSetting.volume);
  },
});
