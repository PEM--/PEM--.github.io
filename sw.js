/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-fe835145cb422b3de7f7.js"
  },
  {
    "url": "app-213d336c94dad6da5bbc.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-aa9ede116c441f968dc5.js"
  },
  {
    "url": "index.html",
    "revision": "22b5e07d74db49445adc8f87a5ff4825"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7c509e271edb72c17a87aa71c05a4260"
  },
  {
    "url": "0-5df2b366118829645aec.js"
  },
  {
    "url": "component---src-pages-index-js-728a23e283b7a25e64fb.js"
  },
  {
    "url": "static/d/463/path---index-6a9-Fz1MZBQZqD6sxzmtTSLTmEiDDg.json",
    "revision": "873dddba044f2b09e42e8e51903ce9d1"
  },
  {
    "url": "component---src-pages-404-js-6bf3cf22cc6e298d8fb2.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
