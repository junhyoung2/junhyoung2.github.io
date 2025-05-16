const descs = [
    "이미지 1 설명입니다.",
    "이미지 2 설명입니다.",
    "이미지 3 설명입니다.",
    "이미지 4 설명입니다.",
    "이미지 5 설명입니다."
];

// 버튼, 이미지, 설명 요소 선택 (id 또는 class로 선택)
const prevbtn = document.querySelector(".prev"); 
const nextbtn = document.querySelector(".next"); 
const imgelem = document.querySelector("div>img");
const pelem = document.querySelector("div>p");

let current = 1;


// 다음 버튼 클릭 시
nextbtn.addEventListener("click", () => {
        current++;
        if(current>5){
            current=1;
        }
        imgelem.src = `../num_img/img-${current}.png`;
        pelem.textContent=descs[current-1];
});
// 이전 버튼 클릭 시
prevbtn.addEventListener("click", () => {
        current--;
        if(current<1){
            current=5;
        }
        imgelem.src = `../num_img/img-${current}.png`;
        pelem.textContent=descs[current-1];
});
