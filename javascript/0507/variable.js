// let value ="30";
// console.log(value);

// 1단계 : 변수 선언 
let age; /* 값이 없음, underfined */
age=100; /* 값을 할당 */
age=200; /* 값을 재할당 */
console.log(age); /* 참조 : 메모리에서 값을 찾아서 반환 */
console.log(typeof(age));  /* age의 데이터 타입 출력 ("number") */


let str = "사용하는 문자";  // 문자열을 변수 str에 할당
console.log(str, typeof(str));  // str의 값과 타입 출력 ("사용하는 문자", "string")


let bool = true; /* 참 */
// let bool = 10 > 100; 거짓
console.log(bool, typeof(bool));



let value =null;
value = "재할당";
console.log(value);


const data = 123;
data = 456;
console.log(data);