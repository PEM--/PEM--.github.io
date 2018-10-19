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
    "url": "webpack-runtime-df61bed9c0610cbe692f.js"
  },
  {
    "url": "app.4ea50a4004b53a819e6d.css"
  },
  {
    "url": "app-f29064d0d57873a6f3eb.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-4d2615dc45316ed13b04.js"
  },
  {
    "url": "index.html",
    "revision": "e55da89124904aa53ff018d5bd24eb86"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2e5ccd3c5199a44073616f4dc0ce22b0"
  },
  {
    "url": "2-0753c523e231791c2e25.js"
  },
  {
    "url": "component---src-pages-index-js-e054ac079e194544e2e7.js"
  },
  {
    "url": "1-182d7283124d825c5014.js"
  },
  {
    "url": "0-1afa3737e4c833e8232d.js"
  },
  {
    "url": "static/d/140/path---index-6a9-yNnsKXFa6cJivDiU2RPMw8ROnc.json",
    "revision": "63d9dbdf56a1fea69463ce37ded7f8e4"
  },
  {
    "url": "component---src-pages-404-js-8fc5a030d51d7c4c6fe2.js"
  },
  {
    "url": "4-556e3d00a452e62e5a35.js"
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