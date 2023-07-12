$(function(){

    $('.menu li:nth-child(1)').click(function () {
        $('.coffee').show();
        $('.beverage').hide();
      });
  
      $('.menu li:nth-child(2)').click(function () {
          $('.beverage').css({'display' : 'flex'});
          $('.coffee').hide();
        });
  
      $('.menu li').click(function () {
        $(this).addClass('active1').siblings().removeClass('active1');
      });

      $('.card a').click(function(){
        $(this).siblings('.seemore').show();
    });
  
    $('.card').hover(function(){
        $('.seemore').hide();
    });
});