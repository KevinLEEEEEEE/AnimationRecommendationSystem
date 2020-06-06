
cc.Class({
  extends: cc.Component,

  properties: {
    messages: {
      default: [],
      type: [cc.Label],
    },
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.on('showMessages', this.loadCurtains, this);
  },

  loadCurtains(name) {
    const curtainHistory = this.getCurtainsFromHistory(name);

    if (curtainHistory.length > 0) {
      this.addCurtains(curtainHistory);
    }

    this.showCurtains();
  },

  addCurtains(curtainHistory) {
    for (let i = 0; i < curtainHistory.length && i < 8; i += 1) {
      this.messages[i].string = curtainHistory[i];
    }
  },

  showCurtains() {
    this.node.getComponent(cc.Animation).play();
  },

  getCurtainsFromHistory(name) {
    const history = cc.sys.localStorage.getItem('curtainHistory');

    if (history) {
      return JSON.parse(history)[name];
    }

    return [];
  },

  // update (dt) {},
});
