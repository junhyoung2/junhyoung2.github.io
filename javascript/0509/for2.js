// 점수 배열 선언
const scores = [80, 90, 100, 70, 100, 60, 59];

// 배열 전체와 길이 출력
console.log(scores, scores.length); // [80, 90, 100, 70, 100, 60, 59] 7

let sum = 0; // 점수 총합을 저장할 변수

// 배열의 모든 점수를 반복하여 더함
for (let i = 0; i < scores.length; i++) {
    sum += scores[i]; // sum = sum + scores[i];
}

// 평균 계산 (총합 ÷ 개수)
const avg = sum / scores.length;

// 총합과 평균 출력
console.log(sum, avg); // 예: 559 79.85714285714286







// 제품 목록 배열 선언
const products = ['키보드', '마우스', '모니터', '프린터'];

// 각 제품 앞에 번호를 붙여 출력
for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1} - ${products[i]}`); // 1 - 키보드, 2 - 마우스, ...
}
