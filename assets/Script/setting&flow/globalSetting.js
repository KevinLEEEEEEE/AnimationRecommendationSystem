const language = cc.Enum({
  Chinese: 0,
  English: 1,
});

const GlobalSetting = {
  volume: 0.5,
  language: language.Chinese,
};

const setLanguage = (lan) => {
  GlobalSetting.language = lan;
};

module.exports = {
  GlobalSetting,
  language,
  setLanguage,
};
