// 모든 .open-popup 요소를 선택
// querySelectorAll을 사용하여 .open-popup 클래스를 가진 모든 요소를 선택하고, 이를 NodeList로 반환합니다.
// 이 NodeList는 각 공지사항 항목을 나타냅니다.
const elems = document.querySelectorAll(".open-popup");

// .popup 클래스를 가진 팝업 요소를 선택
// 팝업 전체를 나타내는 .popup 요소를 선택합니다. 이 요소는 팝업의 배경과 내용을 포함합니다.
const popup = document.querySelector(".popup");

// .popup-box 내부의 닫기 버튼을 선택
// 팝업 내부에 있는 닫기 버튼을 선택합니다. 이 버튼은 팝업을 닫는 역할을 합니다.
const btn = document.querySelector(".popup-box > button");

// 각 .open-popup 요소에 클릭 이벤트 추가
// NodeList의 각 요소(elems)를 순회하며 클릭 이벤트를 추가합니다.
elems.forEach((elem) => {
    elem.addEventListener("click", () => {
        // 클릭된 공지사항 항목에 대해 팝업을 표시합니다.
        // 팝업의 display 속성을 "block"으로 설정하여 화면에 보이도록 만듭니다.
        popup.style.display = "block";
    });
});

// 닫기 버튼 클릭 시 팝업 닫기
// 닫기 버튼에 클릭 이벤트를 추가합니다.
btn.addEventListener("click", () => {
    // 닫기 버튼이 클릭되면 팝업의 display 속성을 "none"으로 설정하여 화면에서 숨깁니다.
    popup.style.display = "none";
});









// // .open-popup 클래스를 가진 첫 번째 요소를 선택
// const elem = document.querySelector(".open-popup");

// // .popup 클래스를 가진 팝업 요소를 선택
// const popup = document.querySelector('.popup');

// // .open-popup 요소를 클릭했을 때 팝업을 표시
// elem.addEventListener('click', () => {
//     popup.style.display = 'block'; // 팝업을 보이도록 설정
// });

// // .popup-box 내부의 닫기 버튼을 선택
// const btn = document.querySelector(".popup-box>button");

// // 닫기 버튼을 클릭했을 때 팝업을 숨김
// btn.addEventListener("click", () => {
//     popup.style.display = 'none'; // 팝업을 숨기도록 설정
// });