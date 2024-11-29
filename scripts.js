let tg = window.Telegram.WebApp;

let fBtn = document.getElementsByClassName("f-btn")[0];
let sBtn = document.getElementsByClassName("s-btn")[0];
let uBtn = document.getElementsByClassName("u-btn")[0];
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
});

// Возвращаемся на главный экран
mainBtn.addEventListener("click", () => {
    document.getElementsByClassName("test-form")[0].style.display = "none";
    document.getElementsByClassName("Main")[0].style.display = "block";
});

// Создаём базу данных SQLite
dbBtn.addEventListener("click", async () => {
    try {
        // Данные для создания файла
        const dbContent = `
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                chat_id INTEGER NOT NULL
            );
        `;
                // Создание Blob для файла SQLite
                const blob = new Blob([dbContent], { type: "text/plain" });
                const dbFile = URL.createObjectURL(blob);
        
                // Создаём ссылку для скачивания
                const a = document.createElement("a");
                a.href = dbFile;
                a.download = "database.sql";
                document.body.appendChild(a);
                a.click();
                        // Уведомляем пользователя
        alert("Файл базы данных создан и загружен!");
    } catch (error) {
        console.error("Ошибка при создании базы данных:", error);
        alert("Произошла ошибка при создании базы данных.");
    }
});