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
    "url": "webpack-runtime-ab5b0e93f65635f1b107.js"
  },
  {
    "url": "app.9c22f1abedc8d518e8fc.css"
  },
  {
    "url": "app-84499702ed82db82b422.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-67572486a8287305b602.js"
  },
  {
    "url": "index.html",
    "revision": "5a1f7944a00b2427e4c5fcfe777b6e74"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "81ff04d3ddecdae0e07add982ae654ac"
  },
  {
    "url": "2-b537b030f6b84b8c446d.js"
  },
  {
    "url": "component---src-pages-index-js-676145b207553eedadbf.js"
  },
  {
    "url": "1-c2fa3961e38774b4a160.js"
  },
  {
    "url": "0-4a5a5861ba13c068ce22.js"
  },
  {
    "url": "static/d/917/path---index-6a9-ZGx5iaMJXyEPnPR2RNUkchceDe8.json",
    "revision": "85a8bf8f154a6bf8a8e5d787797ed35a"
  },
  {
    "url": "component---src-pages-404-js-c77a4587e156c5c70536.js"
  },
  {
    "url": "4-0003a5df6090e4bbd9d6.js"
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