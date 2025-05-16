// const mainimg = document.querySelector("img");
//         const prevbtn = document.querySelector("button:nth-of-type(1)");
//         const nextbtn = document.querySelector("button:nth-of-type(2)");

//         let current = 1;

//         const nextbtnclick = () => {
//             current++;
//             if (current > 5) {
//                 current = 1;
//             }
//             mainimg.src = `../num_img/img-${current}.png`;
//         };
//         nextbtn.addEventListener("click", nextbtnclick);

//         const prevbtnclick = () => {
//             current--;
//             if (current < 1) {
//                 current = 5;
//             }
//             mainimg.src = `../num_img/img-${current}.png`;
//         };
//         prevbtn.addEventListener("click", prevbtnclick);







const mainimg = document.querySelector("img");
const prevbtn = document.querySelector(".prev");
const nextbtn = document.querySelector(".next");

let current = 1;

const nextbtnclick = () => {
    current++;
    if (current > 5) {
        current = 1;
    }
    mainimg.src = `../num_img/img-${current}.png`;
};
nextbtn.addEventListener("click", nextbtnclick);

const prevbtnclick = () => {
    current--;
    if (current < 1) {
        current = 5;
    }
    mainimg.src = `../num_img/img-${current}.png`;
};
prevbtn.addEventListener("click", prevbtnclick);