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
    "url": "webpack-runtime-272766e3ade4bbb48f7b.js"
  },
  {
    "url": "app.2f5dbf4a3ab07d527802.css"
  },
  {
    "url": "app-7348d7336a8f5fd22ba9.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-67541fb67c6ea9b8ddc4.js"
  },
  {
    "url": "index.html",
    "revision": "63a9adb6fa7d829c425488feccf6c6f8"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "689d8f6221c7db214e54bf5a4ba386c7"
  },
  {
    "url": "2-432dd9cb4002b212efaf.js"
  },
  {
    "url": "component---src-pages-index-js-06b3ed2cd051dfbd3eba.js"
  },
  {
    "url": "1-54b0b402b3de46e25c9d.js"
  },
  {
    "url": "0-9b7d186e5a08a187b324.js"
  },
  {
    "url": "static/d/830/path---index-6a9-IkcWStFIX52Jl9f5C2qDCTVn4.json",
    "revision": "df04a82fc1e1f2e62c619ecf6f31e0c0"
  },
  {
    "url": "component---src-pages-404-js-d8deba5776765f5e172d.js"
  },
  {
    "url": "4-df5f61a0adf41bb3bdb7.js"
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