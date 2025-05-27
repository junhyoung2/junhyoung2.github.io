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