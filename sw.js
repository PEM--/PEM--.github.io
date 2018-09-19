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
    "url": "webpack-runtime-4c24593783def83fb78f.js"
  },
  {
    "url": "app.0e9d594c049d1723e5c3.css"
  },
  {
    "url": "app-3e6ab8213efc28ac73a7.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-09b8ea739e57b3eac654.js"
  },
  {
    "url": "index.html",
    "revision": "7833835cd8ee2e534f5a252500d3b626"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b3d5848376d368ddd0ea30d0017dea4a"
  },
  {
    "url": "11-047c85f184b6618a9bde.js"
  },
  {
    "url": "component---src-pages-index-js-7a32dbde3851a98d0c12.js"
  },
  {
    "url": "1-13af4de62f4aa3ced30e.js"
  },
  {
    "url": "0-f655aa238a51e5f64f3c.js"
  },
  {
    "url": "static/d/589/path---index-6a9-PqDstiHC3VyhlLd8gXS2edbtbI.json",
    "revision": "eec874a46bd618eb04346a4aafd90ac0"
  },
  {
    "url": "component---src-pages-404-js-31274198b150cd0e6027.js"
  },
  {
    "url": "2-be796f6d7782f6e3626a.js"
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