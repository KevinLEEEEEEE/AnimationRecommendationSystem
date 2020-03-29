
cc.Class({
  extends: cc.Component,

  properties: {
    canCheck: {
      default: true,
    },
  },

  currRecommendResolve: null,

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.on('newRecommend', this.newRecommend, this);
    this.node.on('recommendHide', this.recommendHide, this);
    this.node.on('gemAnimationFinish', this.gemAnimationFinish, this);
  },

  onEnable() {
    this.reset();
  },

  reset() {
    this.node.opacity = 255;
    this.node.scale = 1;
    this.canCheck = true;
  },

  newRecommend({ resolve }) {
    console.log('【RecommendBox】: receive message: newRecommend');

    this.currRecommendResolve = resolve;
  },

  recommendHide({ resolve }) {
    cc.tween(this.node)
      .to(0, { opacity: 100 })
      .to(0.15, { opacity: 0, scale: 8 }, { easing: 'easeInSine' })
      .call(resolve)
      .start();
  },

  gemAnimationFinish({ index }) {
    if (this.currRecommendResolve !== null) {
      this.currRecommendResolve(index);

      this.currRecommendResolve = null;
    }
  },

  gemChecked({ node: target }) {
    if (this.canCheck === false) {
      return;
    }

    this.canCheck = false;

    const { children } = this.node;

    for (let i = 0; i < 3; i += 1) {
      if (target === children[i]) {
        children[i].emit('gemChecked');
      } else {
        children[i].emit('gemUnChecked');
      }
    }
  },
});
