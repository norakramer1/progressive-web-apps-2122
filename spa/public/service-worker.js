// const staticCacheName = 'site-static';
const CORE_CACHE_VERSION = 'v6'
const CORE_ASSETS = [
  '/offline',
  '/styles/style.css',
]


// register service worker
self.addEventListener('install', evt => {
// console.log('installing service worker');
evt.waitUntil(caches.open(CORE_CACHE_VERSION).then(function(cache) {
    console.log('caching shell assets')
return cache.addAll(CORE_ASSETS).then(() => self.skipWaiting());
}))

});

// activate service worker
self.addEventListener('activate', evt => {
    console.log('activating service worker');
    });


    // activate service worker
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
    });