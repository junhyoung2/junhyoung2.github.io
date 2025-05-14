/* 1
사용자 점수를 반올림해서 등급 분류
사용자 점수 =[86.7, 92.6, 73.2]
90점이상 A 출력
80점이상 B 출력
70점이상 C 출력
*/
const score = [86.7, 92.6, 73.2];

score.forEach((s) => {
    const rounded = Math.round(s); // 점수 반올림
    let grade = "";
    if (rounded >= 90) {
        grade = "A";
    } else if (rounded >= 80) {
        grade = "B";
    } else {
        grade = "C";
    }
    console.log(`${rounded}점 : ${grade}등급`);
});
/* 2
쿠폰 만료일 자동 계산
오늘 날짜 이후로 30일 계산해서 출력
출력 : 쿠폰 만료일 : 날짜 출력
*/
const today = new Date();
today.setDate(today.getDate() + 30);
console.log("쿠폰 만료일 : ", today.toLocaleDateString());

/* 3
오늘의 date값을 입력받아서 주말인지 평일인지 판별하세요
*/
const today = new Date(); 

const day = today.getDay(); 

if (day === 0 || day === 6) {
  console.log("주말");
} else {
  console.log("평일");
}



/* 4
인증번호 생성 : 정수 6자리 숫자를 랜덤하게 추출하세요
*/

const secret = [];
while (secret.length < 6) {
    let num = Math.floor(Math.random() * 10);
    if (!secret.includes(num)) {
        secret.push(num);
    }
}
console.log(secret.join(""));
