let grade = "vip";

// if-else 조건문을 사용한 할인 조건 판단
if (grade === "vip") {
    console.log("20%할인"); // grade가 "vip"일 경우
} else if (grade === "gold") {
    console.log("10%할인"); // grade가 "gold"일 경우
} else {
    console.log("기본혜택"); // 그 외의 경우
}

// switch 문을 사용한 같은 조건 판단
switch (grade) {
    case "vip":
        console.log("20%할인"); // "vip"일 경우 출력
        // break; // break가 없으므로 다음 case도 실행됨 (fall-through 현상)
    case "gold":
        console.log("10%할인"); // "gold"도 실행됨
        // break;
    default:
        console.log("기본혜택"); // break가 없으므로 기본값도 실행됨
}

// → 따라서 "20%할인", "10%할인", "기본혜택" 모두 출력됨

let month = 4; // 현재 월

// 계절에 따라 출력하는 switch문
switch (month) {
    case 3:
    case 4:
    case 5:
        console.log("봄입니다."); // 3, 4, 5일 경우 "봄입니다." 출력
        break;
    case 6:
    case 7:
    case 8:
        console.log("봄입니다."); // 6, 7, 8일 경우도 봄으로 출력되어 있음 (오류 가능성 있음)
        break;
    case 9:
    case 10:
    case 11:
        console.log("가을입니다."); // 9~11월
        break;
    default:
        console.log("겨울입니다."); // 나머지 (1, 2, 12월 등)
}

// ↑ 참고: 6~8월도 "봄입니다."로 되어 있음 → "여름입니다."로 고치면 더 정확

const number = 5; // 숫자 5

// 3으로 나눈 나머지에 따라 분기
switch (number % 3) {
    case 0:
        console.log("3의 배수입니다.");
        break;
    case 1:
        console.log("나머지가 1입니다."); // 5 % 3 == 2 → 이 case는 실행 안됨
        break;
    case 2:
        console.log("나머지가 2입니다."); // 실행됨
        break;
}
