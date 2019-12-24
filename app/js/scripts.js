$(() => {
  $('.main-slider').owlCarousel({
    nav: false,
    items: 1,
    loop: false,
    smartSpeed: 800
  });
});
$(() => {
  $('.ware__in').owlCarousel({
    nav: true,
    loop: false,
    smartSpeed: 800,
    startPosition: 0,
    dots: false,
    margin: 15,
    navText: ["<svg width='7' height='11' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg>","<svg width='7' height='11' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg>"],
    responsive : {
      0   : {
          items: 1,
      },
      600 : {
          items: 2,
      },
      900 : {
          items: 3,
      },
      1200 : {
          items: 4,
      }
    },
  });
});
$(() => {
  $('.sup__in').owlCarousel({
    nav: true,
    loop: false,
    smartSpeed: 800,
    startPosition: 0,
    dots: false,
    margin: 15,
    navText: ["<svg width='7' height='11' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg>","<svg width='7' height='11' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg>"],
    responsive : {
      0   : {
          items: 1,
      },
      600 : {
          items: 2,
      },
      900 : {
          items: 3,
      },
    },
  });
});
$(() => {
  $('.more__in').owlCarousel({
    nav: true,
    loop: false,
    smartSpeed: 800,
    startPosition: 0,
    dots: false,
    margin: 15,
    navText: ["<svg width='7' height='11' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg>","<svg width='7' height='11' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg>"],
    responsive : {
      0   : {
          items: 1,
      },
      600 : {
          items: 2,
      },
      900 : {
          items: 3,
      },
      1200 : {
          items: 5,
      }
    },
  });
});
$(() => {
  $('.watch__in').owlCarousel({
    nav: true,
    loop: false,
    smartSpeed: 800,
    startPosition: 0,
    dots: false,
    margin: 15,
    navText: ["<svg width='7' height='11' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M10 1L2 9L10 17' stroke-width='2'/></svg>","<svg width='7' height='11' viewBox='0 0 11 18' xmlns='http://www.w3.org/2000/svg'><path d='M1 17L9 9L1 0.999999' stroke-width='2'/></svg>"],
    responsive : {
      0   : {
          items: 1,
      },
      600 : {
          items: 2,
      },
      900 : {
          items: 3,
      },
      1200 : {
          items: 5,
      }
    },
  });
});
// tabs
$(() => {
  $('.tabs__content-item:not(:first-child)').hide();
  $('.tabs__list > div').click(function tabListLiClick() {
    if (!($(this).hasClass('active'))) {
      const thisLi = $(this);
      const numLi = thisLi.index();
      thisLi.addClass('active').siblings().removeClass('active');
      thisLi.parent().next().children('div').hide()
        .eq(numLi)
        .fadeIn('slow');
    }
  });
});
// about-nav
$(() => {
  $('.js-about__nav-btn').on('click', function aboutNavBtnClick() {
    $(this)
      .parent('.about__nav-item')
      .toggleClass('active')
      .find('.about__nav-dropdown')
      .slideToggle()
  })
});
// acc
$(() => {
  $('.js-acc__btn').on('click', function aboutNavBtnClick() {
    $(this)
      .toggleClass('active')
      .parents('.acc__item')
      .find('.acc__cnt')
      .slideToggle()
  })
});
// cat filter slider
$(() => {
  const catFilterSliderMin = 0;
  const catFilterSliderMax = 6200;
  const catFilterSliderMid = catFilterSliderMax / 2;
  const catFilterSliderValue1 = $("input.cat-filter__input_min").val();
  const catFilterSliderValue2 = $("input.cat-filter__input_max").val();

  $('.cat-filter__slider-num_min').text(catFilterSliderMin);
  $('.cat-filter__slider-num_mid').text(catFilterSliderMid);
  $('.cat-filter__slider-num_max').text(catFilterSliderMax);

  $("input.cat-filter__input_min").val(catFilterSliderMin);
  $("input.cat-filter__input_max").val(catFilterSliderMax);

  $(".cat-filter__slider").slider({
    min: catFilterSliderMin,
    max: catFilterSliderMax,
    values: [catFilterSliderMin,catFilterSliderMax],
    range: true,
    stop: function(event, ui) {
      $("input.cat-filter__input_min").val($(".cat-filter__slider").slider("values",0));
      $("input.cat-filter__input_max").val($(".cat-filter__slider").slider("values",1));
    },
    slide: function(event, ui){
      $("input.cat-filter__input_min").val($(".cat-filter__slider").slider("values",0));
      $("input.cat-filter__input_max").val($(".cat-filter__slider").slider("values",1));
    }
  });
  $("input.cat-filter__input_min").on('input', function(){
    if(parseInt(catFilterSliderValue1) > parseInt(catFilterSliderValue2)){
      catFilterSliderValue1 = catFilterSliderValue2;
      $("input.cat-filter__input_min").val(catFilterSliderValue1);
    }
    $(".cat-filter__slider").slider("values",0,catFilterSliderValue1);
  });
  $("input.cat-filter__input_max").on( 'input', function() {
    if (catFilterSliderValue2 > catFilterSliderMax) { catFilterSliderValue2 = catFilterSliderMax; $("input.cat-filter__input_max").val(catFilterSliderMax)}
    if(parseInt(catFilterSliderValue1) > parseInt(catFilterSliderValue2)){
      catFilterSliderValue2 = catFilterSliderValue1;
      $("input.cat-filter__input_max").val(catFilterSliderValue2);
    }
    $(".cat-filter__slider").slider("values",1,catFilterSliderValue2);
  });
});
// cat filter checkbox
$(() => {
  const catFilterCheckbox = $('.cat-filter__dia > .checkbox');
  if (catFilterCheckbox.length > 12) {
    catFilterCheckbox
      .slice(12)
      .hide()
      .parents('.cat-filter__dia')
      .append($('<button type="button" class="mt-1 js-cat-filter__dia-btn"><div class="d-flex align-items-center "><img alt="link__arr.svg" src="img/link__arr.svg" class="mt-1"><span class="link_dec ml-2">Показать все</span></div></button>'));
  }
  $('.js-cat-filter__dia-btn').on('click', function catFilterDiaBtnClick() {
    $(this).hide();
    catFilterCheckbox.show();
  })
});
