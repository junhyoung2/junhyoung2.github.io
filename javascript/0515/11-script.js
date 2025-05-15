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
    const users =[
        {name: '길동', role: "관리자"},
        {name: '민호', role: "학생"},
        {name: '수지', role: "학생"},
        {name: '지수', role: "팀장"}
    ];
users.forEach((obj)=>{
    console.log(`${obj.name}님은 ${obj.role}입니다.`)
});


//✅ 예제 5: 객체 배열에서 원하는 값만 출력 (forEach)
const products =[
    {id: 1, name : "텀블러", price:12000},
    {id: 2, name : "에코백", price:19000},
    {id: 3, name : "파우치", price:24000}
]
products.forEach((obj)=>{
    console.log(obj.name);
});

