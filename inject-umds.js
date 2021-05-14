// ==UserScript==
// @name         Inject UMD Scripts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  inject umd scripts
// @author       howel52<wuhao.52@outlook.com>
// @updateURL    https://raw.githubusercontent.com/howel52/tampermonkey-scripts/main/inject-umds.js
// @match        http://localhost/*
// @match        http://127.0.0.1/*
// @grant        GM_log
// ==/UserScript==

(async function() {
  'use strict';

  const scripts = [
    "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js",
    "https://cdn.jsdelivr.net/npm/lodash/lodash.min.js"
  ]

  const injectScript = (script) => {
    const tag = document.createElement('script');
    tag.setAttribute('src', script)
    document.body.appendChild(tag)
    return tag
  }

  for(const script of scripts) {
    injectScript(script);
    console.info(`[Inject Scripts]: ${script}`)
  }

})();
