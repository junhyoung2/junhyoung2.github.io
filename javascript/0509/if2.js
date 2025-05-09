const ismember = true;
const age = 100;
// if (ismember) {
//     if (age >= 18) {
//         console.log("성인 회원입니다");
//     } else {
//         console.log("미성년자 입니다.");
//     }
// }

if(ismember &&age >=18){
    console.log("성인회원 입니다.");
}else if(ismember && age < 18){
    console.log("미성년자 입니다.");
}