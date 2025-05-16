/*
배열 :[]
*/
// const arr = [1,2,3];
// const arrobj = new Array(1,2,3);
// const arr2=[]
// arr2[0]='a'
// arr2.push('b');
// const data = arr2.pop();
// console.log(arr2);
// console.log(data);


/*
foreach, map, filter
*/

const value =['a','b','c','d','e'];
// for(let i=0 ; i<value.length ; i++){
//     console.log(value[i]);
// }
//foreach (value, index, arr)

// value.forEach((item,num)=>{
//     console.log(item);
    //출력 형식 : {index}번째 값은 {value}입니다.
//     console.log(`${num+1}번째 값은 ${item}입니다.`);
// });


//대문자로 변환 (map)
// const uppercase = value.map((data) => {
//     return data.toUpperCase();
// });
// console.log(uppercase);


/*
알파벳이 'c'이후인 값을 새로운 배열로 생성
    filter
*/
// const filtercase = value.filter((item) => {
//     return item > 'c';
// });
// console.log(filtercase);

/*foreach, map, filter의 주요 차이점
   Map, Filter : 원본 배열을 변경하지 않고 새로운 배열 생성
   filter 메서드는 어떤 결과를 반환하는가? boolean형 (True/False)
*/



/*
1. 각 요소 앞에 value : 이라는 문자열을 붙여서 새롭게 배열을 만들어주세요.
출력결과 : [value : a, value: b, value : c..... ];
*/

const case1 = value.map((item)=>{
    return `value:${item}`;
});
console.log(case1);



/*
2. 알파벳 순서상 'b' 뒤에있는 요소만 출력해주세요
출력결과 : ['c', 'd', 'e']
*/
const filtercase = value.filter((item) => {
    return item > 'b';
});
console.log(filtercase);



/*
    3.각 요소를 "현재 값은 {} 입니다."로 출력해주세요
    출력결과 :  현재값은 a입니다.
                현재값은 b입니다.
*/
value.forEach((item)=>{
    console.log(`현재값은 ${item}입니다.`)
});
