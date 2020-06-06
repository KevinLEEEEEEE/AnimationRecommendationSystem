
cc.Class({
  extends: cc.Component,

  properties: {
    // contentNode: {
    //   default: null,
    //   type: cc.Node,
    // },
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.on('addCurtain', this.addCurtain, this);
  },

  // start() {

  // },

  addCurtain(name, message) {
    const curtainHistory = this.getCurtainHistory();

    if (!curtainHistory[name]) {
      curtainHistory[name] = [message];
    } else {
      curtainHistory[name].push(message);
    }

    this.setCurtainHistory(curtainHistory);
  },

  getCurtainHistory() {
    const history = cc.sys.localStorage.getItem('curtainHistory');

    if (history) {
      return JSON.parse(history);
    }

    return {};
  },

  setCurtainHistory(data) {
    cc.sys.localStorage.setItem('curtainHistory', JSON.stringify(data));
  },

  // update (dt) {},
});
