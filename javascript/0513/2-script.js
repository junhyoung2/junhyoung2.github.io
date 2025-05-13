//sum이라는 변수 선언

//sum 변수에 10을 할당
let sum = 10;

sum = 40;
console.log(typeof sum);

//sum에 문자열 "hello"
sum = "hello"; //배열
sum = ["h", "e", "l", "l", "o"];
console.log(sum[1]); //index 시작은 0부터 시작

//함수
//선언 -> 호출 : function, =>
let add = () => {
    console.log(`3+4=${3 + 4}`);
};
add();
//객체 : 여러개의 유형의 데이터를 하나로 묶어 놓은 것
//js 에서는 배열도 객체, 함수도 객체
//객체는 키: 값으로 분류
// 객체를 선언
let person = {
    user_name: "홍길동",
    age: "20",
    email: "aaa@email.com",
    phone: "010-1232-4444",
    book: ["a", "b", "c", "d"],
    print: function () {
        alert("안녕하세요.");
    },
    hello() {
        alert("반갑습니다.");
    }
};

console.log(person.user_name);
console.log(person.book[2]);
console.log(person["email"]);
person.print();
person.hello();
