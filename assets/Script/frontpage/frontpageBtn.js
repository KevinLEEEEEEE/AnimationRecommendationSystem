// const { language, setLanguage } = require('../setting&flow/globalSetting');

cc.Class({
  extends: cc.Component,

  properties: {
    textNode: {
      default: null,
      type: cc.Node,
    },
    bgNode: {
      default: null,
      type: cc.Node,
    },
    // language: {
    //   default: language.chinese,
    //   type: cc.Enum(language),
    // },
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.on(cc.Node.EventType.MOUSE_ENTER, this.hover, this);
    this.node.on(cc.Node.EventType.TOUCH_START, this.hover, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.unHover, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.unHover, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.unHover, this);
  },

  onDestory() {
    this.node.off(cc.Node.EventType.MOUSE_ENTER, this.hover, this);
    this.node.off(cc.Node.EventType.TOUCH_START, this.hover, this);
    this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.unHover, this);
    this.node.off(cc.Node.EventType.TOUCH_END, this.unHover, this);
    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.unHover, this);
  },

  hover() {
    this.textNode.getComponent(cc.Animation).play('textHover');
    this.bgNode.getComponent(cc.Animation).play('btnHover');
  },

  unHover() {
    this.textNode.getComponent(cc.Animation).stop('textHover');
    this.bgNode.getComponent(cc.Animation).stop('btnHover');

    this.reset();
  },

  reset() {
    this.textNode.scale = 1;
    this.textNode.angle = 0;
    this.bgNode.scale = 2;
    this.bgNode.angle = 0;
  },

  loadHistoryPage() {
    cc.director.loadScene('history');
  },

  // update (dt) {},
});
