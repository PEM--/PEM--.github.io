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

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

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
    "url": "webpack-runtime-813ea943692f1ec48e3f.js"
  },
  {
    "url": "app.2f5dbf4a3ab07d527802.css"
  },
  {
    "url": "app-aafe0c21c62fab036cb9.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-67541fb67c6ea9b8ddc4.js"
  },
  {
    "url": "index.html",
    "revision": "f3e14b6b49e20945cb9e38998011253b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1df0ad76261cf0a6048b48492303865f"
  },
  {
    "url": "2-ba73c033776940d82e84.js"
  },
  {
    "url": "component---src-pages-index-js-d66ca5195779e3df401a.js"
  },
  {
    "url": "1-5749523680609055f66e.js"
  },
  {
    "url": "0-f858626259de8bf5b2b8.js"
  },
  {
    "url": "static/d/437/path---index-6a9-QV6K338Mgz2D5hUE8sDmKyw8NoY.json",
    "revision": "f943516e703d69bdaff0c8352095b440"
  },
  {
    "url": "component---src-pages-404-js-fa3c6c5b5fb1cdd4fdbe.js"
  },
  {
    "url": "3-762f73ea4f92894b9a25.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "9ff68e294d9838e603aa4038fc73ac87"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});