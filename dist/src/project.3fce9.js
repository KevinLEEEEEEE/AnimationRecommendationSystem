window.__require=function e(t,n,o){function i(c,d){if(!n[c]){if(!t[c]){var a=c.split("/");if(a=a[a.length-1],!t[a]){var s="function"==typeof __require&&__require;if(!d&&s)return s(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var u=n[c]={exports:{}};t[c][0].call(u.exports,function(e){return i(t[c][1][e]||e)},u,u.exports,e,t,n,o)}return n[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<o.length;c++)i(o[c]);return i}({animations:[function(e,t,n){"use strict";cc._RF.push(t,"07b86nGFD5I0IodRHJ291wo","animations");t.exports.recommendList=["\u300a\u7f57\u5c0f\u9ed1\u6218\u8bb0\u300b\uff0c\u5b9e\u65f69.9\u5206\uff0cB\u7ad9\u7d2f\u8ba1\u64ad\u653e2.0\u4ebf","\u300a\u8d85\u80fd\u529b\u5973\u513f\u300b\uff0c\u5b9e\u65f69.6\u5206\uff0cB\u7ad9\u7d2f\u8ba1\u64ad\u653e0.7\u4ebf","\u300aOVERLORD\u300b\uff0c\u5b9e\u65f69.6\u5206\uff0cB\u7ad9\u7d2f\u8ba1\u64ad\u653e2.4\u4ebf","\u300a\u5e72\u7269\u59b9\uff01\u5c0f\u57cb\u300b\uff0c\u5b9e\u65f69.2\u5206\uff0cB\u7ad9\u7d2f\u8ba1\u64ad\u653e2.4\u4ebf","\u300a\u57c3\u7f57\u8292\u963f\u8001\u5e08\u300b\uff0c\u5b9e\u65f69.1\u5206\uff0cB\u7ad9\u7d2f\u8ba1\u64ad\u653e1.6\u4ebf","\u300a\u5e72\u7269\u59b9\uff01\u5c0f\u57cb\u300b\uff0c\u5b9e\u65f69.2\u5206\uff0cB\u7ad9\u7d2f\u8ba1\u64ad\u653e1.4\u4ebf","\u300a\u5c0f\u6797\u5bb6\u7684\u9f99\u5973\u4ec6\u300b\uff0c\u5b9e\u65f69.6\u5206\uff0cB\u7ad9\u7d2f\u8ba1\u64ad\u653e2.1\u4ebf","\u300a\u590f\u76ee\u53cb\u4eba\u5e10 \u4e94\u5b63\u5168\u300b\uff0c\u5b9e\u65f69.8\u5206\uff0cB\u7ad9\u7d2f\u8ba1\u64ad\u653e1.0\u4ebf","\u300a\u5728\u4e0b\u5742\u672c\uff0c\u6709\u4f55\u8d35\u5e72\uff1f\u300b\uff0c\u5b9e\u65f69.1\u5206\uff0cB\u7ad9\u7d2f\u8ba1\u64ad\u653e1.7\u4ebf","\u300a\u5173\u4e8e\u6211\u8f6c\u751f\u53d8\u6210\u53f2\u83b1\u59c6\u8fd9\u6863\u4e8b\u300b\uff0c\u5b9e\u65f69.4\u5206\uff0cB\u7ad9\u7d2f\u8ba1\u64ad\u653e2.4\u4ebf","\u300a\u9752\u6625\u732a\u5934\u5c11\u5e74\u4e0d\u4f1a\u68a6\u5230\u5154\u5973\u90ce\u5b66\u59d0\u300b\uff0c\u5b9e\u65f69.8\u5206\uff0cB\u7ad9\u7d2f\u8ba1\u64ad\u653e1.3\u4ebf"],cc._RF.pop()},{}],bgBox:[function(e,t,n){"use strict";cc._RF.push(t,"6a9f89dCs5CnpvoZZzKxwsm","bgBox"),cc.Class({extends:cc.Component,properties:{campNode:{default:null,type:cc.Node},gapY:{default:0}},onLoad:function(){this.node.on("moveToTop",this.moveToTop,this),this.node.on("moveToMiddle",this.moveToMiddle,this),this.node.on("moveToBottom",this.moveToBottom,this),this.calc()},calc:function(){var e=this.node.parent.height,t=this.node.height;this.gapY=(t-e)/2},moveToTop:function(e){var t=e.resolve;this.campNode.active=!1,this.moveBgY(-this.gapY,t)},moveToMiddle:function(e){var t=e.resolve;this.campNode.active=!1,this.moveBgY(0,t)},moveToBottom:function(e){var t=e.resolve;this.campNode.active=!0,this.moveBgY(this.gapY,t)},moveBgY:function(e,t){cc.tween(this.node).to(.8,{position:cc.v2(0,e)}).call(t).start()}}),cc._RF.pop()},{}],cardBox:[function(e,t,n){"use strict";function o(e,t){return c(e)||r(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],o=!0,i=!1,r=void 0;try{for(var c,d=e[Symbol.iterator]();!(o=(c=d.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==d.return||d.return()}finally{if(i)throw r}}return n}}function c(e){if(Array.isArray(e))return e}cc._RF.push(t,"4797bMS2KtGPKeO8LCHMWE1","cardBox"),cc.Class({extends:cc.Component,properties:{cardSprites:{default:[],type:[cc.Sprite]},cardSpriteFrames:{default:[],type:[cc.SpriteFrame]},canCheck:{default:!1}},onLoad:function(){this.node.on("newCard",this.newCard,this),this.node.on("cardHide",this.cardHide,this),this.node.on("cardAnimationFinish",this.cardAnimationFinish,this),this.node.on("cardNextRound",this.cardNextRound,this)},onEnable:function(){this.reset()},reset:function(){this.node.opacity=255,this.node.scale=1},newCard:function(e){var t=e.content,n=e.resolve;this.updateCardSprites(t),this.currCardResolve=n},cardAnimationFinish:function(e){2===e.index&&(this.canCheck=!0)},cardNextRound:function(e){var t=e.index;this.currCardResolve(t)},updateCardSprites:function(e){var t=o(e,3),n=t[0],i=t[1],r=t[2];this.cardSprites[0].spriteFrame=this.cardSpriteFrames[n.index],this.cardSprites[1].spriteFrame=this.cardSpriteFrames[i.index],this.cardSprites[2].spriteFrame=this.cardSpriteFrames[r.index]},cardHide:function(e){var t=e.resolve;cc.tween(this.node).to(.07,{opacity:0}).call(t).start()},cardChedked:function(e){this.canCheck&&(this.canCheck=!1,e.node.emit("cardChecked"))}}),cc._RF.pop()},{}],cards:[function(e,t,n){"use strict";cc._RF.push(t,"b772bo60Z5KkrcMb5bzWEBG","cards");var o=e("./globalSetting").GlobalSetting;cc.Class({extends:cc.Component,properties:{cardSound:{default:null,type:cc.AudioClip},animationDelay:{default:0},index:{default:0}},onLoad:function(){this.node.on("cardChecked",this.cardChecked,this)},onEnable:function(){this.resetCard(),this.playShowAnimation()},resetCard:function(){this.node.opacity=0},playShowAnimation:function(){var e=this;this.scheduleOnce(function(){e.getComponent(cc.Animation).play("showCard")},this.animationDelay)},cardChecked:function(){this.getComponent(cc.Animation).play("cardClick")},playShowSound:function(){this.playSound()},playClickSound:function(){this.playSound()},playSound:function(){cc.log("play card sound"),cc.audioEngine.play(this.cardSound,!1,o.volume)},emitAnimationFinishMessage:function(){this.node.parent.emit("cardAnimationFinish",{index:this.index})},emitNextRoundMessage:function(){this.node.parent.emit("cardNextRound",{index:this.index})}}),cc._RF.pop()},{"./globalSetting":"globalSetting"}],dialogBox:[function(e,t,n){"use strict";cc._RF.push(t,"80653wbpI1LCrGy4NVaMAE7","dialogBox"),cc.Class({extends:cc.Component,properties:{btnNode:{default:null,type:cc.Node},textNode:{default:null,type:cc.Node},speakerLabelNode:{default:null,type:cc.Label},beforeType:{default:0}},currDialogResolve:null,onLoad:function(){this.node.on("newDialog",this.newDialog,this)},newDialog:function(e){var t=this,n=e.content,o=e.resolve;this.currDialogResolve=o,this.scheduleOnce(function(){t.emitTypeContent(n)},this.beforeType)},emitTypeContent:function(e){var t=this;new Promise(function(n){t.textNode.emit("startType",{content:e,resolve:n})}).then(function(){t.currDialogResolve()})}}),cc._RF.pop()},{}],gameController:[function(e,t,n){"use strict";function o(e,t){return c(e)||r(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],o=!0,i=!1,r=void 0;try{for(var c,d=e[Symbol.iterator]();!(o=(c=d.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==d.return||d.return()}finally{if(i)throw r}}return n}}function c(e){if(Array.isArray(e))return e}cc._RF.push(t,"e0379C9wV5BZo1TqM+OSCEG","gameController");var d=e("./gameFlow"),a=d.gameFlow,s=d.nodeType,u=d.animationNode;cc.Class({extends:cc.Component,properties:{bgNode:{default:null,type:cc.Node},noodleGodNode:{default:null,type:cc.Node},dialogBoxNode:{default:null,type:cc.Node},cardBoxNode:{default:null,type:cc.Node},gemBoxNode:{default:null,type:cc.Node},beforeNewCycle:{default:0},choicesList:{default:[]},isFirstRound:{default:!0}},onLoad:function(){this.isGameStart=!1},startGame:function(){!1===this.isGameStart&&(this.runGameIndex(0),this.isGameStart=!0)},runGameIndex:function(e){var t=this,n=a[e],o=n.content,i=n.nodeType,r=n.nextArray,c=n.currIndex;cc.log("\u3010GameController\u3011\uff1aNew Cycle\uff1a".concat(c)),this.runMainStep(i,o).then(function(e){t.scheduleOnce(function(){t.runGameIndex(r[t.checkIndex(e)])},t.beforeNewCycle)}).catch(function(e){cc.error("\u3010GameController\u3011\uff1aError!, details: ".concat(e))})},checkIndex:function(e){return"number"==typeof e?e:0},runMainStep:function(e,t){switch(e){case s.textNode:return this.runTextStep(t);case s.cardNode:return this.runCardStep(t);case s.animationNode:return this.runAnimationStep(t);case s.summeryNode:return this.runSummeryStep(t);case s.recommendNode:return this.runRecommendStep(t);case s.refreshNode:return this.runRefreshStep();default:return Promise.resolve}},runTextStep:function(e){var t=this;return new Promise(function(n){t.dialogBoxNode.emit("newDialog",{content:e,resolve:n})})},runCardStep:function(e){var t=this;return new Promise(function(n){t.showCardBox(),t.cardBoxNode.emit("newCard",{content:e,resolve:n})}).then(function(n){return new Promise(function(o){t.choicesList.push(e[n]),t.hideCardBoxWithAnimation().then(function(){o(n)})})})},runRecommendStep:function(e){var t=this;return new Promise(function(e){t.showgemBox(),t.gemBoxNode.emit("newRecommend",{resolve:e})}).then(function(n){var o=t.getGemContent(n),i=t.getRecommendContent(e.text),r="\u3010\u5f00\u542f".concat(o,"\u3011\u4f60\u9700\u8981\u7684\u662f").concat(i),c={speaker:e.speaker,text:r};return t.runTextStep(c)}).then(function(){return t.hideGemBoxWithAnimation()})},getGemContent:function(e){switch(e){case 0:return"\u7ea2\u8272\u8109\u52a8\u5b9d\u77f3";case 1:return"\u7eff\u8272\u7fe1\u7fe0\u5b9d\u77f3";case 2:return"\u94f6\u8272\u5149\u8f89\u5b9d\u77f3";default:return"\u7ea2\u8272\u8109\u52a8\u5b9d\u77f3"}},getRecommendContent:function(e){var t=this.getRecommendHistory(),n=this.excludeArray(e,t);cc.log("\u3010GameController\u3011\uff1aget current history: ".concat(t)),0===n.length&&(this.clearRecommendHistory(),n=e,t=[],cc.log("\u3010GameController\u3011\uff1arun out of recommendation list"));var o=n[this.getRandomInt(n.length)];return t.push(o),this.setRecommendHistory(t),cc.log("\u3010GameController\u3011\uff1aset new history: ".concat(t)),o},excludeArray:function(e,t){return e.filter(function(e){return-1===t.indexOf(e)})},getRecommendHistory:function(){var e=cc.sys.localStorage.getItem("recommendHistory");return e?JSON.parse(e):[]},setRecommendHistory:function(e){cc.sys.localStorage.setItem("recommendHistory",JSON.stringify(e))},clearRecommendHistory:function(){this.setRecommendHistory([])},getRandomInt:function(e){return Math.floor(Math.random()*Math.floor(e))},runAnimationStep:function(e){switch(e){case u.showNoodleGod:return this.showNoodleGodWithAnimation();case u.hideNoodleGod:return this.hideNoodleGodWithAnimation();case u.moveBgToMiddle:return this.moveBgToMiddle();case u.moveBgToBottom:return this.moveBgToBottom();case u.moveBgToTop:return this.moveBgToTop();default:return Promise.resolve()}},runSummeryStep:function(e){var t={speaker:e.speaker,text:this.getSummeryContent()};return this.runTextStep(t)},getSummeryContent:function(){var e=o(this.choicesList,3),t=e[0].name,n=e[1].name,i=e[2].name;return"\u5c31\u51b3\u5b9a\u662f\u4f60\u5566\uff01".concat(t,"\u4fbf\u5f53\u914d").concat(n,"\u4e0e").concat(i,"\uff01")},runRefreshStep:function(){return this.choicesList=[],Promise.all([this.hideCardBox(),this.hideNoodleGod(),this.hidegemBox(),this.moveBgToMiddle()])},moveBgToMiddle:function(){var e=this;return new Promise(function(t){e.bgNode.emit("moveToMiddle",{resolve:t})})},moveBgToBottom:function(){var e=this;return new Promise(function(t){e.bgNode.emit("moveToBottom",{resolve:t})})},moveBgToTop:function(){var e=this;return new Promise(function(t){e.bgNode.emit("moveToTop",{resolve:t})})},showDialogBox:function(){return this.dialogBoxNode.active=!0,Promise.resolve()},hideDialogBox:function(){return this.dialogBoxNode.active=!1,Promise.resolve()},showCardBox:function(){return this.cardBoxNode.active=!0,Promise.resolve()},hideCardBox:function(){return this.cardBoxNode.active=!1,Promise.resolve()},hideCardBoxWithAnimation:function(){var e=this;return new Promise(function(t){e.cardBoxNode.emit("cardHide",{resolve:t})}).then(function(){return e.hideCardBox()})},showNoodleGod:function(){return this.noodleGodNode.active=!0,Promise.resolve()},hideNoodleGod:function(){return this.noodleGodNode.active=!1,Promise.resolve()},showNoodleGodWithAnimation:function(){var e=this;return new Promise(function(t){e.showNoodleGod(),e.noodleGodNode.emit("godShow",{resolve:t})})},hideNoodleGodWithAnimation:function(){var e=this;return new Promise(function(t){e.noodleGodNode.emit("godHide",{resolve:t})}).then(function(){return e.hideNoodleGod()})},showgemBox:function(){return this.gemBoxNode.active=!0,Promise.resolve()},hidegemBox:function(){return this.gemBoxNode.active=!1,Promise.resolve()},hideGemBoxWithAnimation:function(){var e=this;return new Promise(function(t){e.gemBoxNode.emit("recommendHide",{resolve:t})}).then(function(){return e.hidegemBox()})}}),cc._RF.pop()},{"./gameFlow":"gameFlow"}],gameFlow:[function(e,t,n){"use strict";cc._RF.push(t,"627c2SG5HpDnrguizo1WQob","gameFlow");var o=e("./animations").recommendList,i={textNode:1,cardNode:2,recommendNode:3,animationNode:4,summeryNode:5,refreshNode:6},r={showNoodleGod:1,hideNoodleGod:2,moveBgToTop:3,moveBgToMiddle:4,moveBgToBottom:5,showRecommend:6,hideRecommend:7},c={card11:{name:"\u829d\u58eb\u62ab\u8428",spritename:"pizza",index:0},card12:{name:"\u52b2\u8106\u6c49\u5821",spritename:"hamburger",index:1},card13:{name:"\u5de7\u6ecb\u66f2\u5947",spritename:"cookies",index:2},card21:{name:"\u6574\u5757\u706b\u9f99\u679c",spritename:"fruit",index:3},card22:{name:"\u751c\u751c\u5708",spritename:"donut",index:4},card23:{name:"\u7cbe\u9009\u70d8\u7119",spritename:"bread",index:5},card31:{name:"\u8702\u871c\u7ea2\u8336",spritename:"redtea",index:6},card32:{name:"\u7f8e\u5f0f\u5496\u5561",spritename:"coffee",index:7},card33:{name:"\u9c9c\u679c\u751c\u9152",spritename:"sweetwine",index:8}},d=[{currIndex:0,nextArray:[1],nodeType:i.refreshNode,content:""},{currIndex:1,nextArray:[2],nodeType:i.animationNode,content:r.moveBgToMiddle},{currIndex:2,nextArray:[3],nodeType:i.textNode,content:{speaker:"\u3010\u6211\u3011",text:"\u6765\u4eba\u554a X\ufe4fX"}},{currIndex:3,nextArray:[4],nodeType:i.textNode,content:{speaker:"\u3010\u6211\u3011",text:"\u6f2b\u8352\u7684\u6211\uff0c\u5feb\u6b7b\u4e86"}},{currIndex:4,nextArray:[5],nodeType:i.animationNode,content:r.showNoodleGod},{currIndex:5,nextArray:[6],nodeType:i.textNode,content:{speaker:"\u3010\u610f\u9762\u4e4b\u795e\u3011",text:"\u54cd\u5e94\u4f60\u7684\u547c\u5524\uff0c\u6211\u662f\u5168\u77e5\u7684\u98de\u5929\u610f\u9762\u4e4b\u795e\u3002"}},{currIndex:6,nextArray:[7],nodeType:i.textNode,content:{speaker:"\u3010\u610f\u9762\u4e4b\u795e\u3011",text:"\u662f\u4f60\u5728\u547c\u5524\u6211\u5417\uff1f"}},{currIndex:7,nextArray:[8],nodeType:i.textNode,content:{speaker:"\u3010\u6211\u3011",text:"\u610f\u9762\u4e4b\u795e\uff1f\u2019(\xb0\u30fc\xb0\u3003)\u60a8\u80fd\u63a8\u8350\u6211\u51e0\u90e8\u52a8\u6f2b\u5417\uff1f"}},{currIndex:8,nextArray:[9],nodeType:i.textNode,content:{speaker:"\u3010\u610f\u9762\u4e4b\u795e\u3011",text:"\u5f53\u7136\uff0c\u53ea\u8981\u4f60\u80fd\u5b8c\u6210\u795e\u5723\u610f\u9762\u4e4b\u8bd5\u70bc\u3002"}},{currIndex:9,nextArray:[10],nodeType:i.animationNode,content:r.hideNoodleGod},{currIndex:10,nextArray:[11],nodeType:i.animationNode,content:r.moveBgToBottom},{currIndex:11,nextArray:[12],nodeType:i.textNode,content:{speaker:"\u3010\u753b\u5916\u97f3\u3011",text:"\u4f60\u53d1\u73b0\u4e86\u67d0\u4e2a\u7684\u56e0\u53a8\u827a\u8fc7\u7cdf\u800c\u6fd2\u4e34\u5931\u604b\u7684\u7537\u5b50\u3002"}},{currIndex:12,nextArray:[13],nodeType:i.textNode,content:{speaker:"\u3010\u67d0\u7537\u5b50\u3011",text:"\u554a\uff01\u8c01\u5728\u8bf4\u8bdd (*\u309c\u30fc\u309c*)"}},{currIndex:13,nextArray:[14],nodeType:i.textNode,content:{speaker:"\u3010\u67d0\u7537\u5b50\u3011",text:"\u8bf6\uff0c\u65e0\u8bba\u662f\u8c01\uff0c\u8bf7\u6559\u6211\u505a\u4e00\u4efd\u7f8e\u5473\u4fbf\u5f53\u5427"}},{currIndex:14,nextArray:[15],nodeType:i.textNode,content:{speaker:"\u3010\u67d0\u7537\u5b50\u3011",text:"\u6211\u5e94\u8be5\u62ff\u4ec0\u4e48\u5f53\u4e3b\u98df\u5462\uff1f"}},{currIndex:15,nextArray:[16,17,18],nodeType:i.cardNode,content:[c.card11,c.card12,c.card13]},{currIndex:16,nextArray:[19],nodeType:i.textNode,content:{speaker:"\u3010\u67d0\u7537\u5b50\u3011",text:"\u829d\u58eb\u5c31\u662f\u529b\u91cf\uff01\u62ab\u8428\u8d5b\u9ad8 \u2570(*\xb0\u25bd\xb0*)\u256f"}},{currIndex:17,nextArray:[19],nodeType:i.textNode,content:{speaker:"\u3010\u67d0\u7537\u5b50\u3011",text:"\u6c49\u5821\uff01\u5403\u9971\u4e86\u624d\u6709\u529b\u6c14\u5462 \u2570(*\xb0\u25bd\xb0*)\u256f"}},{currIndex:18,nextArray:[19],nodeType:i.textNode,content:{speaker:"\u3010\u67d0\u7537\u5b50\u3011",text:"\u9999\u55b7\u55b7\u7684\u5de7\u514b\u529b\u66f2\u5947\u8bf6\u2570(*\xb0\u25bd\xb0*)\u256f"}},{currIndex:19,nextArray:[20],nodeType:i.textNode,content:{speaker:"\u3010\u67d0\u7537\u5b50\u3011",text:"\u4fbf\u5f53\u91cc\u8fd8\u9700\u8981\u4e00\u4efd\u5c0f\u70b9\u5fc3~"}},{currIndex:20,nextArray:[21,22,23],nodeType:i.cardNode,content:[c.card21,c.card22,c.card23]},{currIndex:21,nextArray:[24],nodeType:i.textNode,content:{speaker:"\u3010\u67d0\u7537\u5b50\u3011",text:"\u7528\u52fa\u5b50\u6316\u7740\u5403\uff01(o\uff9fv\uff9f)\u30ce"}},{currIndex:22,nextArray:[24],nodeType:i.textNode,content:{speaker:"\u3010\u67d0\u7537\u5b50\u3011",text:"\u5de7\u514b\u529b\u4e0e\u575a\u679c\u788e\u751c\u751c\u5708\uff01(o\uff9fv\uff9f)\u30ce"}},{currIndex:23,nextArray:[24],nodeType:i.textNode,content:{speaker:"\u3010\u67d0\u7537\u5b50\u3011",text:"\u73b0\u70e4\u7684\u9ec4\u6cb9\u725b\u89d2\u5305\uff01(o\uff9fv\uff9f)\u30ce"}},{currIndex:24,nextArray:[25],nodeType:i.textNode,content:{speaker:"\u3010\u67d0\u7537\u5b50\u3011",text:"\u53ea\u8981\u518d\u642d\u914d\u4e0a\u996e\u54c1\u5c31\u5b8c\u6210\u5566 \u266a(^\u2207^*)"}},{currIndex:25,nextArray:[26,27,28],nodeType:i.cardNode,content:[c.card31,c.card32,c.card33]},{currIndex:26,nextArray:[29],nodeType:i.textNode,content:{speaker:"\u3010\u67d0\u7537\u5b50\u3011",text:"\u6e29\u6696\u7684\u8702\u871c\u7ea2\u8336 o(*\uffe3\ufe36\uffe3*)o"}},{currIndex:27,nextArray:[29],nodeType:i.textNode,content:{speaker:"\u3010\u67d0\u7537\u5b50\u3011",text:"\u559d\u676f\u5496\u5561\u63d0\u63d0\u795e o(*\uffe3\ufe36\uffe3*)o"}},{currIndex:28,nextArray:[29],nodeType:i.textNode,content:{speaker:"\u3010\u67d0\u7537\u5b50\u3011",text:"\u4e00\u5c0f\u676f\u751c\u9152\u5462 o(*\uffe3\ufe36\uffe3*)o"}},{currIndex:29,nextArray:[30],nodeType:i.summeryNode,content:{speaker:"\u3010\u753b\u5916\u97f3\u3011",text:""}},{currIndex:30,nextArray:[31],nodeType:i.animationNode,content:r.moveBgToMiddle},{currIndex:31,nextArray:[32],nodeType:i.animationNode,content:r.showNoodleGod},{currIndex:32,nextArray:[33],nodeType:i.textNode,content:{speaker:"\u3010\u610f\u9762\u4e4b\u795e\u3011",text:"\u606d\u559c\u4f60\u901a\u8fc7\u4e86\u795e\u5723\u610f\u9762\u4e4b\u8bd5\u70bc\u3002"}},{currIndex:33,nextArray:[34],nodeType:i.textNode,content:{speaker:"\u3010\u610f\u9762\u4e4b\u795e\u3011",text:"\u5f00\u542f\u4f60\u7684\u63a8\u8350\u5b9d\u77f3\u5427\u3002"}},{currIndex:34,nextArray:[35],nodeType:i.animationNode,content:r.hideNoodleGod},{currIndex:35,nextArray:[36],nodeType:i.animationNode,content:r.moveBgToTop},{currIndex:36,nextArray:[37],nodeType:i.recommendNode,content:{speaker:"\u3010\u753b\u5916\u97f3\u3011",text:o}},{currIndex:37,nextArray:[38],nodeType:i.animationNode,content:r.moveBgToMiddle},{currIndex:38,nextArray:[39],nodeType:i.textNode,content:{speaker:"\u3010\u9996\u9875\u3011",text:"\u91cd\u65b0\u5f00\u59cb o(*\uffe3\ufe36\uffe3*)o"}},{currIndex:39,nextArray:[2],nodeType:i.refreshNode,content:""},{currIndex:null,nextArray:null,nodeType:i.textNode,content:{speaker:"",text:"\u5f00\u542f\u7ea2\u8272\u8109\u52a8\u5b9d\u77f3\u7eff\u8272\u7fe1\u7fe0\u5b9d\u77f3\u94f6\u8272\u5149\u8f89\u5b9d\u77f3\u4f60\u9700\u8981\u7684\u662f\u5c31\u51b3\n      \u5b9a\u662f\u4f60\u5566\uff01\u4fbf\u5f53\u914d\u4e0e\u753b\u5916\u97f3\u610f\u9762\u4e4b\u795e\u67d0\u7537\u5b50\u9996\u9875\u7ee7\u7eed\u829d\u58eb\u62ab\u8428\u52b2\u8106\u6c49\u5821\n      \u5de7\u6ecb\u66f2\u5947\u6574\u5757\u706b\u9f99\u679c\u751c\u751c\u5708\u7cbe\u9009\u70d8\u7119\u8702\u871c\u7ea2\u8336\u7f8e\u5f0f\u5496\u5561\u9c9c\u679c\u751c\u9152\u3010\u3011[]"}}];t.exports.gameFlow=d,t.exports.nodeType=i,t.exports.animationNode=r,cc._RF.pop()},{"./animations":"animations"}],gemBox:[function(e,t,n){"use strict";cc._RF.push(t,"0153cpuU45H5LV2eBmP3NDz","gemBox"),cc.Class({extends:cc.Component,properties:{canCheck:{default:!1}},onLoad:function(){this.node.on("newRecommend",this.newRecommend,this),this.node.on("recommendHide",this.recommendHide,this),this.node.on("gemAnimationFinish",this.gemAnimationFinish,this),this.node.on("gemNextRound",this.gemNextRound,this)},onEnable:function(){this.reset()},reset:function(){this.node.opacity=255,this.node.scale=1},newRecommend:function(e){var t=e.resolve;this.currRecommendResolve=t},recommendHide:function(e){var t=e.resolve;cc.tween(this.node).to(0,{opacity:100}).to(.15,{opacity:0,scale:6},{easing:"easeInSine"}).call(t).start()},gemAnimationFinish:function(e){2===e.index&&(this.canCheck=!0)},gemNextRound:function(e){var t=e.index;this.currRecommendResolve(t)},gemChecked:function(e){var t=e.node;if(cc.log("gembox checked"),this.canCheck){this.canCheck=!1;for(var n=this.node.children,o=1;o<4;o+=1)t===n[o]?n[o].emit("gemChecked"):n[o].emit("gemUnChecked")}}}),cc._RF.pop()},{}],gems:[function(e,t,n){"use strict";cc._RF.push(t,"0c711dPv9pHAqHAOJ5o0Boz","gems");var o=e("./globalSetting").GlobalSetting;cc.Class({extends:cc.Component,properties:{gemShow:{default:null,type:cc.AudioClip},gemClick:{default:[],type:[cc.AudioClip]},animationDelay:{default:0},index:{default:0}},onLoad:function(){this.node.on("gemChecked",this.gemChecked,this),this.node.on("gemUnChecked",this.gemUnChecked,this),this.pos=this.node.position},onEnable:function(){var e=this;this.reset(),this.scheduleOnce(function(){e.getComponent(cc.Animation).play("showGem")},this.animationDelay)},reset:function(){this.node.scale=1,this.node.opacity=0,this.node.position=this.pos},gemChecked:function(){var e=this;this.playClickAnimation(),this.scheduleOnce(function(){e.emitNextRoundMessage()},1.85)},gemUnChecked:function(){this.hideGemWithAnimation()},hideGemWithAnimation:function(){cc.tween(this.node).to(0,{opacity:100,scale:1}).to(.35,{opacity:0,scale:2}).start()},emitAnimationFinishMessage:function(){this.node.parent.emit("gemAnimationFinish",{index:this.index})},emitNextRoundMessage:function(){this.node.parent.emit("gemNextRound",{index:this.index})},playGemAnimation:function(){this.getComponent(cc.Animation).play()},playClickAnimation:function(){this.getComponent(cc.Animation).play("gemClick")},playShowSound:function(){cc.log("play gem show sound"),cc.audioEngine.play(this.gemShow,!1,o.volume)},playClickSound1:function(){cc.log("play gem click sound1"),cc.audioEngine.play(this.gemClick[0],!1,o.volume)},playClickSound2:function(){cc.log("play gem click sound2"),cc.audioEngine.play(this.gemClick[1],!1,o.volume)}}),cc._RF.pop()},{"./globalSetting":"globalSetting"}],globalSetting:[function(e,t,n){"use strict";cc._RF.push(t,"6604fKCSUFA970nlxBT+KDU","globalSetting");t.exports.GlobalSetting={volume:.5},cc._RF.pop()},{}],loadAudio:[function(e,t,n){"use strict";cc._RF.push(t,"f6d49YghflJ0Z/HRWVksme+","loadAudio"),cc.Class({extends:cc.Component,properties:{audioClips:{default:[],type:[cc.AudioClip]}},start:function(){this.audioClips.forEach(function(e){cc.audioEngine.play(e,!1,0)})}}),cc._RF.pop()},{}],noodleGodBox:[function(e,t,n){"use strict";cc._RF.push(t,"185b4NB5ylNqJ5BCdyacVzn","noodleGodBox");var o=e("./globalSetting").GlobalSetting;cc.Class({extends:cc.Component,properties:{noodleNode:{default:null,type:cc.Node},bgNode:{default:null,type:cc.Node},showSound:{default:null,type:cc.AudioClip},hideSound:{default:null,type:cc.AudioClip},noodleGodHideY:{default:0},noodleGodShowY:{default:0}},onLoad:function(){this.node.on("godShow",this.godShow,this),this.node.on("godHide",this.godHide,this),this.currAudio=null},onEnable:function(){this.reset()},onDisable:function(){this.currAudio&&cc.audioEngine.stop(this.currAudio)},reset:function(){this.bgNode.opacity=0},godShow:function(e){var t=this;this.scheduleOnce(function(){t.godShowAnime(e)},1)},godShowAnime:function(e){var t=this,n=e.resolve;this.scheduleOnce(function(){t.playShowSound()},.3),cc.tween(this.bgNode).to(1,{opacity:180}).start(),cc.tween(this.noodleNode).to(1.4,{position:cc.v2(this.noodleNode.position.x,this.noodleGodShowY),opacity:255,angle:360,scale:1}).to(1.6,{}).call(n).start()},godHide:function(e){var t=e.resolve;this.playHideSound(),cc.tween(this.bgNode).to(1.5,{opacity:0}).start(),cc.tween(this.noodleNode).to(1.5,{position:cc.v2(this.noodleNode.position.x,this.noodleGodHideY),opacity:0,scale:.4}).to(1.7,{angle:0}).call(t).start()},playShowSound:function(){cc.log("play god show sound"),this.currAudio=cc.audioEngine.play(this.showSound,!1,o.volume)},playHideSound:function(){cc.log("play god hide sound"),this.currAudio=cc.audioEngine.play(this.hideSound,!1,o.volume)}}),cc._RF.pop()},{"./globalSetting":"globalSetting"}],runAnimationOnActive:[function(e,t,n){"use strict";cc._RF.push(t,"7f5ed3w1xdKRL1gB3UFM+++","runAnimationOnActive"),cc.Class({extends:cc.Component,properties:{},onEnable:function(){this.getComponent(cc.Animation).play()}}),cc._RF.pop()},{}],typer:[function(e,t,n){"use strict";cc._RF.push(t,"bb6e1ud0vhJDrTd03PD7epm","typer");var o=e("./globalSetting").GlobalSetting,i=1,r=2,c=3,d=4;cc.Class({extends:cc.Component,properties:{speed:{default:1},typerLabelNode:{default:null,type:cc.Label},speakerLabelNode:{default:null,type:cc.Label},canvasNode:{default:null,type:cc.Node},continueBtnNode:{default:null,type:cc.Node},audio:{default:null,type:cc.AudioClip},beforeBtn:{default:0}},onLoad:function(){this.node.on("startType",this.startType,this),this.setState(i),this.resetTyperData()},startType:function(e){var t=e.content,n=e.resolve;this.canType()&&(this.currTextResolve=n,this.content=t,this.setState(r),this.setTyperLabelContent(""),this.setSpeakerLabelContent(t.speaker),this.hideContinueBtn(),this.typing(t.text))},btnClick:function(){this.canSkip()?this.skipType():this.canContinue()&&(this.currTextResolve(),this.resetTyperData(),this.hideContinueBtn())},resetTyperData:function(){this.setState(i),this.typingHandler=null,this.currTextResolve=null,this.content={speaker:"",content:""}},skipType:function(){this.finishType()},finishType:function(){var e=this;this.setState(c),this.setTyperLabelContent(this.content.text),this.unschedule(this.typingHandler),this.scheduleOnce(function(){e.setState(d),e.showContinueBtn()},this.beforeBtn)},typing:function(e){var t=this,n=e.length,o=0;this.typingHandler=function(){if(o>=n)t.finishType();else{t.playTyperSound(),o+=2;var i=t.getTyperContent(e,o,n);t.setTyperLabelContent(i)}},this.schedule(this.typingHandler,this.speed)},getTyperContent:function(e,t,n){return e.substring(0,t)+(t<=n?"|":"")},setTyperLabelContent:function(e){this.typerLabelNode.string=e},setSpeakerLabelContent:function(e){this.speakerLabelNode.string=e},setState:function(e){this.state=e},getState:function(){return this.state||i},canType:function(){return this.getState()===i},canSkip:function(){return this.getState()===r},canContinue:function(){return this.getState()===d},playTyperSound:function(){cc.audioEngine.play(this.audio,!1,o.volume)},showContinueBtn:function(){this.continueBtnNode.active=!0},hideContinueBtn:function(){this.continueBtnNode.active=!1}}),cc._RF.pop()},{"./globalSetting":"globalSetting"}],"use_v2.1-2.2.1_cc.Toggle_event":[function(e,t,n){"use strict";cc._RF.push(t,"81545IYhixGhbJpPpIYZBGb","use_v2.1-2.2.1_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_isChecked=!0),cc._RF.pop()},{}]},{},["animations","bgBox","cardBox","cards","dialogBox","gameController","gameFlow","gemBox","gems","globalSetting","loadAudio","noodleGodBox","runAnimationOnActive","typer","use_v2.1-2.2.1_cc.Toggle_event"]);