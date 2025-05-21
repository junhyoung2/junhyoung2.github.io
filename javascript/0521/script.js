//요소 선택

const $menu = document.querySelectorAll("main>ul>li"); // 메뉴(li) 모두 선택
const $section = document.querySelector("section"); // section 요소 선택

// 메뉴 클릭 시 on 클래스 토글
$menu.forEach((elem) => {
    elem.addEventListener("click", () => {
        // 기존에 on 클래스가 있으면 제거
        const $on = document.querySelector("main > ul > li.on");
        if ($on) {
            $on.classList.remove("on");
        }
        // 클릭한 li에 on 클래스 추가
        elem.classList.add("on");
       
        // 클릭한 메뉴 텍스트 가져오기
        const filter = elem.textContent.trim().toLowerCase();
        const $article = document.querySelectorAll("section>article");
        $article.forEach((article)=>{
            const text = article.classList.contains("odd") ? "odd" : 
                        article.classList.contains("even") ? "even" :  "";
                        if(filter === 'all' || filter === text){
                            article.style.display="block";
                        }else{
                            article.style.display="none";
                        }
                    });
    });
});   

// imglist에서 정보를 읽어와서 요소를 생성하여 section에 추가
imglist.forEach((data) => {

    // 요소 생성
    const $article = document.createElement("article");
    $article.classList.add(data.type);
    const $div = document.createElement("div");

    const $img = document.createElement("img");
     $img.src = data.img; //→ 이미지 경로를 설정
    $img.alt = data.title; //→ 이미지 대체 텍스트 설정

    const $h2 = document.createElement("h2");
    $h2.textContent = data.title; //→ 제목 텍스트 설정

    const $p = document.createElement("p");
    $p.textContent = data.disc; //→ 설명 텍스트 설정

    // article에 이미지, 제목, 설명 추가
    $article.appendChild($img);
    $article.appendChild($h2);
    $article.appendChild($p);

    // 완성된 article을 section에 추가
    $section.appendChild($article);
});
