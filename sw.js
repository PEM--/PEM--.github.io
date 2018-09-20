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
    "url": "webpack-runtime-f9ee515283d0bb4d139c.js"
  },
  {
    "url": "app.c9e3936ec69674e86828.css"
  },
  {
    "url": "app-5cdc104166e49b15763f.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-4b053085bc39a8eb3c6e.js"
  },
  {
    "url": "index.html",
    "revision": "50707c33cf5af2e1704b4d885e09ec40"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "09c5dd02937589b40a17f69aceb332ee"
  },
  {
    "url": "13-3a9453a1d68b43759cc5.js"
  },
  {
    "url": "component---src-pages-index-js-0d3eb12a7177f2c17bed.js"
  },
  {
    "url": "1-8c983ef69cb52301312f.js"
  },
  {
    "url": "0-b8f53312937a1e7e2cb9.js"
  },
  {
    "url": "static/d/387/path---index-6a9-q97lb4SPZQ6CVbPKsetn57seMQ.json",
    "revision": "40a91bc66024b219efdcce694a1e3d1f"
  },
  {
    "url": "component---src-pages-404-js-2a5c277775ce2f159f89.js"
  },
  {
    "url": "2-1e0214a88c810c665ea4.js"
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