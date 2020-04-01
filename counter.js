const { gameFlow, nodeType } = require('./assets/Script/gameFlow');
const { recommendList } = require('./assets/Script/animations');

const textSet = new Set([]);


for (let i = 0; i < recommendList.length; i += 1) {
  const text = recommendList[i].split('');

  text.forEach((t) => {
    textSet.add(t);
  });
}

for (let i = 0; i < gameFlow.length; i += 1) {
  if (gameFlow[i].nodeType === nodeType.textNode) {
    const text = gameFlow[i].content.text.split('');

    text.forEach((t) => {
      textSet.add(t);
    });
  }
}


console.log([...textSet].join(''));
