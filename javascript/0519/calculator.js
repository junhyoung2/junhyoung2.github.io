// 계산기 버튼 목록 정의 (텍스트와 클래스명)
const buttons = [
    { text: "AC", classname: "ac" },
    { text: "/" },
    { text: "7" },
    { text: "8" },
    { text: "9" },
    { text: "*" },
    { text: "4" },
    { text: "5" },
    { text: "6" },
    { text: "-" },
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { text: "+" },
    { text: "0", classname: "zero" },
    { text: "." },
    { text: "=", classname: "equals" },
];

// 계산기 입력값을 저장할 변수
let displaycalc = "";

// 버튼 클릭 시 동작하는 함수
const onbtnclick = (e) => {
    let type = e.target.textContent;
    switch (type) {
        case "AC": // AC 버튼: 입력값 초기화
            displaycalc = '';
            inputbox.value = displaycalc;
            break;
        case "=": // = 버튼: 계산 실행
            let result = eval(displaycalc); // eval로 계산 (실제 서비스에서는 보안상 eval 사용 지양)
            displaycalc = result;
            inputbox.value = displaycalc;
            break;
        default: // 숫자, 연산자, 소수점 등 입력
            displaycalc += type;
            inputbox.value = displaycalc;
            break;
    }
};

// 버튼을 감쌀 div(.btn-wrap)에서 버튼 생성 및 이벤트 등록
const btnWrap = document.querySelector(".btn-wrap");
buttons.forEach((btn) => {
    const elem = document.createElement("button");
    elem.textContent = btn.text;
    if (btn.classname) {
        elem.className = btn.classname; // 클래스명 적용
    }
    elem.addEventListener("click", onbtnclick); // 클릭 이벤트 연결
    btnWrap.appendChild(elem); // 버튼을 btnWrap에 추가
});

// 입력값을 표시할 input 요소 선택 (맨 마지막에 선언되어야 함)
const inputbox = document.querySelector("input");

/*
[가이드]
- buttons 배열을 기반으로 계산기 버튼을 동적으로 생성합니다.
- 각 버튼 클릭 시 onbtnclick 함수가 실행되어 계산기 동작을 처리합니다.
- 입력창(inputbox)은 마지막에 선택해야 정상 동작합니다(코드 순서 주의).
- eval()은 간단한 예제에서만 사용하세요. (실제 서비스에서는 보안상 위험)
- .btn-wrap과 input 요소가 HTML에 있어야 정상 동작합니다.
*/