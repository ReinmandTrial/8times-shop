document.querySelectorAll('.swiper-container').forEach(function (elem) {
    new Swiper(elem, {
        navigation: {
            nextEl: elem.nextElementSibling.nextElementSibling,
            prevEl: elem.nextElementSibling,
        },
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
            991: {
                spaceBetween: 20,
                slidesPerView: '4',
            },
            1200: {
                slidesPerView: '5',
            },
        },
    });
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
//выбор цвета
$('.page-product__color').on('click', function () {
    var item = $(this).closest('.page-product__color-change-box').find('.page-product__color');
    $(item).each(function () {
        $(this).removeClass('actives');
    })
    $(this).addClass('actives');
})
//выбор цвета конец
//pole s text
$('.page-product__item-title').on('click',function(){
    $(this).toggleClass('actives');
    if($(this).hasClass('actives')){
        $(this).next().fadeIn();
    }else{
        $(this).next().fadeOut();
    }
})
//pole s text end
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
    // $('.page-main').addClass('login-open');
    $($('body').find('section')).each(function)
    $('.page-reg').hide();
    $('.page-login').show();
    $('.burger').hide();
    $('.btn-burger').removeClass('icon-close').addClass('icon-burger');
    $('.header').removeClass('open');
    $('body').removeClass('burger-open');
})
// Войти попап конец
$(window).on("load resize", (function () {
    if ($(window).width() < "576") {
        $('.header__nav-right').append($('.burger-search'));
    } else {
        $('.burger-table__list-mobile').append($('.burger-search'));
    }
}));
//mobile burger search
$('.btn-search-mobile').on('click', function () {
    $('.header__nav-right').addClass('open');
    $('.logo').toggleClass('d-none')
})
$(document).on('click', function (e) {
    if (!$(e.target).closest(".burger-search").length && !$(e.target).closest(".btn-search-mobile").length) {
        $('.logo').removeClass('d-none');
        $('.header__nav-right').removeClass('open');
    }
    e.stopPropagation();
});
//end

// add to favorites
$('.btn-heart').on('click', function () {
    $(this).find('.icon-heart').toggleClass('active');
})
// add to favorit

// Выбор размера
$('.basket-item__size-header').on('click', function () {
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
        $(this).next().fadeIn();
    } else {
        $(this).next().fadeOut();
    }
})
$('.basket-item__size-item').on('click',function(){
    var text = $(this).text();
    $(this).closest('.basket-item__size-box').find('.basket-item__size-title').text(text);
    $(this).closest('.basket-item__size-body').fadeOut();
    $(this).closest('.basket-item__size-box').find('.basket-item__size-header').removeClass('open');
})
//Выбор размера коанец

// amount 
$('.amount-plus').on('click', function () {
    var btn = $(this);
    var body = btn.closest('.amount');
    var count = body.find('.amount-count');
    var kol = parseInt(count.text());
    count.text(kol + 1);
})
$('.amount-minus').on('click', function () {
    var btn = $(this);
    var body = btn.closest('.amount');
    var count = body.find('.amount-count');
    var kol = parseInt(count.text());
    if (kol > 0) {
        count.text(kol - 1);
    }
})
// amount end

$('.page-basket__promo-title').on('click', function () {
    $(this).toggleClass('open');
    if ($(this).hasClass('open')) {
        $(this).next().fadeIn();

    } else {
        $(this).next().fadeOut();
    }
})

$('.form-order__radio-input').on('click', function () {
    var items = $(this).closest('.form-order__radio-container').find('.form-order__radio-box');
    $(items).each(function () {
        $(this).removeClass('open')
    })
    $(this).closest('.form-order__radio-box').addClass('open');
})

$(function () {
    $('body').on('input', '.input-number', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
})
$(function(){
    var block = $('.page-product__image_large');
    var blockImg = block.find('.page-product__image_large-img');
    var dots = $('.page-product__images_small');
    var src;
    $(blockImg).each(function(index){
        src = $(this).find('img').attr('src');
        if(index === 0){
            $("<div class='page-product__images_small-img active'><img src='"+ src + "' alt='Дотс№" + (index+1) + "'></div>").appendTo(dots);
        }else{
            $("<div class='page-product__images_small-img'><img src='"+ src + "' alt='Дотс№" + (index+1) + "'></div>").appendTo(dots);
        }
    })
})
$(window).on('load resize',function(){
    if($(window).width() > "991"){
        var height = $('.page-product__image_large').height();
        $('.page-product__images_small .page-product__images_small-img').on('click',function(){
            $('.page-product__image_large').animate({ 
                scrollTop: height * ($(this).index())
            }, 500);
        })   
        $('.page-product__images_small-img').on('click',function(){
            var Dots = $(this).closest('.page-product__images_small').find('.page-product__images_small-img');
            $(Dots).each(function(){
                $(this).removeClass('active');
            })
            $(this).addClass('active');
        })   
        $(function(){
            var Dots = $('.page-product__images_small').find('.page-product__images_small-img');
            $('.page-product__image_large').bind('mousewheel', function(e){
                var scroll = $('.page-product__image_large').scrollTop();
                var kol = parseInt(scroll / height);
                var drob = (scroll / height) % 1;
                if(drob < 0.5){
                    $(Dots).each(function(index){
                        $(this).removeClass('active');
                        if(index === kol){
                            $(this).addClass('active');
                        }
                    })
                }else{
                    $(Dots).each(function(index){
                        $(this).removeClass('active');
                        if(index === (kol + 1)){
                            $(this).addClass('active');
                        }
                    })
                }
            });
        })     
    }else{
    
    }
})