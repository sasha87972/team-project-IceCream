$('.gallery__list').slick({
  dots: false,
  arrows: true,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  // slidesToScroll: 1,
  autoplaySpeed: 1050,
  centerMode: false,
  // variableWidth: true,
  nextArrow: '.next',
  prevArrow: '.prev',
  lazyLoad: 'ondemand',
});