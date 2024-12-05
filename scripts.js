let tg = window.Telegram.WebApp;

let fBtn = document.getElementsByClassName("f-btn")[0];
let sBtn = document.getElementsByClassName("s-btn")[0];
let uBtn = document.getElementsByClassName("u-btn")[0];
let mainBtn = document.getElementsByClassName("main-btn")[0];
let dbBtn = document.getElementsByClassName("db-btn")[0];
let MainButton = tg.MainButton;
let BottomButton=tg.BottomButton;
let BottomButtonClicked=tg.BottomButtonClicked;

//Скрываем главный экран и показываем форму
fBtn.addEventListener("click", () => {
    document.getElementsByClassName("Main")[0].style.display = "none";
     document.getElementsByClassName("test-form")[0].style.display = "block";
 });

MainButton.show();
BottomButton.show();

BottomButton.setText("BottomButton");
BottomButtonClicked.onClicked(() => {
    handleChargingStationsListWOReg(bot, msg) ;
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
 //   let platform = tg.initDataUnsafe.platform || "Неизвестный пользователь";
 //   alert(`Username: ${platform}`);
    let chatId = tg.initDataUnsafe?.user?.id || 'ID чата недоступен';
    alert(`Chat ID: ${chatId}`);

});

// Возвращаемся на главный экран
mainBtn.addEventListener("click", () => {
    document.getElementsByClassName("test-form")[0].style.display = "none";
    document.getElementsByClassName("Main")[0].style.display = "block";
});

secondaryButtonClicked