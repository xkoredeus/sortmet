$(function() {
  $('.main-slider__cnt').owlCarousel({
      nav: true,
      items: 1,
      loop: false,
      dots: true,
      navText: ["<img src='img/slider__arrow_prev.png'>", "<img src='img/slider__arrow_next.png'>"],
  });
	$('.team__cnt').owlCarousel({
      nav: false,
      dots: true,
      items: 5,
      loop: true,
      margin: 20,
      center:true,
      autoWidth:true,
      mouseDrag: false,
      responsive : {
        0   : {
            items: 1
        },
        380 : {
            items: 1
        },
        480 : {
            items: 1
        },
        768 : {
            items: 3
        },
        1040 : {
            items: 4
        }
      }
	});
	// $(".tab-content__item").hide();
	$(".tabs__container div.tab-content__item:first-child").addClass('active');
	$(".main-slider .main-slider__bg-item:first-child").addClass('active');
	    $('ul.tabs__list > li').click(function () {
	        if (!($(this).hasClass('active'))) {
	            var thisLi = $(this);
	            var numLi = thisLi.index();
	            thisLi.addClass('active').siblings().removeClass('active');
	            thisLi.parent().next().children('div').removeClass('active').eq(numLi).addClass('active','slow');
	            thisLi.parent().parent().parent().parent().find('.main-slider__bg').children('.main-slider__bg-item').removeClass('active','slow').eq(numLi).addClass('active','slow');
	            $('.reviews__cnt_text').owlCarousel('refresh');
	        }
    });
  //бегушая строка
  $(function() {
    var marquee = $(".running-string__item"); 
    marquee.css({"overflow": "hidden", "width": "100%"});
    // оболочка для текста ввиде span (IE не любит дивы с inline-block)
    marquee.wrapInner("<span>");
    marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" }); 
    marquee.append(marquee.find("span").clone()); // тут у нас два span с текстом
    marquee.wrapInner("<div>");
    marquee.find("div").css("width", "200%");
    var reset = function() {
      $(this).css("margin-left", "0%");
      $(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
    };
    reset.call(marquee.find("div"));
  });
});