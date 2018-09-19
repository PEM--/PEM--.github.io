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
    "url": "webpack-runtime-57c16a44eaf28ead0f5d.js"
  },
  {
    "url": "app.9a7129ccbef1ffa1fac5.css"
  },
  {
    "url": "app-acdc0a68a84e4355c5b2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-e4cff84b78bcc5ba3d74.js"
  },
  {
    "url": "index.html",
    "revision": "72f291e1efbd72e559a73d611a2b3bcc"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f7bc5a4487fdefa42c834b1691f3992c"
  },
  {
    "url": "component---src-pages-index-js-eca7616cf9cfe5dc6e0f.js"
  },
  {
    "url": "0-960802c93f1b0a402560.js"
  },
  {
    "url": "static/d/113/path---index-6a9-tgiYMTEnaIUzAf25Zz9JfdNTgo.json",
    "revision": "775eb96c827e34f7c78ca2965bb323c5"
  },
  {
    "url": "component---src-pages-404-js-99a318cf911294943f2c.js"
  },
  {
    "url": "1-d53351ed0d102937765d.js"
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