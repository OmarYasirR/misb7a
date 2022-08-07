let staticCachName = 'staticSite'
let assets = [
  '/',
  '/index.html',
  '/main.js',
  '/misb7a.css',
  'misb7a/images/icons/icon-512x512.png'
]
// install service worker
self.addEventListener('install', evt => {
  evt.waitUntil(
    (async () =>  {
      try {
        const cache = await caches.open(staticCachName)
        await cache.addAll(assets)
      } catch (error) {
        console.log("erorr")
      }
    })()
  );
  self.skipWaiting();
})


// activate service worker
self.addEventListener('activate', evt => {
  // console.log("service worker activate")
})


// install service worker
self.addEventListener('fetch', evt => {
  evt.respondWith(
    (async () => {
      const cache = await caches.match(evt.request)
      return cache || fetch(evt.request)
    })()
  )
})
