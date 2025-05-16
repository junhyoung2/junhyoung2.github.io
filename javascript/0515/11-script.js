// ✅ 예제 1: for문을 사용한 배열 복사

// const fruits =['사과','베','바나나'];
// const result= [];

// for (let i =0; i< fruits.length; i++){
//     result.push(fruits[i]);
// }
// console.log(result); //['사과', '배', '바나나']

//✅ 예제 2: splice()를 사용한 배열 수정

// const fruits =['사과','배','바나나'];
// fruits.splice(1,1,'딸기'); //[ '사과', '딸기', '바나나' ]
// fruits.splice(2, 2, '딸기'); //[ '사과', '배', '딸기' ]
// console.log(fruits);

//✅ 예제 3: filter()로 조건에 맞는 요소만 추출

// const posts=[
//     {title: "수업공지", type: "normal"},
//     {title: "출석확인", type: "notice"},
//     {title: "시험일정", type: "notice"}
// ];
// const notices = posts.filter((obj) => obj.type === "notice");
// console.log(notices);

//✅ 예제 4: forEach()를 활용한 항목 출력
const users = [
    { name: "길동", role: "관리자" },
    { name: "민호", role: "학생" },
    { name: "수지", role: "학생" },
    { name: "지수", role: "팀장" },
];
users.forEach((obj) => {
    console.log(`${obj.name}님은 ${obj.role}입니다.`);
});

//✅ 예제 5: 객체 배열에서 원하는 값만 출력 (forEach)
const products = [
    { id: 1, name: "텀블러", price: 12000 },
    { id: 2, name: "에코백", price: 19000 },
    { id: 3, name: "파우치", price: 24000 },
];
products.forEach((obj) => {
    console.log(obj.name);
});

//✅ 변수 선언: var vs let vs const
let a = 10;
a = 15;
if (true) {
    let b = 5;
    console.log(b);
}

const name = "지피티";
const fruits = ["사과", "배"];
fruits.push("바나나");
console.log(fruits);

//✅ 1. == vs === (느슨한 비교 vs 엄격한 비교)

//🔹 == (느슨한 동등 비교, type coercion 있음)
console.log(1 == "1");
console.log(0 == false);
console.log(null == undefined);

//🔹 === (엄격한 동등 비교, 타입까지 일치해야 true)
console.log(1 === "1");
console.log(0 === false);
console.log(null === undefined);

///✅ 2. 조건문 if / else if / else

let score = "85";
if (score >= 90) {
    console.log("A등급");
} else if (score >= 80) {
    console.log("B등급");
} else {
    console.log("C등급 이하");
}

//✅ 3. 삼항 연산자 ? :
let age = 20;
let status = age >= 18 ? "성인" : "미성년자";
console.log(status);

//✅ 4. 함수 선언식 vs 함수 표현식

sayhello();

function sayhello() {
    console.log("안녕하세요");
}
//🔹 함수 표현식 (호이스팅 X)
const sayhi = function () {
    console.log("안녕");
};
sayhi();
//✅ 5. switch문 – 다중 분기 조건문

const fruits2 = "망고";
switch (fruits2) {
    case "사과":
        console.log("빨간색");
        break;
    case "바나나":
        console.log("노란색");
        break;
    default:
        console.log("색모름");
}


const fruits3 = "망고";
const colormap={
    사과:"빨간색",
    바나나:"노란색",
};
console.log(colormap[fruits3] || "색모름");

//✅ 6. Truthy / Falsy (진실값 / 거짓값)
if("") console.log("실행안됨");
if("hello") console.log("실행됨");


   ㅜ  