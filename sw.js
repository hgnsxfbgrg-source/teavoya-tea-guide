// Teavoya Tea Guide Service Worker
// 離線快取 + 背景通知

const CACHE_NAME = 'teavoya-tea-guide-v6';

// 網頁本體：安裝時先存起來
const APP_SHELL = [
    './',
    'index.html',
    'app.js',
    'style.css',
    'manifest.json'
];

// 網路太慢時，最多等幾毫秒就改用快取（廚房收訊差也能秒開）
const NETWORK_TIMEOUT = 3000;

// Install event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
    );
    self.skipWaiting();
});

// Activate event: 清掉舊版快取
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
            .then(() => clients.claim())
    );
});

// 網頁本體：先抓網路（拿到最新版），太慢或離線就用快取
async function networkFirst(request) {
    const cache = await caches.open(CACHE_NAME);
    const network = fetch(request).then(response => {
        if (response.ok) cache.put(request, response.clone());
        return response;
    });
    network.catch(() => {}); // 逾時後才失敗也不報錯
    const timeout = new Promise(resolve => setTimeout(resolve, NETWORK_TIMEOUT));

    try {
        const response = await Promise.race([network, timeout]);
        if (response) return response;
    } catch (e) {
        // 離線，往下用快取
    }
    const cached = await cache.match(request, { ignoreSearch: true });
    return cached || network;
}

// 產品圖、字型：先用快取，沒有才抓網路並存起來
async function cacheFirst(request) {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request.url);
    if (cached) return cached;

    // <img> 預設是 no-cors，改用 cors 抓才能存成正常回應
    const response = await fetch(request.url, { mode: 'cors' });
    if (response.ok) cache.put(request.url, response.clone());
    return response;
}

self.addEventListener('fetch', (event) => {
    const { request } = event;
    if (request.method !== 'GET') return;

    const url = new URL(request.url);
    const isStatic = url.hostname === 'cdn.shopify.com'
        || url.hostname === 'fonts.gstatic.com'
        || url.hostname === 'fonts.googleapis.com'
        || (url.origin === self.location.origin && url.pathname.includes('/images/'));

    if (isStatic) {
        event.respondWith(cacheFirst(request));
    } else if (url.origin === self.location.origin) {
        event.respondWith(networkFirst(request));
    }
});

// 頁面載入後傳來全部產品圖網址，先存好，離線時沒點過的茶也看得到圖
self.addEventListener('message', (event) => {
    if (event.data?.type !== 'precache') return;
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => Promise.all(
            event.data.urls.map(async (url) => {
                if (await cache.match(url)) return;
                try {
                    const response = await fetch(url, { mode: 'cors' });
                    if (response.ok) await cache.put(url, response);
                } catch (e) {
                    // 單張失敗不影響其他
                }
            })
        ))
    );
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            // Focus existing window if available
            for (const client of clientList) {
                if (client.url.startsWith(self.registration.scope) && 'focus' in client) {
                    return client.focus();
                }
            }
            // Open new window if no existing window
            if (clients.openWindow) {
                return clients.openWindow(self.registration.scope);
            }
        })
    );
});

// Handle push notifications (for future PWA support)
self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : '茶泡好了！',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🍵</text></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🫖</text></svg>',
        vibrate: [200, 100, 200],
        tag: 'teavoya-timer',
        requireInteraction: true
    };

    event.waitUntil(
        self.registration.showNotification('Teavoya 泡茶指南', options)
    );
});
