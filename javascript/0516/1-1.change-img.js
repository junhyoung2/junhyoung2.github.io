//다음 버튼을  클릭 했을 때
const prevbtn = document.querySelector("main>button:nth-child(1)");
prevbtn.disabled = true;
const nextbtn = document.querySelector("main>button:nth-child(3)");
const mainimg = document.querySelector("img");
let count = 1;
console.log(typeof mainimg);
// console.log(nextbtn);
nextbtn.addEventListener("click", () => {
    //이미지 변경되어야함
    //1>2>3>4>5
    if (count < 5) {
        if (count < 5) {
            count++;
            if (count === 5) {
                nextbtn.disabled = true;
            }
        }
    }
    console.log(count);
    mainimg.src = `../num_img/img-${count}.png`;
});
prevbtn.addEventListener("click", () => {
    // next btn이 다시 활성화
    nextbtn.disabled = false;
    //이미지 변경되어야함 1>2>3>4>5
    if (count > 1) {
        count--;
    } else if (count === 1) {
        prevbtn.disabled = true;
    }
    console.log(count);
    mainimg.src = `../num_img/img-${count}.png`;
});
