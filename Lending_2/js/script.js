$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    dots:true,
    
    slidesToShow:1,
     autoplay: false,
  }

  );
});
$(window).on('scroll', function () {
  var scrollPos = $(window).scrollTop();
  if (scrollPos >= 30) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }
});

