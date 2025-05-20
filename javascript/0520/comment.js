//객체 정보 가져오기
const $form = document.querySelector("#comment-form");
const $input = document.querySelector("#comment-input");
const $list = document.querySelector("#comment-list");

// 댓글 수정 버튼을 클릭 했을 때 사용 함수
const editcomment = ($comment, oldtext) => {
    $comment.innerHTML = "";
    const input = document.createElement("input");
    input.type = "text";
    input.value = oldtext;
    input.className = "edit-input";
    const $btnwrap = document.createElement("div");
    $btnwrap.className = "btn-wrap";
    const $savebtn = createbutton("save-btn", "저장");
    $savebtn.addEventListener("click", () => {
        // 저장 버튼을 클릭하면
        const newtext = input.value.trim();
        if (newtext) {
            $list.replaceChild(buildcommentelem(newtext), $comment);
        }
    });
    const $cancelbtn = createbutton("cancel-btn", "취소");
    $cancelbtn.addEventListener("click", () => { 
        // 취소 버튼을 클릭하면
        $list.replaceChild(buildcommentelem(oldtext), $comment);
    });
    $btnwrap.appendChild($savebtn);
    $btnwrap.appendChild($cancelbtn);

    $comment.innerHTML = '';
    $comment.appendChild(input);
    $comment.appendChild($btnwrap);
};

// 버튼 요소 생성하는 함수
const createbutton = (value, text) => {
    const elem = document.createElement("button");
    elem.className = value;
    elem.textContent = text;
    return elem; // 생성한 버튼 요소를 반환
};

// 댓글 요소 생성 함수
const buildcommentelem = (text) => {
    const $div = document.createElement("div");
    $div.className = "comment";
    const $span = document.createElement("span");
    $span.textContent = text;
    $div.appendChild($span);
    const $btnwrap = document.createElement("div");
    $btnwrap.className = "btn-wrap";
    const $editbtn = createbutton("edit-btn", "수정");

    // 수정 버튼이 클릭되면
    $editbtn.addEventListener("click", () => {
        editcomment($div, $span.textContent);
    });

    const $delbtn = createbutton("del-btn", "삭제");
    // 삭제 버튼이 클릭되면
    $delbtn.addEventListener("click", () => {
        $div.remove();
    });

    $btnwrap.appendChild($editbtn);
    $btnwrap.appendChild($delbtn);
    $div.appendChild($btnwrap);
    return $div;
};

// 댓글 등록 버튼이 실행이 되면
$form.addEventListener("submit", (event) => {
    event.preventDefault(); // 기능 초기화
    const text = $input.value.trim();
    if (text) {
        const $div = buildcommentelem(text);
        $list.appendChild($div);
        $form.reset();
    }
});