
cc.Class({
    extends: cc.Component,

    properties: {
      card1Sprite: {
        default: null,
        type: cc.Sprite
      },
      card2Sprite: {
        default: null,
        type: cc.Sprite
      },
      card3Sprite: {
        default: null,
        type: cc.Sprite
      },
      pizza: {
        default: null,
        type: cc.SpriteFrame,
      },
      hamburger: {
        default: null,
        type: cc.SpriteFrame,
      },
      cookies: {
        default: null,
        type: cc.SpriteFrame,
      },
      fruit: {
        default: null,
        type: cc.SpriteFrame,
      },
      donut: {
        default: null,
        type: cc.SpriteFrame,
      },
      bread: {
        default: null,
        type: cc.SpriteFrame,
      },
      redtea: {
        default: null,
        type: cc.SpriteFrame,
      },
      coffee: {
        default: null,
        type: cc.SpriteFrame,
      },
      sweetwine: {
        default: null,
        type: cc.SpriteFrame,
      }
    },

    currCardResolve: null,

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      this.node.on("newCard", this.newCard, this);

      this.node.on("cardClick", this.cardClick, this);
    },

    cardClick({ index }) {
      if(this.currCardResolve !== null) {
        this.currCardResolve(index);

        this.currCardResolve = null;
      }
    },


    newCard({ content, resolve }) {
      console.log("【CardBox】: receive message: newCard");

      this.updateCardSprites(content);

      this.currCardResolve = resolve;
    },

    updateCardSprites([c1, c2, c3]) {
      this.card1Sprite.spriteFrame = this[c1.spritename];
      this.card2Sprite.spriteFrame = this[c2.spritename];
      this.card3Sprite.spriteFrame = this[c3.spritename];
    },
});
