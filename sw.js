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
    "url": "webpack-runtime-ece297ad3ccf075d071d.js"
  },
  {
    "url": "app.0e9d594c049d1723e5c3.css"
  },
  {
    "url": "app-579eef01278c503ca39d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-4b053085bc39a8eb3c6e.js"
  },
  {
    "url": "index.html",
    "revision": "8d660876f5997cd55d3d02dc44c60a15"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7e1981e703ca89cb93a85ba9460f408f"
  },
  {
    "url": "13-fc30bf0b1b1484c20610.js"
  },
  {
    "url": "component---src-pages-index-js-4db34b94f88b39802a68.js"
  },
  {
    "url": "1-e21680c2f24d8474a3ad.js"
  },
  {
    "url": "0-0e407a1e448a884cd128.js"
  },
  {
    "url": "static/d/917/path---index-6a9-ZGx5iaMJXyEPnPR2RNUkchceDe8.json",
    "revision": "85a8bf8f154a6bf8a8e5d787797ed35a"
  },
  {
    "url": "component---src-pages-404-js-9273a1844de838ee2f42.js"
  },
  {
    "url": "2-5d834798057173c5e3f6.js"
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