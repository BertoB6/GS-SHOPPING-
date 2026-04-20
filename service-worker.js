const cacheName = "gs-shopping-v1";

const filesToCache = [
"/",
"/index.html",
"/loja.html",
"/conta1.png",
"/tabela.jpg"
];

self.addEventListener("install", e => {
e.waitUntil(
caches.open(cacheName)
.then(cache => cache.addAll(filesToCache))
);
});

self.addEventListener("fetch", e => {
e.respondWith(
caches.match(e.request)
.then(response => response || fetch(e.request))
);
});