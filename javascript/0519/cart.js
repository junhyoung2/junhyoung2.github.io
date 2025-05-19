const products = [
    { id: 1, prodname: "상품 A", price: 10000 },
    { id: 2, prodname: "상품 B", price: 20000 },
    { id: 3, prodname: "상품 C", price: 15000 },
];
const cartlistelem = document.querySelector(".cart-list");
const cart = [];

// 장바구니에서 상품 삭제 함수
function removeCart(idx) {
    console.log(`삭제: ${cart[idx].prodname} (￦${cart[idx].price})`);
    cart.splice(idx, 1);
    rendercart();
}

// 장바구니 렌더링 함수 (createElement 방식)
function rendercart() {
    if (cart.length === 0) {
        cartlistelem.innerHTML = `<p>장바구니가 비어 있습니다.</p>`;
        document.querySelector("#total").textContent = `0원`;
    } else {
        cartlistelem.innerHTML = ""; // 기존 내용 비우기
        let total = 0;
        cart.forEach((elem, idx) => {
            const cartitem = document.createElement("div");
            cartitem.className = "cart";
            const spanitem = document.createElement("span");
            spanitem.textContent = `${elem.prodname} (￦${elem.price})`;
            cartitem.appendChild(spanitem);

            const btnitem = document.createElement("button");
            btnitem.textContent = "삭제";
            btnitem.addEventListener("click", () => {
                removeCart(idx);
            });
            cartitem.appendChild(btnitem);

            cartlistelem.appendChild(cartitem);
            total += elem.price;
        });
        document.querySelector("#total").textContent = `${total}원`;
    }
}

// 상품 추가 버튼 이벤트 등록
const addelem = document.querySelectorAll(".product>button");
addelem.forEach((elem, idx) => {
    elem.addEventListener("click", () => {
        cart.push(products[idx]);
        console.log(`추가: ${products[idx].prodname} (￦${products[idx].price})`);
        rendercart();
    });
});

// 페이지 로드 시 장바구니 렌더링
rendercart();


/*
[장바구니 코드 가이드]

1. 상품 목록(products)
- 상품 정보를 객체 배열로 관리합니다.
  예: { id: 1, prodname: "상품 A", price: 10000 }

2. 장바구니(cart)
- 사용자가 담은 상품을 저장하는 배열입니다.

3. 장바구니 렌더링(rendercart)
- cart 배열을 순회하며 화면에 상품을 동적으로 표시합니다.
- 각 상품마다 <div class="cart">를 만들고, 상품명/가격/삭제 버튼을 추가합니다.
- 삭제 버튼 클릭 시 removeCart(idx) 함수가 실행되어 해당 상품이 cart에서 제거됩니다.
- 장바구니가 비었으면 "장바구니가 비어 있습니다." 메시지를 출력합니다.
- 총액은 cart 배열의 모든 상품 가격을 합산하여 #total에 표시합니다.

4. 상품 추가 버튼 이벤트 등록
- .product>button을 모두 선택해 각 버튼에 클릭 이벤트를 등록합니다.
- 클릭 시 해당 상품을 cart에 추가하고 rendercart()로 화면을 갱신합니다.
- 콘솔에 "추가: 상품명 (가격)" 로그가 출력됩니다.

5. 삭제 버튼 동작
- 각 장바구니 상품의 삭제 버튼을 누르면 removeCart(idx)가 호출되어 해당 상품이 cart에서 삭제되고, rendercart()로 화면이 갱신됩니다.
- 콘솔에 "삭제: 상품명 (가격)" 로그가 출력됩니다.

6. 페이지 로드 시 rendercart() 호출로 장바구니 초기화 상태를 보여줍니다.

[주의]
- cart 배열의 인덱스를 기반으로 삭제하므로, 여러 번 삭제/추가 시 인덱스가 꼬일 수 있습니다.
- 실제 서비스에서는 고유 id로 관리하는 것이 더 안전합니다.
*/