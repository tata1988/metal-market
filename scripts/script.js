const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const gallery = new Swiper('.gallery', {
    slidesPerView: 'auto',
    direction: 'horizontal',
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
 
    scrollbar: {
      el: '.slider__progressbar',
    },
  });