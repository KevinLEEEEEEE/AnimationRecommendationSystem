const nodeType = {
  textNode: "textNode",
  cardNode: "cardNode",
  recommendNode: "recommendNode",
  animationNode: "animationNode",
  summeryNode: "summeryNode",
  refreshNode: "refreeshNode",
}

const animationNode = {
  showNoodleGod: 1,
  hideNoodleGod: 2,
  moveBgToTop: 3,
  moveBgToMiddle: 4,
  moveBgToBottom: 5,
  showRecommend: 6,
  hideRecommend: 7,
} 

const cardFlow = {
  card11: {
    name: "寿司",
    spritename: "sushi",
  },
  card12: {
    name: "汉堡",
    spritename: "hamburger",
  },
  card13: {
    name: "米饭",
    spritename: "rice",
  },
  card21: {
    name: "蓝莓芝士蛋糕",
    spritename: "cake",
  },
  card22: {
    name: "草莓大福",
    spritename: "daifuku",
  },
  card23: {
    name: "桂花糕",
    spritename: "pastry",
  },
  card31: {
    name: "双拼奶茶",
    spritename: "milktea",
  },
  card32: {
    name: "可乐",
    spritename: "cocacola",
  },
  card33: {
    name: "桃花酿",
    spritename: "blossom",
  },
  gold: "gold",
  silver: "silver",
  copper: "copper",
};

const recommendList = ["《fate-zero》", "《fate-one》", "《fate-two》"];

const gameFlow = [
  // Round 1

  {
    name: "",
    index: 0,
    next: [1],
    nodeType: nodeType.textNode,
    content: "来人啊",
  },
  {
    name: "",
    index: 1,
    next: [2],
    nodeType: nodeType.textNode,
    content: "漫荒的我，快死了",
  },
  {
    name: "God出现动画",
    index: 2,
    next: [3],
    nodeType: nodeType.animationNode,
    content: animationNode.showNoodleGod,
  },
  {
    name: "",
    index: 3,
    next: [4],
    nodeType: nodeType.textNode,
    content: "GOD：响应你的呼唤，我是全知的飞天意面之神",
  },
  {
    name: "",
    index: 4,
    next: [5],
    nodeType: nodeType.textNode,
    content: "GOD：是你在呼唤我吗？",
  },
  {
    name: "",
    index: 5,
    next: [6],
    nodeType: nodeType.textNode,
    content: "意面之神？额。。。您能推荐我几部动漫吗？",
  },
  {
    name: "",
    index: 6,
    next: [7],
    nodeType: nodeType.textNode,
    content: "GOD：当然，只要你能完成神圣意面之试炼",
  },
  {
    name: "God消失动画",
    index: 7,
    next: [8],
    nodeType: nodeType.animationNode,
    content: animationNode.hideNoodleGod,
  },

  // Round 2

  {
    name: "背景下移",
    index: 8,
    next: [9],
    nodeType: nodeType.animationNode,
    content: animationNode.moveBgToBottom,
  },
  {
    name: "",
    index: 9,
    next: [10],
    nodeType: nodeType.textNode,
    content: "画外音：你发现了某个的因厨艺过糟而濒临失恋的男子",
  },
  {
    name: "",
    index: 10,
    next: [11],
    nodeType: nodeType.textNode,
    content: "啊！谁在说话？是神还是妖怪？",
  },
  {
    name: "",
    index: 11,
    next: [12],
    nodeType: nodeType.textNode,
    content: "算了。无论是谁，请告诉我如何做出一份美味便当吧",
  },
  {
    name: "",
    index: 12,
    next: [13],
    nodeType: nodeType.textNode,
    content: "我应该在便当里放上什么主食呢？",
  },
  {
    name: "主食选择",
    index: 13,
    next: [14, 15, 16],
    nodeType: nodeType.cardNode,
    content: [cardFlow.card11, cardFlow.card12, cardFlow.card13],
  },
  {
    name: "",
    index: 14,
    next: [17],
    nodeType: nodeType.textNode,
    content: "寿司呐，大家应该会喜欢寿司吧！",
  },
  {
    name: "",
    index: 15,
    next: [17],
    nodeType: nodeType.textNode,
    content: "汉堡！吃饱了才有力气啊",
  },
  {
    name: "",
    index: 16,
    next: [17],
    nodeType: nodeType.textNode,
    content: "果然还是米饭百吃不腻呢",
  },
  {
    name: "",
    index: 17,
    next: [18],
    nodeType: nodeType.textNode,
    content: "下一步是小点心！",
  },
  {
    name: "点心选择",
    index: 18,
    next: [19, 20, 21],
    nodeType: nodeType.cardNode,
    content: [cardFlow.card21, cardFlow.card22, cardFlow.card23],
  },
  {
    name: "",
    index: 19,
    next: [22],
    nodeType: nodeType.textNode,
    content: "芝士就是力量！",
  },
  {
    name: "",
    index: 20,
    next: [22],
    nodeType: nodeType.textNode,
    content: "日式点心应该会很好吃吧",
  },
  {
    name: "",
    index: 21,
    next: [22],
    nodeType: nodeType.textNode,
    content: "桂花糕呢，满满的中国味",
  },
  {
    name: "",
    index: 22,
    next: [23],
    nodeType: nodeType.textNode,
    content: "YES！只要再搭配上喝的，这份便当就完成啦",
  },
  {
    name: "饮品选择",
    index: 23,
    next: [24, 25, 26],
    nodeType: nodeType.cardNode,
    content: [cardFlow.card31, cardFlow.card32, cardFlow.card33],
  },
  {
    name: "",
    index: 24,
    next: [27],
    nodeType: nodeType.textNode,
    content: "非常经典的选择呢",
  },
  {
    name: "",
    index: 25,
    next: [27],
    nodeType: nodeType.textNode,
    content: "喝阔落！！！",
  },
  {
    name: "",
    index: 26,
    next: [27],
    nodeType: nodeType.textNode,
    content: "桃花飘飘，甜蜜的味道呢",
  },
  {
    name: "",
    index: 27,
    next: [28],
    nodeType: nodeType.summeryNode,
    content: "",
  },

  // Round 3
  {
    name: "",
    index: 28,
    next: [29],
    nodeType: nodeType.animationNode,
    content: animationNode.showNoodleGod,
  },
  {
    name: "",
    index: 29,
    next: [30],
    nodeType: nodeType.textNode,
    content: "GOD：恭喜你通过了神圣意面之试炼",
  },
  {
    name: "",
    index: 30,
    next: [31],
    nodeType: nodeType.textNode,
    content: "GOD：你想要的是金色推荐、银色、还是铜色推荐呢？",
  },
  {
    name: "",
    index: 31,
    next: [32],
    nodeType: nodeType.animationNode,
    content: animationNode.hideNoodleGod,
  },
  {
    name: "",
    index: 32,
    next: [33],
    nodeType: nodeType.animationNode,
    content: animationNode.moveBgToTop,
  },
  {
    name: "",
    index: 33,
    next: [34],
    nodeType: nodeType.recommendNode, // last node
    content: recommendList,
  },
  {
    name: "",
    index: 34,
    next: [35],
    nodeType: nodeType.animationNode,
    content: animationNode.moveBgToMiddle,
  },
  {
    name: "",
    index: 35,
    next: [0],
    nodeType: nodeType.refreshNode,
    content: "准备好开始了吗~",
  },
];

module.exports.gameFlow = gameFlow;

module.exports.nodeType = nodeType;

module.exports.animationNode = animationNode;