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
    "url": "webpack-runtime-5e9310addc7192fcf0b5.js"
  },
  {
    "url": "app.c9e3936ec69674e86828.css"
  },
  {
    "url": "app-17e2038086ce3a444abe.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7bc6aabbeb51134c5aec.js"
  },
  {
    "url": "index.html",
    "revision": "44484c5aec65d1ecc9402ca37693df59"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "29705cea7716264b598bbe53a8fc6dcb"
  },
  {
    "url": "2-943b40287523f7369424.js"
  },
  {
    "url": "component---src-pages-index-js-7e3efdebd8b059607f63.js"
  },
  {
    "url": "1-80783e2908582274cdf9.js"
  },
  {
    "url": "0-5d39be4f75ce3ab7b86a.js"
  },
  {
    "url": "static/d/599/path---index-6a9-GdkXKWiSBbOro6tu8hrhTFjs86M.json",
    "revision": "2609310a8fe039c970ad6be62626e6b3"
  },
  {
    "url": "component---src-pages-404-js-bbe5df8332eb84dc74ae.js"
  },
  {
    "url": "3-5752b6cf46a7e9098e14.js"
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