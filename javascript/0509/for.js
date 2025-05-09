// 1부터 10까지 순차 출력
for (let i = 1; i <= 10; i++) {
    console.log(i); // 1, 2, 3, ..., 10
}

// 10부터 1까지 역순 출력
for (let i = 10; i >= 1; i--) {
    console.log(i); // 10, 9, ..., 1
}

// 2부터 10까지 2씩 증가하며 출력 (짝수만 출력)
for (let i = 2; i <= 10; i += 2) {
    console.log(i); // 2, 4, 6, 8, 10
}

// 1부터 10까지 중 짝수만 출력 (조건문 사용)
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i); // 2, 4, 6, 8, 10
    }
}

// 1부터 10까지의 합 계산
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i; // sum에 i를 누적
}
console.log(`1~10까지의 수 합 : ${sum}`); // 결과: 55

// 홀수/짝수 구분 출력
for (let i = 1; i <= 10; i++) {
    const type = i % 2 ? "홀수" : "짝수"; // 2로 나눈 나머지가 1이면 홀수, 0이면 짝수
    console.log(`${i} - ${type}`);
}

// 1부터 30까지 중 3과 5의 공배수만 출력 (15, 30 등)
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i); // 15, 30
    }
}

// 배열 값 접근 예제
let value = 1;
let arr = [1, 2, 3, 4, 5];
console.log(arr[4]); // 배열의 다섯 번째 요소 (index 4 → 5 출력)

// 문자열 배열에서 각 요소 출력
const names = ['tom', 'jane', 'anna', 'mike'];
// console.log(names[2]); // "anna" (index 2)
for (let i = 0; i <= 3; i++) {
    console.log(names[i]); // tom, jane, anna, mike
}  








// 배열에 문자 하나씩 저장
const word = ['h', 'e', 'l', 'l', 'o'];

// 배열 요소 하나씩 출력 (직접 접근)
console.log(word[0]); // 'h'
console.log(word[1]); // 'e'
console.log(word[2]); // 'l'
console.log(word[3]); // 'l'
console.log(word[4]); // 'o'

// 반복문으로 배열 전체 출력
for (let i = 0; i <= 4; i++) {
    console.log(word[i]); // 'h', 'e', 'l', 'l', 'o'
}

// 문자열로 저장 (문자 배열처럼 인덱스로 접근 가능)
let str = "hello";

// 문자열 각 문자 출력
console.log(str[0]); // 'h'
console.log(str[1]); // 'e'
console.log(str[2]); // 'l'
console.log(str[3]); // 'l'
console.log(str[4]); // 'o'

// 반복문으로 문자열 출력
for (let i = 0; i <= 4; i++) {
    console.log(str[i]); // 'h', 'e', 'l', 'l', 'o'
}

// 'javascript' 문자열 출력 예제
str = "javascript";

// 개별 문자 직접 출력
console.log(str[0]); // 'j'
console.log(str[1]); // 'a'
console.log(str[2]); // 'v'
console.log(str[3]); // 'a'
console.log(str[4]); // 's'
console.log(str[5]); // 'c'
console.log(str[6]); // 'r'
console.log(str[7]); // 'i'
console.log(str[8]); // 'p'
console.log(str[9]); // 't'

// 반복문으로 'javascript' 문자열 전체 출력
for (let i = 0; i <= 9; i++) {
    console.log(str[i]); // 'j', 'a', 'v', 'a', ..., 't'
}

// 💡 더 유연하게 작성하려면 문자열 길이를 사용하세요
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
