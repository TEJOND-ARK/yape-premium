const CACHE_NAME = 'yape-cache-v1';
const urlsToCache = [
  './index.html',
  './recibo.html',
  './10_soles-removebg-preview.png',
  './20_soles-removebg-preview.png',
  './50_soles-removebg-preview.png',
  './100_soles-removebg-preview.png',
  './200_soles-removebg-preview.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});