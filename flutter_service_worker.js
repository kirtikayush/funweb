'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "aee529b5844e0a558e1494a4cfeeb0b5",
"version.json": "4b1bb4872956afb0d5de61908267f09c",
"index.html": "df237d90302c45a1fcaccfe9c37847cb",
"/": "df237d90302c45a1fcaccfe9c37847cb",
"main.dart.js": "5f9bfdafb5a2cdabad24873b92b12a9d",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c9079a7a468782774540e03b675937d2",
"assets/AssetManifest.json": "f28b3fdccb1cfd0385d2bd18727cf448",
"assets/NOTICES": "ffc9a4e5cae8b923cc90e6a4247e3b7c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "9e269150b1aad0f474a24222d731d7c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2a763078af91a9ad0b16ff9d01014fe3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "20e44300b4ca6c747d9b53c8574b32d4",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/paper/image_15.png": "dadd69041839995137e7cbbed8191edf",
"assets/assets/paper/image_29.png": "6a665fcec7fed4111d80a6edf768f917",
"assets/assets/paper/logoimp.svg": "f363d28234043f3833cced1ff41b6e01",
"assets/assets/paper/image_28.png": "f61eddfc5e80a32275d9df41d07c5ef1",
"assets/assets/paper/image_14.png": "9204405baf4a60afe247bdb7f0c71a81",
"assets/assets/paper/image_16.png": "6774bbc1917564af370105f55546dee9",
"assets/assets/paper/image_17.png": "aff2637adba1e0b9db646054db5c12f7",
"assets/assets/paper/image_13.png": "001109521bbcc2bde9558de3373e874c",
"assets/assets/paper/image_12.png": "47e1b7d3ca9b27e543ab82115d89a3f0",
"assets/assets/paper/image_38.png": "a87df04ebdcadf7f2d28a0cd507ba12e",
"assets/assets/paper/image_10.png": "a6a4921c85f106f0bdb4450fc22be943",
"assets/assets/paper/image_11.png": "e59d1d4b7bab38e81c726e90c4ae9b4e",
"assets/assets/paper/image_39.png": "5813f2e98ff6225bd858b1c3a26d366f",
"assets/assets/paper/image_8.png": "04a9bff71980e16184b32187800df48d",
"assets/assets/paper/image_9.png": "70f634d8a0647cb74e91521d55c7d8e6",
"assets/assets/paper/image_43.png": "4c65015dcb90d348ce2ecfdae191c17b",
"assets/assets/paper/image_2.png": "c96540c681ad1d4770b355f156a7cb19",
"assets/assets/paper/image_3.png": "a943e692ca8a584f206a87e0a8c960ce",
"assets/assets/paper/image_42.png": "467b258751474d2eb27a3a436b7ce9a5",
"assets/assets/paper/image_1.png": "fbc8da74a7f65a29a15e161e07b436bd",
"assets/assets/paper/image_40.png": "72b5ec003b7798dba3c2b4bb7a440f3d",
"assets/assets/paper/image_41.png": "2ccaf3d2e5d8616a200e67bf4e24cd02",
"assets/assets/paper/image_4.png": "3a70d69d0d88b9cf9892901a615e6f11",
"assets/assets/paper/image_5.png": "4a6e6dce5e710b18133a3e36980d41ba",
"assets/assets/paper/image_7.png": "3bc7ab03b4298b22939a932e5ee7ffc6",
"assets/assets/paper/image_6.png": "e5b171805b5319704a8cdb741ce91fd3",
"assets/assets/paper/image_20.png": "32c4fb15e72d01f89c0a3b542eb0e795",
"assets/assets/paper/image_34.png": "14f4db79c46354436015cca25b5d323b",
"assets/assets/paper/image_35.png": "a4d85c87f678b1845fb0c877d587dd2f",
"assets/assets/paper/image_21.png": "9d79b8c28c9f7e79e901b1dc23a966ab",
"assets/assets/paper/image_37.png": "d4b4e26954a9f2d0e872128dd6393509",
"assets/assets/paper/image_23.png": "53a6f473f5549b856a14f92fa50761e7",
"assets/assets/paper/image_22.png": "9779384542f7d5deb23078ac76ec86cc",
"assets/assets/paper/image_36.png": "77ea4b8e166e3ce0afa7934e87bf3c6d",
"assets/assets/paper/image_32.png": "5b71b921b1170cb08114274cd04754eb",
"assets/assets/paper/image_26.png": "af65269a621f025a6778828a19d2b5f2",
"assets/assets/paper/image_27.png": "92a0a73075bd453c1063afef7b22bd42",
"assets/assets/paper/image_33.png": "bd3f6989d70d7956cf48a8c8760dc365",
"assets/assets/paper/image_19.png": "e0e08f1935351997387ef57f5d9e34f5",
"assets/assets/paper/image_25.png": "835c1f88ffb9fe93ee666b5a57fe9270",
"assets/assets/paper/image_31.png": "643b02b707cbcc6bb0a082aee2786084",
"assets/assets/paper/image_30.png": "8dff4bcc6bed2cde7282eef6485cd011",
"assets/assets/paper/image_24.png": "f1eaaa450c6f0b9e8b22dbdf2d121a74",
"assets/assets/paper/image_18.png": "156a80598a4954f9afd065291e78e20f",
"assets/assets/outline/PLAYGROUND-7.svg": "c866075d6ee404cd32fafdddb19d96d8",
"assets/assets/outline/PLAYGROUND-6.svg": "4007f5bef5572767cf1b5102b601a31c",
"assets/assets/outline/PLAYGROUND-4.svg": "39641cc2f8f0bc42ac2dabbb8cd982a7",
"assets/assets/outline/Playground-5.svg": "f66cf0e6b2a6611d9cfab8312049be31",
"assets/assets/outline/PLAYGROUND-2.svg": "48a54f6072945f3ccae7db65c6dd7c04",
"assets/assets/outline/Playground-3.svg": "4d16c6aa5f13f0bc170bd6b05d88e929",
"assets/assets/outline/PLAYGROUND-8.svg": "4399cd361a959d996e012890f4dd42df",
"assets/assets/outline/PLAYGROUND-9.svg": "985723bf2c0df4eca410d3290b5999bf",
"assets/assets/outline/Playground.svg": "b39f44a01a3111403d72729a79cb7689",
"assets/assets/outline/PLAYGROUND-12.svg": "5bb76e375eb97560364bc4826fc56101",
"assets/assets/outline/Playground-13.svg": "dc8e92d4aeeed29bed1a74262d05a23c",
"assets/assets/outline/Playground-11.svg": "0d8b20f03c74f7259eaf5bc7b3ea31ff",
"assets/assets/outline/Playground-10.svg": "8e660db23057e4460e45c0118c6ce385",
"assets/assets/nonoutline/PLAYGROUND-7.svg": "d6c66c0b2c1da73d5c115470abfea303",
"assets/assets/nonoutline/Playground-6.svg": "304162ae572dbed325381e6e02e11b41",
"assets/assets/nonoutline/Playground-4.svg": "290eb33b9d41aba6e13cb0ba03288e4f",
"assets/assets/nonoutline/PLAYGROUND-5.svg": "cf94f761e1b8ea7eca7f685a04ff0103",
"assets/assets/nonoutline/PLAYGROUND-3.svg": "f363d28234043f3833cced1ff41b6e01",
"assets/assets/nonoutline/PLAYGROUND-8.svg": "78f34b8aff32ce48061023735540bcc4",
"assets/assets/nonoutline/PLAYGROUND-9.svg": "f321078cf7d870ffe5912e313d2a8c3d",
"assets/assets/nonoutline/Playground-14.svg": "a479a6bd77fc1e2711744a3a39974a55",
"assets/assets/nonoutline/Playground.svg": "67477a1b6b54aa9b60354520bb10ac3f",
"assets/assets/nonoutline/Playground-12.svg": "4509950dd3defefd688cc26e3f162d07",
"assets/assets/nonoutline/PLAYGROUND-13.svg": "000109a6ee339077373319f38f78223d",
"assets/assets/nonoutline/Playground-11.svg": "1f73ad650607b75bacf5519b0d2ea738",
"assets/assets/nonoutline/PLAYGROUND-10.svg": "b2dc9101a3c6272d7da97927828ae316",
"assets/assets/Playground.svg": "5db7873e7ff4003a22c6a70c0c267777",
"assets/assets/logo.svg": "1c834136a30359a681249f968af492e1",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
