// HTML에서 <button> 요소를 선택하여 btnelem에 저장
const btnelem = document.querySelector("button");

// 콘솔에 버튼 요소를 출력하려고 시도함
console.log(btnelem); // ⚠️ null → DOM이 아직 준비되지 않은 시점에 실행되어 버튼을 찾지 못함

// [주석 처리됨]
// 선택한 요소의 타입 확인
// console.log(typeof btnelem); // 'object' 또는 'null' 출력됨 → btnelem이 null인 상태에서는 'object'가 아니라 'null'로 뜰 수 있음

// [주석 처리됨]
// 버튼 요소 자체를 콘솔에 출력
// console.log(btnelem); // 실제 <button> 요소 확인 가능 → 하지만 위에서 null이면 이 출력도 의미 없음

// ⚠️ 이 줄은 btnelem이 null일 경우 에러 발생 (Cannot read properties of null)
btnelem.style.border = "none"; // 버튼의 테두리를 없앰

// 팝업을 띄우는 함수 정의
const popupbox = () => {
    alert("팝업표시"); // alert 창 출력
};

// [잘못된 방식 - 주석 처리됨]
// popupbox()는 함수 실행 결과를 이벤트 핸들러로 등록함 → 즉시 실행됨!
// btnelem.onclick = popupbox(); 
// 이렇게 하면 '팝업표시'가 페이지 로딩할 때 즉시 뜨고, 클릭 시 아무 동작도 하지 않음
  
// [올바른 방식]
// popupbox라는 "함수 자체"를 클릭 이벤트에 등록 → 클릭할 때 실행됨
btnelem.addEventListener("click", popupbox);
