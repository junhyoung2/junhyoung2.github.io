<<<<<<< HEAD
//객체 가져오기
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const originalSections = Array.from(track.children);
    const leftBtn = document.querySelector(".left");
    const rightBtn = document.querySelector(".right");
    const dots = document.querySelectorAll(".dot");
    const header = document.querySelector("header");
    const menuList = document.querySelectorAll(".menu-wrap > li"); 

    // 슬라이드가 없으면 에러 출력 후 종료
    if (originalSections.length === 0) {
        console.error("캐러셀에 슬라이드가 없습니다.");
        return;
    }

    // sectionWidth 계산: 슬라이드 너비 + CSS .carousel-track의 gap
    const SLIDE_WIDTH = originalSections[0].offsetWidth; 
    const GAP_WIDTH = 40; 
    const sectionWidth = SLIDE_WIDTH + GAP_WIDTH;

    // 보이는 아이템 수와 클론 개수 계산 (더 유연하게)
    const carouselContainerElement = document.querySelector(
        ".carousel-container"
    );
    const containerWidth = carouselContainerElement.offsetWidth;
    const containerPaddingHorizontal =
        parseFloat(getComputedStyle(carouselContainerElement).paddingLeft) +
        parseFloat(getComputedStyle(carouselContainerElement).paddingRight);
    const effectiveViewportWidth = containerWidth - containerPaddingHorizontal;

    const numVisibleSlides = Math.floor(effectiveViewportWidth / sectionWidth);
    const cloneCount = Math.max(1, numVisibleSlides + 1);

    let currentIndex = cloneCount;

    // 기존 클론 제거 (중복 방지)
    track.querySelectorAll(".clone").forEach((clone) => clone.remove());

    // 클론 추가 (앞쪽) - 원본의 마지막 아이템들
    for (let i = 0; i < cloneCount; i++) {
        const slideIndex = originalSections.length - 1 - i;
        if (slideIndex >= 0) {
            const clone = originalSections[slideIndex].cloneNode(true);
            clone.classList.add("clone");
            track.insertBefore(clone, track.firstChild);
        }
    }
    // 클론 추가 (뒤쪽) - 원본의 첫 아이템들
    for (let i = 0; i < cloneCount; i++) {
        if (i < originalSections.length) {
            const clone = originalSections[i].cloneNode(true);
            clone.classList.add("clone");
            track.appendChild(clone);
        }
    }

    // 클론이 추가된 후 전체 슬라이드 리스트 다시 가져오기
    const allSlides = Array.from(track.children);

    // 이미지 로딩 완료 후처리 함수 (Promise.all 사용하여 모든 이미지 로드 대기)
    function imagesLoaded(elements) {
        const promises = [];
        elements.forEach((element) => {
            const imgElements = Array.from(element.querySelectorAll("img"));
            if (imgElements.length === 0) {
                promises.push(Promise.resolve());
                return;
            }
            imgElements.forEach((img) => {
                promises.push(
                    new Promise((resolve) => {
                        if (img.complete && img.naturalWidth !== 0) {
                            resolve();
                        } else {
                            img.onload = resolve;
                            img.onerror = resolve;
                        }
                    })
                );
            });
        });
        return Promise.all(promises);
    }

    // 닷 및 메뉴 활성화 상태 업데이트
    function updateActiveState() {
        const realIndex =
            (currentIndex - cloneCount + originalSections.length) %
            originalSections.length;

        dots.forEach((dot, idx) => {
            dot.classList.toggle("active", idx === realIndex);
        });

        menuList.forEach((menuItem, idx) => {
            menuItem.classList.toggle("active", idx === realIndex);
        });
    }

    // 루프 재설정 로직 (GSAP onComplete에서 호출)
    function handleLoopReset() {
        if (currentIndex >= originalSections.length + cloneCount) {
            currentIndex = cloneCount;
            gsap.set(track, { x: -(sectionWidth * currentIndex) });
        } else if (currentIndex < cloneCount) {
            currentIndex = originalSections.length + cloneCount - 1;
            gsap.set(track, { x: -(sectionWidth * currentIndex) });
        }
    }

    // 캐러셀 이동 
    function moveToIndex(newIndex) {
        if (gsap.isTweening(track)) {
            return;
        }

        currentIndex = newIndex;
        updateActiveState();

        gsap.to(track, {
            duration: 0.5,
            x: -(sectionWidth * currentIndex),
            ease: "power2.inOut",
            onComplete: handleLoopReset,
        });
    }



    // 모든 이미지 로딩 후 캐러셀 초기화
    imagesLoaded(allSlides)
        .then(() => {
            gsap.set(track, { x: -(sectionWidth * currentIndex) });
            updateActiveState();
        })
        .catch((error) => {
            console.error("이미지 로딩 중 오류 발생:", error);
            gsap.set(track, { x: -(sectionWidth * currentIndex) });
            updateActiveState();
        });




    // --- 이벤트 리스너 ---

    // 다음/이전 버튼 이벤트
    rightBtn.addEventListener("click", () => moveToIndex(currentIndex + 1));
    leftBtn.addEventListener("click", () => moveToIndex(currentIndex - 1));

    // 닷 클릭 이벤트
    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => {
            moveToIndex(idx + cloneCount);
        });
    });

    // 메뉴 리스트 클릭 이벤트
    menuList.forEach((menuItem, idx) => {
        menuItem.addEventListener("click", () => {
            moveToIndex(idx + cloneCount);
        });
    });

    // 헤더 클릭 시 초기화
    header.addEventListener("click", () => {
        moveToIndex(cloneCount);
    });
});
=======
const track = document.querySelector('.carousel-track');
const sections = document.querySelectorAll('.carousel-track section');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
const visibleCount = 2.5;
const sectionWidth = 340 + 40; // section width + margin-right

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * sectionWidth}px)`;
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
    });
    // 버튼 비활성화 처리
    leftBtn.disabled = currentIndex === 0;
    rightBtn.disabled = currentIndex >= sections.length - visibleCount;
}

leftBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

rightBtn.addEventListener('click', () => {
    if (currentIndex < sections.length - visibleCount) {
        currentIndex++;
        updateCarousel();
    }
});

dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        if (idx <= sections.length - visibleCount) {
            currentIndex = idx;
            updateCarousel();
        }
    });
});

window.addEventListener('resize', updateCarousel);

updateCarousel();
>>>>>>> 31ffbe51f667ba4ec83c62da23bc76f0c3e04967
