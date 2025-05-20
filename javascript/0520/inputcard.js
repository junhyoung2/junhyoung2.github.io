const nameelem=document.querySelector("#inputname");
const ageelem=document.querySelector("#inputage");
const formelem=document.querySelector("#userform");
const listelem= document.querySelector(".container");

//item 요소 생성 함수
const createitem = (nametxt,agetxt)=>{
    // div 요소 생성
    const divelem=document.createElement("div");
    divelem.className="item";
    //span 요소 생성
    const spanelem =document.createElement("span");
    spanelem.textContent=`${nametxt}(${agetxt}세)`;
    divelem.appendChild(spanelem);
    //button 요소 생성
    const btnelem = document.createElement("button");
    btnelem.textContent = "삭제";
    btnelem.addEventListener("click",()=>{
        divelem.remove(); //DOM 요소를 완전히 삭제
    });
    divelem.appendChild(btnelem);
    listelem.appendChild(divelem);
};

//폼에서 submit이 실행이 되는 경우
formelem.addEventListener("submit",(event)=>{
    event.preventDefault();
    const nametxt = nameelem.value.trim();
    const agetxt = ageelem.value.trim();
    if(nametxt && agetxt){
        //item 생성
        createitem(nametxt,agetxt);
        // 입력필드 초기화
        formelem.reset();
    }
    
});


/*
[입력 카드 동작 가이드]

1. 주요 요소 선택
- nameelem: 이름 입력 input (#inputname)
- ageelem: 나이 입력 input (#inputage)
- formelem: 사용자 입력 form (#userform)
- listelem: 생성된 카드가 추가될 영역 (.container)

2. createitem 함수
- 전달받은 이름(nametxt), 나이(agetxt)로 div.item 요소를 생성
- span에 "이름(나이세)" 형태로 텍스트 표시
- "삭제" 버튼을 만들어 클릭 시 해당 div.item을 DOM에서 제거
- 완성된 div.item을 listelem(.container)에 추가

3. 폼 제출 이벤트 처리
- form에서 submit 이벤트 발생 시 기본 동작(페이지 새로고침) 방지
- 입력값을 trim()으로 앞뒤 공백 제거 후 변수에 저장
- 이름과 나이가 모두 입력된 경우에만 createitem 함수로 카드 생성
- 카드 생성 후 입력 필드(form)를 초기화

[정리]
- 사용자가 이름과 나이를 입력하고 엔터(또는 제출)하면 카드가 생성됨
- 각 카드의 "삭제" 버튼을 누르면 해당 카드가 즉시 삭제됨
- 모든 동작은 DOM 조작(createElement, appendChild, remove)과 이벤트 리스너(addEventListener)로 구현됨
*/