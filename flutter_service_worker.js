'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3d19e46f129f6e35ea1ca7e30a94d5d1",
"assets/assets/icons/apple-logo.png": "cf11ebcc0a874e3ad3830431f7b0ab58",
"assets/assets/images/alexa.png": "7e76b91cc2dcc75faa9d9f3a6641a7d1",
"assets/assets/images/beats.png": "684cab29e525cda2afb7037f1f0bcacf",
"assets/assets/images/drone.png": "9ad2686f242f6a3e6b39563eb716d6cc",
"assets/assets/images/iphone.png": "da99c5719d402c6c03b1781a15be13cc",
"assets/assets/images/mac.png": "98e6b943220cf5297d23c1557d6565b5",
"assets/assets/images/ps5.png": "68b4bd933c17ca3ea3c5bf87e0ad7ed0",
"assets/assets/images/sellar.png": "1553b861ac29ad242807c63260d37a70",
"assets/assets/images/switch.png": "33159e8ec9803ce7903ed75445cdd4b1",
"assets/assets/images/switch_0.jpg": "a3bb6b0a36b8745b9094fffa6e16a82c",
"assets/assets/images/switch_1.jpg": "080fafea2f7cb34f173f656f7956d152",
"assets/assets/images/switch_2.jpg": "acfeca82a704a23686bfc04bb9e28984",
"assets/assets/images/switch_box.jpg": "437917cd2773879334aa0aa18f207c8f",
"assets/assets/images/switch_logo.png": "d47a01d7907525e11d63f2349d9c3429",
"assets/assets/images/watch.png": "723b7adebf1f57beec296367978dd40a",
"assets/assets/json/productItem.json": "c12e561627feccf8239c27a32b46cf5d",
"assets/assets/svg/angle-left-bold.svg": "37f22a68072f6aacff870b3f5c6c63eb",
"assets/assets/svg/angle-right-bold.svg": "3aa8a652c5ac534b198a72a5d9a909b3",
"assets/assets/svg/apple.svg": "6f26f7f2a641a7ce0b0b979bbd660d99",
"assets/assets/svg/badge-check-bold.svg": "5bbb5fdb1cf263e715ef5c701c4e1397",
"assets/assets/svg/battery-bolt-bold.svg": "3c7c68d4fee7bc45130d1ebfbc2238ce",
"assets/assets/svg/battery-bolt.svg": "4fef59d91601b80b6cd9d41e3bc008c3",
"assets/assets/svg/bell-bold.svg": "340d3d1e03d77564b8feaaaa36866588",
"assets/assets/svg/comments-bold.svg": "11239e74fbc0b82be45f924cc19bc1a8",
"assets/assets/svg/cross-small-bold.svg": "1d9bbf2c8ff7e5d26a37c06c686d5888",
"assets/assets/svg/fingerprint-bold.svg": "d7cc4bd1b628234bd3119e979cee4c7d",
"assets/assets/svg/icons8-instagram.svg": "4eec003ab2d015127fbe67166f4970b0",
"assets/assets/svg/icons8-whatsapp.svg": "ae14534c54f717c2b3dde29f8c481913",
"assets/assets/svg/lock-bold.svg": "d9f45a5bf9fa968d92d04247a9bfaec7",
"assets/assets/svg/mobile-notch.svg": "1f9ca0bc492b0a4b5fe05dedeb7f7840",
"assets/assets/svg/mode-portrait-bold.svg": "45065a8144390e660109f12c2078b48d",
"assets/assets/svg/rocket-lunch-bold.svg": "884a602ce7501bb84d3d92c11328b537",
"assets/assets/svg/rocket-lunch.svg": "b944ad7c071901e78957fe02940ca78f",
"assets/assets/svg/search-bold.svg": "fd8ca78e886ea36183af451317e6f8e8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "bb8748e93b8f97f1d19449f5db1ce3b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f6f6e8a8d842b37f2c590510a03e5b75",
"/": "f6f6e8a8d842b37f2c590510a03e5b75",
"main.dart.js": "12c22a9f49c34dc0cc6e6798443b396c",
"manifest.json": "57670569ca9fc14d82b9e76abf65bd87",
"version.json": "8b2eabba2d2de316267c0781e123214d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
