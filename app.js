// Teavoya 泡茶指南 App
// 嘉柏茶業專屬產品沖泡指南

const SHOP = 'https://teavoya.com.tw/products/';

// 泡茶指南專屬優惠碼（Shopify 折扣「泡茶指南專屬 9 折」）；設為 null 即關閉
const PROMO = { code: 'TEAGUIDE', text: '全單 9 折', limit: '每人限用一次' };

// 官網連結：帶優惠碼（結帳自動套用）並標記來源，Shopify 報表可看出從指南來的訂單
function shopLink(path) {
    const target = `${path}?utm_source=tea-guide&utm_medium=app`;
    return PROMO
        ? `https://teavoya.com.tw/discount/${PROMO.code}?redirect=${encodeURIComponent(target)}`
        : `https://teavoya.com.tw${target}`;
}
const CDN = 'https://cdn.shopify.com/s/files/1/0764/8388/7301/files/';

// Shopify CDN 圖片，指定寬度以減少流量
const img = (file) => `${CDN}${file}${file.includes('?') ? '&' : '?'}width=300`;

const categories = [
    { key: 'cup', number: '杯泡', label: '2–6g 小茶包' },
    { key: '24', number: '24g', label: '中茶包・壺泡' },
    { key: '50', number: '50g', label: '業務用・鍋煮' },
    { key: 'matcha', number: '抹茶', label: '京都抹茶粉' }
];

const products = {
    cup: [
        {
            id: 'charcoal-tieguanyin',
            name: '炭香鐵觀音烏龍',
            spec: '3g × 20 包・三角立體茶包',
            icon: img('Teavoya_f04b56a0-5a6f-4d37-82f5-19892c48f1bf.jpg?v=1771930956'),
            desc: '溫潤炭香・烘焙果韻',
            brewTime: 180,
            buyUrl: SHOP + 'charcoal-tieguanyin-oolong',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '焙火茶適合高溫沖泡', highlight: '95-100°C' },
                    { title: '放入茶包', detail: '將 1 包 3g 茶包放入馬克杯' },
                    { title: '注入熱水', detail: '倒入熱水', highlight: '300ml' },
                    { title: '浸泡', detail: '靜置等待', highlight: '3 分鐘', isTimerStep: true },
                    { title: '取出茶包', detail: '茶包可保留回沖' }
                ],
                tips: [
                    '低溫慢焙的傳統炭焙鐵觀音，茶湯琥珀深邃',
                    '回沖 3～4 次仍有餘韻，每次延長 1 分鐘',
                    '入口飽滿、尾韻甘甜，適合飯後解膩'
                ]
            }
        },
        {
            id: 'milky-jinxuan',
            name: '奶香金萱烏龍',
            spec: '3g × 20 包・三角立體茶包',
            icon: img('Teavoya_e27e4b6c-02b7-4f93-a619-aadedbd83b1c.jpg?v=1771930906'),
            desc: '牛奶糖香・清甜順口',
            brewTime: 180,
            buyUrl: SHOP + 'milky-jinxuan-oolong',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '水溫略降，奶香更明顯', highlight: '85-90°C' },
                    { title: '放入茶包', detail: '將 1 包 3g 茶包放入馬克杯' },
                    { title: '注入熱水', detail: '倒入熱水', highlight: '300ml' },
                    { title: '浸泡', detail: '靜置等待', highlight: '3 分鐘', isTimerStep: true },
                    { title: '取出茶包', detail: '茶包可保留回沖 2～3 次' }
                ],
                tips: [
                    '台灣金萱品種特有的牛奶糖香，不加奶也有奶香',
                    '茶湯淡金綠，清甜順口',
                    '熱泡、冷泡都好喝'
                ],
                cold: '1 包加 500ml 冷水，放冰箱冷泡 6～8 小時'
            }
        },
        {
            id: 'four-seasons',
            name: '台灣四季春',
            spec: '3g × 20 包・三角立體茶包',
            icon: img('Teavoya__-1_04d09255-7535-48c1-86bb-f96aa8d3b4f1.jpg?v=1771930865'),
            desc: '梔子花香・清爽解膩',
            brewTime: 180,
            buyUrl: SHOP + 'taiwan-four-seasons-oolong',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '水溫不宜過高', highlight: '85-90°C' },
                    { title: '放入茶包', detail: '將 1 包 3g 茶包放入馬克杯' },
                    { title: '注入熱水', detail: '倒入熱水', highlight: '300ml' },
                    { title: '浸泡', detail: '靜置等待', highlight: '3 分鐘', isTimerStep: true },
                    { title: '取出茶包', detail: '茶包可保留回沖 2～3 次' }
                ],
                tips: [
                    '四季皆可採收的台灣經典茶種，帶淡雅梔子花香',
                    '茶湯亮黃綠，清甜回甘',
                    '辦公室杯泡或冷泡皆宜'
                ],
                cold: '1 包加 500ml 冷水，放冰箱冷泡 6～8 小時'
            }
        },
        {
            id: 'osmanthus-oolong-3g',
            name: '桂花風味烏龍',
            spec: '3g × 15 包・三角立體茶包',
            icon: img('Gemini_Generated_Image_race2prace2prace.png?v=1772889515'),
            desc: '桂花清甜・烏龍回甘',
            brewTime: 180,
            buyUrl: SHOP + 'osmanthus-oolong-pyramid',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '水溫不宜過高', highlight: '85-90°C' },
                    { title: '放入茶包', detail: '將 1 包 3g 茶包放入馬克杯' },
                    { title: '注入熱水', detail: '倒入熱水', highlight: '300ml' },
                    { title: '浸泡', detail: '靜置等待', highlight: '3 分鐘', isTimerStep: true },
                    { title: '品茗', detail: '先聞桂花清甜，再品烏龍回甘' }
                ],
                tips: [
                    '台灣烏龍搭配新鮮桂花窨製，茶湯金黃溫潤',
                    '辦公室、咖啡廳杯泡或冷泡皆宜',
                    '秋冬熱飲特別暖心'
                ],
                cold: '1 包加 500ml 冷水，放冰箱冷泡 6～8 小時'
            }
        },
        {
            id: 'french-earl-grey',
            name: '法式伯爵茶',
            spec: '3g × 10 包・精品盒裝',
            icon: img('644B0981.jpg?v=1773453197'),
            desc: '佛手柑香・矢車菊花瓣',
            brewTime: 240,
            buyUrl: SHOP + 'french-earl-grey-gift-box',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '使用剛煮沸的熱水', highlight: '95-100°C' },
                    { title: '放入茶包', detail: '將 1 包 3g 茶包放入杯中' },
                    { title: '注入熱水', detail: '倒入熱水', highlight: '300-400ml' },
                    { title: '浸泡', detail: '靜置等待（3～5 分鐘）', highlight: '4 分鐘', isTimerStep: true },
                    { title: '享用', detail: '可純飲或加牛奶' }
                ],
                tips: [
                    '斯里蘭卡紅茶以佛手柑調味，花香與茶香融合',
                    '可回沖 2～3 次，熱泡更能帶出佛手柑清香',
                    '冷泡清爽宜人，夏天也好喝',
                    '精品盒裝，送禮自用皆宜'
                ]
            }
        },
        {
            id: 'strawberry-black-tea',
            name: '草莓風味紅茶',
            spec: '3g × 15 包',
            icon: img('Gemini_Generated_Image_jcqybkjcqybkjcqy.png?v=1772889391'),
            desc: '草莓香甜・紅茶回甘',
            brewTime: 240,
            buyUrl: SHOP + 'strawberry-black-tea-bag',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '將水煮沸後稍微放涼', highlight: '90-95°C' },
                    { title: '放入茶包', detail: '將 1 包 3g 茶包放入杯中' },
                    { title: '注入熱水', detail: '倒入熱水', highlight: '200-300ml' },
                    { title: '浸泡', detail: '靜置等待（3～5 分鐘）', highlight: '4 分鐘', isTimerStep: true },
                    { title: '取出茶包', detail: '取出後即可享用' }
                ],
                tips: [
                    '紅茶的醇厚與草莓的酸甜平衡，尾韻淡淡回甘',
                    '冷泡更能帶出草莓的清新感（推薦）'
                ],
                cold: '1 包加 500ml 常溫或冰水，放冰箱冷泡 4～8 小時'
            }
        },
        {
            id: 'hk-milk-tea-6g',
            name: '港式奶茶獨享包',
            spec: '6g × 15 包',
            icon: img('IMG_8912.png?v=1771641297'),
            desc: '一人份港奶・杯泡即成',
            brewTime: 300,
            buyUrl: SHOP + 'hk-milk-tea-single-teabag',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '使用剛煮沸的熱水', highlight: '100°C' },
                    { title: '放入茶包', detail: '將 1 包 6g 茶包放入杯中' },
                    { title: '注入熱水', detail: '水量少一點，茶底才夠濃', highlight: '200ml' },
                    { title: '浸泡', detail: '蓋上杯蓋悶泡', highlight: '5 分鐘', isTimerStep: true },
                    { title: '取出茶包', detail: '輕輕取出，避免擠壓' },
                    { title: '加入淡奶', detail: '加淡奶與糖，依喜好調整', highlight: '40-60ml' }
                ],
                tips: [
                    '港式奶茶迷你版，一個人也能享受道地港奶',
                    '想要更濃，可減少水量或延長悶泡時間',
                    '居家、辦公室隨時來一杯'
                ]
            }
        },
        {
            id: 'puerh-6g',
            name: '雲南輕熟普洱',
            spec: '6g × 15 包・三角立體茶包',
            icon: img('Gemini_Generated_Image_vt2uxxvt2uxxvt2u.png?v=1771632006'),
            desc: '陳香溫潤・可回沖五次',
            brewTime: 180,
            buyUrl: SHOP + 'yunnan-puerh-tea-bag-small',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '使用剛煮沸的熱水', highlight: '100°C' },
                    { title: '放入茶包', detail: '將 1 包 6g 茶包放入杯中' },
                    { title: '注入熱水', detail: '倒入熱水', highlight: '400ml' },
                    { title: '浸泡', detail: '靜置等待', highlight: '3 分鐘', isTimerStep: true },
                    { title: '回沖', detail: '茶包留著，續水再泡' }
                ],
                tips: [
                    '古樹熟普洱，增量 6g，可回沖 5 次',
                    '每次回沖延長 1～2 分鐘，茶湯更圓潤',
                    '辦公室一天一包剛剛好'
                ]
            }
        },
        {
            id: 'tropical-fruit',
            name: '熱帶水果風味茶',
            spec: '6g × 15 包・無咖啡因',
            icon: img('Teavoya_2ec8b310-ad13-4ab3-90fd-abee04dbca9d.jpg?v=1771844025'),
            desc: '繽紛果香・酸甜清爽',
            brewTime: 300,
            buyUrl: SHOP + 'tropical-fruit-tea-bag',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '使用熱水沖泡', highlight: '95°C' },
                    { title: '放入茶包', detail: '將 1 包 6g 茶包放入杯中' },
                    { title: '注入熱水', detail: '倒入熱水', highlight: '400ml' },
                    { title: '浸泡', detail: '靜置等待', highlight: '5 分鐘', isTimerStep: true },
                    { title: '享用', detail: '可加冰塊做成冰果茶' }
                ],
                tips: [
                    '多種熱帶水果風味混搭，茶湯繽紛酸甜',
                    '冷泡後果香更鮮明（推薦）',
                    '加氣泡水就是派對飲品，大人小孩都喜歡',
                    '無咖啡因，晚上也能喝'
                ],
                cold: '1 包加 500ml 冷水，放冰箱冷泡 6～8 小時；喝前可兌氣泡水'
            }
        },
        {
            id: 'chamomile-orange-blossom',
            name: '洋甘菊橙花茶',
            spec: '2g × 15 包・無咖啡因',
            icon: img('FullSizeRender.jpg?v=1778720348'),
            desc: '無咖啡因・午後花草茶',
            brewTime: 240,
            buyUrl: SHOP + 'afternoon-exhale-chamomile-orange-blossom',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '將水煮沸後稍微放涼', highlight: '90-95°C' },
                    { title: '放入茶包', detail: '將 1 包 2g 茶包放入杯中' },
                    { title: '注入熱水', detail: '倒入熱水', highlight: '200ml' },
                    { title: '浸泡', detail: '靜置等待（3～5 分鐘）', highlight: '4 分鐘', isTimerStep: true },
                    { title: '加分', detail: '加一片檸檬，橙花香氣更立體' }
                ],
                tips: [
                    '德國洋甘菊 × 義大利橙花，無咖啡因，晚上也能喝',
                    '入口橙花蜜甜，中段洋甘菊蘋果香，不加糖也順口',
                    '孕哺婦、服用抗凝血劑者請先諮詢醫師；對菊科植物過敏者請勿飲用'
                ],
                cold: '1 包加 300ml 冷水，放冰箱靜置 4～6 小時'
            }
        }
    ],
    24: [
        {
            id: 'honey-black-tea',
            name: '初韻蜜香紅茶',
            spec: '24g × 25 包・免濾茶包',
            icon: img('NO.19.png?v=1773273503'),
            desc: '蜜香馥郁・甘甜滑順',
            brewTime: 300, // 5 分鐘
            buyUrl: SHOP + 'honey-black-tea-bag',
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
            spec: '24g × 25 包・免濾茶包',
            icon: img('JG_C5706.jpg?v=1776692958'),
            desc: '醇厚陳香・溫潤順口',
            brewTime: 420, // 7 分鐘
            buyUrl: SHOP + 'yunnan-puerh-tea-bag',
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
            spec: '24g × 25 包・免濾茶包',
            icon: img('NO.18.png?v=1773273011'),
            desc: '肉桂香氣・薄荷尾韻',
            brewTime: 300, // 5 分鐘
            buyUrl: SHOP + 'ruby-black-tea-bag',
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
            spec: '24g × 25 包・免濾茶包',
            icon: img('NO.06.png?v=1773272934'),
            desc: '甜美清新・香甜解膩',
            brewTime: 480, // 8 分鐘
            buyUrl: SHOP + 'peach-oolong-tea-bag',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '水溫不宜過高', highlight: '85-90°C' },
                    { title: '放入茶包', detail: '將 24g 茶包放入容器' },
                    { title: '注入熱水', detail: '每包約可泡 1,500cc', highlight: '1500ml' },
                    { title: '悶泡', detail: '蓋上蓋子靜置', highlight: '8 分鐘', isTimerStep: true },
                    { title: '完成', detail: '可熱飲或冰鎮享用' }
                ],
                tips: [
                    '台灣烏龍茶與白桃香氣完美結合',
                    '甜美清新，香甜解膩，完美消暑',
                    '冷泡、熱水鍋煮皆宜，也適合果茶調飲'
                ],
                cold: '1 包加 1500ml 冷水，放冰箱冷泡 8～10 小時'
            }
        },
        {
            id: 'blueberry-black-tea',
            name: '藍莓風味紅茶',
            spec: '24g × 25 包・免濾茶包',
            icon: img('NO.07.png?v=1773273063'),
            desc: '錫蘭紅茶・藍莓果香',
            brewTime: 300,
            buyUrl: SHOP + 'blueberry-black-tea-bag',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '使用剛煮沸的熱水', highlight: '95-100°C' },
                    { title: '放入茶包', detail: '將 24g 茶包放入茶壺' },
                    { title: '注入熱水', detail: '每包約可泡 1,500cc', highlight: '1500ml' },
                    { title: '悶泡', detail: '蓋上蓋子靜置', highlight: '5 分鐘', isTimerStep: true },
                    { title: '取出茶包', detail: '輕輕取出，避免擠壓' }
                ],
                tips: [
                    '錫蘭紅茶基底搭配藍莓風味，茶湯深紫紅',
                    '冰飲加果汁特別好看，果茶調飲百搭',
                    '泡好後冰鎮，香氣更清爽'
                ]
            }
        },
        {
            id: 'oolong-tea',
            name: '清香烏龍茶',
            spec: '24g × 25 包・免濾茶包',
            icon: img('background_removal_TUFIQTM0eWR0WVUjMSM2Y2FmMjhhNTNhMzRiYzBiNTFlMTQ3ZGQxNmEyZTRmMCM1MzY2IyNUUkFOU0ZPUk1BVElPTl9SRVFVRVNU.png?v=1772855803'),
            desc: '清香馥郁・回甘悠長',
            brewTime: 360, // 6 分鐘
            buyUrl: SHOP + 'oolong-tea-bag',
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
            spec: '24g × 25 包・免濾茶包',
            icon: img('ca84363c1df45a1fcbb4150fdb4b2013.png?v=1775873356'),
            desc: '茉莉花香・清新淡雅',
            brewTime: 600, // 10 分鐘
            buyUrl: SHOP + 'jasmine-green-tea-bag',
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
                ],
                cold: '1 包加 1500ml 冷水，放冰箱冷泡 8～10 小時'
            }
        },
        {
            id: 'ceylon-tea',
            name: '錫蘭紅茶 FOP',
            spec: '24g × 25 包・免濾茶包',
            icon: img('NO.09.png?v=1773273473'),
            desc: '花香淡雅・斯里蘭卡精選',
            brewTime: 300, // 5 分鐘
            buyUrl: SHOP + 'ceylon-black-tea-bag',
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
            spec: '24g × 25 包・免濾茶包',
            icon: img('NO.08.png?v=1773273251'),
            desc: '桂花清香・烏龍茶韻',
            brewTime: 360, // 6 分鐘
            buyUrl: SHOP + 'osmanthus-oolong-teabag',
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
            spec: '24g × 25 包・免濾茶包',
            icon: img('background_removal_TUFIQTM3U09IUDQjMSM2Y2FmMjhhNTNhMzRiYzBiNTFlMTQ3ZGQxNmEyZTRmMCM1MzY2IyNUUkFOU0ZPUk1BVElPTl9SRVFVRVNU.png?v=1773273162'),
            desc: '佛手柑香・經典複合茶香',
            brewTime: 480, // 8 分鐘
            buyUrl: SHOP + 'earl-grey-tea-bag',
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
        },
        {
            id: 'golden-assam',
            name: '金穗阿薩姆紅茶',
            spec: '24g × 25 包・免濾茶包',
            icon: 'images/golden-assam.jpg', // TODO: 官網上架後補購買連結
            desc: '麥芽香氣・濃郁醇厚',
            brewTime: 600, // 10 分鐘（依包裝建議）
            buyUrl: null,
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '將水煮沸', highlight: '95°C' },
                    { title: '注入熱水', detail: '倒入茶壺或鍋中', highlight: '1500ml' },
                    { title: '放入茶包', detail: '將 24g 茶包放入熱水中' },
                    { title: '上蓋悶泡', detail: '蓋上蓋子靜置', highlight: '10 分鐘', isTimerStep: true },
                    { title: '調味', detail: '取出茶包，放入適量的糖（依喜好）' }
                ],
                tips: [
                    '台灣產阿薩姆紅茶，麥芽香氣、茶湯濃郁醇厚',
                    '冰鎮後茶味依然紮實，適合做冰紅茶'
                ]
            }
        },
        {
            id: 'amber-red-oolong',
            name: '琥珀紅烏龍茶',
            spec: '24g × 25 包・免濾茶包',
            icon: 'images/amber-red-oolong.jpg', // TODO: 官網上架後補購買連結
            desc: '熟果蜜香・琥珀茶湯',
            brewTime: 600, // 10 分鐘（依包裝建議）
            buyUrl: null,
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '將水煮沸', highlight: '95°C' },
                    { title: '注入熱水', detail: '倒入茶壺或鍋中', highlight: '1500ml' },
                    { title: '放入茶包', detail: '將 24g 茶包放入熱水中' },
                    { title: '上蓋悶泡', detail: '蓋上蓋子靜置', highlight: '10 分鐘', isTimerStep: true },
                    { title: '調味', detail: '取出茶包，放入適量的糖（依喜好）' }
                ],
                tips: [
                    '台灣產重發酵烏龍，兼具紅茶的甘醇與烏龍的茶韻',
                    '茶湯琥珀透亮，帶熟果與蜜香',
                    '冷熱皆宜，冰鎮後果香更明顯'
                ]
            }
        },
        {
            id: 'traditional-black-tea-24',
            name: '古早味紅茶',
            spec: '24g × 25 包・免濾茶包',
            icon: img('NO.01.png?v=1773273418'),
            desc: '台式冰紅茶・家庭號',
            brewTime: 900,
            buyUrl: SHOP + 'taiwan-breakfast-tea-bag-50',
            brewing: {
                steps: [
                    { title: '煮水', detail: '將水煮沸後熄火', highlight: '1500ml' },
                    { title: '放入茶包', detail: '水煮沸後熄火，放入 24g 茶包' },
                    { title: '悶泡', detail: '蓋上鍋蓋悶泡', highlight: '15 分鐘', isTimerStep: true },
                    { title: '取出茶包', detail: '時間到後撈起茶包' },
                    { title: '調味', detail: '趁熱加入二砂糖攪拌（依喜好）' }
                ],
                tips: [
                    '經典台式冰紅茶配方，茶湯紅亮寶石色',
                    '加糖加冰就是道地早餐店紅茶',
                    '需要大量沖泡，可選 50g 業務用版本'
                ]
            }
        }
    ],
    50: [
        {
            id: 'hk-milk-tea-50',
            name: '港式奶茶專用紅茶',
            spec: '50g・2 / 15 / 50 包',
            icon: img('644B6067.jpg?v=1776686958'),
            desc: '濃烈厚茶基・撞奶不澀',
            brewTime: 2400, // 40 分鐘
            buyUrl: SHOP + 'hk-milk-tea-50-teabag',
            brewing: {
                steps: [
                    { title: '準備熱水', detail: '將水煮沸', highlight: '100°C' },
                    { title: '放入茶包', detail: '將 50g 茶包放入大茶壺' },
                    { title: '注入熱水', detail: '一包 50g 茶包搭配 2500cc 水', highlight: '2500ml' },
                    { title: '鍋煮悶泡', detail: '蓋上蓋子靜置', highlight: '40 分鐘', isTimerStep: true },
                    { title: '取出茶包', detail: '輕輕取出，避免擠壓' },
                    { title: '加入淡奶', detail: '每杯 250ml 茶湯，加入淡奶', highlight: '50ml / 杯' }
                ],
                tips: [
                    '撞奶不苦不澀，適合做道地港式奶茶',
                    '斯里蘭卡＋爪哇優質紅茶調配',
                    'FOP、OP、BOP 專業分級，層次豐富',
                    '每杯茶底成本只要 $2.5'
                ]
            }
        },
        {
            id: 'traditional-black-tea-50',
            name: '古早味紅茶',
            spec: '50g・15 / 50 包',
            icon: img('NO.01.png?v=1773273418'),
            desc: '純正古早味・無糖無添加',
            brewTime: 900, // 15 分鐘
            buyUrl: SHOP + 'taiwan-breakfast-tea-bag-50',
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
            spec: '50g・15 / 50 包',
            icon: img('NO.11.png?v=1773273796'),
            desc: '麥香濃郁・超高CP值',
            brewTime: 900, // 15 分鐘
            buyUrl: SHOP + 'barley-black-tea-bag',
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
    ],
    matcha: [
        {
            id: 'matcha-latte',
            name: '抹茶拿鐵',
            spec: '京都抹茶粉・100g / 500g',
            icon: img('IMG-8760.png?v=1770645380'),
            desc: '綿密順口・不加糖也好喝',
            buyUrl: SHOP + 'kyoto-matcha-powder',
            brewing: {
                steps: [
                    { title: '取抹茶粉', detail: '過篩後放入碗或杯中，避免結塊', highlight: '2-3g' },
                    { title: '少量熱水化開', detail: '先用少量熱水調成濃稠抹茶糊', highlight: '30ml・80°C' },
                    { title: '刷開', detail: '用茶筅或抹茶神器攪至無顆粒' },
                    { title: '加入鮮奶', detail: '倒入溫熱鮮奶', highlight: '150-200ml' }
                ],
                tips: [
                    '京都產區遮光栽培，茶胺酸高、苦澀低、帶有旨味（鮮味）',
                    '400 目超細研磨，溶解快、不沉底',
                    '開封後夾緊袋口冷藏，2 個月內喝完風味最佳'
                ]
            }
        },
        {
            id: 'matcha-iced',
            name: '冰抹茶',
            spec: '京都抹茶粉・100g / 500g',
            icon: img('IMG-8760.png?v=1770645380'),
            desc: '冰涼清爽・夏日消暑',
            buyUrl: SHOP + 'kyoto-matcha-powder',
            brewing: {
                steps: [
                    { title: '取抹茶粉', detail: '過篩後放入杯中', highlight: '2g' },
                    { title: '少量熱水化開', detail: '先化開再加冰，才不會結塊', highlight: '30ml・80°C' },
                    { title: '倒入冰杯', detail: '倒入裝滿冰塊的杯中' },
                    { title: '加冷水或冷牛奶', detail: '依喜好選擇', highlight: '200ml' }
                ],
                tips: [
                    '用「抹茶神器」搖 30 秒，泡沫最綿密',
                    '加冷牛奶就是冰抹茶拿鐵',
                    '100g 約可沖 35～50 杯'
                ]
            }
        },
        {
            id: 'matcha-usucha',
            name: '傳統刷茶',
            spec: '京都抹茶粉・100g / 500g',
            icon: img('IMG-8760.png?v=1770645380'),
            desc: '茶筅刷茶・綿密泡沫',
            brewTime: 30,
            buyUrl: SHOP + 'kyoto-matcha-powder',
            brewing: {
                steps: [
                    { title: '溫碗', detail: '以熱水溫碗與茶筅，倒掉熱水擦乾' },
                    { title: '篩入抹茶粉', detail: '用抹茶篩篩入碗中', highlight: '2g' },
                    { title: '注入熱水', detail: '水溫太高會苦', highlight: '60ml・80°C' },
                    { title: '刷茶', detail: '以 M 字型快速刷動至泡沫綿密', highlight: '30 秒', isTimerStep: true }
                ],
                tips: [
                    '手腕放鬆、茶筅不碰碗底，泡沫更細緻',
                    '推薦搭配百本立茶筅或抹茶道具五件組',
                    '刷好後趁泡沫綿密時飲用'
                ]
            }
        }
    ]
};

// 跨分類篩選標籤（只標官方文案或泡法有明確寫到的品項）
const filters = [
    {
        key: 'cold',
        label: '❄️ 冷泡推薦',
        ids: ['milky-jinxuan', 'four-seasons', 'osmanthus-oolong-3g', 'french-earl-grey', 'strawberry-black-tea',
              'tropical-fruit', 'chamomile-orange-blossom', 'honey-black-tea', 'peach-oolong', 'jasmine-green-tea', 'earl-grey']
    },
    {
        key: 'decaf',
        label: '🌙 無咖啡因',
        ids: ['chamomile-orange-blossom', 'tropical-fruit']
    },
    {
        key: 'milk',
        label: '🥛 適合做奶茶',
        ids: ['hk-milk-tea-50', 'hk-milk-tea-6g', 'traditional-black-tea-50', 'traditional-black-tea-24',
              'ceylon-tea', 'earl-grey']
    }
];

// 沒有產品圖時顯示茶杯佔位圖
const productImage = (product, className) => product.icon
    ? `<img class="${className}" src="${product.icon}" alt="${product.name}" loading="lazy">`
    : `<span class="${className} img-placeholder" role="img" aria-label="${product.name}">🍵</span>`;

const findProduct = (id) => {
    for (const key of Object.keys(products)) {
        const product = products[key].find(p => p.id === id);
        if (product) return { key, product };
    }
    return null;
};

// DOM Elements
const categoryButtons = document.getElementById('categoryButtons');
const filterChips = document.getElementById('filterChips');
const productHeading = document.getElementById('productHeading');
const productGrid = document.getElementById('productGrid');
const modal = document.getElementById('brewingModal');
const closeModalBtn = document.getElementById('closeModal');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const brewingSteps = document.getElementById('brewingSteps');
const brewingTips = document.getElementById('brewingTips');
const timerSection = document.getElementById('timerSection');
const timerDisplay = document.getElementById('timerDisplay');
const timerStart = document.getElementById('timerStart');
const timerPause = document.getElementById('timerPause');
const timerReset = document.getElementById('timerReset');
const timerHint = document.getElementById('timerHint');
const buyBtn = document.getElementById('buyBtn');
const promoBanner = document.getElementById('promoBanner');
const promoCopy = document.getElementById('promoCopy');
const promoNote = document.getElementById('promoNote');

let currentCategory = '24';
let currentFilter = null;
let currentProduct = null;
let timerInterval = null;
let timerSeconds = 0;
let timerEndAt = 0;
let isTimerRunning = false;
let originalTimerSeconds = 0;

// Audio for timer completion
let audioContext = null;
let audioUnlocked = false;

// Unlock audio on first user interaction
function unlockAudio() {
    if (audioUnlocked) return;

    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        // Create a silent buffer to unlock
        const buffer = audioContext.createBuffer(1, 1, 22050);
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start(0);

        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        audioUnlocked = true;
    } catch (e) {
        console.log('Audio unlock failed:', e);
    }
}

// Initialize
function init() {
    renderPromo();
    renderCategories();
    renderFilters();
    renderProducts();
    setupEventListeners();
    openFromHash();

    // Register service worker for offline use and background notifications
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => {
            console.log('Service worker registration failed:', err);
        });
        // 先把全部產品圖存起來，離線時沒點過的茶也看得到圖
        navigator.serviceWorker.ready.then(reg => {
            const urls = Object.values(products).flat()
                .filter(p => p.icon)
                .map(p => new URL(p.icon, location.href).href);
            reg.active?.postMessage({ type: 'precache', urls: [...new Set(urls)] });
        });
    }
}

// 計時中讓螢幕保持亮著，避免手機自動鎖定後漏掉提醒
let wakeLock = null;

async function keepScreenOn() {
    if (!('wakeLock' in navigator) || wakeLock) return;
    try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => { wakeLock = null; });
    } catch (e) {
        // 省電模式等情況會被拒絕，計時照常進行
    }
}

function allowScreenOff() {
    wakeLock?.release();
    wakeLock = null;
}

// Ask for notification permission only when the user starts a timer
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().catch(() => {});
    }
}

// Send notification when timer is done
function sendTimerNotification(productName) {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;

    const title = '茶泡好了！🍵';
    const options = {
        body: `${productName} 已經泡好，快來享用吧！`,
        tag: 'teavoya-timer',
        requireInteraction: true,
        vibrate: [200, 100, 200, 100, 200]
    };

    // Mobile browsers only allow notifications via the service worker
    if (navigator.serviceWorker?.controller) {
        navigator.serviceWorker.ready.then(reg => reg.showNotification(title, options));
        return;
    }
    try {
        const notification = new Notification(title, options);
        notification.onclick = () => {
            window.focus();
            notification.close();
        };
    } catch (e) {
        console.log('Notification failed:', e);
    }
}

// Play completion sound
function playCompletionSound() {
    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        const playTone = (freq, startTime, duration) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = freq;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.5, audioContext.currentTime + startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + startTime + duration);

            oscillator.start(audioContext.currentTime + startTime);
            oscillator.stop(audioContext.currentTime + startTime + duration);
        };

        // Play chime 3 times for emphasis
        for (let i = 0; i < 3; i++) {
            const offset = i * 0.6;
            playTone(523.25, offset, 0.3);         // C5
            playTone(659.25, offset + 0.1, 0.3);   // E5
            playTone(783.99, offset + 0.2, 0.4);   // G5
        }
    } catch (e) {
        console.log('Web Audio failed:', e);
    }
}

// Promo code banner
function renderPromo() {
    document.getElementById('shopLink').href = shopLink('/');
    if (!PROMO) return;
    document.getElementById('promoCode').textContent = PROMO.code;
    document.getElementById('promoDesc').textContent = `${PROMO.text}（${PROMO.limit}）・點「立即購買」自動套用`;
    promoNote.textContent = `🎁 已自動套用優惠碼 ${PROMO.code}，結帳${PROMO.text}`;
    promoBanner.hidden = false;
}

async function copyPromoCode() {
    try {
        await navigator.clipboard.writeText(PROMO.code);
    } catch (e) {
        // 舊瀏覽器沒有 clipboard API
        const input = document.createElement('input');
        input.value = PROMO.code;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        input.remove();
    }
    promoCopy.textContent = '已複製 ✓';
    promoCopy.classList.add('copied');
    setTimeout(() => {
        promoCopy.textContent = '複製';
        promoCopy.classList.remove('copied');
    }, 2000);
}

// Render category tabs
function renderCategories() {
    categoryButtons.innerHTML = categories.map(c => `
        <button class="size-btn ${c.key === currentCategory ? 'active' : ''}" data-category="${c.key}" role="tab" aria-selected="${c.key === currentCategory}">
            <span class="size-number">${c.number}</span>
            <span class="size-label">${c.label}</span>
        </button>
    `).join('');
}

function highlightCategory() {
    categoryButtons.querySelectorAll('.size-btn').forEach(btn => {
        const active = !currentFilter && btn.dataset.category === currentCategory;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-selected', active);
    });
}

function selectCategory(key) {
    currentCategory = key;
    currentFilter = null;
    highlightCategory();
    renderFilters();
    renderProducts();
}

// Render filter chips
function renderFilters() {
    filterChips.innerHTML = filters.map(f => `
        <button class="filter-chip ${f.key === currentFilter ? 'active' : ''}" data-filter="${f.key}" aria-pressed="${f.key === currentFilter}">
            ${f.label}
        </button>
    `).join('');
}

// 點同一個標籤再點一次就取消篩選，回到原本分類
function selectFilter(key) {
    currentFilter = currentFilter === key ? null : key;
    highlightCategory();
    renderFilters();
    renderProducts();
}

function visibleProducts() {
    if (!currentFilter) return products[currentCategory];
    const filter = filters.find(f => f.key === currentFilter);
    return Object.values(products).flat().filter(p => filter.ids.includes(p.id));
}

// Render products for current category
function renderProducts() {
    const list = visibleProducts();
    const filter = filters.find(f => f.key === currentFilter);
    productHeading.textContent = filter ? `${filter.label}（${list.length} 款）` : '選擇茶品';

    productGrid.innerHTML = list.map(product => `
        <button class="product-card" data-id="${product.id}">
            ${productImage(product, 'product-img')}
            <div class="product-name">${product.name}</div>
            <div class="product-desc">${filter ? product.spec : product.desc}</div>
            ${product.brewTime ? `<div class="product-time">⏱ ${formatDuration(product.brewTime)}</div>` : ''}
        </button>
    `).join('');
}

// Format seconds to MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function formatDuration(seconds) {
    return seconds >= 60 ? `${Math.round(seconds / 60)} 分鐘` : `${seconds} 秒`;
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

// Count down against a fixed end time so the timer stays accurate
// even when the phone throttles a background tab
function tick() {
    timerSeconds = Math.max(0, Math.ceil((timerEndAt - Date.now()) / 1000));
    updateTimerDisplay();

    if (timerSeconds <= 0) {
        stopTimer();
        onTimerComplete();
    }
}

// Start timer
function startTimer() {
    unlockAudio();
    requestNotificationPermission();

    if (timerSeconds <= 0) {
        timerSeconds = originalTimerSeconds;
        updateTimerDisplay();
    }

    if (timerSeconds <= 0) return;

    isTimerRunning = true;
    timerEndAt = Date.now() + timerSeconds * 1000;
    timerHint.textContent = 'wakeLock' in navigator
        ? '計時中，螢幕會保持亮著，時間到會響鈴提醒'
        : '計時中，請勿鎖定螢幕，時間到會響鈴提醒';
    keepScreenOn();
    timerStart.classList.add('running');
    timerStart.querySelector('span:last-child').textContent = '計時中...';
    timerStart.querySelector('.btn-icon').textContent = '⏱';
    timerPause.classList.remove('hidden');

    timerInterval = setInterval(tick, 250);
}

// Pause timer
function pauseTimer() {
    allowScreenOff();
    clearInterval(timerInterval);
    isTimerRunning = false;
    timerStart.classList.remove('running');
    timerStart.querySelector('span:last-child').textContent = '繼續';
    timerStart.querySelector('.btn-icon').textContent = '▶';
}

// Stop timer
function stopTimer() {
    allowScreenOff();
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
    timerHint.textContent = `建議浸泡 ${formatTime(originalTimerSeconds)}`;
    updateTimerDisplay();
}

// Timer complete handler
function onTimerComplete() {
    playCompletionSound();
    sendTimerNotification(currentProduct?.name || '茶');

    timerDisplay.classList.add('done');
    timerHint.textContent = '🎉 茶泡好了！';

    if ('vibrate' in navigator) {
        navigator.vibrate([200, 100, 200, 100, 200]);
    }
}

// Show brewing guide modal
function showBrewing(product) {
    currentProduct = product;
    modalIcon.innerHTML = productImage(product, 'modal-product-img');
    modalTitle.textContent = product.name;
    modalSubtitle.textContent = product.spec;

    promoNote.hidden = !(PROMO && product.buyUrl);
    if (product.buyUrl) {
        buyBtn.href = shopLink(new URL(product.buyUrl).pathname);
        buyBtn.style.display = 'inline-flex';
    } else {
        buyBtn.style.display = 'none';
    }

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

    brewingTips.innerHTML = `
        ${product.brewing.cold ? `
            <div class="cold-brew">
                <div class="tips-title">❄️ 冷泡做法</div>
                <div class="tip">${product.brewing.cold}</div>
            </div>` : ''}
        <div class="tips-title">💡 小技巧</div>
        ${product.brewing.tips.map(tip => `<div class="tip">${tip}</div>`).join('')}
    `;

    // Setup timer (hidden for recipes without a steep time)
    stopTimer();
    timerSection.classList.toggle('hidden', !product.brewTime);
    originalTimerSeconds = product.brewTime || 0;
    timerSeconds = originalTimerSeconds;
    updateTimerDisplay();
    timerHint.textContent = `建議浸泡 ${formatTime(originalTimerSeconds)}`;

    if (location.hash !== `#${product.id}`) {
        history.replaceState(null, '', `#${product.id}`);
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-content').scrollTop = 0;
}

// Close modal
function closeBrewing() {
    if (!modal.classList.contains('active')) return;
    if (isTimerRunning && !confirm('計時中，確定要關閉嗎？')) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
    stopTimer();
    history.replaceState(null, '', location.pathname + location.search);
}

// Open a product directly from the URL, e.g. .../#honey-black-tea (for package QR codes)
function openFromHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    if (categories.some(c => c.key === id)) {
        selectCategory(id);
        return;
    }
    if (filters.some(f => f.key === id)) {
        if (currentFilter !== id) selectFilter(id);
        return;
    }
    const found = findProduct(id);
    if (!found) return;
    const inFilter = currentFilter && filters.find(f => f.key === currentFilter).ids.includes(id);
    if (!inFilter && found.key !== currentCategory) selectCategory(found.key);
    showBrewing(found.product);
}

// Setup event listeners
function setupEventListeners() {
    categoryButtons.addEventListener('click', (e) => {
        const btn = e.target.closest('.size-btn');
        if (btn) selectCategory(btn.dataset.category);
    });

    promoCopy.addEventListener('click', copyPromoCode);

    filterChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (chip) selectFilter(chip.dataset.filter);
    });

    productGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (card) showBrewing(findProduct(card.dataset.id).product);
    });

    closeModalBtn.addEventListener('click', closeBrewing);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeBrewing();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeBrewing();
    });

    timerStart.addEventListener('click', () => {
        if (isTimerRunning) {
            pauseTimer();
        } else {
            startTimer();
        }
    });

    timerPause.addEventListener('click', pauseTimer);
    timerReset.addEventListener('click', resetTimer);

    window.addEventListener('hashchange', openFromHash);

    // Catch up immediately when returning to the tab
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && isTimerRunning) {
            tick();
            keepScreenOn(); // 切回來時重新保持螢幕亮著（切走時系統會自動解除）
        }
    });
}

// Start app
init();
