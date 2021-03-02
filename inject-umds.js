// ==UserScript==
// @name         Inject UMD Scripts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  inject umd scripts
// @author       howel52<wuhao.52@outlook.com>
// @match        http://localhost/*
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
