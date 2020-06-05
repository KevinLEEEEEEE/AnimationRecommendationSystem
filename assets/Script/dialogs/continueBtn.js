const { GlobalSetting, language } = require('../setting&flow/globalSetting');

cc.Class({
  extends: cc.Component,

  properties: {
    label: {
      default: null,
      type: cc.Label,
    },
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    if (GlobalSetting.language === language.Chinese) {
      this.label.string = '[ 继续 ]';
    } else {
      this.label.string = '[ NEXT ]';
    }
  },

  onEnable() {
    if (GlobalSetting.language === language.Chinese) {
      this.node.getComponent(cc.Animation).play('showBtn');
    } else {
      this.node.getComponent(cc.Animation).play('showBtnEnglish');
    }
  },


  // update (dt) {},
});
