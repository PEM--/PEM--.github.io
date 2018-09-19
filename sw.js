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
    "url": "webpack-runtime-f6d2f091cb8da0006b08.js"
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
    "revision": "b8800109cdef981237a258b9ed059d20"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f0eb75be16e226d28f7475c34ccf00f0"
  },
  {
    "url": "11-047c85f184b6618a9bde.js"
  },
  {
    "url": "component---src-pages-index-js-454721ef8d9849ca0955.js"
  },
  {
    "url": "1-13af4de62f4aa3ced30e.js"
  },
  {
    "url": "0-f655aa238a51e5f64f3c.js"
  },
  {
    "url": "static/d/280/path---index-6a9-PUXMKfTc1i8rMnPNR2hyaxwSs9A.json",
    "revision": "7b6345a754f7a5372f25f9be7078b820"
  },
  {
    "url": "component---src-pages-404-js-9f81fb75bc889db0d544.js"
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