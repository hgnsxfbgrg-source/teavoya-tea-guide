// Teavoya Tea Guide Service Worker
// Handles background notifications

const CACHE_NAME = 'teavoya-tea-guide-v1';

// Install event
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            // Focus existing window if available
            for (const client of clientList) {
                if (client.url.includes('teavoya') && 'focus' in client) {
                    return client.focus();
                }
            }
            // Open new window if no existing window
            if (clients.openWindow) {
                return clients.openWindow('/');
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
