/*

*프롬프트 창에서 [취소] 버튼을 클릭하면, "취소했습니다."출력
* 값이 입력되고 확인 버튼을 누르면 입력된 값을 출력
*출력 : console.log로 출력

*/

// let input =prompt("값을 입력하세요");
// console.log(input);
// if(input === null){
//     console.log("취소했습니다.");
// }else {
//     console.log(input);
// }
// if(input ===null)console.log("취소했습니다.");




/*
1. prompt로 프로그래밍 점수를 입력받습니다.
2. 점수가 90점이상이면 A학점
3. 점수가 80점이상이면 B학점
4. 나머지는 C학점을 출력해주세요.
5. 출력은 document.write를 이용합니다.
*/

let score =prompt("프로그래밍 점수");
if(score !== null){
    //확인버튼 클릭 : 무조건 점수가 입력되었다는 가정
    if(Number(score)>=90){
        document.write("A학점");
    }else if (Number(score)>=80){
        document.write("B학점");
    }else{
        document.write("C학점");
    }
}
