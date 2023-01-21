const cacheName = "appV1";
const files = [
    "/pcd-calc/index.html",
    "/pcd-calc/style.css",
    "/pcd-calc/swRegister.js",
];

this.addEventListener("install", async (e) => {
    await addCacheFiles(cacheName, files);
});

this.addEventListener("fetch", (e) => {
    e.respondWith(caches.match(e.request).then((result) => result));
});

/*** *** *** ***/
async function addCacheFiles(cache_name, file_names) {
    try {
        const cache = await caches.open(cache_name);
        cache.addAll([...file_names]);
    } catch (error) {
        console.log(error)
    }
}
