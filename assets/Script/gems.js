const { GlobalSetting } = require('./globalSetting');

cc.Class({
    extends: cc.Component,

    properties: {
      gemShow: {
        default: null,
        type: cc.AudioClip
      },
      gemClick: {
        default: [],
        type: [ cc.AudioClip ] 
      },
      loopName: {
        default: "",
      },
      animationDelay: {
        default: 0.0,
      },
      animationGap: {
        default: 0.0,
      },
      posX: {
        default: 0,
      },
      posY: {
        default: 0,
      },
      canClick: {
        default: false,
      }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      this.hideGem();
    },
    
    onEnable() {
      this.scheduleOnce(() => {
        this.getComponent(cc.Animation).play("showGem");

        this.canClick = true;
      }, this.animationDelay);
    },

    onDisable() {
      this.hideGem();

      this.resetGem();
    },

    hideGem() {
      this.node.opacity = 0;
    },

    resetGem() {
      this.node.scale = 1;

      this.node.position = cc.v2(this.posX, this.posY);
    },

    hideGemWithAnimation() {
      cc.tween(this.node)
      .to(0, { opacity: 100, scale: 1 })
      .to(0.2, { opacity: 0, scale: 1.8 })
      .start();
    },

    nodeUnClick() {
      this.hideGemWithAnimation();

      this.canClick = false;
    },

    nodeClick(e, index) {
      if (this.canClick === false) {
        return;
      }

      this.canClick = false;

      this.playClickAnimation();

      this.scheduleOnce(() => {
        this.emitClickMessage(index);
      }, this.animationGap);
    },

    emitClickMessage(index) {
      this.node.parent.emit("gemClick", { index })
    },

    playGemAnimation() {
      this.getComponent(cc.Animation).play(this.loopName);
    },

    playClickAnimation() {
      this.getComponent(cc.Animation).play("gemClick");
    },

    playShowSound() {
      cc.audioEngine.play(this.gemShow, false, GlobalSetting.volume);
    },

    playClickSound1() {
      cc.audioEngine.play(this.gemClick[0], false, GlobalSetting.volume);
    },

    playClickSound2() {
      cc.audioEngine.play(this.gemClick[1], false, GlobalSetting.volume);
    }
});
