/* Bali Trip Kit — offline cache.
   Cache-first for everything the page needs, so it works with no signal. */
var CACHE = 'bali-trip-kit-v1';
var CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
var EXTRA_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (c) { return c.addAll(CORE); })
      .then(function () { return self.skipWaiting(); })
      .catch(function () {})
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        return k === CACHE ? null : caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      return fetch(e.request).then(function (res) {
        try {
          var u = new URL(e.request.url);
          var keep = (u.origin === self.location.origin) || EXTRA_HOSTS.indexOf(u.host) > -1;
          if (keep && res && (res.status === 200 || res.type === 'opaque')) {
            var copy = res.clone();
            caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
          }
        } catch (err) {}
        return res;
      }).catch(function () {
        /* offline and not cached: fall back to the page itself for navigations */
        if (e.request.mode === 'navigate') return caches.match('./index.html');
        return new Response('', { status: 504, statusText: 'Offline' });
      });
    })
  );
});
