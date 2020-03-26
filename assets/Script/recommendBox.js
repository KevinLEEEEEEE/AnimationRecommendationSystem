
cc.Class({
  extends: cc.Component,

  properties: {
  },

  currRecommendResolve: null,

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    this.node.on("newRecommend", this.newRecommend, this);
  },

  recommendClick(e, index) {
    if(this.currRecommendResolve) {
      this.currRecommendResolve(index);

      this.currRecommendResolve = null;
    }
  },

  newRecommend({ resolve }) {
    this.emitRecommendContent(resolve);
  },

  emitRecommendContent(resolve) {
    this.currRecommendResolve = resolve;
  },

  // update (dt) {},
});
