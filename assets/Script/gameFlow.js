const { recommendList } = require('./animations');

const nodeType = {
  textNode: 1,
  cardNode: 2,
  recommendNode: 3,
  animationNode: 4,
  summeryNode: 5,
  refreshNode: 6,
};

const animationNode = {
  showNoodleGod: 1,
  hideNoodleGod: 2,
  moveBgToTop: 3,
  moveBgToMiddle: 4,
  moveBgToBottom: 5,
  showRecommend: 6,
  hideRecommend: 7,
};

const cardFlow = {
  card11: {
    name: '芝士披萨',
    spritename: 'pizza',
    index: 0,
  },
  card12: {
    name: '劲脆汉堡',
    spritename: 'hamburger',
    index: 1,
  },
  card13: {
    name: '巧滋曲奇',
    spritename: 'cookies',
    index: 2,
  },
  card21: {
    name: '整块火龙果',
    spritename: 'fruit',
    index: 3,
  },
  card22: {
    name: '甜甜圈',
    spritename: 'donut',
    index: 4,
  },
  card23: {
    name: '精选烘焙',
    spritename: 'bread',
    index: 5,
  },
  card31: {
    name: '蜂蜜红茶',
    spritename: 'redtea',
    index: 6,
  },
  card32: {
    name: '美式咖啡',
    spritename: 'coffee',
    index: 7,
  },
  card33: {
    name: '鲜果甜酒',
    spritename: 'sweetwine',
    index: 8,
  },
};

const gameFlow = [
  // Round first time

  {
    currIndex: 0,
    nextArray: [1],
    nodeType: nodeType.refreshNode,
    content: '',
  },
  {
    currIndex: 1,
    nextArray: [2],
    nodeType: nodeType.animationNode,
    content: animationNode.moveBgToMiddle,
  },

  // Round 1
  {
    currIndex: 2,
    nextArray: [3],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '来人啊 X﹏X',
    },
  },
  {
    currIndex: 3,
    nextArray: [4],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '漫荒的我，快死了',
    },
  },
  {
    currIndex: 4,
    nextArray: [5],
    nodeType: nodeType.animationNode,
    content: animationNode.showNoodleGod,
  },
  {
    currIndex: 5,
    nextArray: [6],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【意面之神】',
      text: '响应你的呼唤，我是全知的飞天意面之神。',
    },
  },
  {
    currIndex: 6,
    nextArray: [7],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【意面之神】',
      text: '是你在呼唤我吗？',
    },
  },
  {
    currIndex: 7,
    nextArray: [8],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '意面之神？’(°ー°〃)您能推荐我几部动漫吗？',
    },
  },
  {
    currIndex: 8,
    nextArray: [9],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【意面之神】',
      text: '当然，只要你能完成神圣意面之试炼。',
    },
  },
  {
    currIndex: 9,
    nextArray: [10],
    nodeType: nodeType.animationNode,
    content: animationNode.hideNoodleGod,
  },

  // Round 2
  {
    currIndex: 10,
    nextArray: [11],
    nodeType: nodeType.animationNode,
    content: animationNode.moveBgToBottom,
  },
  {
    currIndex: 11,
    nextArray: [12],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【画外音】',
      text: '你发现了某个的因厨艺过糟而濒临失恋的男子。',
    },
  },
  {
    currIndex: 12,
    nextArray: [13],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '啊！谁在说话 (*゜ー゜*)',
    },
  },
  {
    currIndex: 13,
    nextArray: [14],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '诶，无论是谁，请教我做一份美味便当吧',
    },
  },
  {
    currIndex: 14,
    nextArray: [15],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '我应该拿什么当主食呢？',
    },
  },
  {
    currIndex: 15,
    nextArray: [16, 17, 18],
    nodeType: nodeType.cardNode,
    content: [cardFlow.card11, cardFlow.card12, cardFlow.card13],
  },
  {
    currIndex: 16,
    nextArray: [19],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '芝士就是力量！披萨赛高 ╰(*°▽°*)╯',
    },
  },
  {
    currIndex: 17,
    nextArray: [19],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '汉堡！吃饱了才有力气呢 ╰(*°▽°*)╯',
    },
  },
  {
    currIndex: 18,
    nextArray: [19],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '香喷喷的巧克力曲奇诶 ╰(*°▽°*)╯',
    },
  },
  {
    currIndex: 19,
    nextArray: [20],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '便当里还需要一份小点心~',
    },
  },
  {
    currIndex: 20,
    nextArray: [21, 22, 23],
    nodeType: nodeType.cardNode,
    content: [cardFlow.card21, cardFlow.card22, cardFlow.card23],
  },
  {
    currIndex: 21,
    nextArray: [24],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '用勺子挖着吃！(oﾟvﾟ)ノ',
    },
  },
  {
    currIndex: 22,
    nextArray: [24],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '巧克力与坚果碎甜甜圈！(oﾟvﾟ)ノ',
    },
  },
  {
    currIndex: 23,
    nextArray: [24],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '现烤的黄油牛角包！(oﾟvﾟ)ノ',
    },
  },
  {
    currIndex: 24,
    nextArray: [25],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '只要再搭配上饮品就完成啦 ♪(^∇^*)',
    },
  },
  {
    currIndex: 25,
    nextArray: [26, 27, 28],
    nodeType: nodeType.cardNode,
    content: [cardFlow.card31, cardFlow.card32, cardFlow.card33],
  },
  {
    currIndex: 26,
    nextArray: [29],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '温暖的蜂蜜红茶 o(*￣︶￣*)o',
    },
  },
  {
    currIndex: 27,
    nextArray: [29],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '喝杯咖啡提提神 o(*￣︶￣*)o',
    },
  },
  {
    currIndex: 28,
    nextArray: [29],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【某男子】',
      text: '一小杯甜酒呢 o(*￣︶￣*)o',
    },
  },
  {
    currIndex: 29,
    nextArray: [30],
    nodeType: nodeType.summeryNode,
    content: {
      speaker: '【画外音】',
      text: '',
    },
  },

  // Round 3
  {
    currIndex: 30,
    nextArray: [31],
    nodeType: nodeType.animationNode,
    content: animationNode.moveBgToMiddle,
  },
  {
    currIndex: 31,
    nextArray: [32],
    nodeType: nodeType.animationNode,
    content: animationNode.showNoodleGod,
  },
  {
    currIndex: 32,
    nextArray: [33],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【意面之神】',
      text: '恭喜你通过了神圣意面之试炼。',
    },
  },
  {
    currIndex: 33,
    nextArray: [34],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【意面之神】',
      text: '开启你的推荐宝石吧。',
    },
  },
  {
    currIndex: 34,
    nextArray: [35],
    nodeType: nodeType.animationNode,
    content: animationNode.hideNoodleGod,
  },
  {
    currIndex: 35,
    nextArray: [36],
    nodeType: nodeType.animationNode,
    content: animationNode.moveBgToTop,
  },
  {
    currIndex: 36,
    nextArray: [37],
    nodeType: nodeType.recommendNode,
    content: {
      speaker: '【画外音】',
      text: recommendList,
    },
  },

  // Round 4
  {
    currIndex: 37,
    nextArray: [38],
    nodeType: nodeType.animationNode,
    content: animationNode.moveBgToMiddle,
  },
  {
    currIndex: 38,
    nextArray: [39],
    nodeType: nodeType.textNode,
    content: {
      speaker: '【首页】',
      text: '重新开始',
    },
  },
  {
    currIndex: 39,
    nextArray: [2],
    nodeType: nodeType.refreshNode,
    content: '',
  },
  {
    currIndex: null,
    nextArray: null,
    nodeType: nodeType.textNode,
    content: {
      speaker: '',
      text: '开启红色脉动宝石绿色翡翠宝石银色光辉宝石你需要的是就决定是你啦！便当配与画外音意面之神某男子首页继续【】[]',
    },
  },
];


module.exports.gameFlow = gameFlow;

module.exports.nodeType = nodeType;

module.exports.animationNode = animationNode;
