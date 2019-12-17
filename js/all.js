$(document).ready(function () {
  // 漢堡選單
  $('.hamburger').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('show-menu');
  });

  // 下拉式選單
  $('.jq-dropdown').click(function (e) {
    e.preventDefault();
    $('.dropdown-menu').slideToggle();
  });

  // Top 滑動效果
  $('.jq-gotop').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 700);
  });
  
});


lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})