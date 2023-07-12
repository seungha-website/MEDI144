$(function(){
   $('.nav> li').mouseover(function(){
    $('.sub').stop().slideDown();
   });

   $('.nav> li').mouseout(function(){
    $('.sub').stop().slideUp();
   });

   $('.card').hover(function(){
      $('.cursor').toggle();
     });

     $('.sidebar>ul > li').click(function(){
      $(this).children('.M_sub').slideToggle();
     });

     $('#menuicon').click(function(){
      $('.M_sub').hide();
     });


     
});
