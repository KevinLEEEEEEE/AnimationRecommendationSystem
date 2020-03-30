const { GlobalSetting } = require('./globalSetting');

cc.Class({
  extends: cc.Component,

  properties: {
    cardSound: {
      default: null,
      type: cc.AudioClip,
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
    this.node.on('cardChecked', this.cardChecked, this);
  },

  onEnable() {
    this.resetCard();

    this.playShowAnimation();
  },

  resetCard() {
    this.node.opacity = 0;
  },

  playShowAnimation() {
    this.scheduleOnce(() => {
      this.getComponent(cc.Animation).play('showCard');
    }, this.animationDelay);
  },

  cardChecked() {
    this.getComponent(cc.Animation).play('cardClick');
  },

  playShowSound() {
    this.playSound();
  },

  playClickSound() {
    this.playSound();
  },

  playSound() {
    cc.audioEngine.play(this.cardSound, false, GlobalSetting.volume);
  },

  emitAnimationFinishMessage() {
    this.node.parent.emit('cardAnimationFinish', { index: this.index });
  },

  emitNextRoundMessage() {
    this.node.parent.emit('cardNextRound', { index: this.index });
  },
});
