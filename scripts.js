let tg = window.Telegram.WebApp;

let fBtn = document.getElementsByClassName("f-btn")[0];
let sBtn = document.getElementsByClassName("s-btn")[0];
let uBtn = document.getElementsByClassName("u-btn")[0];
let tBtn = document.getElementsByClassName("t-btn")[0];
let mainBtn = document.getElementsByClassName("main-btn")[0];
let dbBtn = document.getElementsByClassName("db-btn")[0];

// Скрываем главный экран и показываем форму
fBtn.addEventListener("click", () => {
    document.getElementsByClassName("Main")[0].style.display = "none";
    document.getElementsByClassName("test-form")[0].style.display = "block";
});

// Закрываем WebApp
sBtn.addEventListener("click", () => {
    tg.close();
});

// Показываем имя пользователя
uBtn.addEventListener("click", () => {
    let username = tg.initDataUnsafe.user?.username || "Неизвестный пользователь";
    alert(`Username: ${username}`);
    let chatId = tg.initDataUnsafe?.user?.id || 'ID чата недоступен';
    alert(`Chat ID: ${chatId}`);
});

tBtn.addEventListener("click", () => {
//    let platform = tg.initDataUnsafe.platform || "Неизвестный пользователь";
    let platform = tg.initDataUnsafe?.platform || "Неизвестная платформа";
    alert(`Платфома: ${platform}`);
});

// Возвращаемся на главный экран
mainBtn.addEventListener("click", () => {
    document.getElementsByClassName("test-form")[0].style.display = "none";
    document.getElementsByClassName("Main")[0].style.display = "block";
});

