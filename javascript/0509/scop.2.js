let value = true; // 전역 변수 value 선언 및 true로 초기화
let aaa = "전역변수";


if (value) {
    // value가 true이므로 if 블록 실행
    let aaa = "value가 true"; // aaa는 이 블록 안에서만 유효한 지역 변수 (블록 스코프)
}

console.log(aaa); // 오류 발생! ReferenceError: aaa is not defined
