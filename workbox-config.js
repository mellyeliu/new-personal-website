module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{js,css,html,png}"],
  swDest: "build/service-worker.js",
  clientsClaim: true,
  skipWaiting: true,
};
