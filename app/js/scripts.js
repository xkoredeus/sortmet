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
      .parent('.acc__item')
      .find('.acc__cnt')
      .slideToggle()
  })
});