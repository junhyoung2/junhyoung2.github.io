let currentScript = '';

const checkDevice = () => {
    const device = window.innerWidth <= 768 ? "mobile" : "pc";
    if (currentScript === device) return;

    // 기존 스크립트 제거
    const $prev = document.querySelector(`script[data-script]`);
    if ($prev){
        $prev.remove();
        location.reload();
    } 

    const script = document.createElement("script");
    script.src = `/script/${device}.js`; // 절대경로 추천
    script.setAttribute("data-script", "true");
    document.body.appendChild(script);

    currentScript = device;
};

window.addEventListener("load", () => {
    checkDevice();
    gsap.registerPlugin(ScrollTrigger);
});

let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(checkDevice, 300);
});
