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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

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
    "url": "webpack-runtime-5717a7532cdb3647deac.js"
  },
  {
    "url": "app.0e9d594c049d1723e5c3.css"
  },
  {
    "url": "app-0563ee3de119b4bb2d09.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-09b8ea739e57b3eac654.js"
  },
  {
    "url": "index.html",
    "revision": "d765c1e667d018a186f4f585eae4dea5"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "79daafe2fe5abf555046d4d7e00f0f2a"
  },
  {
    "url": "11-4b2588edd2eb2ce21676.js"
  },
  {
    "url": "component---src-pages-index-js-d3fa20965479ff149e5f.js"
  },
  {
    "url": "1-530d7f04faa702c7fdee.js"
  },
  {
    "url": "0-61c5e66c219883be16f4.js"
  },
  {
    "url": "static/d/589/path---index-6a9-PqDstiHC3VyhlLd8gXS2edbtbI.json",
    "revision": "eec874a46bd618eb04346a4aafd90ac0"
  },
  {
    "url": "component---src-pages-404-js-af87ff63457fa8301096.js"
  },
  {
    "url": "2-9f5fe5b14b6ef78cdd18.js"
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
    "revision": "86a7abb798c0e8095355552a695979fb"
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