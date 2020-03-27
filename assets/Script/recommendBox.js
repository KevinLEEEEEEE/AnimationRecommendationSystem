
cc.Class({
  extends: cc.Component,

  properties: {
    gem1: {
      default: null,
      type: cc.Node
    },
    gem2: {
      default: null,
      type: cc.Node
    },
    gem3: {
      default: null,
      type: cc.Node
    },
  },

  currRecommendResolve: null,

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    this.node.on("newRecommend", this.newRecommend, this);

    this.node.on("gemClick", this.gemClick, this);
  },

  gemClick({ index }) {
    if(this.currRecommendResolve !== null) {
      this.currRecommendResolve(index);

      this.currRecommendResolve = null;
    }
  },

  newRecommend({ resolve }) {
    console.log("【RecommendBox】: receive message: newRecommend")

    this.currRecommendResolve = resolve;
  },

  // update (dt) {},
});
