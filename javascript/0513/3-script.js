// let x = 10;
// let y = 4;
// 위 선언은 아래에서 다시 선언되므로 실행에는 영향 없음

let x = 10, y = 4, result; // x = 10, y = 4, result는 아직 값 없음

console.log(result); // undefined (초기화되지 않은 변수는 undefined)

// 다양한 초기값 실험 (마지막 값만 적용됨)
result = null;   // null: 명시적으로 "값 없음"
result = 0;      // 숫자 0
result = '';     // 빈 문자열
result = ' ';    // 공백 문자 하나 (보이지 않지만 존재하는 문자)
console.log(result); // 공백 문자 출력: ' '

// 전위 증가 연산자: 먼저 x를 1 증가시킨 다음 그 값을 y에 대입
y = ++x; // x = 11, y = 11
console.log(y); // 11

// 후위 감소 연산자: y 값을 x에 먼저 대입한 후 y를 1 감소
x = y--; // x = 11, y = 10
console.log(x, y); // 11, 10

// 후위 감소 포함된 연산: x + y 사용 후 y 감소
result = x + y--; // result = 11 + 10 = 21, 이후 y = 9
console.log(result); // 21
console.log(result, x, y); // 21, 11, 9

// 전위 증가 포함된 연산: x 증가 후 y와의 차 계산
result = ++x - y; // x = 12, y = 9 → result = 12 - 9 = 3
console.log(result, x, y); // 3, 12, 9



// 문자열 연결 실습
let txt = null;

// 아래 코드는 숫자(result = 3)와 문자열("값 입니다.")를 + 연산자로 연결
// 이때 JS는 숫자 3을 문자열 "3"으로 자동 변환함 (자동 형변환)
// 따라서 최종 결과는 "3값 입니다."라는 문자열
txt = result + "값 입니다.";
txt = `${result} 값 입니다.`;
console.log(txt); // "3값 입니다."
console.log(typeof(txt)); // string

 

console.log(4>2); //true
console.log('a'>'b'); //false
console.log('javascript'>'JAVASCRIPT'); //true
//JAVASCRIPT, javascript : 전부다 대무자나 소문자로 변겨ㅓㅇ
const user = "hello"; //true
//number() : 이미 만들어져 있는 객체 > 내장 객체
console.log(user.toLowerCase()); //hello > string 내장객체
console.log(user.toUpperCase()); //HELLO