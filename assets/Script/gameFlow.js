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
    name: "芝士披萨",
    spritename: "pizza",
  },
  card12: {
    name: "劲脆汉堡",
    spritename: "hamburger",
  },
  card13: {
    name: "巧滋曲奇",
    spritename: "cookies",
  },
  card21: {
    name: "整块火龙果",
    spritename: "fruit",
  },
  card22: {
    name: "甜甜圈",
    spritename: "donut",
  },
  card23: {
    name: "精选烘焙",
    spritename: "bread",
  },
  card31: {
    name: "蜂蜜红茶",
    spritename: "redtea",
  },
  card32: {
    name: "美式咖啡",
    spritename: "coffee",
  },
  card33: {
    name: "鲜果甜酒",
    spritename: "sweetwine",
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
    currIndex: 0,
    nextArray: [1],
    nodeType: nodeType.textNode,
    content: "来人啊",
  },
  {
    name: "",
    currIndex: 1,
    nextArray: [2],
    nodeType: nodeType.textNode,
    content: "漫荒的我，快死了",
  },
  {
    name: "God出现动画",
    currIndex: 2,
    nextArray: [3],
    nodeType: nodeType.animationNode,
    content: animationNode.showNoodleGod,
  },
  {
    name: "",
    currIndex: 3,
    nextArray: [4],
    nodeType: nodeType.textNode,
    content: "GOD：响应你的呼唤，我是全知的飞天意面之神",
  },
  {
    name: "",
    currIndex: 4,
    nextArray: [5],
    nodeType: nodeType.textNode,
    content: "GOD：是你在呼唤我吗？",
  },
  {
    name: "",
    currIndex: 5,
    nextArray: [6],
    nodeType: nodeType.textNode,
    content: "意面之神？额。。。您能推荐我几部动漫吗？",
  },
  {
    name: "",
    currIndex: 6,
    nextArray: [7],
    nodeType: nodeType.textNode,
    content: "GOD：当然，只要你能完成神圣意面之试炼",
  },
  {
    name: "God消失动画",
    currIndex: 7,
    nextArray: [8],
    nodeType: nodeType.animationNode,
    content: animationNode.hideNoodleGod,
  },

  // Round 2

  {
    name: "背景下移",
    currIndex: 8,
    nextArray: [9],
    nodeType: nodeType.animationNode,
    content: animationNode.moveBgToBottom,
  },
  {
    name: "",
    currIndex: 9,
    nextArray: [10],
    nodeType: nodeType.textNode,
    content: "画外音：你发现了某个的因厨艺过糟而濒临失恋的男子",
  },
  {
    name: "",
    currIndex: 10,
    nextArray: [11],
    nodeType: nodeType.textNode,
    content: "啊！谁在说话？是神还是妖怪？",
  },
  {
    name: "",
    currIndex: 11,
    nextArray: [12],
    nodeType: nodeType.textNode,
    content: "算了。无论是谁，请告诉我如何做出一份美味便当吧",
  },
  {
    name: "",
    currIndex: 12,
    nextArray: [13],
    nodeType: nodeType.textNode,
    content: "我应该在便当里放上什么主食呢？",
  },
  {
    name: "主食选择",
    currIndex: 13,
    nextArray: [14, 15, 16],
    nodeType: nodeType.cardNode,
    content: [cardFlow.card11, cardFlow.card12, cardFlow.card13],
  },
  {
    name: "",
    currIndex: 14,
    nextArray: [17],
    nodeType: nodeType.textNode,
    content: "芝士就是力量！披萨赛高",
  },
  {
    name: "",
    currIndex: 15,
    nextArray: [17],
    nodeType: nodeType.textNode,
    content: "汉堡！吃饱了才有力气呢",
  },
  {
    name: "",
    currIndex: 16,
    nextArray: [17],
    nodeType: nodeType.textNode,
    content: "现烤的巧克力曲奇诶",
  },
  {
    name: "",
    currIndex: 17,
    nextArray: [18],
    nodeType: nodeType.textNode,
    content: "下一步是小点心！",
  },
  {
    name: "点心选择",
    currIndex: 18,
    nextArray: [19, 20, 21],
    nodeType: nodeType.cardNode,
    content: [cardFlow.card21, cardFlow.card22, cardFlow.card23],
  },
  {
    name: "",
    currIndex: 19,
    nextArray: [22],
    nodeType: nodeType.textNode,
    content: "用勺子挖着吃！",
  },
  {
    name: "",
    currIndex: 20,
    nextArray: [22],
    nodeType: nodeType.textNode,
    content: "点心果然还是要巧克力呢",
  },
  {
    name: "",
    currIndex: 21,
    nextArray: [22],
    nodeType: nodeType.textNode,
    content: "黄油牛角包！",
  },
  {
    name: "",
    currIndex: 22,
    nextArray: [23],
    nodeType: nodeType.textNode,
    content: "YES！只要再搭配上喝的，这份便当就完成啦",
  },
  {
    name: "饮品选择",
    currIndex: 23,
    nextArray: [24, 25, 26],
    nodeType: nodeType.cardNode,
    content: [cardFlow.card31, cardFlow.card32, cardFlow.card33],
  },
  {
    name: "",
    currIndex: 24,
    nextArray: [27],
    nodeType: nodeType.textNode,
    content: "非常解渴的红茶",
  },
  {
    name: "",
    currIndex: 25,
    nextArray: [27],
    nodeType: nodeType.textNode,
    content: "喝杯咖啡提提神",
  },
  {
    name: "",
    currIndex: 26,
    nextArray: [27],
    nodeType: nodeType.textNode,
    content: "一小杯甜酒呢~",
  },
  {
    name: "",
    currIndex: 27,
    nextArray: [28],
    nodeType: nodeType.summeryNode,
    content: "",
  },

  // Round 3
  {
    name: "",
    currIndex: 28,
    nextArray: [29],
    nodeType: nodeType.animationNode,
    content: animationNode.showNoodleGod,
  },
  {
    name: "",
    currIndex: 29,
    nextArray: [30],
    nodeType: nodeType.textNode,
    content: "GOD：恭喜你通过了神圣意面之试炼",
  },
  {
    name: "",
    currIndex: 30,
    nextArray: [31],
    nodeType: nodeType.textNode,
    content: "GOD：你想要的是金色推荐、银色、还是铜色推荐呢？",
  },
  {
    name: "",
    currIndex: 31,
    nextArray: [32],
    nodeType: nodeType.animationNode,
    content: animationNode.hideNoodleGod,
  },
  {
    name: "",
    currIndex: 32,
    nextArray: [33],
    nodeType: nodeType.animationNode,
    content: animationNode.moveBgToTop,
  },
  {
    name: "",
    currIndex: 33,
    nextArray: [34],
    nodeType: nodeType.recommendNode, // last node
    content: recommendList,
  },
  {
    name: "",
    currIndex: 34,
    nextArray: [0],
    nodeType: nodeType.refreshNode,
    content: ["准备好了吗~", "【单击】重新开始"],
  },
];

module.exports.gameFlow = gameFlow;

module.exports.nodeType = nodeType;

module.exports.animationNode = animationNode;