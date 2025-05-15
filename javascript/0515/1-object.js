/*
객체 : 다양한 자료형들의 묶음 (첫 문자는 대문자로 구성되는게 관례)
내장 객체 : 객체가 이미 만들어져서 브라우저 적용된 상태 
Date 
*/

// 객체 예시
// const computer = {
//     // key : value 형태로 속성 저장
//     moniter : '16인치',
//     ram:'8g',
//     disk : '256g'
// }
// window.sessionStorage
// console.log(computer.moniter); // computer 객체의 moniter 속성 값 출력

// Date 객체 사용 예시
// const now = new Date(); // 현재 날짜와 시간 정보를 가지는 Date 객체 생성
// console.log("연도", now.getFullYear()); // 연도 출력
// console.log("월", now.getMonth()+1); // 월 출력 (0부터 시작하므로 +1)
// console.log("일", now.getDate()); // 일 출력
// console.log("요일", now.getDay()); // 요일 출력 (0: 일요일 ~ 6: 토요일)
// console.log("시", now.getHours()); // 시 출력
// console.log("분", now.getMinutes()); // 분 출력
// console.log("초", now.getSeconds()); // 초 출력
// console.log("밀리 초", now.getMilliseconds()); // 밀리초 출력

// 요일 출력 예시 (switch-case문 사용)
// switch(now.getDay()){
//     case 0:
//     console.log("일요일");
//     break;
//     case 1:
//     console.log("월요일");
//     break;
//     case 2:
//     console.log("화요일");
//     break;
//     case 3:
//     console.log("수요일");
//     break;
//     case 4:
//     console.log("목요일");
//     break;
//     case 5:
//     console.log("금요일");
//     break;
//     case 6:
//     console.log("토요일");
//     break;
// }




// 요일을 배열로 출력하는 예시
// const now = new Date();
// const day = now.getDay(); // 오늘의 요일(숫자) 반환
// const day = new Date().getDay(); // 오늘의 요일(숫자) 반환
// const day= new Date(`2025-05-13`).getDay(); // 특정 날짜의 요일(숫자) 반환
// const week =['일', '월', '화', '수', '목', '금', '토'];
// console.log(`${week[day]}요일`); // 해당 요일을 한글로 출력





// 생일을 이용해서 나이 계산 예시
// 현재연도 - 생일연도
// 출력 : 당신의 나이는  {}세 입니다. 
// const today = new Date().getFullYear(); // 올해 연도
// const birth = new Date('1999-06-08').getFullYear(); // 태어난 연도
// let age = today -birth; // 나이 계산
// console.log(`당신의 나이는 ${age}세 입니다.`);




// D-Day 구하기 예시
// Date()객체 : UTC(1970.1.1) 밀리초 기반으로 작동

// const today = new Date().getTime();// 현재 날짜를 밀리초로 반환
// const dday = new Date('2025-12-25').getTime(); // D-Day(2025-12-25)를 밀리초로 반환
// const diff = dday - today; // D-Day까지 남은 시간(밀리초)
// const days = diff/(1000*60*60*24); // 남은 일수 계산 (밀리초를 일로 변환)
// console.log(Math.ceil(days)); // 남은 일수를 올림하여 출력



// 미래 날짜 구하기 예시
// const future = new Date(); // 현재 날짜 객체 생성
// future.setDate(future.getDate()+days); // 현재 날짜에 남은 일수를 더해 미래 날짜 계산
// console.log(`${future.getMonth()+1}월 ${future.getDate()}일`) // 미래 날짜의 월과 일을 출력





// 쿠폰 만료일 예시
// 7일 동안 보이지 않기 기능 구현에 사용할 수 있음


const today = new Date(); // 현재 날짜 객체 생성

today.setDate(today.getDate() + 7); 
// today.getDate() : 오늘 날짜(일)를 반환 (예: 14)
// today.getDate() + 7 : 오늘 날짜에서 7일을 더함 (예: 14 + 7 = 21)
// today.setDate(...) : today 객체의 날짜(일)를 7일 뒤로 변경

console.log(today.toDateString());
// today.toDateString() : today 객체를 사람이 읽기 쉬운 영문 날짜 문자열로 반환
// 예시 출력: "Wed May 21 2025"

console.log(today.toLocaleDateString());
// today.toLocaleDateString() : today 객체를 브라우저/운영체제의 지역 설정에 맞는 날짜 문자열로 반환
// 예시 출력(한국어): "2025. 5. 21."


