
cc.Class({
  extends: cc.Component,

  properties: {
    cardSprites: {
      default: [],
      type: [cc.Sprite],
    },
    cardSpriteFrames: {
      default: [],
      type: [cc.SpriteFrame],
    },
    canCheck: {
      default: true,
    },
  },

  currCardResolve: null,

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.on('newCard', this.newCard, this);
    this.node.on('cardHide', this.cardHide, this);
    this.node.on('cardAnimationFinish', this.cardAnimationFinish, this);
  },

  onEnable() {
    this.reset();
  },

  reset() {
    this.node.opacity = 255;
    this.node.scale = 1;
    this.canCheck = true;
  },

  newCard({ content, resolve }) {
    console.log('【CardBox】: receive message: newCard');

    this.updateCardSprites(content);

    this.currCardResolve = resolve;
  },

  updateCardSprites([c1, c2, c3]) {
    this.cardSprites[0].spriteFrame = this.cardSpriteFrames[c1.index];
    this.cardSprites[1].spriteFrame = this.cardSpriteFrames[c2.index];
    this.cardSprites[2].spriteFrame = this.cardSpriteFrames[c3.index];
  },

  cardHide({ resolve }) {
    cc.tween(this.node)
      .to(0.07, { opacity: 0 })
      .call(resolve)
      .start();
  },

  cardAnimationFinish({ index }) {
    if (this.currCardResolve !== null) {
      this.currCardResolve(index);

      this.currCardResolve = null;
    }
  },

  cardChedked(e) {
    if (this.canCheck === false) {
      return;
    }

    this.canCheck = false;

    e.node.emit('cardChecked');
  },
});
