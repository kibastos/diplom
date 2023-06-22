$(function () {

  // $('.clean__slider').slick({
  //   arrows: false,
  //   dots: false,
  //   draggable: false,
  // })
  // $('.clean__dots .clean__item').click(function() {
  //   var $this = $(this);
  //   $('.clean__slider').slick('slickGoTo', $this.data('index'))
  // });

  // $('.clean__item').on('click', function () {
  //   $('.clean__item').removeClass('active')
  //   $(this).addClass('active')
  // })



  $('.js-tab-trigger').click(function () {
    var id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="' + id + '"]');
    $('.js-tab-trigger.active').removeClass('active');
    $(this).addClass('active');
    
    $('.js-tab-content.active').removeClass('active');
    content.addClass('active');

  });

  $(".js-tab-trigger").click(function(){
    $('active').show(2000);
});


$('.before__slider').slick({
  arrows: false,
  dots: true,
  draggable: false,
  appendDots: $('.before__slide-dots')
})
$('.before__prev').on('click', function (e) {
  e.preventDefault()
  $('.before__slider').slick('slickPrev')
})
$('.before__next').on('click', function (e) {
  e.preventDefault()
  $('.before__slider').slick('slickNext')
})


})

function beforeAfter() {  
  document.getElementById('kobavenusab').style.width = document.getElementById('pedsumid').value + "%";
}


