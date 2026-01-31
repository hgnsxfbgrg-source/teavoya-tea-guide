// Teavoya 泡茶指南 App
// 嘉柏茶業專屬產品沖泡指南

const products = {
    24: [
        {
            id: 'honey-black-tea',
            name: '初韻蜜香紅茶',
            icon: '🍯',
            desc: '蜜香馥郁・甘甜滑順',
            brewTime: 300, // 5 分鐘
            buyUrl: 'https://www.teavoya.com.tw/honey-flavor-black-tea-bag',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '將水煮沸後稍微放涼', highlight: '90-95°C' },
                    { title: '放入茶包', detail: '將 24g 茶包放入茶壺或杯中' },
                    { title: '注入熱水', detail: '倒入適量熱水', highlight: '1500ml' },
                    { title: '悶泡', detail: '蓋上蓋子靜置等待', highlight: '5 分鐘', isTimerStep: true },
                    { title: '取出茶包', detail: '輕輕取出，避免擠壓' }
                ],
                tips: [
                    '小綠葉蟬吸食後的茶菁，帶有自然蜜香與果香',
                    '茶湯色澤鮮紅透亮，口感滑順不苦不澀',
                    '熱飲香氣濃郁，冷泡後蜜香更為醇和'
                ]
            }
        },
        {
            id: 'puerh-tea',
            name: '雲南輕熟普洱茶',
            icon: '🫖',
            desc: '醇厚陳香・養生茶飲',
            brewTime: 420, // 7 分鐘
            buyUrl: 'https://www.teavoya.com.tw/Yunnan-Puerh-Tea-Bag',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '使用剛煮沸的熱水', highlight: '100°C' },
                    { title: '放入茶包', detail: '將 24g 茶包放入茶壺' },
                    { title: '注入熱水', detail: '倒入適量熱水', highlight: '1500ml' },
                    { title: '悶泡', detail: '蓋上蓋子靜置', highlight: '7 分鐘', isTimerStep: true },
                    { title: '品茗', detail: '感受普洱獨特陳香' }
                ],
                tips: [
                    '嚴選雲南古樹熟普洱，茶湯色澤深邃',
                    '經人工發酵工序，溫潤茶感',
                    '可多次沖泡，茶香隨時間更圓潤'
                ]
            }
        },
        {
            id: 'ruby-black-tea',
            name: '經典紅玉紅茶',
            icon: '💎',
            desc: '肉桂香氣・薄荷尾韻',
            brewTime: 300, // 5 分鐘
            buyUrl: 'https://www.teavoya.com.tw/ruby-black-teabag',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '使用剛煮沸的熱水', highlight: '95-100°C' },
                    { title: '放入茶包', detail: '將 24g 茶包放入茶壺' },
                    { title: '注入熱水', detail: '倒入適量熱水', highlight: '1500ml' },
                    { title: '悶泡', detail: '蓋上蓋子靜置', highlight: '5 分鐘', isTimerStep: true },
                    { title: '享用', detail: '感受紅玉獨特風味' }
                ],
                tips: [
                    '台灣在地優質紅玉茶葉',
                    '淡雅肉桂香氣，柔和薄荷尾韻',
                    '茶感順口，冷熱皆宜'
                ]
            }
        },
        {
            id: 'peach-oolong',
            name: '白桃烏龍風味茶',
            icon: '🍑',
            desc: '甜美清新・香甜解膩',
            brewTime: 480, // 8 分鐘
            buyUrl: 'https://www.teavoya.com.tw/Teavoya-Peach-Oolong-Tea-Bag-24g',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '水溫不宜過高', highlight: '85-90°C' },
                    { title: '放入茶包', detail: '將 24g 茶包放入容器' },
                    { title: '注入熱水', detail: '適合大容量鍋煮', highlight: '3000ml' },
                    { title: '悶泡', detail: '蓋上蓋子靜置', highlight: '8 分鐘', isTimerStep: true },
                    { title: '完成', detail: '可熱飲或冰鎮享用' }
                ],
                tips: [
                    '台灣烏龍茶與白桃香氣完美結合',
                    '甜美清新，香甜解膩，完美消暑',
                    '冷泡、熱水鍋煮皆宜'
                ]
            }
        },
        {
            id: 'oolong-tea',
            name: '清香烏龍茶',
            icon: '🌿',
            desc: '清香馥郁・回甘悠長',
            brewTime: 360, // 6 分鐘
            buyUrl: 'https://www.teavoya.com.tw/Teavoya-Oolong-Tea-Bag',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '水溫不宜過高', highlight: '85-90°C' },
                    { title: '放入茶包', detail: '將 24g 茶包放入茶壺' },
                    { title: '注入熱水', detail: '倒入適量熱水', highlight: '1500ml' },
                    { title: '悶泡', detail: '蓋上蓋子靜置', highlight: '6 分鐘', isTimerStep: true },
                    { title: '品茗', detail: '感受多層次茶韻' }
                ],
                tips: [
                    '台灣高海拔茶區，日夜溫差大',
                    '清香馥郁，帶有淡雅香氣',
                    '層次豐富，入口柔順'
                ]
            }
        },
        {
            id: 'jasmine-green-tea',
            name: '特級茉香綠茶',
            icon: '🌸',
            desc: '茉莉花香・清新淡雅',
            brewTime: 600, // 10 分鐘
            buyUrl: 'https://www.teavoya.com.tw/Teavoya-Premium-Jasmine-Green-Tea-Bag',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '綠茶適合較低水溫', highlight: '80°C' },
                    { title: '放入茶包', detail: '將 24g 茶包放入容器' },
                    { title: '注入熱水', detail: '按茶水比例 1:60', highlight: '1500ml' },
                    { title: '悶泡', detail: '上蓋悶泡', highlight: '10 分鐘', isTimerStep: true },
                    { title: '調味', detail: '待冷卻後可加入冰糖調配' }
                ],
                tips: [
                    '改良版茶包，茉莉花增量 25%',
                    '優質綠茶葉與茉莉花瓣，真材實料',
                    '推薦「冷泡」，茶味更清新'
                ]
            }
        },
        {
            id: 'ceylon-tea',
            name: '錫蘭紅茶 FOP',
            icon: '🍵',
            desc: '花香淡雅・斯里蘭卡精選',
            brewTime: 300, // 5 分鐘
            buyUrl: 'https://www.teavoya.com.tw/Ceylon-Black-Tea-FOP',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '使用剛煮沸的熱水', highlight: '100°C' },
                    { title: '放入茶包', detail: '將 24g 茶包放入茶壺' },
                    { title: '注入熱水', detail: '倒入適量熱水', highlight: '1500ml' },
                    { title: '悶泡', detail: '蓋上蓋子靜置', highlight: '5 分鐘', isTimerStep: true },
                    { title: '享用', detail: '可純飲或加檸檬' }
                ],
                tips: [
                    'FOP (Flowery Orange Pekoe) 含有嫩芽',
                    '散發淡雅花香，口感順滑',
                    '適合純飲、加奶或製作冰紅茶'
                ]
            }
        },
        {
            id: 'osmanthus-oolong',
            name: '桂花烏龍茶',
            icon: '🌼',
            desc: '桂花清香・烏龍茶韻',
            brewTime: 360, // 6 分鐘
            buyUrl: 'https://www.teavoya.com.tw/Osmanthus-oolong-50g-filter-free-tea-bag',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '水溫不宜過高', highlight: '85-90°C' },
                    { title: '放入茶包', detail: '將 24g 茶包放入茶壺' },
                    { title: '注入熱水', detail: '倒入適量熱水', highlight: '1500ml' },
                    { title: '悶泡', detail: '蓋上蓋子靜置', highlight: '6 分鐘', isTimerStep: true },
                    { title: '品茗', detail: '感受桂花烏龍香氣' }
                ],
                tips: [
                    '高品質台灣烏龍茶葉與新鮮桂花',
                    '冷熱皆宜，四季皆可享用',
                    '可用於泡茶、煮茶飯、烤肉增添風味'
                ]
            }
        },
        {
            id: 'earl-grey',
            name: '伯爵紅茶',
            icon: '🫖',
            desc: '佛手柑香・經典複合茶香',
            brewTime: 480, // 8 分鐘
            buyUrl: 'https://www.teavoya.com.tw/earl-grey-teabag',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '使用剛煮沸的熱水', highlight: '95-100°C' },
                    { title: '放入茶包', detail: '將 24g 茶包放入茶壺' },
                    { title: '注入熱水', detail: '倒入適量熱水', highlight: '1500ml' },
                    { title: '悶泡', detail: '蓋上蓋子靜置', highlight: '8 分鐘', isTimerStep: true },
                    { title: '享用', detail: '可純飲或加牛奶' }
                ],
                tips: [
                    '經典佛手柑香氣，獨特複合茶香',
                    '採用斯里蘭卡大葉種錫蘭紅茶',
                    '冷泡、純飲或搭配牛奶皆可'
                ]
            }
        }
    ],
    50: [
        {
            id: 'hk-milk-tea-50',
            name: '港式奶茶專用紅茶',
            icon: '🥛',
            desc: '濃烈厚茶基・奶茶首選',
            brewTime: 2400, // 40 分鐘
            buyUrl: 'https://www.teavoya.com.tw/hong-kong-milk-tea-black-tea-bags-50g-50packs',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '將水煮沸', highlight: '100°C' },
                    { title: '放入茶包', detail: '將 50g 茶包放入大茶壺' },
                    { title: '注入熱水', detail: '一包可煮 10 杯奶茶', highlight: '700ml' },
                    { title: '鍋煮悶泡', detail: '蓋上蓋子靜置', highlight: '40 分鐘', isTimerStep: true },
                    { title: '取出茶包', detail: '輕輕取出，避免擠壓' },
                    { title: '加入奶類', detail: '加入淡奶或煉奶', highlight: '100-150ml' }
                ],
                tips: [
                    '被稱為「最適合做奶茶的紅茶」',
                    '斯里蘭卡＋爪哇優質紅茶調配',
                    'FOP、OP、BOP 專業分級，層次豐富',
                    '每杯茶底成本只要 $2.5'
                ]
            }
        },
        {
            id: 'traditional-black-tea-50',
            name: '古早味紅茶',
            icon: '🍵',
            desc: '純正古早味・無糖無添加',
            brewTime: 900, // 15 分鐘
            buyUrl: 'https://www.teavoya.com.tw/black-tea-bags-traditional-50g-50packs',
            brewing: {
                steps: [
                    { title: '煮水', detail: '將水煮沸後熄火', highlight: '4000ml' },
                    { title: '放入茶包', detail: '水煮沸後熄火，放入 50g 茶包' },
                    { title: '悶泡', detail: '蓋上鍋蓋悶泡', highlight: '15 分鐘', isTimerStep: true },
                    { title: '取出茶包', detail: '時間到後撈起茶包' },
                    { title: '調味', detail: '加入二砂糖攪拌（依喜好）' }
                ],
                tips: [
                    '無糖、無添加香草粉，純正紅茶味',
                    '印度大葉種紅茶 + 焙火決明子',
                    '茶湯濃郁不苦澀，適合冰鎮',
                    '一包可煮 4000cc 茶湯'
                ]
            }
        },
        {
            id: 'barley-black-tea-50',
            name: '老麥紅茶',
            icon: '🌾',
            desc: '麥香濃郁・超高CP值',
            brewTime: 900, // 15 分鐘
            buyUrl: 'https://www.teavoya.com.tw/barley-tea-bag',
            brewing: {
                steps: [
                    { title: '煮水', detail: '將水煮沸後熄火', highlight: '4000ml' },
                    { title: '放入茶包', detail: '水煮沸後熄火，放入 50g 茶包' },
                    { title: '悶泡', detail: '蓋上鍋蓋悶泡', highlight: '15 分鐘', isTimerStep: true },
                    { title: '取出茶包', detail: '撈起茶包' },
                    { title: '調味', detail: '加入適量糖調配即可飲用' }
                ],
                tips: [
                    '經焙火處理，麥香濃郁有層次',
                    '印度大葉種紅茶，醇厚順口',
                    '無糖、不苦澀、自然回甘',
                    '每杯茶底成本只要 $1.05'
                ]
            }
        }
    ]
};

// DOM Elements
const sizeButtons = document.querySelectorAll('.size-btn');
const productGrid = document.getElementById('productGrid');
const modal = document.getElementById('brewingModal');
const closeModalBtn = document.getElementById('closeModal');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const brewingSteps = document.getElementById('brewingSteps');
const brewingTips = document.getElementById('brewingTips');
const timerDisplay = document.getElementById('timerDisplay');
const timerStart = document.getElementById('timerStart');
const timerPause = document.getElementById('timerPause');
const timerReset = document.getElementById('timerReset');
const timerHint = document.getElementById('timerHint');
const notificationBanner = document.getElementById('notificationBanner');
const enableNotificationBtn = document.getElementById('enableNotification');

let currentSize = 24;
let currentProduct = null;
let timerInterval = null;
let timerSeconds = 0;
let isTimerRunning = false;
let originalTimerSeconds = 0;

// Audio for timer completion
let audioContext = null;

// Initialize
function init() {
    renderProducts();
    setupEventListeners();
    checkNotificationPermission();
    
    // Register service worker for background notifications
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => {
            console.log('Service worker registration failed:', err);
        });
    }
}

// Check and show notification permission banner
function checkNotificationPermission() {
    if ('Notification' in window) {
        if (Notification.permission === 'default') {
            notificationBanner.classList.remove('hidden');
        } else if (Notification.permission === 'denied') {
            notificationBanner.innerHTML = '<span>⚠️ 通知已被封鎖，請在瀏覽器設定中開啟</span>';
            notificationBanner.classList.remove('hidden');
        }
    }
}

// Request notification permission
async function requestNotificationPermission() {
    if ('Notification' in window) {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            notificationBanner.classList.add('hidden');
            showTestNotification();
        } else if (permission === 'denied') {
            notificationBanner.innerHTML = '<span>⚠️ 通知已被封鎖，請在瀏覽器設定中開啟</span>';
        }
    }
}

// Show test notification
function showTestNotification() {
    new Notification('Teavoya 泡茶指南', {
        body: '通知已開啟！泡好茶時會提醒你 🍵',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🍵</text></svg>',
        tag: 'teavoya-test',
        requireInteraction: false
    });
}

// Send notification when timer is done
function sendTimerNotification(productName) {
    if ('Notification' in window && Notification.permission === 'granted') {
        const notification = new Notification('茶泡好了！🍵', {
            body: `${productName} 已經泡好，快來享用吧！`,
            icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🫖</text></svg>',
            tag: 'teavoya-timer',
            requireInteraction: true,
            vibrate: [200, 100, 200, 100, 200]
        });
        
        notification.onclick = () => {
            window.focus();
            notification.close();
        };
    }
}

// Play completion sound
function playCompletionSound() {
    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        // Play a pleasant chime
        const playTone = (freq, startTime, duration) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + startTime + duration);
            
            oscillator.start(audioContext.currentTime + startTime);
            oscillator.stop(audioContext.currentTime + startTime + duration);
        };
        
        // Play a pleasant ascending chime
        playTone(523.25, 0, 0.3);      // C5
        playTone(659.25, 0.15, 0.3);   // E5
        playTone(783.99, 0.3, 0.5);    // G5
        
    } catch (e) {
        console.log('Audio not supported');
    }
}

// Render products for current size
function renderProducts() {
    const productList = products[currentSize];
    productGrid.innerHTML = '';
    
    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.id = product.id;
        card.innerHTML = `
            <span class="product-icon">${product.icon}</span>
            <div class="product-name">${product.name}</div>
            <div class="product-desc">${product.desc}</div>
        `;
        card.addEventListener('click', () => showBrewing(product));
        productGrid.appendChild(card);
    });
}

// Format seconds to MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Update timer display
function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(timerSeconds);
    
    // Visual feedback when time is running low
    if (isTimerRunning && timerSeconds <= 10 && timerSeconds > 0) {
        timerDisplay.classList.add('warning');
        timerDisplay.classList.remove('done');
    } else if (timerSeconds === 0 && originalTimerSeconds > 0) {
        timerDisplay.classList.add('done');
        timerDisplay.classList.remove('warning');
    } else {
        timerDisplay.classList.remove('warning', 'done');
    }
}

// Start timer
function startTimer() {
    if (timerSeconds <= 0) {
        timerSeconds = originalTimerSeconds;
        updateTimerDisplay();
    }
    
    if (timerSeconds <= 0) return;
    
    isTimerRunning = true;
    timerStart.classList.add('running');
    timerStart.querySelector('span:last-child').textContent = '計時中...';
    timerStart.querySelector('.btn-icon').textContent = '⏱';
    timerPause.classList.remove('hidden');
    
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        
        if (timerSeconds <= 0) {
            stopTimer();
            onTimerComplete();
        }
    }, 1000);
}

// Pause timer
function pauseTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerStart.classList.remove('running');
    timerStart.querySelector('span:last-child').textContent = '繼續';
    timerStart.querySelector('.btn-icon').textContent = '▶';
}

// Stop timer
function stopTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerStart.classList.remove('running');
    timerStart.querySelector('span:last-child').textContent = '開始計時';
    timerStart.querySelector('.btn-icon').textContent = '▶';
    timerPause.classList.add('hidden');
}

// Reset timer
function resetTimer() {
    stopTimer();
    timerSeconds = originalTimerSeconds;
    updateTimerDisplay();
}

// Timer complete handler
function onTimerComplete() {
    playCompletionSound();
    sendTimerNotification(currentProduct?.name || '茶');
    
    // Visual celebration
    timerDisplay.classList.add('done');
    timerHint.textContent = '🎉 茶泡好了！';
    
    // Vibrate if supported
    if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200, 100, 200]);
    }
}

// Show brewing guide modal
function showBrewing(product) {
    currentProduct = product;
    modalIcon.textContent = product.icon;
    modalTitle.textContent = product.name;
    modalSubtitle.textContent = `${currentSize}g 包裝`;
    
    // Update buy button
    const buyBtn = document.getElementById('buyBtn');
    if (buyBtn && product.buyUrl) {
        buyBtn.href = product.buyUrl;
        buyBtn.style.display = 'inline-flex';
    } else if (buyBtn) {
        buyBtn.style.display = 'none';
    }
    
    // Render steps
    brewingSteps.innerHTML = product.brewing.steps.map((step, index) => `
        <div class="step ${step.isTimerStep ? 'timer-step' : ''}">
            <div class="step-number">${index + 1}</div>
            <div class="step-content">
                <div class="step-title">${step.title}</div>
                <div class="step-detail">${step.detail}</div>
                ${step.highlight ? `<span class="step-highlight">${step.highlight}</span>` : ''}
            </div>
        </div>
    `).join('');
    
    // Render tips
    brewingTips.innerHTML = `
        <div class="tips-title">💡 小技巧</div>
        ${product.brewing.tips.map(tip => `<div class="tip">${tip}</div>`).join('')}
    `;
    
    // Setup timer
    originalTimerSeconds = product.brewTime || 300;
    timerSeconds = originalTimerSeconds;
    updateTimerDisplay();
    timerHint.textContent = `建議浸泡 ${formatTime(originalTimerSeconds)}`;
    stopTimer();
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeBrewing() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    stopTimer();
}

// Setup event listeners
function setupEventListeners() {
    // Size selector
    sizeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSize = parseInt(btn.dataset.size);
            renderProducts();
        });
    });
    
    // Modal close
    closeModalBtn.addEventListener('click', closeBrewing);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeBrewing();
    });
    
    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeBrewing();
    });
    
    // Timer controls
    timerStart.addEventListener('click', () => {
        if (isTimerRunning) {
            pauseTimer();
        } else {
            startTimer();
        }
    });
    
    timerPause.addEventListener('click', pauseTimer);
    timerReset.addEventListener('click', resetTimer);
    
    // Notification permission
    if (enableNotificationBtn) {
        enableNotificationBtn.addEventListener('click', requestNotificationPermission);
    }
    
    // Keep screen awake during timing (if supported)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && isTimerRunning) {
            // Timer continues in background
            console.log('Timer running in background');
        }
    });
}

// Start app
init();
