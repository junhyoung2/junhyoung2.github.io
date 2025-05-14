/*
시간 계산기 
1. 오늘 현재 날짜를 먼저 읽어온다. (년/월/일)
2. select 박스에서 연/월/일 값을 읽어와 Date 객체로 변환한다.
3. 결과보기 버튼을 클릭하면 시작일, 목표일을 Date 객체로 만들고 콘솔에 출력한다.
4. 월(month)은 0부터 시작하므로 반드시 -1을 해줘야 원하는 달이 나온다.
5. settoday() 함수는 오늘 날짜를 select 박스에 자동으로 세팅해준다.
6. setselectDate 함수는 select 박스의 값을 변경할 때 사용한다.
7. getselectDate 함수는 select 박스에서 선택된 값을 읽어올 때 사용한다.
8. 추후 D-Day 계산, 날짜 차이 계산, 화면 출력 등 확장 가능!
*/

/*
[복습 포인트]
- Date 객체 생성 시 월(month)은 0부터 시작!
- select 박스 값 읽기/설정 함수 패턴 익히기
- 버튼 클릭 이벤트로 동작 연결
- 추후 날짜 차이 계산, D-Day 표시, 화면 출력 등으로 확장 가능
*/


/*=== 복습 가이드 ===
- Date 객체 생성 시 월(month)은 0부터 시작하므로 반드시 -1을 해줘야 원하는 달이 나옴
- select 박스 값 읽기/설정 함수 패턴 익히기(getselectDate, setselectDate)
- 버튼 클릭 이벤트로 동작 연결(addEventListener)
- 날짜 차이 계산(밀리초 → 일, 시, 분, 초 변환 공식)
- 화면 출력(document.querySelector().textContent)
- 필요시 남은 시간 계산 공식 보완 및 확장 가능
*/



// 결과보기 버튼 요소 선택
const $resultbtn = document.querySelector("button");

// select 박스에서 값(value) 읽어오는 함수
// id를 받아 해당 select 요소의 value를 반환
const getselectDate = (id) => {
    const elem = document.querySelector(`#${id}`);
    return elem.value;
};

// 결과보기 버튼 클릭 시 실행
$resultbtn.addEventListener("click", () => {
    console.log("결과보기 클릭");

    // 시작 날짜 Date 객체 생성 (월은 0부터 시작이므로 -1)
    // getselectDate로 select 박스에서 값을 읽어와 Date 객체 생성
    const startDate = new Date(
        getselectDate("start-year"),
        getselectDate("start-month") - 1, // 월은 0부터 시작
        getselectDate("start-day")
    );
    // 목표 날짜 Date 객체 생성
    const targetDate = new Date(
        getselectDate("target-year"),
        getselectDate("target-month") - 1,
        getselectDate("target-day")
    );

    // 두 날짜의 차이(밀리초)
    const diff = targetDate - startDate;

    // 날짜 차이 계산 (일, 시, 분, 초)
    const diffdays = Math.floor(diff / (1000 * 60 * 60 * 24)); // 남은 일수
    const diffhours =
        Math.floor(diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24); // 남은 시간(잘못된 계산, 필요시 수정)
    const diffminutes = Math.floor(diff % (1000 * 60 * 60 * 24)) / (1000 * 60); // 남은 분(잘못된 계산, 필요시 수정)
    const diffseconds = Math.floor(diff % (1000 * 60 * 60 * 24)) / 1000; // 남은 초(잘못된 계산, 필요시 수정)

    // 날짜 차이가 0 이하(목표일이 시작일보다 빠름)일 때 안내
    if (diff <= 0) {
        document.querySelector(".dday").textContent =
            "목표일이 시작일보다 빠릅니다.";
    } else {
        // 남은 날짜, 시간 등 화면에 출력
        document.querySelector(
            ".dday"
        ).textContent = `남은 날짜 : ${diffdays}일`;
        document.querySelector(
            ".dtime"
        ).textContent = `남은 시간 : ${diffdays}일 ${diffhours}시 ${diffminutes}분 ${diffseconds}초`;
    }

    // 두 날짜를 콘솔에 사람이 읽기 쉬운 형식으로 출력
    console.log(startDate.toDateString(), targetDate.toDateString());
});

// select 박스의 값을 변경하는 함수
// id와 value를 받아 해당 select 요소의 값을 변경
const setselectDate = (id, value) => {
    const $select = document.querySelector(`#${id}`);
    $select.value = value;
};

// 오늘 날짜를 select 박스에 자동으로 세팅하는 함수
const settoday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // getMonth()는 0~11이므로 +1
    const day = today.getDate();
    setselectDate("start-year", year);
    setselectDate("start-month", month);
    setselectDate("start-day", day);

    // 하단에 오늘 날짜를 출력
    const elem = document.querySelector(".today");
    elem.textContent = `현재날짜 : ${today.toLocaleString()}`;
};

// 1초마다 오늘 날짜를 select 박스와 화면에 자동 세팅 (실시간 갱신)
setInterval(settoday, 1000);

// 페이지 로드 시 오늘 날짜로 select 박스 초기화
window.onload = () => {
    settoday();
};


