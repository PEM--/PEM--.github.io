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
    "url": "webpack-runtime-220c276f6eecf8be8b42.js"
  },
  {
    "url": "app.9c22f1abedc8d518e8fc.css"
  },
  {
    "url": "app-14249234bf67c545412d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-a01137135d4a7fdb5c27.js"
  },
  {
    "url": "index.html",
    "revision": "0bcd0e82bfd3349691551a74c967d7c3"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "de26f242abff3448524a2de17c562f87"
  },
  {
    "url": "20-bd252aae5cae7117a2dc.js"
  },
  {
    "url": "component---src-pages-index-js-412c316f487ae412e1b9.js"
  },
  {
    "url": "3-83cc63c8dca29f4e1dab.js"
  },
  {
    "url": "2-ca12b639c28372b67f1b.js"
  },
  {
    "url": "0-48985b000c3b4a539678.js"
  },
  {
    "url": "static/d/317/path---index-6a9-l6L2E97OSqvtWGWm19y5uP3JNc0.json",
    "revision": "df7968dcb8a7e82e070ec83969910f80"
  },
  {
    "url": "4-fb7f78eba813b86b1084.js"
  },
  {
    "url": "component---src-pages-404-js-aa393f66281a0a671ab0.js"
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