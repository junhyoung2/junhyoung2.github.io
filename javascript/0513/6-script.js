/*
for문을 이용하여 배열값을 가져오십시오.
students = ['park', 'hong', 'lee', 'kim'];
*출력은 console.log로 출력
*/
let students = ['park', 'hong', 'lee', 'kim'];
// for(let i=0 ;i <students.length;i++){
//     console.log(students[i]);
// }




//배열 객체를 이용한 반복
// 배열명.foreach(콜백함수) {....}
//콜백함수란 다른 함수의 인수로 사용하는 함수
// students.forEach((data,index)=>{
//     console.log(data);
//     console.log(index);
// });


//for -of문
// for(data of students){
//     console.log(data);
// }



//for-in문
// for(idx in students){
//     console.log(idx);
// }



//배열 : [1,2,3,4,5,6]

// let value = new Array();
// value[0] = 30;
// value[1] = "따르릉";
// value[2] = true;

let value = new Array(30,"따르릉",true);
console.log(value);
console.log(value.length);
value.forEach((data)=>{
    console.log(data);
});
 