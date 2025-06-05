(function(){
  gsap.registerPlugin(ScrollTrigger);

  // header 영역의 title이 오른쪽에서 왼쪽으로 이동
  const $headerMsg = document.querySelectorAll("header .title li");
  gsap.from($headerMsg, {
    x: 300,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  });

  // 화살표 애니메이션
  gsap.set(".arrow > p", { y: 0 });
  const tl = gsap.timeline({ repeat: -1 });
  tl.to(".arrow > p", {
    y: 10,
    opacity: 1,
    stagger: 0.2,
    duration: 0.2,
    ease: "power1.out",
  }).to(".arrow > p", {
    y: 20,
    opacity: 0,
    stagger: 0.2,
    duration: 0.2,
    ease: "power1.out",
  });

  // h1 태그 애니메이션
  gsap.from("header>h1", {
    scale: 0.7,
    opacity: 0,
    duration: 1,
    ease: "bounce.out",
  });

  // about 영역 가로 스크롤
  const $aboutWrap = document.querySelector("#about>.about-wrap");
  const scrollWidth = $aboutWrap.scrollWidth - window.innerWidth;
  const horizonScroll = gsap.to($aboutWrap, {
    x: -scrollWidth,
    duration: 1,
    scrollTrigger: {
      trigger: "#about",
      start: "top top",
      end: "+=" + scrollWidth,
      pin: true,
      scrub: true,
    },
  });

  // about info p 태그 애니메이션
  const $aboutMsg = document.querySelectorAll("#about .info p");
  $aboutMsg.forEach((msg) => {
    gsap.from(msg, {
      x: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: msg,
        containerAnimation: horizonScroll,
        start: "left 90%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  // keyword 가로 왕복 애니메이션
  const $keywordList = document.querySelectorAll(".keyword>li");
  $keywordList.forEach((elem, idx) => {
    const posX = idx === 1 ? 50 : -50;
    gsap.fromTo(
      elem,
      { x: posX },
      {
        x: -posX,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "none",
      }
    );
  });

  // project 계단식 애니메이션
  const fromTop = (elem, posY) => {
    gsap.from(elem, {
      y: 200,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: elem,
        start: `top ${posY}%`,
        end: "top 25%",
        scrub: true,
      }
    });
  };

  const $project = document.querySelectorAll("#projects>.nomal");
  $project.forEach((article) => {
    const $item = article.querySelectorAll(".item");
    $item.forEach((item, idx) => {
      let posY = 90 - idx * 15;
      fromTop(item, posY);
    });
  });

  const $practice = document.querySelectorAll("#projects>.practice .item");
  $practice.forEach((item, idx) => {
    let posY = 70 - idx * 4;
    fromTop(item, posY);
  });

  // skills > h2 애니메이션
  gsap.to("#skills>h2", {
    opacity: 0,
    scale: 0.5,
    duration: 2,
    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
      toggleActions: "play reverse play reverse"
    }
  });

  // skills > li 애니메이션
  const $shapes = document.querySelectorAll(".skill-item > li");
  gsap.from($shapes, {
    opacity: 0,
    scale: 0.2,
    duration: 0.5,
    stagger: 0.2,
    ease: "back.out",
    scrollTrigger: {
      trigger: "#skills", // ← 여기 수정됨!
      start: "top 50%",
      toggleActions: "play reverse play reverse"
    }
  });

  // footer 애니메이션
  const $footer = document.querySelectorAll(".footer-wrap> *");
  gsap.from($footer, {
    scale: 1.3,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "footer",
      start: "top 20%"
    }
  });

  // HOME 로고 클릭 시 상단 이동
  const $home = document.querySelector("#logo");
  $home.addEventListener("click", () => {
    window.scrollTo({ top: 0 });
  });
})();
