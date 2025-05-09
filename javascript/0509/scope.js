let value; // 변수 value를 선언하지만 초기화하지 않음 (기본값은 undefined)
console.log(value); // undefined 출력

{
    let data; // 블록 스코프 내에서 변수 data 선언 (초기화되지 않음)
    console.log(data); // undefined 출력
} // 이 블록이 끝나면 data 변수는 더 이상 접근할 수 없음 (블록 스코프)

data = "추가설정"; // 오류 발생! data는 블록 내에서 선언된 변수라서 여기서 접근 불가 (ReferenceError)
console.log(data); // 위 줄에서 오류가 발생했기 때문에 이 줄도 실행되지 않음

if (value) { // value는 undefined → falsy 값 → else 블록 실행
    let add = "value가 true";
} else {
    add = "value가 false"; // 오류 발생! let으로 선언하지 않고 값을 할당해서 ReferenceError 발생
}
console.log(add); // 위에서 add는 선언되지 않았기 때문에 또 오류 발생 (ReferenceError)
