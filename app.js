$(document).ready(function(){
  var options = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false
  };

  $('.slick').slick(options);

  var hoverItemIn = function () {
    $(this).addClass("slick__subitem--hover");
    $(".slick__subitem").not(this).addClass("slick__subitem--nothover");
  }

  var hoverItemOut = function() {
      $(this).removeClass("slick__subitem--hover");
      $(".slick__subitem").not(this).removeClass("slick__subitem--nothover");
  }

  var hoverActionIn = function() {
    $(this).attr('src', $(this).attr('src').replace('a_', 'r_'));
  }

  var hoverActionOut = function() {
    $(this).attr('src', $(this).attr('src').replace('r_', 'a_'));
  }

  $('.slick__subitem').hoverIntent(hoverItemIn, hoverItemOut);

  $('.course-content__action img').hover(hoverActionIn, hoverActionOut);


});
