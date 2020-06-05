const { GlobalSetting } = require('../setting&flow/globalSetting');

const STATE = {
  beforeType: 1,
  typing: 2,
  typeFinished: 3,
  continueBtnActived: 4,
};

cc.Class({
  extends: cc.Component,

  properties: {
    speed: {
      default: 1.0,
    },
    typerLabelNode: {
      default: null,
      type: cc.Label,
    },
    speakerLabelNode: {
      default: null,
      type: cc.Label,
    },
    canvasNode: {
      default: null,
      type: cc.Node,
    },
    continueBtnNode: {
      default: null,
      type: cc.Node,
    },
    audio: {
      default: null,
      type: cc.AudioClip,
    },
    beforeBtn: {
      default: 0.0,
    },
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.on('startType', this.startType, this);

    this.setState(STATE.beforeType);

    this.resetTyperData();
  },

  startType({ content, resolve }) {
    if (!this.canType()) {
      return;
    }

    this.currTextResolve = resolve;

    this.content = content;

    this.setState(STATE.typing);

    this.setTyperLabelContent('');
    this.setSpeakerLabelContent(this.content.speaker);

    this.hideContinueBtn();

    this.typing(this.content.text);
  },

  btnClick() {
    if (this.canSkip()) { // skip typing process
      this.skipType();
    } else if (this.canContinue()) { // next round
      this.currTextResolve();

      this.resetTyperData();

      this.hideContinueBtn();
    }
  },

  resetTyperData() {
    this.setState(STATE.beforeType);

    this.typingHandler = null;
    this.currTextResolve = null;
    this.content = {
      speaker: '',
      content: '',
    };
  },

  skipType() {
    this.finishType();
  },

  finishType() {
    this.setState(STATE.typeFinished);

    this.setTyperLabelContent(this.content.text);

    this.unschedule(this.typingHandler);

    this.scheduleOnce(() => {
      this.setState(STATE.continueBtnActived);

      this.showContinueBtn();
    }, this.beforeBtn);
  },

  typing(text) {
    const totalLoop = this.getTotalLoop(text);
    let currLoop = 0;

    this.typingHandler = () => {
      if (currLoop >= totalLoop) {
        this.finishType();

        return;
      }

      this.playTyperSound();

      currLoop += 2;
      const content = this.getTyperContent(text, currLoop, totalLoop);

      this.setTyperLabelContent(content);
    };

    this.schedule(this.typingHandler, this.speed);
  },

  getTotalLoop(text) {
    return text.split('').length;
  },

  getTyperContent(text, position) {
    return text.split('').slice(0, position).join('');
  },

  setTyperLabelContent(content) {
    this.typerLabelNode.string = content;
  },

  setSpeakerLabelContent(content) {
    this.speakerLabelNode.string = content;
  },

  setState(state) {
    this.state = state;
  },

  getState() {
    return this.state || STATE.beforeType;
  },

  canType() {
    return this.getState() === STATE.beforeType;
  },

  canSkip() {
    return this.getState() === STATE.typing;
  },

  canContinue() {
    return this.getState() === STATE.continueBtnActived;
  },

  playTyperSound() {
    cc.audioEngine.play(this.audio, false, GlobalSetting.volume);
  },

  showContinueBtn() {
    this.continueBtnNode.active = true;
  },

  hideContinueBtn() {
    this.continueBtnNode.active = false;
  },
});
