let num1 = 40;
let num2 = 30;

// num1과 num2의 합을 저장하시오
let value = num1 + num2;
console.log(value);

// num1과 num2의 값을 곱한 후 저장하시오
value = num1 * num2;
console.log(value);

// num1과 num2의 값을 빼고 저장하시오
value = num1 - num2;
console.log(value);

// num1과 num2의 값을 나누고 저장하시오
value = num1 / num2;
console.log(value);

//  num1과 num2의 나머지 값
value = num1 % num2;
console.log(value);

if (value % 2) {
    // value를 2로 나눈 나머지가 1이면 (즉, 홀수이면)
    console.log("홀수"); // "홀수"를 콘솔에 출력
} else {
    // 그렇지 않으면 (즉, 나머지가 0이면 = 짝수이면)
    console.log("짝수"); // "짝수"를 콘솔에 출력
}

// 숫자로 4칙연산

// 문자로 4칙연산 + - * /

let str1 = "학교종이"; // 문자열 "학교종이"를 변수 str1에 저장
let str2 = "땡땡땡"; // 문자열 "땡땡땡"을 변수 str2에 저장
let str3 = "어서모이자"; // 문자열 "어서모이자"를 변수 str3에 저장
let str4 = "선생님이우리를"; // 문자열 "선생님이우리를"를 변수 str4에 저장
let str5 = "기다리신다~"; // 문자열 "기다리신다~"를 변수 str5에 저장

console.log(str1 + str2 + str3 + str4 + str5);
// 모든 문자열을 순서대로 연결해서 출력 → "학교종이땡땡땡어서모이자선생님이우리를기다리신다~"

console.log(str1 - str2);
// 문자열 간의 뺄셈은 정의되지 않음 → NaN (Not a Number)을 출력

str1 = 123; // 숫자 123을 변수 str1에 할당 (자료형: number)
str2 = "숫자합하기"; // 문자열 "숫자합하기"를 변수 str2에 할당 (자료형: string)

console.log(str1 + str2); // 숫자 123과 문자열 "숫자합하기"를 더함 → 숫자가 문자열로 변환되어 "123숫자합하기" 출력

console.log("3" + 4 + 5); // 문자열 "3"과 숫자 4를 더하면 "34", 거기에 5를 더하면 "345" → 모두 문자열로 연결됨

console.log(3 + 4 + "5"); // 숫자 3과 4를 더하면 7, 거기에 문자열 "5"를 더하면 "75" → 숫자 덧셈 후 문자열로 변환됨

console.log(5 + 3); // 숫자 5와 3을 더함 → 결과: 8 (숫자 덧셈)

console.log("5" + 3); // 문자열 "5"와 숫자 3을 연결 → 결과: "53" (문자열로 변환되어 연결됨)

console.log("5" - 3); // 문자열 "5"를 숫자로 변환한 후 3을 뺌 → 결과: 2 (자동 형 변환 발생)

console.log("5" * 2); // 문자열 "5"를 숫자로 변환한 후 2와 곱함 → 결과: 10
console.log("5px" - 1); // 문자열 "5px"은 숫자로 변환할 수 없으므로 결과는 NaN (Not a Number)
console.log("나는 '홍길동'이다"); 


let data1 = 25; // 변수 data1에 숫자 25를 저장
let data2 = 48; // 변수 data2에 숫자 48을 저장

console.log(`${data1}+${data2}=${data1+data2}`);  // 템플릿 리터럴을 사용해 문자열 안에 변수 값을 삽입 >>> 출력 결과: "25+48=73"


