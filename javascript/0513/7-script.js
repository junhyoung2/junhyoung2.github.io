/*
- 함수 : 객체구성(메소드)
- 동작해야 할 여러 명령을 묶어 놓은 것
- 주어진 문제가 생기면 이걸 작은 문제로 쪼개서 문제 해결
- 함수 : 선언하고 호출해서
*/



/*
- 1~10까지의 숫자를 더하는 함수를 만들어서 호출
    1~10까지의 숫자가 만들어져야함
    더하는 기능
    함수로 만들기
*/

let sum =0;
const calc = (num)=>{
    sum=0;
    for(let i=1 ; i<=num ; i++){
        // console.log(i); // 1~10
        sum+=i;
    }
    // console.log(sum);
    return sum;
}
console.log(calc(10)); //1~10 출력
console.log (calc(3)); // 1~3 출력
console.log (calc(7)); //1~7 출력



// let hi = "hello"; //전체영역에서 사용되는 변수 : 지역변수
// const change =()=>{
//      hi="bye"; // 함수에서만 사용하는 지역변수
// }
// console.log(hi); //hello
// change(); 
// console.log(hi); //bye


// Elem.onclick = ()=>{
//     console.log("클릭");
// }




// let hi =()=>{
//     return '안녕하세요.';
// }
// const data = hi();
// console.log(data);


// let hi = (user)=>{
//     console.log(`${user}님 안녕하세요.`);
// }


let hi = user => console.log(`${user}님 안녕하세요.`);
hi("홍길동");