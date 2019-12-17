var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  speed: 1000,
  spaceBetween: 100,

  loop: true,

  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
})