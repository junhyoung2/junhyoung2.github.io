// // ✅ 사칙(산술) 연산자 예제
// console.log(10 + 5);     // 덧셈 → 15
// console.log(20 - 7);     // 뺄셈 → 13
// console.log(4 * 3);      // 곱셈 → 12
// console.log(15 / 3);     // 나눗셈 → 5
// console.log(10 % 3);     // 나머지 → 1

// // ✅ 문자열 연산 예제
// const str1 = "hello";
// const str2 = "world";

// // 문자열 템플릿 사용 (문자열 보간)
// console.log(`${str1} ${str2}`);   // 출력: "hello world"

// // 문자열 + 문자열 (일반 연결)
// console.log(str1 + ` ` + str2);   // 출력: "hello world"

// // 문자 + 숫자 = 문자열 (숫자가 문자열로 변환됨)
// console.log(str1 + 4);            // 출력: "hello4"
// console.log("10" + 4);            // 출력: "104" (숫자 4가 문자로 변환되어 연결됨)

// // 문자열에서 숫자 빼기 → 문자열이 숫자로 변환될 수 있으면 계산됨
// console.log("10" - 4);            // 출력: 6

// // 숫자로 변환 불가능한 문자열은 NaN(Not a Number)을 반환
// console.log("aaa" - 4);           // 출력: NaN

// // 곱셈도 마찬가지 → 문자열이 숫자로 변환될 수 있으면 계산됨
// console.log("10" * 3);            // 출력: 30


// //--------------------------------------------------------------------------------------
// // ✅ 문자, 숫자가 서로 연산
// let txt = "35";          // 문자열로 된 숫자 "35"
// txt = Number(txt);       // 문자열을 숫자로 변환 → 35
// console.log(txt, typeof(txt));  // 출력: 35 'number'

// // ✅ 대입 연산자 (복합 대입 연산 포함)
// let a = 10;
// a = a + 5;   // 15
// a += 5;      // 20
// a = a - 5;   // 15
// a -= 5;      // 10
// a = a * 3;   // 30
// a *= 3;      // 90
// a /= 3;      // 30
// a %= 4;      // 2 → 30 % 4 = 2 (나머지)
// console.log(a);  // 출력: 2

// // ✅ 증감 연산자
// let b = 6;
// let c = 0;

// c = b++;             // 후위 증가: c = 6, b = 7
// console.log(b);      // 출력: 7
// console.log(c);      // 출력: 6

// c = ++b;             // 전위 증가: b = 8, c = 8
// console.log(b, c);   // 출력: 8 8

// c = b++;             // 후위 증가: c = 8, b = 9
// console.log(b, c);   // 출력: 9 8

// c = b--;             // 후위 감소: c = 9, b = 8
// console.log(b, c);   // 출력: 8 9

// c = --b;             // 전위 감소: b = 7, c = 7
// console.log(b, c);   // 출력: 7 7

// // ✅ 전위/후위 증감 연산자 실습
// let x = 5;
// x++;                           // x = 6
// console.log(x);               // 출력: 6
// console.log("현재페이지 :", x++); // 출력: 현재페이지 : 6 (출력 후 x = 7)
// console.log("다음페이지:", x);    // 출력: 다음페이지: 7

// // ✅ 타이머 예시 (전위 감소)
// let time = 5;
// console.log("타이머 시작");   // 출력: 타이머 시작
// console.log(--time);          // 4
// console.log(--time);          // 3

// // ✅ 방문자 수 증가 예시 (전위 증가)
// let visitor = 0;
// visitor++;   // 1
// visitor++;   // 2
// visitor++;   // 3
// console.log("총 방문자 :", visitor);  // 출력: 총 방문자 : 3

// // ✅ 후위 계산 예시
// let y = 10;
// console.log("y", y++);   // 출력: y 10 (출력 후 y = 11)
// console.log("y", y);     // 출력: y 11

// // ✅ count 변수 증감 테스트
// let count = 0;
// count++;         // 1 (후위 증가)
// ++count;         // 2 (전위 증가)
// console.log(count);  // 출력: 2

// // ✅ 페이지 이동 예시
// let page = 5;
// let next = page++;       // 후위 증가: next = 5, page = 6
// console.log(next);       // 출력: 5
// console.log(page);       // 출력: 6

// // ✅ 비교 연산자 예제
// let a = 7;
// let b = 4;

// console.log(a > b);     // true  → 7이 4보다 크다
// console.log(a < b);     // false → 7이 4보다 작지 않다
// console.log(a >= b);    // true  → 7이 4보다 크거나 같다
// console.log(a >= 7);    // true  → 7이 7보다 크거나 같다
// console.log(b <= 3);    // false → 4는 3보다 작거나 같지 않다
// console.log(a == 7);    // true  → 값이 같다
// console.log(a == 6);    // false → 값이 다르다
// console.log(a == '7');  // true  → 값은 같지만 타입은 다름 (느슨한 비교)
// console.log(a === '7'); // false → 값은 같지만 타입이 다르므로 false (엄격한 비교)

// // ✅ ==, !=, ===, !== 비교
// console.log(b != 4);     // false → 값이 같아서 같지 않다는 조건이 틀림
// console.log(b != '4');   // false → 느슨한 비교로 값이 같음
// console.log(b != 5);     // true  → 4는 5와 다르다
// console.log(b !== '4');  // true  → 값은 같지만 타입이 다르므로 true (엄격한 다름)

// let c = 100;
// console.log(c !== 100);  // false → 값과 타입 모두 같음 (false)

// // ✅ 조건 결과를 변수에 저장
// let userage = 19;
// const isadult = userage >= 18;  // 18세 이상이면 성인
// console.log(isadult);  // true

// // ✅ 문자열 비교 (일치 여부 확인)
// let inputname = '홍길동';
// let savename = '홍길동';
// console.log(inputname === savename); // true → 값과 타입이 모두 같음

// // ✅ 숫자 vs 불린 비교
// let x = 3;
// let y = true;

// console.log(x === y);   // false → 타입도 다르고 값도 다름
// console.log(x == y);    // false → true는 숫자 1로 취급, 3과는 다름
// console.log(1 == y);    // true  → true는 숫자 1로 간주 (느슨한 비교)
// console.log(0 == y);    // false → true ≠ 0
// console.log(1 === y);   // false → 타입이 다르므로 false (엄격 비교)
// console.log(!true);     // false → true를 부정하면 false


// ✅ 논리 연산자: AND (&&), OR (||), NOT (!)

// && (AND): 둘 다 참일 때만 결과가 참, 그렇지 않으면 거짓
console.log(true && true);    // true → 둘 다 true
console.log(true && false);   // false → 하나가 false
console.log(false && false);  // false → 둘 다 false

// AND 연산에서 앞의 값이 true면 뒤 값을 반환 (값 자체를 반환)
console.log(true && 1);       // 1 → 앞이 true라서 뒤 값 반환
console.log(true && 2);       // 2 → 앞이 true라서 뒤 값 반환
console.log(true && 0);       // 0 → 0은 falsy 값이므로 그대로 반환
console.log(true && -3);      // -3 → true && 음수는 음수 자체 반환 (truthy)
console.log(true && 'aaa');   // 'aaa' → 문자열도 truthy니까 그대로 반환
console.log(1 && 'a');        // 'a' → 1은 true로 간주되므로 뒤 값 반환
console.log(0 && -1);         // 0 → 앞이 false이므로 그대로 반환 (뒤는 검사 안 함)

// || (OR): 둘 중 하나라도 true면 결과는 true
console.log(true || true);    // true → 하나 이상 true
console.log(true || false);   // true → 하나 이상 true
console.log(false || false);  // false → 둘 다 false

// OR 연산에서 앞이 truthy면 그 값을 반환, 아니면 뒤 값을 확인
console.log(-4 || 1);         // -4 → -4는 truthy이므로 그대로 반환

// ! (NOT): true → false, false → true (논리값을 뒤집음)
console.log(!true);           // false
console.log(!false);          // true

// ------------------------------------------------------

// ✅ 삼항 조건 연산자
// 형식: (조건) ? 참일 때 값 : 거짓일 때 값

// 1. 나이에 따라 성인/미성년자 구분
const userage = 10;
const result = (userage >= 17) ? "성인" : "미성년자"; 
// 조건: userage가 17 이상이면 "성인", 아니면 "미성년자"
console.log(result);          // 출력: 미성년자 (10 < 17)

// 2. 비밀번호가 입력됐는지 확인
const password = '';          // 빈 문자열은 falsy → 입력 안 된 상태
// const password = '1234';   // 이 줄을 사용하면 입력된 상태
const message = password ? "비밀번호 입력됨" : "비밀번호를 입력하세요";
// 조건: password가 truthy면 "입력됨", falsy면 "입력하세요"
console.log(message);         // 출력: 비밀번호를 입력하세요

// 3. 로그인 상태에 따라 텍스트 변경
const islogin = true;
const txt = islogin ? "로그아웃" : "로그인";
// 조건: 로그인 되어 있으면 "로그아웃" 표시, 아니면 "로그인"
console.log(txt);             // 출력: 로그아웃


// ✅ 4. 구매 수량에 따른 할인 여부 판단
const qty = 2;  
const discount = (qty > 3) ? "할인 적용" : "할인 없음";
// 조건: 수량이 3개 초과면 "할인 적용", 아니면 "할인 없음"
console.log(discount);  // 출력: 할인 없음

// ✅ 5. 점수에 따른 합격/불합격 판정
const score = 72;
const status = (score >= 60) ? "합격" : "불합격";
// 조건: 60점 이상이면 "합격", 아니면 "불합격"
console.log(status);  // 출력: 합격

// ✅ 6. 홀수/짝수 판별
const num = 5;
// (num % 2 === 1) 도 가능하지만 아래처럼 간단히도 가능
const evenodd = (num % 2) ? "홀수" : "짝수";
// % 2 결과가 1이면 홀수, 0이면 짝수
console.log(evenodd);  // 출력: 홀수

// ✅ 7. 사용자 검색어 입력 체크
const keyword = 'search';
// const keyword = '';  // 이걸로 바꾸면 "검색어를 입력하세요" 출력됨
const output = keyword 
  ? `검색어 : ${keyword}`           // 입력값이 있으면 해당 검색어 출력
  : `검색어를 입력하세요.`;         // 빈 문자열이면 경고 메시지 출력
console.log(output);  // 출력: 검색어 : search


