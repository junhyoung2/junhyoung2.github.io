let age =18;

if(age>=20){
    console.log("성인입니다.");
}else{
    console.log("미성년자입니다.");
}


//✅ 1. 연산자 (Operator)

let a=10;
let b=3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//🔹 증가/감소 연산자
let x =5;
console.log(x++);
console.log(x);

let y=5;
console.log(++y);

//🔹 논리 연산자

let isadult = true;
let hasid = false;

console.log(isadult && hasid); //&&(그리고) 연산자는 둘 다 true여야 true
console.log(isadult || hasid); //||(또는) 연산자는 하나라도 true면 true
console.log(!isadult); //!는 부정(NOT) 연산자 → 값을 반대로 뒤집음

// ✅ 2. 조건문 실습
let score =72;
if(score>=90){
    console.log("A학점");
}else if(score>=80){
    console.log("B학점");
}else if(score>=70){
    console.log("C학점");
}else {
    console.log("F학점점")
}


//✅ 3. 삼항 연산자 (조건 축약

let ages =20;
let result = ages >= 19? "성인" : "미성년자";

console.log(result);

// /✅ 4. 배열(Array)


//4-1 🔹 배열 만들기
let fruits =["사과", "바나나", "포도","망고"];

//4-2 🔹 값 접근하기 (인덱스)

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

//4-3 🔹 배열의 길이

console.log(fruits.length); //4 

//4-4 🔹 배열 수정
fruits[1] = "오렌지"; //idx 1 값이 변경됨됨
console.log(fruits); 

//4-5 🔹 배열에 추가하기 / 삭제하기
fruits.push("수박");     // 맨 뒤에 추가
fruits.pop();           // 맨 뒤에서 삭제

fruits.unshift("딸기"); // 맨 앞에 추가
fruits.shift();         // 맨 앞에서 삭제

//4-6 🔹 반복문과 함께 쓰기 (for 문)
for (let i =0;  i< fruits.length; i++){
    console.log(fruits[i]);
}

// ✅ 배열 예제 2 – 할 일 목록 앱 만들기
let todos = ["공부하기", "운동하기", "청소하기"];

// 1. 전체 목록 출력

console.log ("오늘의 할 일 :");
for (let i = 0 ; i< todos.length ; i ++){    // 초기값 ; 조건 ; 증감식 
    console.log (`-${todos[i]}`);
}
//2. 새 할 일 추가
todos.push("책 읽기");
// 3. 완료한 할 일 제거 (맨 앞 항목)
todos.shift();
// 4. 수정 – 두 번째 항목 바꾸기
todos[1] = "산책하기";

// 5. 최종 결과 출력

console.log("\n 최종 할 일 목록 :") ;
for (let i = 0; i< todos.length ; i++){ // 초기값 ; 조건 ; 증감식 
    console.log(`-${todos[i]}`);
}


//✅ 음식 주문 시스템 예제

// 1. 주문 가능한 음식 목록
let menuitems = ["김치찌개",'불고기','비빔밥','제육볶음'];
// 2. 음식 가격 목록 (menuItems랑 순서 맞춤)
let prices =[7000,9000,8000,8500];
// 3. 사용자 선택 (예: 2번 비빔밥 주문)
let selectedmenuindex = 2;
// 4. 나이 입력 → 청소년 할인 여부 판단
let customerage =17;
let isteenager = customerage < 19;
// 5. 최종 가격 계산
let baseprice = prices[selectedmenuindex];
let finalprice = isteenager ? baseprice * 0.9 : baseprice;

// 6. 결과 출력

console.log(`주문한메뉴 : ${ menuitems[selectedmenuindex]}`);
console.log(`기본 가격 : ${baseprice}원`);
console.log(`최종결제금액 : ${finalprice}원`);

//7. 반복문으로 전체 메뉴 보여주기

console.log("\n 오늘의 메뉴 :");
for(let i =0; i< menuitems.length ; i++){
    console.log(`-${i+1}. ${menuitems[i]} (${prices[i]}원)`);
}
