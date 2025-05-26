const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const chatContainer = document.getElementById("chat-container");
const startInput = document.getElementById("start-word");
const wordInput = document.getElementById("word-input");

const chatLog = [];

function formatTime() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
}

function startGame() {
    const word = startInput.value.trim();
    if (!word) {
        alert("시작 단어를 입력해주세요!");
        return;
    }
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    addMessage(word, "left");
}

function submitWord() {
    const word = wordInput.value.trim();
    if (!word) return;
    const lastWord =
        chatLog.length > 0 ? chatLog[chatLog.length - 1].word : null;
    if (lastWord && lastWord.charAt(lastWord.length - 1) !== word.charAt(0)) {
        alert("끝말이 맞지 않아요!");
        return;
    }
    addMessage(word, "right");
    wordInput.value = "";
}

function addMessage(word, side) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `chat-message ${side}`;
    // 말풍선 텍스트와 시간 분리
    messageDiv.innerHTML = `
    <span class="bubble-text">${word}</span>
    <div class="timestamp">${formatTime()}</div>
  `;
    chatContainer.appendChild(messageDiv);

    chatLog.push({ word, side });
    if (chatLog.length > 4) {
        chatLog.shift();
        chatContainer.removeChild(chatContainer.firstChild);
    }
}
