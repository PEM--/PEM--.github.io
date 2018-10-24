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

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

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
    "url": "webpack-runtime-12d1e7d1774122dd9c19.js"
  },
  {
    "url": "app.4ea50a4004b53a819e6d.css"
  },
  {
    "url": "app-a412f0423108f61feea6.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-4d2615dc45316ed13b04.js"
  },
  {
    "url": "index.html",
    "revision": "bd8085135c0f9a3d8e3f4a72b6d63007"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "65cd69aebe362df0760d40724fe64216"
  },
  {
    "url": "2-a183aeed7cf4687aae69.js"
  },
  {
    "url": "component---src-pages-index-js-5577d30a1946e2d971fc.js"
  },
  {
    "url": "1-ac4c86dba9a3f26d2570.js"
  },
  {
    "url": "0-ac3ae382d8d79d671b02.js"
  },
  {
    "url": "static/d/771/path---index-6a9-seAO5qIsjL2shgLu9b6Y1IPCqiA.json",
    "revision": "65815c0bccd34f5d4ae7b5c55bd71f3b"
  },
  {
    "url": "component---src-pages-404-js-c26e4bc5a2777264c7c2.js"
  },
  {
    "url": "3-c2240904a0be8cb582b8.js"
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