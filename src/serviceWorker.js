// This is the default service worker from Create React App
const CACHE_NAME = "my-app-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/static/js/bundle.js",
  // add other assets you want to cache
];

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Unregister all service workers
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => {
        for (let registration of registrations) {
          registration.unregister();
        }
      })
      .then(() => {
        // Clear all caches
        caches.keys().then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              return caches.delete(cacheName);
            })
          );
        });
      });
  });
}
