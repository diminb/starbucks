// document = 문서
// 검색창 스크립트 입력하기😊
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
  // input 요소가 속해있는 아이콘을 선택해도 활성화 되도록
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // 특정 클래스에 add하겠다 (추가)
  searchInputEl.setAttribute('placeholder', '통합검색');
  // html의 속성을 지정할 때
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  // 특정 클래스에 remove하겠다 (삭제)
  searchInputEl.setAttribute('placeholder', '');
});


// 헤더의 우측 뱃지들 내용 스크롤에 따라😊 , ScrollTo😊
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션); "라이브러리 활용법"
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none' // 문자로 입력할 땐 '' 넣어줄 것
    });
    //버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기! (ScrollTo)
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

// 배너 이미지😊
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.7초 뒤 투명도 1로 변경
    opacity: 1, 
  }); 
});


// SWIPER😊
  // new Swiper(선택자, {옵션});
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 스와이퍼 움직이는 기능 (가로)
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

// PROMOTION TOGGLE SWIPER
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
//푸터쪽 스와이퍼
new Swiper('.awards .swiper-container', {
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 30, // 슬라이드 사이 여백
  loop: true,
  autoplay: true,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

// Toggle 적용하기 (숨겨진 페이지 버튼, 누르면 없어지거나 나오게)
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion // !뒤는 반대값
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});

// youtube 쪽 이미지 애니메이션😊
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector,delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size,
      repeat: -1, // 음수인 -1은 무한반복으로 사용 가능
      yoyo: true, // 다시 처음으로 돌아오도록
      ease: Power1.easeInOut,
      delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15); // 앞의 숫자는 딜레이, 뒤는 이동범위
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// scrollMagic😊 (컨텐츠 스크롤 이벤트 효과)
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐의 여부를 감시할 요소를
      triggerHook: .8 // 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

//this year😊 FOOTER
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2022