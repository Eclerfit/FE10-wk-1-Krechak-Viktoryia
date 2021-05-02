$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    dots:true,
    adaptiveHeight:false,
    slidesToShow:2,
    slidesToScroll:2,
    speed: 100,
    easing: 'ease',
    infinite: false,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    centerMode: false,
    variableWidth: true,
  }

  );
});