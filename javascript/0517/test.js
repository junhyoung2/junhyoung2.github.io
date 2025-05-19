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