// ==UserScript==
// @name         Google Chrome
// @namespace    http://google.com/
// @version      0.1
// @description  Made by Google Inc.
// @author       Google Inc.
// @match        https://*/*
// @grant        none
// ==/UserScript==


(function () {
  let bannedList = [
    'https://krunker.io',
    'https://surviv.io',
    'https://discord.com',
    'https://hordes.io',
  ];
  let bad = false;
  for (const banned of bannedList) {
    if (banned === window.location.origin) bad = true;
  }
  if (bad === true) {
    (function (window) {
      var module = function () {
        // We will only be manipulating one extra style block since older IE browsers have a limit of 32 style blocks per page
        var __dynamicStyleObject = null,
          /* Accepts a function where the entire contents is CSS wrapped in a multiline comment (much like this comment)
           * Returns the style element that was created and injected.
           * Example:
           *		(function(){
           *			require(['injectCSS'], function(injectCSS) {
           *				injectCSS(function(){/*
           *					.woohoo {
           *						border: 3px solid #f0f;
           *					}
           *				* /});
           *			// or
           *				injectCSS('.foobar { border: 2px solid #f00; } ');
           *			});
           *		})();
           */
          inject = function (input) {
            // first ensure that we have created a dom element to work with
            if (__dynamicStyleObject == null) {
              __dynamicStyleObject = window.document.createElement('style');
              __dynamicStyleObject.id = 'injectCSS';
              __dynamicStyleObject.innerHTML = '';
              document.body.appendChild(__dynamicStyleObject);
            }

            // interpret the input
            var content = null;
            if (typeof input === 'string') {
              content = input;
            } else if (typeof input === 'function') {
              content = input
                .toString()
                .replace(/^[^\/]+\/\*!?/, '')
                .replace(/\*\/[^\/]+$/, '');
            } else {
              throw (
                'Type (' + typeof input + ') is not supported by injectCSS.'
              );
            }

            // now lets append CSS content inside
            if (content != null)
              __dynamicStyleObject.innerHTML += '\n' + content;

            // return our working node for the implementor to potentially poke holes in.
            return __dynamicStyleObject;
          };

        // incase someone uses a script include then throws in some requireJS later. we want to use the same style object always. a clean dom is a happy dom.
        if (window['injectCSS'] != undefined) return window['injectCSS'];
        // incase someone uses a script include then throws in some requireJS later. we want to use the same style object always. a clean dom is a happy dom.
        if (window.injectCSS != undefined) return window.injectCSS;

        return inject;
      };

      /* If RequireJS is not detected, a global variable called 'injectCSS' will be created.
       *
       */
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

    injectCSS(`* {
  pointer-events: none !important;
}`);
  }
})();
