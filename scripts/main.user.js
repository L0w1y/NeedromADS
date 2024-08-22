// ==UserScript==
// @name            NeedromAds
// @namespace       https://github.com/L0w1y
// @version         1.0
// @description     Block specific jQuery Adblock detector scripts, to download intermediately
// @author          Sergey Lowly
// @match           https://www.needrom.com/download/*
// @match           https://www.needrom.com/server/download.php?*
// @grant           none
// @run-at          document-start
// @updateURL       https://raw.githubusercontent.com/L0w1y/NeedromADS/main/scripts/main.user.js
// @downloadURL     https://raw.githubusercontent.com/L0w1y/NeedromADS/main/scripts/main.user.js
// ==/UserScript==

(function() {
    'use strict';

    const blockUrls = [
        /https:\/\/cdn\.needrom\.com\/colorbox\/home\/jquery\.colorbox.*\.min\.js/,
        /https:\/\/cdn\.needrom\.com\/colorbox\/server\/jquery\.colorbox.*\.min\.js/
    ];

    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (blockUrls.some(pattern => pattern.test(url))) {
            console.log(`Blocked: ${url}`);
            return;
        }
        return originalOpen.apply(this, arguments);
    };

    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
        if (blockUrls.some(pattern => pattern.test(url.toString()))) {
            console.log(`Blocked: ${url}`);
            return Promise.resolve(new Response(null, {status: 204, statusText: 'No Content'}));
        }
        return originalFetch.apply(this, arguments);
    };
})();