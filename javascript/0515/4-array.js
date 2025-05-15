// // for - 배열
// // foreach, map, filter, reduce

// //for문을 이용해서 fruits안에 있는 데이터를 그대로 result에 복제
// // result 값을 출력 ['사과','배','바나나'];;

// // 1. 원본 배열 선언
// const fruits = ["사과", "배", "바나나"];

// // 2. 복사할 배열을 비어있는 상태로 생성
// const result = [];

// // 3. for 반복문을 통해 배열의 각 요소에 접근
// for (let i = 0; i < fruits.length; i++) {
//     // i가 0일 때 → fruits[0] = '사과'
//     // i가 1일 때 → fruits[1] = '배'
//     // i가 2일 때 → fruits[2] = '바나나'

//     // 4. 현재 요소를 result 배열에 추가 (복사)
//     result.push(fruits[i]);
// }

// // 5. 복사 완료된 result 배열 출력
// // console.log(...fruits);
// result.push(...fruits);
// // console.log(result);
// // 출력 결과: ['사과', '배', '바나나']



// //1. value :  배열의 요소 값, 2. idx : 요소의 순번 3. arr : 전체 배열 그 자체
// fruits.forEach((value,idx,arr)=>{ 
//     console.log(value);
//     console.log(idx);
//     console.log(arr);
// });





//map : 배열을 수정해서 새 배열을 생성

// const numbers  =[1,2,3];
// const doubled = [];


//foreach를 이용하여 numbers에 입력된 숫자의 두배 값을 doubled에 저장
// numbers.forEach((num)=>{
//     // console.log(num);
//     doubled.push(num*2);
// });
// console.log(doubled);



// /*
// const calcarr =numbers.map((value)=>{
//     return value*2;
// });
// console.log(calcarr);
// */


// const calcarr =numbers.map(value=>value*2);
// console.log(calcarr);



/*
filter는 조건이 true인 요소만 새 배열에 포함하고,
false인 요소는 무시된다 (결과 배열에 포함되지 않는다).   
*/

// const numbers = [1,2,3,4,5];
// const result = []; //2, 4
// // foreach를 이용해서 2의 배수만 result 배열 변수에 저장하세요.

// numbers.forEach((data)=>{
//     console.log(data);
//     if(data%2 === 0){
//         result.push(data);
//     }
// });
// console.log(result);



// const even = numbers.filter((data)=>{ 
//     return data%2 ===0;

// });
// console.log(even);


//배열 숫자 중에서 5보다 큰 수만 새로운 배열로 생성하세요
//map (길이의 변경이 없을 때), filter (길이가 변경)

let numbers = [2,5,8,1,9,7];
const result = numbers.filter((num)=>{
    return num>5;
});
console.log(result);
