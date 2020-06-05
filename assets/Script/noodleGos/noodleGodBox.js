const { GlobalSetting } = require('../setting&flow/globalSetting');

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

    this.currAudio = null;
  },

  onEnable() {
    this.reset();
  },

  onDisable() {
    if (this.currAudio) {
      cc.audioEngine.stop(this.currAudio);
    }
  },

  reset() {
    this.bgNode.opacity = 0;
  },

  godShow(resolve) {
    this.scheduleOnce(() => {
      this.godShowAnime(resolve);
    }, 1.0);
  },

  godShowAnime({ resolve }) {
    this.scheduleOnce(() => {
      this.playShowSound();
    }, 0.3);

    cc.tween(this.bgNode)
      .to(1.0, { opacity: 180 })
      .start();

    cc.tween(this.noodleNode)
      .to(1.4, {
        position: cc.v2(this.noodleNode.position.x, this.noodleGodShowY),
        opacity: 255,
        angle: 360,
        scale: 1,
      })
      .to(1.6, {})
      .call(resolve)
      .start();
  },

  godHide({ resolve }) {
    this.playHideSound();

    cc.tween(this.bgNode)
      .to(1.5, { opacity: 0 })
      .start();

    cc.tween(this.noodleNode)
      .to(1.5, {
        position: cc.v2(this.noodleNode.position.x, this.noodleGodHideY),
        opacity: 0,
        scale: 0.4,
      })
      .to(1.7, {
        angle: 0,
      })
      .call(resolve)
      .start();
  },

  playShowSound() {
    cc.log('play god show sound');

    this.currAudio = cc.audioEngine.play(this.showSound, false, GlobalSetting.volume);
  },

  playHideSound() {
    cc.log('play god hide sound');

    this.currAudio = cc.audioEngine.play(this.hideSound, false, GlobalSetting.volume);
  },
});
