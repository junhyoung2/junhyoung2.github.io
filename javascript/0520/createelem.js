/*
document.queryselector ("선택자") : 1개의 요소만 가져옵니다.
document.queryselectorall ("선택자") : nodelist[]
*/

/*
checkbox에 체크가 되면 label에 class="change" 
*/

//객체 가져오기
const $check =document.querySelector("input[type=checkbox]");
const $label = document.querySelector("label[for=data]");

$check.addEventListener("change",()=>{
    // if($check.checked){
    //     //라벨에 클래스를 추가 :classlist(배열), classname(문자열)
    //     // $label.className="change";
    //     $label.classList.add("change");
    // }else{
    //     // $label.className ='';
    //     $label.classList.remove("change");
    // }
    $label.classList.toggle("change");
});
