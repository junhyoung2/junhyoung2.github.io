//무한 반복, 시간이 지난 다음에 실행
// setTimeout : ~시간이 지난다음에 한 번 실행
// setInterval : ~마다 실행 (무한반복)

// setTimeout(()=>{
//     console.log("timeout");
// },3000);


let time = 0;
const timerID = setInterval(() => {
    console.log(`${time++}`);
}, 300);


//일정시간이 지나면 종료
setTimeout(()=>{
    clearInterval(timerID);
},3000)

