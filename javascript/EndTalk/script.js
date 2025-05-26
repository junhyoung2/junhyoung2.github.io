const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const chatContainer = document.getElementById("chat-container");
const startInput = document.getElementById("start-word");
const wordInput = document.getElementById("word-input");

const wordLog = [];

startInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startGame();
    }
});

wordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        submitWord();
    }
});

let isLeftTurn = false; // 턴에 따라 왼쪽, 오른쪽 메시지 표시

function formatTime() {
    const now = new Date();
    // 시, 분 모두 두 자리 숫자로 포맷
    return `${now.getHours().toString().padStart(2, "0")}:${now
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
}

function startGame() {
    const word = startInput.value.trim();
    if (!word) {
        alert("시작 단어를 입력해주세요!");
        return;
    }
    resetChat(); // 초기화
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    addMessage(word, "left"); // 시작 단어는 항상 왼쪽
}

function submitWord() {
    const word = wordInput.value.trim();
    if (!word) {
        alert("단어를 입력해주세요!");
        return;
    }

    const lastWord =
        wordLog.length > 0 ? wordLog[wordLog.length - 1].word : null;
    if (lastWord && lastWord.charAt(lastWord.length - 1) !== word.charAt(0)) {
        alert("끝말이 맞지 않아요!");
        return;
    }

    const side = isLeftTurn ? "left" : "right";
    addMessage(word, side);
    wordInput.value = "";
    isLeftTurn = !isLeftTurn;
}

function addMessage(word, side) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `chat-message ${side}`;
    messageDiv.innerHTML = `
        <span class="bubble-text">${word}</span>
        <div class="timestamp">${formatTime()}</div>
    `;
    chatContainer.appendChild(messageDiv);

    wordLog.push({ word, side });

    // 최대 메시지 제한 (5개 유지)
    if (wordLog.length > 4) {
        wordLog.shift();
        chatContainer.removeChild(chatContainer.firstChild);
    }

    // 스크롤 아래로 자동 이동
    // chatContainer.scrollTop = chatContainer.scrollHeight;
}

function resetChat() {
    chatContainer.innerHTML = "";
    wordLog.length = 0;
    isLeftTurn = false;
}

// 뒤로가기 버튼 동작
document.querySelector(".leftbtn").addEventListener("click", () => {
    console.log("뒤로가기 클릭됨");
    resetChat();
    startScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    startInput.value = "";
});


//모바일 키보드 대응
function setVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setVh);
window.addEventListener('load', setVh);
