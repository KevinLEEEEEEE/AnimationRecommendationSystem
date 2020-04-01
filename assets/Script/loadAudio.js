
cc.Class({
  extends: cc.Component,

  properties: {
    audioClips: {
      default: [],
      type: [cc.AudioClip],
    },
  },

  // LIFE-CYCLE CALLBACKS:

  start() {
    this.audioClips.forEach((clip) => {
      cc.audioEngine.play(clip, false, 0);
    });
  },

  // update (dt) {},
});
