// ==UserScript==
// @name         Quick Copy For sf.gg Codes
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Copy snip quickly for sf.gg!
// @author       howel52<wuhao.52@outlook.com>
// @match        https://segmentfault.com/a/*
// @match        https://sf.gg/a/*
// @grant        GM_log
// @grant        GM_setClipboard
// ==/UserScript==

(async function() {
  'use strict';

  const toArray = arrayLike => Array.prototype.slice.call(arrayLike);

  const snipContainers = await Promise.race(
    (new Array(10).fill()).map((_, idx) => {
      const gap = 1000 //ms
      const interval = gap * idx + gap;
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const snipContainers = toArray(document.querySelectorAll(".hljs code"));
            if (snipContainers.length > 0) {
              resolve(snipContainers)
            }
          }, interval);
        })
    })
  ) || [];

  const snipContents = snipContainers.map((e) => e.innerText);

  snipContainers.forEach((container, idx) => {
    const btn = document.createElement('span');
    btn.innerText = 'Copy'
    btn.setAttribute('class', 'btn btn-primary');
    btn.onclick = () => {
      const codeStr = snipContents[idx];
      GM_setClipboard(codeStr);
    }
    btn.setAttribute('style', 'float: right; margin: 0px; cursor: pointer; font-size: 5px; padding: 0px 4px;');
    container.append(btn)
  });

})();
