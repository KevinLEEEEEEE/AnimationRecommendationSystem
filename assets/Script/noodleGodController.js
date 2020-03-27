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
          type: cc.AudioClip
        },
        hideSound: {
          default: null,
          type: cc.AudioClip
        },
        noodleGodHideY: {
          default: 0.0,
        },
        noodleGodShowY: {
          default: 0.0,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      this.node.on("godShow", this.godShow, this);
      this.node.on("godHide", this.godHide, this);

      this.bgNode.opacity = 0;
    },

    godShow({ resolve }) {
      this.playShowSound();

      cc.tween(this.bgNode)
        .to(0.5, { opacity: 255 })
        .start();

      cc.tween(this.noodleNode)
        .to(1, { position: cc.v2(this.noodleNode.position.x, this.noodleGodShowY), rotation: 360})
        .call(resolve)
        .start();
    },

    godHide({ resolve }) {
      this.playHideSound();

      cc.tween(this.bgNode)
      .to(0.5, {})
      .to(0.5, { opacity: 0 })
      .start();

      cc.tween(this.noodleNode)
        .to(1, { position: cc.v2(this.noodleNode.position.x, this.noodleGodHideY)} )
        .call(resolve)
        .start();
    },

    playShowSound() {
      return cc.audioEngine.play(this.showSound, false, 0.2);
    },

    playHideSound() {
      return cc.audioEngine.play(this.hideSound, false, 0.2);
    },


    // update (dt) {},
});
