 $(function(){
 var swiper = new Swiper('.slide2 ', {
    direction: "vertical",//세로 방향
    speed: 2000,//버튼을 슬라이드가 넘어가는 시간
	  autoplay: {
        delay: 8000,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
	    pagination: {//블릿 버튼
        el: '.slide2 .swiper-pagination',
        clickable: true,
      },
    });

    var swiper = new Swiper('.slide-m ', {
      speed: 3000,//버튼을 슬라이드가 넘어가는 시간
      autoplay: {
          delay: 3000,//자동으로 넘어가기 전 머무르는 시간
          disableOnInteraction: false,
        },
        loop: true,//슬라이드 무한반복
        pagination: {//블릿 버튼
          el: '.slide2 .swiper-pagination',
          clickable: true,
        },
        effect: "fade",
      });
});