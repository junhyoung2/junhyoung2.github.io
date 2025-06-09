const $main = document.createElement("main");
console.log($main); //main
const $h2 = document.createElement("h2");
$h2.textContent = "welcome, react world!";
$main.appendChild($h2);
document.body.appendChild($main);
