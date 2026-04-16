// =====================================================
// ZORNET - JAVASCRIPT
// =====================================================

// ===== i18n ПЕРЕВОДЫ =====
const i18n = {
    ru: {
        slogan: "Твой интернет. Твой свет.",
        search_placeholder: "Поиск в интернете...",
        btn_search: "Найти",
        btn_lucky: "Мне повезёт!",
        nav_home: "Главная",
        nav_news: "Новости",
        nav_weather: "Погода",
        nav_maps: "Карты",
        nav_translate: "Переводчик",
        nav_currency: "Валюты",
        nav_ai: "ЗОРКА ИИ",
        widget_time: "Зорны час",
        widget_weather: "Погода",
        widget_news: "Новости",
        widget_currency: "Курс валют",
        widget_ai: "Спросить ЗОРКУ",
        quick_access: "Быстрый доступ",
        interesting: "Интересно знать",
        focus_mode: "Режим фокуса",
        notes: "Заметки",
        notes_save: "Сохранить",
        notes_placeholder: "Ваша заметка...",
        theme_light: "Светлая тема",
        theme_dark: "Тёмная тема",
        lang_select: "Язык",
        ai_placeholder: "Спросите ЗОРКУ...",
        ai_send: "Отправить",
        ai_clear: "Очистить историю",
        ai_title: "ЗОРКА — умный помощник",
        ai_new_chat: "Новый чат",
        ai_quick_answer: "Быстрый ответ ЗОРКИ",
        translate_title: "Переводчик",
        translate_swap: "Поменять языки",
        translate_copy: "Копировать",
        translate_speak: "Произнести",
        translate_placeholder: "Введите текст...",
        currency_title: "Курс валют",
        currency_converter: "Конвертер валют",
        currency_show_all: "Показать все валюты",
        currency_hide: "Скрыть",
        maps_title: "Карты",
        maps_search: "Найти место...",
        maps_my_location: "Моё местоположение",
        maps_layer_map: "Карта",
        maps_layer_sat: "Спутник",
        news_title: "Новости",
        news_world: "Мир",
        news_tech: "Технологии",
        news_sport: "Спорт",
        news_read_more: "Читать далее",
        news_loading: "Загрузка новостей...",
        news_error: "Новости временно недоступны",
        weather_title: "Погода",
        weather_search: "Введите город...",
        weather_feels: "Ощущается как",
        weather_humidity: "Влажность",
        weather_wind: "Ветер",
        weather_forecast: "Прогноз на 7 дней",
        weather_hourly: "По часам",
        search_tabs_0: "Все",
        search_tabs_1: "Картинки",
        search_tabs_2: "Видео",
        search_tabs_3: "Новости",
        search_tabs_4: "Карты",
        voice_listening: "Слушаю...",
        voice_error: "Ошибка микрофона",
        popular_queries: "Популярные запросы",
        easter_egg_text: "Загадай желание! ★",
        notes_saved: "Заметка сохранена",
        add_bookmark: "Добавить",
        edit_bookmarks: "Редактировать",
        bookmark_name: "Название сайта",
        bookmark_url: "URL сайта",
        time_ago_min: "мин. назад",
        time_ago_hour: "ч. назад",
        time_ago_day: "д. назад",
        ai_thinking: "ЗОРКА думает...",
        ai_error: "Ошибка соединения с ЗОРКОЙ",
        ai_greeting: "Привет! Я ЗОРКА — умный помощник портала ZORNET. Чем могу помочь?",
        ai_quick_0: "Расскажи о себе",
        ai_quick_1: "Напиши стих",
        ai_quick_2: "Помоги с кодом",
        ai_quick_3: "Переведи текст",
        ai_quick_4: "Интересный факт",
        search_counter_text: "Сегодня выполнено поисков:",
        popular_query_0: "ChatGPT",
        popular_query_1: "YouTube",
        popular_query_2: "Погода сегодня",
        popular_query_3: "Курс доллара",
        popular_query_4: "Перевод",
        popular_query_5: "Wikipedia",
        popular_query_6: "Новости",
        popular_query_7: "Gmail",
        popular_query_8: "Maps",
        popular_query_9: "Instagram"
    },
    be: {
        slogan: "Твой інтэрнэт. Твой свет.",
        search_placeholder: "Пошук у інтэрнэце...",
        btn_search: "Знайсці",
        btn_lucky: "Мне пашчасціць!",
        nav_home: "Галоўная",
        nav_news: "Навіны",
        nav_weather: "Надвор'е",
        nav_maps: "Карты",
        nav_translate: "Перакладчык",
        nav_currency: "Валюты",
        nav_ai: "ЗОРКА ІІ",
        widget_time: "Зорны час",
        widget_weather: "Надвор'е",
        widget_news: "Навіны",
        widget_currency: "Курс валют",
        widget_ai: "Спытаць Зорку",
        quick_access: "Хуткі доступ",
        interesting: "Цікава ведаць",
        focus_mode: "Рэжым фокусу",
        notes: "Нататкі",
        notes_save: "Захаваць",
        notes_placeholder: "Ваша нататка...",
        theme_light: "Светлая тэма",
        theme_dark: "Цёмная тэма",
        lang_select: "Мова",
        ai_placeholder: "Спытайце Зорку...",
        ai_send: "Адправіць",
        ai_clear: "Ачысціць гісторыю",
        ai_title: "ЗОРКА — разумны памочнік",
        ai_new_chat: "Новы чат",
        ai_quick_answer: "Хуткі адказ ЗОРКІ",
        translate_title: "Перакладчык",
        translate_swap: "Памяняць мовы",
        translate_copy: "Капіяваць",
        translate_speak: "Вымавіць",
        translate_placeholder: "Увядзіце тэкст...",
        currency_title: "Курс валют",
        currency_converter: "Канвертар валют",
        currency_show_all: "Паказаць усе валюты",
        currency_hide: "Схаваць",
        maps_title: "Карты",
        maps_search: "Знайсці месца...",
        maps_my_location: "Маё месцазнаходжанне",
        maps_layer_map: "Карта",
        maps_layer_sat: "Спадарожнік",
        news_title: "Навіны",
        news_world: "Свет",
        news_tech: "Тэхналогіі",
        news_sport: "Спорт",
        news_read_more: "Чытаць далей",
        news_loading: "Загрузка навін...",
        news_error: "Навіны часова недаступны",
        weather_title: "Надвор'е",
        weather_search: "Увядзіце горад...",
        weather_feels: "Адчуваецца як",
        weather_humidity: "Вільготнасць",
        weather_wind: "Вецер",
        weather_forecast: "Прагноз на 7 дзён",
        weather_hourly: "Па гадзінах",
        search_tabs_0: "Усё",
        search_tabs_1: "Выявы",
        search_tabs_2: "Відэа",
        search_tabs_3: "Навіны",
        search_tabs_4: "Карты",
        voice_listening: "Слухаю...",
        voice_error: "Памылка мікрафона",
        popular_queries: "Папулярныя запыты",
        easter_egg_text: "Загадай жаданне! ★",
        notes_saved: "Нататка захавана",
        add_bookmark: "Дадаць",
        edit_bookmarks: "Рэдагаваць",
        bookmark_name: "Назва сайта",
        bookmark_url: "URL сайта",
        time_ago_min: "хв. таму",
        time_ago_hour: "г. таму",
        time_ago_day: "д. таму",
        ai_thinking: "ЗОРКА думае...",
        ai_error: "Памылка злучэння з ЗОРКАЙ",
        ai_greeting: "Прывітанне! Я ЗОРКА — разумны памочнік партала ZORNET. Чым магу дапамагчы?",
        ai_quick_0: "Раскажы пра сябе",
        ai_quick_1: "Напішы верш",
        ai_quick_2: "Дапамажы з кодам",
        ai_quick_3: "Перакладзі тэкст",
        ai_quick_4: "Цікавы факт",
        search_counter_text: "Сёння выканана пошукаў:",
        popular_query_0: "ChatGPT",
        popular_query_1: "YouTube",
        popular_query_2: "Надвор'е сёння",
        popular_query_3: "Курс долара",
        popular_query_4: "Пераклад",
        popular_query_5: "Wikipedia",
        popular_query_6: "Навіны",
        popular_query_7: "Gmail",
        popular_query_8: "Карты",
        popular_query_9: "Instagram"
    },
    en: {
        slogan: "Your internet. Your light.",
        search_placeholder: "Search the internet...",
        btn_search: "Search",
        btn_lucky: "I'm Feeling Lucky!",
        nav_home: "Home",
        nav_news: "News",
        nav_weather: "Weather",
        nav_maps: "Maps",
        nav_translate: "Translator",
        nav_currency: "Currency",
        nav_ai: "ZORKA AI",
        widget_time: "Zorny Time",
        widget_weather: "Weather",
        widget_news: "News",
        widget_currency: "Exchange Rates",
        widget_ai: "Ask ZORKA",
        quick_access: "Quick Access",
        interesting: "Did you know",
        focus_mode: "Focus Mode",
        notes: "Notes",
        notes_save: "Save",
        notes_placeholder: "Your note...",
        theme_light: "Light theme",
        theme_dark: "Dark theme",
        lang_select: "Language",
        ai_placeholder: "Ask ZORKA...",
        ai_send: "Send",
        ai_clear: "Clear history",
        ai_title: "ZORKA — Smart Assistant",
        ai_new_chat: "New chat",
        ai_quick_answer: "Quick ZORKA answer",
        translate_title: "Translator",
        translate_swap: "Swap languages",
        translate_copy: "Copy",
        translate_speak: "Speak",
        translate_placeholder: "Enter text...",
        currency_title: "Exchange Rates",
        currency_converter: "Currency Converter",
        currency_show_all: "Show all currencies",
        currency_hide: "Hide",
        maps_title: "Maps",
        maps_search: "Find a place...",
        maps_my_location: "My location",
        maps_layer_map: "Map",
        maps_layer_sat: "Satellite",
        news_title: "News",
        news_world: "World",
        news_tech: "Technology",
        news_sport: "Sports",
        news_read_more: "Read more",
        news_loading: "Loading news...",
        news_error: "News temporarily unavailable",
        weather_title: "Weather",
        weather_search: "Enter city...",
        weather_feels: "Feels like",
        weather_humidity: "Humidity",
        weather_wind: "Wind",
        weather_forecast: "7-day forecast",
        weather_hourly: "Hourly",
        search_tabs_0: "All",
        search_tabs_1: "Images",
        search_tabs_2: "Videos",
        search_tabs_3: "News",
        search_tabs_4: "Maps",
        voice_listening: "Listening...",
        voice_error: "Microphone error",
        popular_queries: "Popular searches",
        easter_egg_text: "Make a wish! ★",
        notes_saved: "Note saved",
        add_bookmark: "Add",
        edit_bookmarks: "Edit",
        bookmark_name: "Site name",
        bookmark_url: "Site URL",
        time_ago_min: "min ago",
        time_ago_hour: "h ago",
        time_ago_day: "d ago",
        ai_thinking: "ZORKA is thinking...",
        ai_error: "Connection error with ZORKA",
        ai_greeting: "Hello! I'm ZORKA — the smart assistant of ZORNET portal. How can I help you?",
        ai_quick_0: "Tell me about yourself",
        ai_quick_1: "Write a poem",
        ai_quick_2: "Help with code",
        ai_quick_3: "Translate text",
        ai_quick_4: "Fun fact",
        search_counter_text: "Searches performed today:",
        popular_query_0: "ChatGPT",
        popular_query_1: "YouTube",
        popular_query_2: "Weather today",
        popular_query_3: "Dollar exchange rate",
        popular_query_4: "Translation",
        popular_query_5: "Wikipedia",
        popular_query_6: "News",
        popular_query_7: "Gmail",
        popular_query_8: "Maps",
        popular_query_9: "Instagram"
    }
};

// ===== ГЛОБАЛЬНОЕ СОСТОЯНИЕ =====
let currentLang = 'ru';
let currentTheme = 'light';
let currentSection = 'home';
let currentSearchTab = 'web';
let systemPrompt = '';
let aiMessages = [];
let map = null;
let mapMarkers = [];
let currencyRates = {};
let translateDebounce = null;

// 🔑 GROQ API KEY - Получи бесплатно на console.groq.com
const GROQ_API_KEY = 'gsk_YOUR_API_KEY_HERE'; // ЗАМЕНИ НА СВОЙ КЛЮЧ!

// ===== ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLang();
    initBookmarks();
    initNotes();
    initClock();
    initWidgets();
    initSearchCounter();
    initPopularQueries();
    initFacts();
    initEventListeners();
    initMaps();
    
    // Обработка URL при загрузке
    handleInitialRoute();
});

// ===== ТЕМА =====
function initTheme() {
    const savedTheme = localStorage.getItem('zornet_theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = savedTheme || (systemDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    
    // Слушаем системные изменения
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('zornet_theme')) {
            currentTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
            updateThemeIcon();
        }
    });
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('zornet_theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.getElementById('themeIcon');
    if (icon) {
        icon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
    }
}

// ===== ЯЗЫК =====
function initLang() {
    const savedLang = localStorage.getItem('zornet_lang');
    const browserLang = navigator.language.toLowerCase();
    
    if (savedLang) {
        currentLang = savedLang;
    } else if (browserLang.startsWith('be')) {
        currentLang = 'be';
    } else if (browserLang.startsWith('ru')) {
        currentLang = 'ru';
    } else {
        currentLang = 'en';
    }
    
    applyLang(currentLang);
}

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('zornet_lang', lang);
    
    // Применяем переводы к элементам с data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            el.textContent = i18n[lang][key];
        }
    });
    
    // Применяем к placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n[lang][key]) {
            el.placeholder = i18n[lang][key];
        }
    });
    
    // Обновляем системный промпт ЗОРКИ
    updateZorkaSystemPrompt(lang);
    
    // Обновляем популярные запросы
    updatePopularQueries();
    
    // Обновляем быстрые кнопки ИИ
    updateAIQuickButtons();
    
    // Обновляем слоган
    updateSlogan();
}

function updateSlogan() {
    const slogan = document.getElementById('slogan');
    if (slogan) {
        slogan.textContent = i18n[currentLang].slogan;
    }
}

function updateZorkaSystemPrompt(lang) {
    const prompts = {
        ru: `Ты ЗОРКА — дружелюбный умный ИИ-ассистент портала ZORNET. Отвечай на русском языке если пользователь пишет по-русски. Будь краток, полезен и дружелюбен.`,
        be: `Ты ЗОРКА — сяброўскі разумны ІІ-памочнік партала ZORNET. Адказвай на той мове на якой пытаюцца. Будзь кароткі і карысны.`,
        en: `You are ZORKA — a friendly smart AI assistant of the ZORNET portal. Reply in English if the user writes in English. Be concise, helpful and friendly.`
    };
    systemPrompt = prompts[lang];
}

// ===== НАВИГАЦИЯ =====
function showSection(section) {
    currentSection = section;
    
    // Скрываем все секции
    document.querySelectorAll('.section').forEach(s => {
        s.classList.remove('active');
    });
    
    // Показываем нужную
    const targetSection = document.getElementById(`section-${section}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Обновляем активность в tabbar
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-section') === section) {
            tab.classList.add('active');
        }
    });
    
    // Показываем/скрываем поиск в хедере
    const headerSearch = document.getElementById('headerSearch');
    if (section === 'home') {
        headerSearch.classList.remove('visible');
    } else {
        headerSearch.classList.add('visible');
    }
    
    // Обновляем URL
    history.pushState({}, '', section === 'home' ? '/' : `/${section}`);
    
    // Специфичные действия для секций
    if (section === 'news') loadNews('world');
    if (section === 'weather') initWeatherPage();
    if (section === 'maps' && !map) initMaps();
    if (section === 'ai') initAIPage();
}

function handleInitialRoute() {
    const path = window.location.pathname.substring(1);
    if (path && path !== '') {
        showSection(path);
    }
}

// ===== ПОИСК =====
function performSearch(query = null) {
    const searchInput = document.getElementById('mainSearchInput');
    const headerInput = document.getElementById('headerSearchInput');
    const q = query || searchInput?.value || headerInput?.value || '';
    
    if (!q.trim()) return;
    
    // Easter egg
    if (q.toLowerCase().includes('zorka') || q.toLowerCase().includes('зорка') || q.toLowerCase().includes('zорка')) {
        showEasterEgg();
        return;
    }
    
    // Увеличиваем счётчик
    incrementSearchCounter();
    
    // Переходим на страницу поиска
    showSection('search');
    
    // Обновляем инпуты
    if (searchInput) searchInput.value = q;
    if (headerInput) headerInput.value = q;
    
    // Загружаем результаты
    loadSearchResults(q, currentSearchTab);
    
    // Получаем быстрый ответ от ЗОРКИ
    getQuickAIAnswer(q);
}

function luckySearch() {
    const searchInput = document.getElementById('mainSearchInput');
    const q = searchInput?.value || '';
    if (!q.trim()) return;
    
    incrementSearchCounter();
    
    // Открываем первый результат Google
    const searchLang = getLangParam();
    window.open(`https://www.google.com/search?q=${encodeURIComponent(q)}&btnI=1${searchLang}`, '_blank');
}

function setSearchTab(tab) {
    currentSearchTab = tab;
    
    // Обновляем активную вкладку
    document.querySelectorAll('.search-tab').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tab) {
            btn.classList.add('active');
        }
    });
}

function switchSearchType(type) {
    currentSearchTab = type;
    
    // Обновляем активную вкладку на странице поиска
    document.querySelectorAll('.search-tabs-page .search-tab').forEach((btn, idx) => {
        btn.classList.remove('active');
        const types = ['web', 'images', 'videos', 'news', 'maps'];
        if (types[idx] === type) {
            btn.classList.add('active');
        }
    });
    
    // Перезагружаем результаты
    const headerInput = document.getElementById('headerSearchInput');
    const q = headerInput?.value || '';
    if (q) loadSearchResults(q, type);
}

function loadSearchResults(query, type) {
    const iframe = document.getElementById('searchFrame');
    const searchLang = getLangParam();
    
    let url = '';
    switch (type) {
        case 'web':
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}&igu=1${searchLang}`;
            break;
        case 'images':
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch${searchLang}`;
            break;
        case 'videos':
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=vid${searchLang}`;
            break;
        case 'news':
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=nws${searchLang}`;
            break;
        case 'maps':
            url = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
            break;
    }
    
    iframe.src = url;
    document.title = `${query} — ZORNET`;
}

function getLangParam() {
    if (currentLang === 'be' || currentLang === 'ru') {
        return '&hl=ru&gl=by';
    }
    return '&hl=en&gl=us';
}

async function getQuickAIAnswer(query) {
    const answerDiv = document.getElementById('searchAIAnswer');
    if (!answerDiv) return;
    
    answerDiv.innerHTML = `<div class="ai-thinking"><div class="ai-thinking-dot"></div><div class="ai-thinking-dot"></div><div class="ai-thinking-dot"></div></div>`;
    
    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama3-8b-8192',
                messages: [
                    { role: 'system', content: systemPrompt + ' Дай очень краткий ответ на вопрос в 2-3 предложениях.' },
                    { role: 'user', content: query }
                ],
                max_tokens: 200
            })
        });
        
        const data = await response.json();
        const answer = data.choices[0].message.content;
        
        answerDiv.innerHTML = `<p>${answer}</p>`;
    } catch (error) {
        answerDiv.innerHTML = `<p style="color: var(--text-muted);">Ответ временно недоступен</p>`;
    }
}

// ===== ГОЛОСОВОЙ ПОИСК =====
function startVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert(i18n[currentLang].voice_error);
        return;
    }
    
    const recognition = new SpeechRecognition();
    const langMap = { ru: 'ru-RU', be: 'be-BY', en: 'en-US' };
    recognition.lang = langMap[currentLang];
    
    recognition.onstart = () => {
        document.querySelectorAll('.voice-btn, .voice-btn-header').forEach(btn => {
            btn.classList.add('listening');
            btn.title = i18n[currentLang].voice_listening;
        });
    };
    
    recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        const searchInput = document.getElementById('mainSearchInput');
        const headerInput = document.getElementById('headerSearchInput');
        if (searchInput) searchInput.value = transcript;
        if (headerInput) headerInput.value = transcript;
        performSearch(transcript);
    };
    
    recognition.onend = () => {
        document.querySelectorAll('.voice-btn, .voice-btn-header').forEach(btn => {
            btn.classList.remove('listening');
            btn.title = 'Голосовой поиск';
        });
    };
    
    recognition.start();
}

// ===== ЗАКЛАДКИ =====
function initBookmarks() {
    const defaultBookmarks = [
        { name: 'YouTube', url: 'https://youtube.com', emoji: '▶️' },
        { name: 'VK', url: 'https://vk.com', emoji: '💬' },
        { name: 'Wikipedia', url: 'https://wikipedia.org', emoji: '📖' },
        { name: 'GitHub', url: 'https://github.com', emoji: '💻' },
        { name: 'Reddit', url: 'https://reddit.com', emoji: '🔴' },
        { name: 'Twitter/X', url: 'https://x.com', emoji: '✖️' },
        { name: 'Instagram', url: 'https://instagram.com', emoji: '📷' },
        { name: 'TikTok', url: 'https://tiktok.com', emoji: '🎵' }
    ];
    
    const saved = localStorage.getItem('zornet_bookmarks');
    const bookmarks = saved ? JSON.parse(saved) : defaultBookmarks;
    
    renderBookmarks(bookmarks);
}

function renderBookmarks(bookmarks) {
    const grid = document.getElementById('bookmarksGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    bookmarks.forEach((bm, idx) => {
        const card = document.createElement('div');
        card.className = 'bookmark-card';
        card.innerHTML = `
            <span class="emoji">${bm.emoji}</span>
            <span class="name">${bm.name}</span>
            <button class="bookmark-delete" onclick="deleteBookmark(${idx})">×</button>
        `;
        card.onclick = (e) => {
            if (!e.target.classList.contains('bookmark-delete')) {
                window.open(bm.url, '_blank');
            }
        };
        grid.appendChild(card);
    });
    
    // Кнопка добавления
    const addCard = document.createElement('div');
    addCard.className = 'bookmark-card bookmark-add';
    addCard.innerHTML = '+';
    addCard.onclick = addBookmark;
    grid.appendChild(addCard);
}

function addBookmark() {
    const name = prompt(i18n[currentLang].bookmark_name || 'Название сайта:');
    if (!name) return;
    
    const url = prompt(i18n[currentLang].bookmark_url || 'URL сайта:');
    if (!url) return;
    
    const emoji = prompt('Emoji (например: 🌐):') || '🌐';
    
    const saved = localStorage.getItem('zornet_bookmarks');
    const bookmarks = saved ? JSON.parse(saved) : [];
    bookmarks.push({ name, url, emoji });
    
    localStorage.setItem('zornet_bookmarks', JSON.stringify(bookmarks));
    renderBookmarks(bookmarks);
}

function deleteBookmark(idx) {
    const saved = localStorage.getItem('zornet_bookmarks');
    const bookmarks = saved ? JSON.parse(saved) : [];
    bookmarks.splice(idx, 1);
    localStorage.setItem('zornet_bookmarks', JSON.stringify(bookmarks));
    renderBookmarks(bookmarks);
}

// ===== ЗАМЕТКИ =====
function initNotes() {
    const textarea = document.getElementById('notesArea');
    const saved = localStorage.getItem('zornet_notes');
    if (textarea && saved) {
        textarea.value = saved;
    }
}

function saveNotes() {
    const textarea = document.getElementById('notesArea');
    const value = textarea?.value || '';
    localStorage.setItem('zornet_notes', value);
    
    const savedMsg = document.getElementById('notesSaved');
    if (savedMsg) {
        savedMsg.classList.add('show');
        setTimeout(() => savedMsg.classList.remove('show'), 2000);
    }
}

// ===== ЧАСЫ =====
function initClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const now = new Date();
    const timeEl = document.getElementById('clockTime');
    const dateEl = document.getElementById('clockDate');
    
    if (timeEl) {
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeEl.textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    if (dateEl) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const langMap = { ru: 'ru-RU', be: 'be-BY', en: 'en-US' };
        dateEl.textContent = now.toLocaleDateString(langMap[currentLang], options);
    }
}

// ===== ВИДЖЕТЫ =====
function initWidgets() {
    loadWeatherWidget();
    loadNewsWidget();
    loadCurrencyWidget();
}

async function loadWeatherWidget() {
    const widget = document.getElementById('weatherWidget');
    if (!widget) return;
    
    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        
        const { latitude, longitude } = position.coords;
        await fetchWeather(latitude, longitude, widget);
    } catch {
        // Лондон по умолчанию
        await fetchWeather(51.5074, -0.1278, widget);
    }
}

async function fetchWeather(lat, lon, container) {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m,relativehumidity_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=5`);
        const data = await response.json();
        
        const weatherCodes = {
            0: '☀️', 1: '🌤', 2: '⛅', 3: '☁️',
            45: '🌫', 48: '🌫', 51: '🌦', 53: '🌦', 55: '🌧',
            61: '🌧', 63: '🌧', 65: '🌧', 71: '❄️', 73: '❄️',
            75: '❄️', 80: '🌦', 81: '🌦', 82: '⛈', 95: '⛈'
        };
        
        const icon = weatherCodes[data.current.weathercode] || '🌤';
        const temp = Math.round(data.current.temperature_2m);
        const feels = Math.round(data.current.apparent_temperature);
        const humidity = data.current.relativehumidity_2m;
        const wind = Math.round(data.current.windspeed_10m);
        
        let html = `
            <div class="weather-widget-content">
                <div class="weather-icon">${icon}</div>
                <div class="weather-info">
                    <h4>London</h4>
                    <div class="weather-temp">${temp}°C</div>
                    <div class="weather-details">${i18n[currentLang].weather_feels}: ${feels}°C | ${i18n[currentLang].weather_humidity}: ${humidity}% | ${i18n[currentLang].weather_wind}: ${wind} km/h</div>
                </div>
            </div>
        `;
        
        // Прогноз
        html += '<div class="weather-forecast">';
        for (let i = 0; i < 5; i++) {
            const dayIcon = weatherCodes[data.daily.weathercode[i]] || '🌤';
            const maxTemp = Math.round(data.daily.temperature_2m_max[i]);
            const minTemp = Math.round(data.daily.temperature_2m_min[i]);
            const date = new Date(data.daily.time[i]);
            const dayName = date.toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : currentLang === 'be' ? 'be-BY' : 'en-US', { weekday: 'short' });
            
            html += `
                <div class="forecast-day">
                    <div class="forecast-day-name">${dayName}</div>
                    <div class="forecast-day-icon">${dayIcon}</div>
                    <div class="forecast-day-temp">${maxTemp}°/${minTemp}°</div>
                </div>
            `;
        }
        html += '</div>';
        
        container.innerHTML = html;
    } catch (error) {
        container.innerHTML = '<p style="color: var(--text-muted);">Погода недоступна</p>';
    }
}

async function loadNewsWidget() {
    const widget = document.getElementById('newsWidget');
    if (!widget) return;
    
    try {
        const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://feeds.bbci.co.uk/news/rss.xml');
        const response = await fetch(proxyUrl);
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');
        
        let html = '';
        for (let i = 0; i < Math.min(5, items.length); i++) {
            const title = items[i].querySelector('title')?.textContent || '';
            const link = items[i].querySelector('link')?.textContent || '';
            const desc = items[i].querySelector('description')?.textContent || '';
            const preview = desc.substring(0, 120) + '...';
            
            html += `
                <div class="news-item">
                    <a href="${link}" target="_blank">${title}</a>
                    <p>${preview}</p>
                    <div class="news-time">BBC News</div>
                </div>
            `;
        }
        
        widget.innerHTML = html;
    } catch (error) {
        widget.innerHTML = `<p style="color: var(--text-muted);">${i18n[currentLang].news_error}</p>`;
    }
}

async function loadCurrencyWidget() {
    const widget = document.getElementById('currencyWidget');
    if (!widget) return;
    
    try {
        let html = '';
        
        if (currentLang === 'be' || currentLang === 'ru') {
            // NBRB API для белорусов/русских
            const response = await fetch('https://api.nbrb.by/exrates/rates?periodicity=0');
            const data = await response.json();
            
            const currencies = ['USD', 'EUR', 'RUB', 'PLN', 'GBP'];
            currencies.forEach(code => {
                const item = data.find(c => c.Cur_Abbreviation === code);
                if (item) {
                    const rate = code === 'RUB' ? (item.Cur_OfficialRate / 100).toFixed(4) : item.Cur_OfficialRate.toFixed(2);
                    html += `
                        <div class="currency-item">
                            <span class="currency-name">${code}</span>
                            <span class="currency-rate">${rate} BYN</span>
                        </div>
                    `;
                    currencyRates[code] = parseFloat(rate);
                }
            });
        } else {
            // Open Exchange Rates для международных
            const response = await fetch('https://open.er-api.com/v6/latest/USD');
            const data = await response.json();
            
            const currencies = ['EUR', 'GBP', 'JPY', 'CNY', 'RUB', 'BYN'];
            currencies.forEach(code => {
                if (data.rates[code]) {
                    const rate = data.rates[code].toFixed(2);
                    html += `
                        <div class="currency-item">
                            <span class="currency-name">USD/${code}</span>
                            <span class="currency-rate">${rate}</span>
                        </div>
                    `;
                    currencyRates[code] = parseFloat(rate);
                }
            });
        }
        
        widget.innerHTML = html;
    } catch (error) {
        widget.innerHTML = '<p style="color: var(--text-muted);">Курсы недоступны</p>';
    }
}

// ===== СЧЁТЧИК ПОИСКОВ =====
function initSearchCounter() {
    const today = new Date().toDateString();
    const saved = localStorage.getItem('zornet_search_count');
    
    if (saved) {
        const data = JSON.parse(saved);
        if (data.date === today) {
            updateSearchCounterDisplay(data.count);
        } else {
            localStorage.setItem('zornet_search_count', JSON.stringify({ date: today, count: 0 }));
            updateSearchCounterDisplay(0);
        }
    } else {
        localStorage.setItem('zornet_search_count', JSON.stringify({ date: today, count: 0 }));
        updateSearchCounterDisplay(0);
    }
}

function incrementSearchCounter() {
    const today = new Date().toDateString();
    const saved = localStorage.getItem('zornet_search_count');
    const data = saved ? JSON.parse(saved) : { date: today, count: 0 };
    
    if (data.date === today) {
        data.count++;
    } else {
        data.date = today;
        data.count = 1;
    }
    
    localStorage.setItem('zornet_search_count', JSON.stringify(data));
    updateSearchCounterDisplay(data.count);
}

function updateSearchCounterDisplay(count) {
    const el = document.getElementById('searchCount');
    if (el) {
        el.textContent = count;
    }
}

// ===== ПОПУЛЯРНЫЕ ЗАПРОСЫ =====
function initPopularQueries() {
    updatePopularQueries();
}

function updatePopularQueries() {
    const container = document.getElementById('queryTags');
    if (!container) return;
    
    container.innerHTML = '';
    
    for (let i = 0; i < 10; i++) {
        const query = i18n[currentLang][`popular_query_${i}`] || '';
        if (query) {
            const tag = document.createElement('span');
            tag.className = 'query-tag';
            tag.textContent = query;
            tag.onclick = () => performSearch(query);
            container.appendChild(tag);
        }
    }
}

// ===== ИНТЕРЕСНЫЕ ФАКТЫ =====
function initFacts() {
    const facts = [
        "Самый длинный Wi-Fi в мире — 382 км, Индия",
        "Первый сайт в интернете работает до сих пор",
        "Google обрабатывает 8.5 млрд запросов в день",
        "40% интернета составляют автоматические боты",
        "Первое письмо по email отправлено в 1971 году",
        "В мире 5.4 миллиарда пользователей интернета",
        "YouTube загружают 500 часов видео каждую минуту",
        "Первая веб-камера снимала кофемашину в Кембридже",
        "Пароль '123456' используют 23 млн человек",
        "Первый домен в мире: symbolics.com (1985 год)"
    ];
    
    const container = document.getElementById('factsWidget');
    if (!container) return;
    
    // Выбираем 3 случайных факта
    const shuffled = facts.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    
    container.innerHTML = selected.map(fact => `<div class="fact-item">💡 ${fact}</div>`).join('');
}

// ===== НОВОСТИ =====
async function loadNews(category) {
    const grid = document.getElementById('newsGrid');
    if (!grid) return;
    
    // Обновляем активную вкладку
    document.querySelectorAll('.news-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event?.target?.classList.add('active');
    
    grid.innerHTML = '<div class="skeleton-loader"></div><div class="skeleton-loader"></div><div class="skeleton-loader"></div>';
    
    const rssUrls = {
        world: 'https://feeds.bbci.co.uk/news/rss.xml',
        tech: 'https://feeds.bbci.co.uk/news/technology/rss.xml',
        sport: 'https://feeds.bbci.co.uk/news/sport/rss.xml'
    };
    
    try {
        const proxyUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(rssUrls[category]);
        const response = await fetch(proxyUrl);
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');
        
        let html = '';
        for (let i = 0; i < Math.min(12, items.length); i++) {
            const title = items[i].querySelector('title')?.textContent || '';
            const link = items[i].querySelector('link')?.textContent || '';
            const desc = items[i].querySelector('description')?.textContent || '';
            const preview = desc.substring(0, 150) + '...';
            
            html += `
                <div class="news-card">
                    <h3><a href="${link}" target="_blank">${title}</a></h3>
                    <div class="news-meta">BBC News</div>
                    <p>${preview}</p>
                </div>
            `;
        }
        
        grid.innerHTML = html;
    } catch (error) {
        grid.innerHTML = `<p style="color: var(--text-muted);">${i18n[currentLang].news_error}</p>`;
    }
}

// ===== ПОГОДА =====
function initWeatherPage() {
    // Страница уже инициализирована
}

async function searchWeatherCity() {
    const input = document.getElementById('weatherSearchInput');
    const query = input?.value || '';
    if (!query.trim()) return;
    
    const resultsDiv = document.getElementById('weatherCityResults');
    resultsDiv.innerHTML = '<p>Поиск...</p>';
    
    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=${currentLang}`);
        const data = await response.json();
        
        if (!data.results || data.results.length === 0) {
            resultsDiv.innerHTML = '<p>Город не найден</p>';
            return;
        }
        
        let html = '';
        data.results.forEach(city => {
            html += `
                <div class="weather-city-item" onclick="selectWeatherCity(${city.latitude}, ${city.longitude}, '${city.name}')">
                    ${city.name}, ${city.country}
                </div>
            `;
        });
        
        resultsDiv.innerHTML = html;
    } catch (error) {
        resultsDiv.innerHTML = '<p>Ошибка поиска</p>';
    }
}

async function selectWeatherCity(lat, lon, name) {
    document.getElementById('weatherCityResults').innerHTML = '';
    const mainDiv = document.getElementById('weatherMain');
    mainDiv.innerHTML = '<div class="skeleton-loader"></div>';
    
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,windspeed_10m,relativehumidity_2m,apparent_temperature&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=7`);
        const data = await response.json();
        
        const weatherCodes = {
            0: '☀️', 1: '🌤', 2: '⛅', 3: '☁️',
            45: '🌫', 48: '🌫', 51: '🌦', 53: '🌦', 55: '🌧',
            61: '🌧', 63: '🌧', 65: '🌧', 71: '❄️', 73: '❄️',
            75: '❄️', 80: '🌦', 81: '🌦', 82: '⛈', 95: '⛈'
        };
        
        const icon = weatherCodes[data.current.weathercode] || '🌤';
        const temp = Math.round(data.current.temperature_2m);
        const feels = Math.round(data.current.apparent_temperature);
        const humidity = data.current.relativehumidity_2m;
        const wind = Math.round(data.current.windspeed_10m);
        
        let html = `
            <div class="weather-current">
                <h2>${name}</h2>
                <div class="weather-current-icon">${icon}</div>
                <div class="weather-current-temp">${temp}°C</div>
                <div class="weather-current-details">
                    <span>${i18n[currentLang].weather_feels}: ${feels}°C</span>
                    <span>${i18n[currentLang].weather_humidity}: ${humidity}%</span>
                    <span>${i18n[currentLang].weather_wind}: ${wind} km/h</span>
                </div>
            </div>
            <div class="weather-forecast-week">
                <h3>${i18n[currentLang].weather_forecast}</h3>
                <div class="forecast-days">
        `;
        
        for (let i = 0; i < 7; i++) {
            const dayIcon = weatherCodes[data.daily.weathercode[i]] || '🌤';
            const maxTemp = Math.round(data.daily.temperature_2m_max[i]);
            const minTemp = Math.round(data.daily.temperature_2m_min[i]);
            const date = new Date(data.daily.time[i]);
            const dayName = date.toLocaleDateString(currentLang === 'ru' ? 'ru-RU' : currentLang === 'be' ? 'be-BY' : 'en-US', { weekday: 'short' });
            
            html += `
                <div class="forecast-day-card">
                    <div class="day">${dayName}</div>
                    <div class="icon">${dayIcon}</div>
                    <div class="temp">${maxTemp}° / ${minTemp}°</div>
                </div>
            `;
        }
        
        html += '</div></div>';
        mainDiv.innerHTML = html;
    } catch (error) {
        mainDiv.innerHTML = '<p style="color: var(--text-muted);">Ошибка загрузки погоды</p>';
    }
}

async function getWeather
