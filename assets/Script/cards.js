const { GlobalSetting } = require('./globalSetting');

cc.Class({
    extends: cc.Component,

    properties: {
      cardSound: {
        default: null,
        type: cc.AudioClip
      },
      animationGap: {
        default: 0.0,
      },
      animationDelay: {
        default: 0.0,
      },
      canClick: {
        default: false,
      }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      this.hideCard();
    },
    
    onEnable() {
      this.scheduleOnce(() => {
        this.getComponent(cc.Animation).play("showCard");

        this.canClick = true;
      }, this.animationDelay);
    },

    onDisable() {
      this.hideCard();
    },
  
    hideCard() {
      this.node.opacity = 0;
    },

    playSound() {
      cc.audioEngine.play(this.cardSound, false, GlobalSetting.volume);
    },

    nodeUnclick() {
      this.canClick = false;
    },

    nodeClick(e, index) {
      if (this.canClick === false) {
        return;
      }

      this.canClick = false;

      this.playClickAnimation(index);
    },

    playClickAnimation(index) {
      cc.tween(this.node)
        .call(this.playClickSound)
        .to(this.animationGap, { opacity: 100 })
        .to(this.animationGap * 2, { opacity: 255 })
        .to(this.animationGap * 3, { opacity: 100 })
        .call(this.playClickSound)
        .to(this.animationGap * 4, { opacity: 255 })
        .to(this.animationGap * 4)
        .call(() => {
          this.emitClickMessage(index)
        })
        .start();
    },

    playClickSound() {
      cc.audioEngine.play(this.cardSound, false, GlobalSetting.volume);
    },

    emitClickMessage(index) {
      this.node.parent.emit("cardClick", { index })
    },
});
