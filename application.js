document.addEventListener("DOMContentLoaded", function () {
  var e = .3
    , t = document.querySelector('[data-more="btn"]')
    , o = document.querySelector('[data-more="text"]');
  t.addEventListener("click", function (e) {
    e.preventDefault(), o.classList.add("-opened"), this.style.display = "none"
  }), new Swiper("#swiper", {
    direction: "horizontal"
    , loop: !1
    , effect: "coverflow"
    , grabCursor: !0
    , keyboardControl: !0
    , mousewheelControl: !1
    , watchSlidesProgress: !0
    , centeredSlides: !0
    , spaceBetween: -10
    , slidesPerView: "auto"
    , coverflow: {
      rotate: 0
      , stretch: 0
      , depth: 0
      , modifier: 1
      , slideShadows: !1
    }
    , nextButton: ".swiper-button-next"
    , prevButton: ".swiper-button-prev"
    , onInit: function (t) {
      [].forEach.call(t.slides, function (t) {
        t.style.opacity = e
      }), t.slides[t.activeIndex].style.opacity = 1
    }
    , onProgress: function (t, o) {
      [].forEach.call(t.slides, function (t) {
        o = Math.abs(t.progress), o < 1 && o > -1 ? t.style.opacity = 1 - (1 - e) * o : t.style.opacity = e
      })
    }
  })
});