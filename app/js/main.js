

new Swiper('.swiper-container', {
    // навигация, кнопки
    navigation: {
        nextEl: '.products-slider__button_next',
        prevEl: '.products-slider__button_prev',
    },
    // модификации 
    grabCursor: true, //  курсор-рука
    autoHeight: true, // автовысота
    slidesPerView: 'auto', //кол-во показываемых слайдов
    watchOverflow: true, //если слайдов мало, - слайдер отключается
    spaceBetween: 20, // отступы между слайдами
    loop: true, // бесконечный слайдер
    slideToClickedSlide: false,
    breakpoints: {
        0: {
            spaceBetween: 4,
        },
        768: {
            spaceBetween: 20,
            slidesPerView: '4',
        },
        1200: {
            slidesPerView: '5',
        },
    },
});
new Swiper('.swiper-banner', {
    watchOverflow: true, //если слайдов мало, - слайдер отключается
    loop: true, // бесконечный слайдер
    speed: 400,
    // spaceBetween: 350,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});
// new Swiper('.swiper-container', {
//     // навигация, кнопки
//     navigation: {
//         nextEl: '.products-row__button_next',
//         prevEl: '.products-row__button_prev',
//     },
//     // модификации 
//     grabCursor: true, //  курсор-рука
//     autoHeight: true, // автовысота
//     slidesPerView: 'auto', //кол-во показываемых слайдов
//     watchOverflow: true, //если слайдов мало, - слайдер отключается
//     spaceBetween: 20, // отступы между слайдами
//     loop: true, // бесконечный слайдер
//     slideToClickedSlide: false,
// });
//выбор цвета
$('.page-product__color').on('click', function () {
    var item = $(this).closest('.page-product__color-change-box').find('.page-product__color');
    $(item).each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active');
})
//выбор цвета конец
//выподалка размеров
$('.page-product__size-header').on('click', function () {
    $(this).next().slideToggle('slow');
})

$('.page-product__size-link').on('click', function () {
    var size = $(this).find('.page-product__size-num').text();
    $(this).closest('.page-product__size-box').find('.page-product__size-title').text('Размер ' + size);
    $(this).closest('.page-product__size-body').slideToggle('slow');
})
//выподалка размеров конец
//burger menu 
$('.btn-burger').on('click', function () {
    $(this).toggleClass('icon-burger');
    $(this).toggleClass('icon-close');
    $('.header').toggleClass('open');
    $('body').toggleClass('burger-open');
    if ($(this).hasClass('icon-close')) {
        $('.burger').show();

    } else {
        $('.burger').hide();
    }
})
//burger menu end\

//регистрация попап
$('.btn-reg').on('click', function () {
    $('.page-main').removeClass('login-open');
    $('.page-login').hide();
    $('.page-reg').show();

})
$('.reg__form>.close').on('click', function () {
    $(this).closest('.page-reg').hide();
})
//регистрация попап конец
//Войти попап 
$('.btn-login').on('click', function () {
    $('.page-main').addClass('login-open');
    $('.page-reg').hide();
    $('.page-login').show();
    $('.burger').hide();
    $('.btn-burger').removeClass('icon-close').addClass('icon-burger');
    $('.header').removeClass('open');
    $('body').removeClass('burger-open');
})
// Войти попап конец
$(window).on("load resize",(function(){
      if($(window).width()<"576"){
        $('.header__nav-right').append($('.burger-search'));
      }else{
          $('.burger-table__list-mobile').append($('.burger-search'));
      }
  }));
  //mobile burger search
$('.btn-search-mobile').on('click',function(){
    $('.header__nav-right').addClass('open');
    $('.logo').toggleClass('d-none')
})
$(document).on('click', function(e) {
    if (!$(e.target).closest(".burger-search").length && !$(e.target).closest(".btn-search-mobile").length) {
      $('.logo').removeClass('d-none');
      $('.header__nav-right').removeClass('open');
    }
    e.stopPropagation();
  });
  //end

  // add to favorites
$('.btn-heart').on('click',function() {
    $(this).find('.icon-heart').toggleClass('active');
})
  // add to favorit

  