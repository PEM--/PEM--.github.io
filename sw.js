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
    "url": "webpack-runtime-8e6ebf7f2ea081ab5089.js"
  },
  {
    "url": "app.4ea50a4004b53a819e6d.css"
  },
  {
    "url": "app-50785c38b532d0ecd6f8.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-4672f7b098fa7bfc359b.js"
  },
  {
    "url": "index.html",
    "revision": "b7e8e6ae0dee46a10b0176c4492a6832"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "dc8df0cbc9414a139df33a5a35bfe427"
  },
  {
    "url": "3-7af309f4843095c19bca.js"
  },
  {
    "url": "component---src-pages-index-js-5ed7037985e83c0080d1.js"
  },
  {
    "url": "1-87bfdd742069e99d2af0.js"
  },
  {
    "url": "0-515eeeab569025ae7d3e.js"
  },
  {
    "url": "static/d/306/path---index-6a9-4mPskPG4pgOpL5vPemtqaawcJaI.json",
    "revision": "f373623a5e8cf65e620d1de83a7c1c5c"
  },
  {
    "url": "component---src-pages-404-js-812033e0cb429caf97a6.js"
  },
  {
    "url": "2-8071b266e45b6b0691ec.js"
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