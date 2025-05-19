const products = [
    {id:1, prodname : '상품 A', price:10000},
    {id:2, prodname : '상품 B', price:15000},
    {id:3, prodname : '상품 C', price:40000},
    {id:4, prodname : '상품 D', price:20000},
    {id:5, prodname : '상품 E', price:35000}
];

// 변수 선언
const cart = [];
let uid = 0;

// 객체 설정
const $prodlist = document.querySelector("#product-list");
const $cartlist = document.querySelector("#cart-list");
const $total = document.querySelector("#total");

// 총액 업데이트 함수
const updatetotal = () => {
    const total = cart.reduce((sum, item) => {
        return sum + item.price; // 오타 수정: prcie → price
    }, 0);
    $total.textContent = total;
}

// 장바구니 전체 렌더링 함수
const removeCart = () => {
    $cartlist.innerHTML = '';
    cart.forEach((item) => {
        addcartitem(item);
    });
    updatetotal();
};

// 장바구니에서 특정 상품 삭제 함수
const removecart = (uid) => {
    const idx = cart.findIndex((item) => {
        return item.uid === uid;
    });
    if (idx > -1) { // 0도 포함해야 하므로 > -1
        cart.splice(idx, 1);
    }
    removeCart(); 
}

// cart item 추가 함수
const addcartitem = (item) => {
    const divelem = document.createElement("div");
    divelem.className = "cart";
    divelem.dataset.uid = item.uid;

    const spanelem = document.createElement("span");
    spanelem.textContent = `${item.prodname} (￦${item.price})`;

    const btnelem = document.createElement("button");
    btnelem.textContent = "삭제";

    btnelem.addEventListener("click", () => {
        // cart 배열에서 삭제
        const idx = cart.findIndex(v => v.uid === item.uid);
        if (idx > -1) cart.splice(idx, 1);
        // 화면에서 삭제
        divelem.remove();
        updatetotal();
    });

    divelem.appendChild(spanelem); 
    divelem.appendChild(btnelem);  
    $cartlist.appendChild(divelem);
};

// 상품 목록 생성
products.forEach((item) => {
    const divelem = document.createElement("div");
    divelem.className = "product";
    const spanelem = document.createElement("span");
    spanelem.textContent = `${item.prodname} (￦${item.price})`;
    const btnelem = document.createElement("button");
    btnelem.textContent = "장바구니 추가";
    // 장바구니 버튼 선택 시 cart에 추가
    btnelem.addEventListener("click", () => {
        const newitem = { ...item, uid: uid++ };
        cart.push(newitem);
        addcartitem(newitem);
        updatetotal();
    });
    divelem.appendChild(spanelem);
    divelem.appendChild(btnelem);
    $prodlist.appendChild(divelem);
});

/*
[장바구니 코드 복습 가이드]

1. 상품 목록(products)
- 상품 정보를 객체 배열로 관리합니다.
- 각 상품은 id, prodname, price 속성을 가집니다.

2. cart 배열과 uid
- cart: 장바구니에 담긴 상품 객체를 저장하는 배열입니다.
- uid: 각 상품을 장바구니에 담을 때 고유 식별자로 사용합니다(중복 방지).

3. 주요 DOM 객체
- $prodlist: 상품 목록이 표시될 영역
- $cartlist: 장바구니 목록이 표시될 영역
- $total: 장바구니 총액이 표시될 영역

4. 총액 업데이트 함수(updatetotal)
- cart 배열의 모든 상품 가격을 합산하여 $total에 표시합니다.

5. 장바구니 전체 렌더링 함수(removeCart)
- $cartlist를 비우고, cart 배열의 모든 상품을 addcartitem 함수로 화면에 추가합니다.
- 총액도 함께 갱신합니다.

6. 장바구니에서 특정 상품 삭제(removecart)
- uid로 cart 배열에서 해당 상품을 찾아 삭제합니다.
- 삭제 후 removeCart()로 화면을 다시 그립니다.

7. cart item 추가 함수(addcartitem)
- 장바구니에 상품 하나를 추가할 때 호출됩니다.
- 상품명(span)과 삭제 버튼(button)을 생성하여 cart 영역에 추가합니다.
- 삭제 버튼 클릭 시 cart 배열과 화면에서 해당 상품이 제거되고, 총액이 갱신됩니다.

8. 상품 목록 생성
- products 배열을 순회하며 상품 div, span, 버튼을 생성해 $prodlist에 추가합니다.
- "장바구니 추가" 버튼 클릭 시 cart에 상품이 추가되고, addcartitem과 updatetotal이 호출됩니다.

[정리]
- 상품을 장바구니에 담으면 cart에 추가되고, 장바구니 영역에 상품명과 삭제 버튼이 표시됩니다.
- 삭제 버튼 클릭 시 해당 상품이 cart와 화면에서 제거되고, 총액이 다시 계산됩니다.
- 모든 동작은 DOM 조작(createElement, appendChild 등)과 이벤트 리스너(addEventListener)로 구현됩니다.
*/