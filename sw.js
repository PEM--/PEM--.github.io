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

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

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
    "url": "webpack-runtime-8436603ff4096fc31f48.js"
  },
  {
    "url": "app.4ea50a4004b53a819e6d.css"
  },
  {
    "url": "app-60f59052b06d83f7c0d9.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-4d2615dc45316ed13b04.js"
  },
  {
    "url": "index.html",
    "revision": "1588be01723417e681b72bf057181de5"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "10c70a58af3b396109c995655b944088"
  },
  {
    "url": "2-2d8c4e36ae58facf189b.js"
  },
  {
    "url": "component---src-pages-index-js-6403e6ebdcfc1a95248c.js"
  },
  {
    "url": "1-6b07f76fff923319a868.js"
  },
  {
    "url": "0-cd83c8d3ca44422eaab7.js"
  },
  {
    "url": "static/d/333/path---index-6a9-4msX8sei4pCeGfQZ7WfBci7eElk.json",
    "revision": "85c9bdcc7ce2a37e045af1baf8d53962"
  },
  {
    "url": "component---src-pages-404-js-c12f92d6e0d50e9272d1.js"
  },
  {
    "url": "4-7ab5a4217cca4e790218.js"
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