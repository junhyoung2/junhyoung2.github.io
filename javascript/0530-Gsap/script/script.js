// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// -------------------------
// [1] Header 영역 애니메이션
// -------------------------

// 이전 방식 (timeline 사용한 순차 등장)
// const tl = gsap.timeline();
// tl.from(".slogan>h2",{
//     opacity:0,
//     y:-50,
//     duration:1
// })
// .from(".slogan>h1",{
//     opacity:0,
//     y:-50,
//     duration:1
// },"-=0.5")
// .from(".slogan>p",{
//     opacity:0,
//     y:-50,
//     duration:1
// },"-=0.5");

// 개선된 방식: h2, h1, p를 한번에 타겟팅하여 순차 애니메이션 처리 (stagger 사용)
gsap.from(".slogan>h2,.slogan>h1,.slogan>p", {
    opacity: 0,
    y: -50,
    duration: 1,
    stagger: 0.5, // 각 요소마다 0.5초 간격으로 순차 재생
});


// -------------------------
// [2] About Me 영역 진입 애니메이션
// -------------------------

gsap.from("#aboutme", {
    opacity: 0,
    y: 100, // 아래에서 위로 등장
    scrollTrigger: {
        trigger: "#aboutme",   // 트리거 요소 지정
        start: "top 60%",      // 화면의 60% 지점에 닿을 때 시작
        end: "top 30%",        // 30% 지점까지 스크롤될 때 끝
        scrub: true,           // 스크롤과 연동해서 부드럽게 재생
        // markers:true         // 디버깅용 마커 표시 (필요 시 주석 해제)
    },
});


// -------------------------
// [3] Laster 영역 - 가로 스크롤 애니메이션
// -------------------------

const $ul = document.querySelector("#laster>ul");

// 전체 UL의 scrollWidth에서 현재 뷰포트 width를 뺀 거리만큼 좌로 이동
const dist = $ul.scrollWidth - window.innerWidth;

// const dist = $ul.scrollWidth - (window.innerWidth * 0.7); 
// 위 방식처럼 70% 뷰포트 기준으로 할 수도 있음 (선택 사항)

gsap.to($ul, {
    x: -dist, // 오른쪽으로 이동시키기 위해 음수
    ease: "none", // 가속 없이 일정하게 움직이도록 설정
    scrollTrigger: {
        trigger: "#laster",   // 트리거 요소
        start: "top top",     // 요소의 top이 뷰포트 top에 닿을 때 시작
        end: "+=" + dist,     // dist만큼 스크롤해야 끝남
        pin: true,            // 해당 섹션 고정
        scrub: true,          // 스크롤과 동기화
        // markers: true,     // 디버깅용 마커 (필요시 사용)
    },
});


// -------------------------
// [4] Contact 영역 진입 시 타이틀 애니메이션
// -------------------------

gsap.from("#contact .title", {
    opacity: 0.3,     // 약하게 시작
    scale: 0.5,       // 작게 시작해서 커지게
    duration: 1,
    scrollTrigger: {
        trigger: "#contact", // contact 영역에 닿으면 애니메이션 시작
        start: "top 50",     // 화면의 50px 지점에서 시작
    },
});
