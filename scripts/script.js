const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      376: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1441: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  const gallery = new Swiper('.gallery', {
   // slidesPerView: '4',
    direction: 'horizontal',
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
 
    scrollbar: {
      el: '.slider__progressbar',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      376: {
        slidesPerView: 2,
        spaceBetween: 24,
        grid: {
          rows: 2,
        },
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1441: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });