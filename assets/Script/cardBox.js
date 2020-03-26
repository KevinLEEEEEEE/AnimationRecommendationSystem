
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
      sushi: {
        default: null,
        type: cc.SpriteFrame,
      },
      hamburger: {
        default: null,
        type: cc.SpriteFrame,
      },
      rice: {
        default: null,
        type: cc.SpriteFrame,
      },
      cake: {
        default: null,
        type: cc.SpriteFrame,
      },
      daifuku: {
        default: null,
        type: cc.SpriteFrame,
      },
      pastry: {
        default: null,
        type: cc.SpriteFrame,
      },
      milktea: {
        default: null,
        type: cc.SpriteFrame,
      },
      cocacola: {
        default: null,
        type: cc.SpriteFrame,
      },
      blossom: {
        default: null,
        type: cc.SpriteFrame,
      }
    },

    currCardResolve: null,

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      this.node.on("newCard", this.newCard, this);
    },

    cardClick(e, index) {
      if(this.currCardResolve) {
        this.currCardResolve(index);

        this.currCardResolve = null;
      }
    },


    newCard({ content, resolve }) {
      this.updateCardSprites(content);

      this.emitCardContent(resolve);
    },

    emitCardContent(parentResolve) {
      this.currCardResolve = parentResolve;
    },

    updateCardSprites(content) {
      this.card1Sprite.spriteFrame = this[content[0].spritename];
      this.card2Sprite.spriteFrame = this[content[1].spritename];
      this.card3Sprite.spriteFrame = this[content[2].spritename];
    },

    // update (dt) {},
});
