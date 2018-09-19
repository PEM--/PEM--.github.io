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
    "url": "webpack-runtime-e21a9ff588c79f8805b9.js"
  },
  {
    "url": "app.0e9d594c049d1723e5c3.css"
  },
  {
    "url": "app-baf2fb9769615eacb2ed.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d3ca803daae669688e75.js"
  },
  {
    "url": "index.html",
    "revision": "57e0f9ae4751ef926b2f79243c855b07"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a9f1d1290871885b5513a44a07d519ed"
  },
  {
    "url": "0-633c462a6b17848ca106.js"
  },
  {
    "url": "component---src-pages-index-js-5fded69eb4f4055e562e.js"
  },
  {
    "url": "10-3810be8d44af1c859359.js"
  },
  {
    "url": "static/d/589/path---index-6a9-PqDstiHC3VyhlLd8gXS2edbtbI.json",
    "revision": "eec874a46bd618eb04346a4aafd90ac0"
  },
  {
    "url": "component---src-pages-404-js-4ba3d7f0afe37c7b46f0.js"
  },
  {
    "url": "1-f138f69626e701545837.js"
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