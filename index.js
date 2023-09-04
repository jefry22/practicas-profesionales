var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 10,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });