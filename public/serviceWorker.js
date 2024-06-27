const CACHE_NAME = "my-site-cache-v1";
const HOUR = 60 * 60 * 1000; // Milliseconds in an hour
let lastCacheClearTime = Date.now();

self.addEventListener("install", (event) => {
  // Perform install steps
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    // Clear cache on activation
    clearCaches().then(() => {
      console.log("Old caches cleared.");
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if available, otherwise fetch from network
      return response || fetch(event.request);
    })
  );

  // Check if it's time to clear the cache
  if (Date.now() - lastCacheClearTime > HOUR) {
    event.waitUntil(
      clearCaches().then(() => {
        lastCacheClearTime = Date.now();
        console.log("Caches cleared after an hour.");
      })
    );
  }
});

function clearCaches() {
  return caches.keys().then((cacheNames) => {
    return Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheName === CACHE_NAME) {
          return caches.delete(cacheName);
        }
      })
    );
  });
}
