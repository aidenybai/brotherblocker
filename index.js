(() => {
  let bannedList = [
    'https://krunker.io',
    'https://surviv.io',
    'https://discord.com',
    'https://hordes.io',
  ];
  let foundIllegal = false;
  for (const banned of bannedList) {
    if (banned === window.location.origin) foundIllegal = true;
  }
  if (foundIllegal) {
    ((window) => {
      const module = () => {
        let __dynamicStyleObject = null;

        const inject = (input) => {
          if (__dynamicStyleObject == null) {
            __dynamicStyleObject = window.document.createElement('style');
            __dynamicStyleObject.id = 'injectCSS';
            __dynamicStyleObject.innerHTML = '';
            document.body.appendChild(__dynamicStyleObject);
          }

          let content = null;
          if (typeof input === 'string') {
            content = input;
          } else if (typeof input === 'function') {
            content = input
              .toString()
              .replace(/^[^\/]+\/\*!?/, '')
              .replace(/\*\/[^\/]+$/, '');
          } else {
            throw `Type (${typeof input}) is not supported by injectCSS.`;
          }

          if (content != null) __dynamicStyleObject.innerHTML += `\n${content}`;

          return __dynamicStyleObject;
        };

        if (window['injectCSS'] != undefined) return window['injectCSS'];
        if (window.injectCSS != undefined) return window.injectCSS;

        return inject;
      };

      if (window['define'] !== undefined) {
        define(module);
      } else {
        window['injectCSS'] = module();
      }

      if (typeof define === 'function' && define.amd) {
        define('injectCSS', [], module);
      } else {
        window.injectCSS = module();
      }
    })(window);

    injectCSS(`* { pointer-events: none !important; }`);

    txt = "a";
    while (1) {
      txt = txt += 'a';
      txt = txt += 'a';
      txt = txt += 'a';
      txt = txt += 'a';
      txt = txt += 'a';
      txt = txt += 'a';
      txt = txt += 'a';
      txt = txt += 'a';
    }
  }
})();
