const { GlobalSetting } = require('./globalSetting');

cc.Class({
  extends: cc.Component,

  properties: {
    gemShow: {
      default: null,
      type: cc.AudioClip,
    },
    gemClick: {
      default: [],
      type: [cc.AudioClip],
    },
    animationDelay: {
      default: 0.0,
    },
    index: {
      default: 0,
    },
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.on('gemChecked', this.gemChecked, this);
    this.node.on('gemUnChecked', this.gemUnChecked, this);

    this.pos = this.node.position;
  },

  onEnable() {
    this.reset();

    this.scheduleOnce(() => {
      this.getComponent(cc.Animation).play('showGem');
    }, this.animationDelay);
  },

  reset() {
    this.node.scale = 1;
    this.node.opacity = 0;
    this.node.position = this.pos;
  },

  gemChecked() {
    this.playClickAnimation();

    this.scheduleOnce(() => {
      this.emitNextRoundMessage();
    }, 1.85);
  },

  gemUnChecked() {
    this.hideGemWithAnimation();
  },

  hideGemWithAnimation() {
    cc.tween(this.node)
      .to(0, { opacity: 100, scale: 1 })
      .to(0.35, { opacity: 0, scale: 2 })
      .start();
  },

  emitAnimationFinishMessage() {
    this.node.parent.emit('gemAnimationFinish', { index: this.index });
  },

  emitNextRoundMessage() {
    this.node.parent.emit('gemNextRound', { index: this.index });
  },

  playGemAnimation() {
    this.getComponent(cc.Animation).play();
  },

  playClickAnimation() {
    this.getComponent(cc.Animation).play('gemClick');
  },

  playShowSound() {
    cc.audioEngine.play(this.gemShow, false, GlobalSetting.volume);
  },

  playClickSound1() {
    cc.audioEngine.play(this.gemClick[0], false, GlobalSetting.volume);
  },

  playClickSound2() {
    cc.audioEngine.play(this.gemClick[1], false, GlobalSetting.volume);
  },
});
