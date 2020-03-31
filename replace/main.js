window.boot = function () {
  const settings = window._CCSettings;
  window._CCSettings = undefined;

  if (!settings.debug) {
    const { uuids } = settings;

    const { rawAssets } = settings;
    const { assetTypes } = settings;
    const realRawAssets = settings.rawAssets = {};
    for (const mount in rawAssets) {
      const entries = rawAssets[mount];
      const realEntries = realRawAssets[mount] = {};
      for (const id in entries) {
        const entry = entries[id];
        const type = entry[1];
        // retrieve minified raw asset
        if (typeof type === 'number') {
          entry[1] = assetTypes[type];
        }
        // retrieve uuid
        realEntries[uuids[id] || id] = entry;
      }
    }

    const { scenes } = settings;
    for (let i = 0; i < scenes.length; ++i) {
      const scene = scenes[i];
      if (typeof scene.uuid === 'number') {
        scene.uuid = uuids[scene.uuid];
      }
    }

    const { packedAssets } = settings;
    for (const packId in packedAssets) {
      const packedIds = packedAssets[packId];
      for (let j = 0; j < packedIds.length; ++j) {
        if (typeof packedIds[j] === 'number') {
          packedIds[j] = uuids[packedIds[j]];
        }
      }
    }

    const { subpackages } = settings;
    for (const subId in subpackages) {
      const uuidArray = subpackages[subId].uuids;
      if (uuidArray) {
        for (let k = 0, l = uuidArray.length; k < l; k++) {
          if (typeof uuidArray[k] === 'number') {
            uuidArray[k] = uuids[uuidArray[k]];
          }
        }
      }
    }
  }

  function setLoadingDisplay() {
    // Loading splash scene
    const splash = document.getElementById('splash');
    const progressBar = splash.querySelector('.progress-bar span');
    cc.loader.onProgress = function (completedCount, totalCount, item) {
      const percent = 100 * completedCount / totalCount;
      if (progressBar) {
        progressBar.style.width = `${percent.toFixed(2)}%`;
      }
    };
    splash.style.display = 'block';
    progressBar.style.width = '0%';

    cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, () => {
      splash.style.display = 'none';
    });
  }

  const onStart = function () {
    cc.loader.downloader._subpackages = settings.subpackages;

    cc.view.enableRetina(true);
    cc.view.resizeWithBrowserSize(true);

    if (cc.sys.isBrowser) {
      setLoadingDisplay();
    }

    if (cc.sys.isMobile) {
      if (settings.orientation === 'landscape') {
        cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
      } else if (settings.orientation === 'portrait') {
        cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT);
      }
      // cc.view.enableAutoFullScreen([
      //     cc.sys.BROWSER_TYPE_BAIDU,
      //     cc.sys.BROWSER_TYPE_WECHAT,
      //     cc.sys.BROWSER_TYPE_MOBILE_QQ,
      //     cc.sys.BROWSER_TYPE_MIUI,
      // ].indexOf(cc.sys.browserType) < 0);

      cc.view.enableAutoFullScreen(false);
    }

    // Limit downloading max concurrent task to 2,
    // more tasks simultaneously may cause performance draw back on some android system / browsers.
    // You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
    if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
      cc.macro.DOWNLOAD_MAX_CONCURRENT = 2;
    }

    function loadScene(launchScene) {
      cc.director.loadScene(launchScene,
        (err) => {
          if (!err) {
            if (cc.sys.isBrowser) {
              // show canvas
              const canvas = document.getElementById('GameCanvas');
              canvas.style.visibility = '';
              const div = document.getElementById('GameDiv');
              if (div) {
                div.style.backgroundImage = '';
              }
            }
            cc.loader.onProgress = null;
            console.log(`Success to load scene: ${launchScene}`);
          } else if (CC_BUILD) {
            setTimeout(() => {
              loadScene(launchScene);
            }, 1000);
          }
        });
    }

    const { launchScene } = settings;

    // load scene
    loadScene(launchScene);
  };

  // jsList
  let { jsList } = settings;

  const bundledScript = settings.debug ? 'src/project.dev.js' : 'src/project.js';
  if (jsList) {
    jsList = jsList.map((x) => `src/${x}`);
    jsList.push(bundledScript);
  } else {
    jsList = [bundledScript];
  }

  const option = {
    id: 'GameCanvas',
    scenes: settings.scenes,
    debugMode: settings.debug ? cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
    showFPS: settings.debug,
    frameRate: 60,
    jsList,
    groupList: settings.groupList,
    collisionMatrix: settings.collisionMatrix,
  };

  // init assets
  cc.AssetLibrary.init({
    libraryPath: 'res/import',
    rawAssetsBase: 'res/raw-',
    rawAssets: settings.rawAssets,
    packedAssets: settings.packedAssets,
    md5AssetsMap: settings.md5AssetsMap,
    subpackages: settings.subpackages,
  });

  cc.game.run(option, onStart);
};

if (window.jsb) {
  const isRuntime = (typeof loadRuntime === 'function');
  if (isRuntime) {
    require('src/settings.js');
    require('src/cocos2d-runtime.js');
    if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
      require('src/physics.js');
    }
    require('jsb-adapter/engine/index.js');
  } else {
    require('src/settings.js');
    require('src/cocos2d-jsb.js');
    if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) {
      require('src/physics.js');
    }
    require('jsb-adapter/jsb-engine.js');
  }

  cc.macro.CLEANUP_IMAGE_CACHE = true;
  window.boot();
}
