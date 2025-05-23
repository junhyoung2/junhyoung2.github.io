const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const chatContainer = document.getElementById("chat-container");
const startInput = document.getElementById("start-word");
const wordInput = document.getElementById("word-input");

const chatLog = [];


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



let isLeftTurn = false; // 사용자 입력 시 좌우 교차 표시

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
    addMessage(word, "left"); // 제시어는 항상 왼쪽
}

function submitWord() {
    const word = wordInput.value.trim();
    if (!word) {
        alert("단어를 입력해주세요!");
        return;
    }

    const lastWord =
        chatLog.length > 0 ? chatLog[chatLog.length - 1].word : null;
    if (lastWord && lastWord.charAt(lastWord.length - 1) !== word.charAt(0)) {
        alert("끝말이 맞지 않아요!");
        return;
    }

    const side = isLeftTurn ? "left" : "right"; // 사용자 입력은 좌우 번갈아가며
    addMessage(word, side);
    wordInput.value = "";
    isLeftTurn = !isLeftTurn; // 턴 전환
}

function addMessage(word, side) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `chat-message ${side}`;
    messageDiv.innerHTML = `
        <span class="bubble-text">${word}</span>
        <div class="timestamp">${formatTime()}</div>
    `;
    chatContainer.appendChild(messageDiv);

    chatLog.push({ word, side });

    // 최대 메세지 제한한
    // if (chatLog.length > 4) {
    //     chatLog.shift();
    //     chatContainer.removeChild(chatContainer.firstChild);
    // }
}

document.querySelector(".leftbtn").addEventListener("click", () => {
    console.log("뒤로가기 클릭됨");
    startScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    chatContainer.innerHTML = "";
    chatLog.length = 0;
    isLeftTurn = false;
    startInput.value = "";
    console.log("startInput.value 초기화:", startInput.value);
});

function showStartScreen() {
    startScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
    chatContainer.innerHTML = "";
    chatLog.length = 0;
    isLeftTurn = false;
    startInput.value = "";
}

document.querySelector(".leftbtn").addEventListener("click", showStartScreen);
