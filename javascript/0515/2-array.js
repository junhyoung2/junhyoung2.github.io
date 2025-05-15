// 1. 문자열 요소 4개를 가진 배열을 const로 선언
//    const로 선언한 배열은 '참조값(주소)'이 고정이지만, 배열 내부 값은 수정 가능함
const value = ['kim', 'park', 'hong', 'seo'];

// 2. 배열의 두 번째 요소(인덱스 1)를 변수 data에 저장
//    이 시점에서 data는 'park'이라는 문자열을 복사해서 가지게 됨 (참조X, 값 복사)
let data = value[1]; 

// 3. typeof 연산자를 사용해 data의 타입과 값을 출력
//    결과: string 'park'
console.log(typeof(data), data);

// 4. 배열의 두 번째 요소를 'dong'으로 변경
//    이 시점 value는 ['kim', 'dong', 'hong', 'seo']가 됨
value[1] = 'dong';

// 5. data 변수에 다시 'park'을 할당 (value와는 완전히 별개인 값)
//    즉, data는 여전히 문자열이고, 배열 value와 연결되어 있지 않음
data = 'park';

// 6. 변경된 배열 value를 출력 → ['kim', 'dong', 'hong', 'seo']가 나옴
console.log(value);
  