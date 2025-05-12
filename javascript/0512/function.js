 //변수 : 데이터를 저장하는 메모리 저장 공간 
 //함수 : 자주 사용하는 코드를 미리 정의해두고, 필요할 때 호출해서 재사용하는 방법


//사용자가 로그인을 하기위해서 이름을 입력하면 뒤에 "안녕하세요!"를 출력
// 길동, 만수 , 철수, 영희

// console.log("길동 안녕하세요");
// console.log("만수 안녕하세요");
// console.log("철수 안녕하세요");
// console.log("영희 안녕하세요");


// const say =(user)=>{
//     console.log(`${user} 안녕하세요`);
// }
// say("길동");
// say("만수");
// say("철수");
// say("영희");

say();  // ✅ 함수 호출 (호이스팅 덕분에 여기서 호출해도 OK)

function say() {
    console.log("안녕하세요");  // 함수 정의 (선언식)
}



const say = () => {
    console.log("안녕하세요");
};

say();  // 함수 호출 → "안녕하세요" 출력





// // 함수 선언
// const add = (a, b) => {
//     console.log(`${a} + ${b} = ${a + b}`);
// }

// // 함수 호출
// add(3, 5);  // 출력: 3 + 5 = 8
// add(6, 8);  // 출력: 6 + 8 = 14



// 두 수를 더해서 결과를 반환하는 화살표 함수
const add = (a, b) => {
    return a + b;
};

// add(5, 3)의 결과를 value 변수에 저장
const value = add(5, 3);

// 저장된 값을 콘솔에 출력
console.log(value);  // 결과: 8



