/*

// 다음 버튼을 클릭했을 때
const prevbtn = document.querySelector("main>button:nth-child(1)"); 
prevbtn.disabled = true; // 첫 이미지이므로 이전 버튼 비활성화
const nextbtn = document.querySelector("main>button:nth-child(3)");
const mainimg = document.querySelector("img");
let count = 1;

// 다음 버튼 클릭 이벤트
nextbtn.addEventListener("click", () => {
    if (count < 5) {
        count++;
        prevbtn.disabled = false; // 이전 버튼 활성화
        if (count === 5) {
            nextbtn.disabled = true; // 마지막 이미지면 다음 버튼 비활성화
        }
    }
    mainimg.src = `../num_img/img-${count}.png`;
    console.log(count);
});

// 이전 버튼 클릭 이벤트
prevbtn.addEventListener("click", () => {
    if (count > 1) {
        count--;
        nextbtn.disabled = false; // 다음 버튼 활성화
        if (count === 1) {
            prevbtn.disabled = true; // 첫 이미지면 이전 버튼 비활성화
        }
    }
    mainimg.src = `../num_img/img-${count}.png`;
    console.log(count);
});

/*
[가이드 주석]
- count: 현재 이미지 번호(1~5)
- 처음에는 이전 버튼 비활성화, 마지막에는 다음 버튼 비활성화
- 다음 버튼 클릭 시 count 증가, 이전 버튼 활성화
- 이전 버튼 클릭 시 count 감소, 다음 버튼 활성화
- 첫 이미지(count=1)에서는 이전 버튼 비활성화
- 마지막 이미지(count=5)에서는 다음 버튼 비활성화
- 이미지가 바뀔 때마다 mainimg.src를 변경
*/
const prevbtn = document.querySelector("main>button:nth-Child(1)");
const nextbtn = document.querySelector("main>button:nth-Child(3)");
const mainimg =document.querySelector("img");
console.log(prevbtn,nextbtn,mainimg);
let count = 1;


nextbtn.addEventListener("click",() => {
    if(count < 5){
        count++;
        prevbtn.disabled=false;
        if(count===5){
            nextbtn.disabled=true;
        }
    }
    mainimg.src=`../num_img/img-${count}.png`;
    console.log(count);
});



prevbtn.addEventListener("click",() => {
    if(count > 1){
        count--;
        prevbtn.disabled=false;
        if(count===1){
            nextbtn.disabled=true;
        }
    }
    mainimg.src=`../num_img/img-${count}.png`;
    console.log(count);
});