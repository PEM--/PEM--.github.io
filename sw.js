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
    "url": "webpack-runtime-d1985477f1bb5eeb57a0.js"
  },
  {
    "url": "app.9c22f1abedc8d518e8fc.css"
  },
  {
    "url": "app-67572cb752e742c68c21.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-20614ee7a12fe9a5d1c9.js"
  },
  {
    "url": "index.html",
    "revision": "e00cd2b895c57b37b111af6fcb3c29d3"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "60a2ff20735eab680ead8be1dea48fab"
  },
  {
    "url": "5-4b470b23014a64ba0c52.js"
  },
  {
    "url": "component---src-pages-index-js-cbd82e2987af78bad490.js"
  },
  {
    "url": "1-0dbf370fcecc1638e10c.js"
  },
  {
    "url": "0-d9aa4ba5a7552b6ef501.js"
  },
  {
    "url": "static/d/317/path---index-6a9-l6L2E97OSqvtWGWm19y5uP3JNc0.json",
    "revision": "df7968dcb8a7e82e070ec83969910f80"
  },
  {
    "url": "component---src-pages-404-js-0321a927e597311be0a2.js"
  },
  {
    "url": "2-b1dca2efd391504ec618.js"
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