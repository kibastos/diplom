$(function () {

  $('.clean__slider').slick({
    arrows: false,
    dots: false,
    draggable: false,
  })
  $('.clean__dots .clean__item').click(function() {
    var $this = $(this);
    $('.clean__slider').slick('slickGoTo', $this.data('index'))
  });
  
  $('.clean__item').on('click', function () {
    $('.clean__item').removeClass('active')
    $(this).addClass('active')
  })


})
