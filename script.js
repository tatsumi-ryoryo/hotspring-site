$(function(){

    $('#rec-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        speed:1000,
        autoplaySpeed:5000,
        arrows:false,
        customPaging:"100px",
        centerMode:true,
            responsive: [
          {
              breakpoint: 767,
              settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding:0,
              centerMode:true,
            }
          }
        ]
      });
})

$(function(){
  $(".js-accordion").on("click",function(){
    $(this).next().slideToggle();
  });
})

$(function(){
  $("#nav-btn").on("click",function(){
    $(this).toggleClass("-active");
    $("#nav").toggleClass("-active");
  });
})

$(function(){
  new WOW().init();
})
