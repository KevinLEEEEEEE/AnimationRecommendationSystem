const { GlobalSetting } = require('./globalSetting');

cc.Class({
    extends: cc.Component,

    properties: {
        speed: {
          default: 1.0,
        },
        isTypeFinished: {
          default: false,
        },
        audio: {
          default: null,
          type: cc.AudioClip
        },
        labelNode: {
          default: null,
          type: cc.Label,
        }
    },
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      this.node.on("startType", this.startType, this);
    },

    startType({content, resolve}) {
      this.setNodeContent("");

      this.currTextResolve = resolve;

      this.isTypeFinished = false;

      this.typer(content, resolve, this.speed);
    },

    typer(text, resolve, speed) {
      const totalLoop = text.length - 1;
      let currLoop = 0;
      let currAudio = null;

      const callback = () => {
        if (currAudio) {
          this.stopTyperSound(currAudio);

          currAudio = null;
        }

        if (currLoop >= totalLoop) {
          this.unschedule(callback);

          resolve();
        }

        currLoop += 1;
        const content = this.getTyperContent(text, currLoop, totalLoop);

        currAudio = this.playTyperSound();
        this.setNodeContent(content);
      }

      this.schedule(callback, speed);
    },

    getTyperContent(text, position, total) {
      return text.substring(0, position)+ (position <= total ? "|" : "");
    },

    setNodeContent(content = "") {
      this.labelNode.string = content;
    },

    playTyperSound() {
      return cc.audioEngine.play(this.audio, false, GlobalSetting.volume);
    },

    stopTyperSound(currAudio) {
      cc.audioEngine.stop(currAudio);
    },
});
