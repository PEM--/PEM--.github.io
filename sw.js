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
    "url": "webpack-runtime-ab587903d61a48e104da.js"
  },
  {
    "url": "app.2f5dbf4a3ab07d527802.css"
  },
  {
    "url": "app-65c3163a91c955c085e7.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-67541fb67c6ea9b8ddc4.js"
  },
  {
    "url": "index.html",
    "revision": "b7e9bb7e34d30fb0629915efe09796c7"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "07139e47fa8336bccee111e6512d0f4d"
  },
  {
    "url": "2-432dd9cb4002b212efaf.js"
  },
  {
    "url": "component---src-pages-index-js-bae708a16af6958b7994.js"
  },
  {
    "url": "1-54b0b402b3de46e25c9d.js"
  },
  {
    "url": "0-1404f2bd9de68b964180.js"
  },
  {
    "url": "static/d/140/path---index-6a9-yNnsKXFa6cJivDiU2RPMw8ROnc.json",
    "revision": "63d9dbdf56a1fea69463ce37ded7f8e4"
  },
  {
    "url": "component---src-pages-404-js-700d90f294d71ddf1e07.js"
  },
  {
    "url": "4-df5f61a0adf41bb3bdb7.js"
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