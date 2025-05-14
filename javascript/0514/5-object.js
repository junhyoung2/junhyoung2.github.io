/*
math 객체
수학과 관련된 기능
버림, 올림, 반올림, 랜덤, min-max     
*/

// const value = 3.3;
// console.log(Math.round(value)); // 반올림
// console.log(Math.floor(value)); // 내림
// console.log(Math.ceil(value));  // 올림
// console.log(Math.abs(-7));      // 절대값, 두 위치의 차이
// console.log(Math.max(4,1,10,2)); // 가장 큰 수 출력 
// console.log(Math.min(4,1,0.9,2)); // 가장 작은 수 출력 


// const nums = [6,9,25,24];
// console.log(Math.max(...nums));
// console.log(Math.min(...nums));
// // const max = nums.reduce((a,b)=>a>b?a:b);



//random
// console.log(Math.random()); //0이상 1미만의 수를 생성

//0~10 미만의 수

// const value = Math.floor(Math.random()*10);
// console.log(value);

//2~22 미만의 수

// const value = Math.floor(Math.random()*20)+2;
// console.log(value);


//2~22 미만의 수 5개 추출
//반복문 : for, while, do-while
// const nums = [];
// for (let i = 0; i < 5; i++) {
//     const value = Math.floor(Math.random() * 20) + 2;
//     nums[i] = value;
// }
// console.log(nums);








//로또 번호 추출기
//1~45
// const value = Math.fllor(Math.random()*44) +1;
// console.log (value);
const lotto = [];
while (lotto.length < 6) {
    let num = Math.floor(Math.random() * 44) + 1;
    if(!lotto.includes(num)){
        lotto.push(num);
    }
    // let i = 0;
    // while (i < lotto.length) {
    //     if (lotto[i] === num) { // 오타 수정
    //         // 같은 숫자가 있다는 소리, 다시 뽑아야 한다
    //         num = 0;
    //         break;
    //     }
    //     i++;
    // }
    // if (num !== 0) {
    //     lotto.push(num);
    // }
}
console.log(lotto);    