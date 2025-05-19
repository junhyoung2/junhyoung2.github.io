///  1️⃣ ✅ '...' : 전개구문(Spread Syntax)

// 배열 data를 선언
const data = [1, 2, 3, 4];

// let result = data; // 얕은 복사(참조 복사, 주석 처리됨)
let result = [...data]; // 전개구문을 사용한 깊은 복사(새로운 배열 생성)

// 원본 배열의 두 번째 값을 8로 변경
data[1] = 8;

// 원본 배열과 복사된 배열 각각 출력
console.log(data); // [1, 8, 3, 4] : 원본 배열이 변경됨
console.log(result); // [1, 2, 3, 4] : 복사된 배열은 변경되지 않음



/*
[가이드]
- ...data : 배열의 각 요소를 새로운 배열에 복사(깊은 복사)
- data[1]=8 : 원본 배열만 변경, result에는 영향 없음
- result = data로 하면 두 변수 모두 같은 배열을 참조(얕은 복사)
- 전개구문을 사용하면 원본과 복사본이 서로 영향을 주지 않음
*/




///  2️⃣ ✅ 구조 분해 할당
const data = [10, 20, 30];

// let a = data[0] ,b = data[1], c = data[2];

let [a,b,c] = data; 

console.log(a, b, c);

const users = {
    username : '홍길동',
    age :30
}
// const dataname = users.username; // 객체의 속성값을 변수에 직접 할당
// const dataage = users.age;
// console.log(dataname,dataage);  // 홍길동 30
// const{username,dataage} =users; // username은 정상 할당, dataage는 users에 없으므로 undefined

const{username:dataname, age : dataage}=users; // 구조 분해 할당과 변수명 변경
console.log(dataname, dataage);  // 홍길동 30


/*
[가이드]
- let [a, b, c] = data;
  → 배열의 값을 순서대로 변수에 할당(구조 분해 할당)
- 객체에서 값을 꺼낼 때는 users.속성명 또는 구조 분해 할당 사용
- const { username, age } = users; : 객체의 속성명을 그대로 변수로 할당
- const { username: dataname, age: dataage } = users;
  → 객체의 속성명을 원하는 변수명으로 바꿔서 할당
- 구조 분해 할당을 사용하면 코드가 간결해지고, 여러 값을 한 번에 추출할 수 있음
- 객체에 없는 속성명을 구조 분해 할당하면 undefined가 할당됨
*/