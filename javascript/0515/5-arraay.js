//배열안의 객체를 이용하여 반복

// const products = [[1,2,3],[3,4,5],[5,6,7]];
// console.log(products[0]); //1,2,3


// ✅ 상품 정보를 담고 있는 배열 (각 요소는 객체 형태로 id, name, price 속성을 가짐)
const products = [
    { id: 1, name: "텀블러", price: 12000 },
    { id: 2, name: "에코백", price: 18000 },
    { id: 3, name: "파우치", price: 24000 }
];

// 배열의 두 번째 상품 객체를 출력
console.log(products[1]); // { id: 2, name: '에코백', price: 18000 }

// 배열의 두 번째 상품의 이름만 출력
console.log(products[1].name); // 에코백

// ✅ forEach를 사용해 products 배열에 있는 모든 상품 이름을 출력
products.forEach((obj) => {
    console.log(obj);       // 전체 객체 출력 → 예: { id: 1, name: "텀블러", price: 12000 }
    console.log(obj.name);  // 객체의 name 속성만 출력 → 예: "텀블러"
});

/*
💡 forEach 문법 정리:
배열.forEach((요소) => {
    // 요소는 배열 안의 각 객체 하나씩을 의미함
});
*/



//유저리스트 출력
//출력 : {name}님은 {role}입니다.
// 사용자 목록을 담은 배열 (각 요소는 name과 role을 가진 객체)
const users = [
    { name: '길동', role: "관리자" },
    { name: '민호', role: "학생" },
    { name: '수지', role: "학생" },
    { name: '지수', role: "팀장" }
];


// forEach() 메서드를 사용해서 배열의 각 요소에 접근
// obj는 users 배열의 각 요소(객체)를 나타냄
users.forEach((obj) => {
    // 객체에서 name과 role을 꺼내 문자열로 출력
    console.log(`${obj.name}님은 ${obj.role}입니다.`);
});



// 아래 배열 중에서 type이 notice인 데이터만 추출

// 게시글 리스트 (배열 안에 객체들이 들어 있음)
const posts = [
    { title: "수업공지", type: "nomal" },   // 일반 게시글
    { title: "출석확인", type: "notice" },  // 공지사항
    { title: "시험일정", type: "notice" }   // 공지사항
];

// filter() 메서드를 사용해 type이 "notice"인 객체만 골라냄
// obj는 posts 배열의 각 요소(객체)를 의미함
const notices = posts.filter((obj) => {
    return obj.type === "notice"; // 조건이 true인 경우만 새 배열에 포함됨
});

// 결과 출력: type이 "notice"인 객체들만 남은 새 배열
console.log(notices);



//아래 이미지 배열의 데이터를 읽어서
// 문자열 : <img src={url} alt={thumb}>
//배열 tags로 생성하세요.


// 이미지 정보가 담긴 객체 배열
const images = [
    {id: 1, url: 'img_01.jpg', thumb: '이미지1'},
    {id: 2, url: 'img_02.jpg', thumb: '이미지2'},
    {id: 3, url: 'img_03.jpg', thumb: '이미지3'}
];

// map()을 사용하여 각 이미지 객체를 HTML <img> 태그 문자열로 변환
const tags = images.map((obj) => {
    // obj는 images 배열의 각 요소 (즉, 각 이미지 객체)를 의미
    return `<img src=${obj.url} alt=${obj.thumb}`; 
    // 이미지의 url과 thumb 값을 활용해 HTML 문자열 생성
    //  이 상태에서는 > 닫는 꺾쇠가 빠져있어서 실제 사용 시 주의 필요 ❗
});

console.log(tags); 



// 가격이 2만원 이하 상품만 골라서 이름만 추출 후 새로운 배열로 구성

const items = [
    { name: "노트", price: 5000 },
    { name: "펜", price: 2000 },
    { name: "가방", price: 25000 }
];

// 1. filter()로 조건에 맞는(2만원 이하) 상품만 추출
//    - item은 items 배열의 각 객체를 의미
const data = items.filter((item) => {
    return item.price < 20000; // 2만원 미만인 상품만 남김
});

// 2. map()으로 이름만 추출해서 새로운 배열로 만듦
//    - data는 filter로 걸러진 배열의 각 객체
const result = data.map((data) => {
    return data.name; // 객체의 name 속성만 추출
});

// 3. 결과 출력: ['노트', '펜']
console.log(result);

/*
[복습 가이드]
- filter()는 조건에 맞는 요소만 남긴 새 배열을 만듦
- map()은 배열의 각 요소를 변환해 새 배열을 만듦
- 이 패턴은 "조건에 맞는 데이터만 뽑고, 필요한 값만 추출"할 때 자주 사용
*/