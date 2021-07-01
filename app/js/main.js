// const { default: Swiper } = require("swiper");

// const { default: Swiper } = require("swiper");

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
    speed: 600,
    // spaceBetween: 350,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 6000,
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
$('.page-product__item-title').on('click', function () {
    $(this).toggleClass('actives');
    if ($(this).hasClass('actives')) {
        $(this).next().fadeIn();
    } else {
        $(this).next().fadeOut();
    }
})
//pole s text end

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
    // $('.page-main').removeClass('login-open');
    $($('body')).each(function () {
        $(this).find('section').removeClass('login-open')
    })
    $('.page-login').hide();
    $('.page-reg').show();
    $('.page-reg').removeClass('d-none');

})
$('.reg__form>.close').on('click', function () {
    $(this).closest('.page-reg').hide();
})
$('.page-login .close').on('click', function () {
    $(this).closest('.page-login').hide();
})
//регистрация попап конец
//Войти попап 
$('.btn-login').on('click', function () {
    // $('.page-main').addClass('login-open');
    $($('body')).each(function () {
        $(this).find('section').addClass('login-open')
    })
    $('.page-reg').hide();
    $('.page-login').show();
    $('.burger').hide();
    $('.page-login').removeClass('d-none');
    $('.btn-burger').removeClass('icon-close').addClass('icon-burger');
    $('.header').removeClass('open').removeClass('header--basket');
    $('body').removeClass('burger-open');
    if ($('.page-basket__container').hasClass('open')) {
        $('.page-basket__container').removeClass('open');
        $('.page-basket__container').fadeOut();
        $('.btn-mobile').removeClass('d-none');
    }
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
    $('.logo').toggleClass('d-none');
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
$('.heart').on('click', function () {
    $(this).toggleClass('active');
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
$('.basket-item__size-item').on('click', function () {
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
//basket btn
$('.basket-item__button').on('click', function () {
    $(this).closest('.basket-item').toggleClass('open');
})
$('.page-product__button').on('click', function () {
    if ($(this).parent().hasClass('btn-mobile')) {
        $(this).closest('.page-basket').find('.page-basket__container').fadeIn();
        $(this).closest('.page-basket').find('.page-basket__container').addClass('open');
        $(this).parent().toggleClass('d-none');
        $('.header').addClass('header--basket');
    }
})
$('.page-basket-back').on('click', function () {
    $(this).closest('.page-basket__container').fadeOut();
    $(this).closest('.page-basket__container').removeClass('open');
    $('.btn-mobile').removeClass('d-none');
    $('.header').removeClass('header--basket');
})
//basket btn end
$('.page-basket__promo-title').on('click', function () {
    $(this).closest('.page-basket__pormo-box').toggleClass('open');
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
$(function () {
    var block = $('.page-product__image_large');
    var blockImg = block.find('.page-product__image_large-img');
    var dots = $('.page-product__images_small');
    var src;
    $(blockImg).each(function (index) {
        src = $(this).find('img').attr('src');
        if (index === 0) {
            $("<div class='page-product__images_small-img active'><img src='" + src + "' alt='Дотс№" + (index + 1) + "'></div>").appendTo(dots);
        } else {
            $("<div class='page-product__images_small-img'><img src='" + src + "' alt='Дотс№" + (index + 1) + "'></div>").appendTo(dots);
        }
    })
})

var mySwiper = undefined;
var selectSwiper = undefined;
$(window).on('load resize', function () {

    if ($(window).width() > "991") {

        var height = $('.page-product__image_large').height();
        $('.page-product__images_small .page-product__images_small-img').on('click', function () {
            $('.page-product__image_large').animate({
                scrollTop: height * ($(this).index())
            }, 500);
        })
        $('.page-product__images_small-img').on('click', function () {
            var Dots = $(this).closest('.page-product__images_small').find('.page-product__images_small-img');
            $(Dots).each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
        })
        $(function () {
            var Dots = $('.page-product__images_small').find('.page-product__images_small-img');
            $('.page-product__image_large').bind('mousewheel', function (e) {
                var scroll = $('.page-product__image_large').scrollTop();
                var kol = parseInt(scroll / height);
                var drob = (scroll / height) % 1;
                if (drob < 0.5) {
                    $(Dots).each(function (index) {
                        $(this).removeClass('active');
                        if (index === kol) {
                            $(this).addClass('active');
                        }
                    })
                } else {
                    $(Dots).each(function (index) {
                        $(this).removeClass('active');
                        if (index === (kol + 1)) {
                            $(this).addClass('active');
                        }
                    })
                }
            });
        })
        if (mySwiper != undefined) {
            $(function () {
                mySwiper.destroy();
                mySwiper = undefined;
                $('.swiper-wrapper').attr('style');
                $('.swiper-slide').removeAttr('style');
            })
        }
        if (selectSwiper != undefined) {
            $(function () {
                selectSwiper.destroy();
                selectSwiper = undefined;
                $('.select .swiper-wrapper').attr('style');
                $('.select .swiper-slide').removeAttr('style');
            })
        }
        //выподалка размеров
        $('.page-product__size-header').on('click', function () {
            $(this).next().slideToggle('slow');
            $(this).toggleClass('open');
        })

        $('.swiper-slide').on('click', function () {
            var size = $(this).find('.select__size').text();
            $(this).closest('.page-product__size-box').find('.page-product__size-title').text('Размер ' + size);
            $(this).closest('.select').slideToggle('slow');
            $(this).closest('.page-product__size-box').find('.page-product__size-header').removeClass('open');
        })
        //выподалка размеров конец

    } else if ($(window).width() < "992") {
        if (mySwiper == undefined) {
            $(function () {
                mySwiper = new Swiper('.page-product__slider', {
                    speed: 400,
                    spaceBetween: 100,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    },
                    loop: true
                });
            })
        }
        if (selectSwiper == undefined) {
            selectSwiper = new Swiper('.size__mobile-container', {
                speed: 400,
                spaceBetween: 100,
                direction: 'vertical',
                slidesPerView: 1,
                spaceBetween: 0
            })
        }
        //выподалка размеров мобилка
        $('.page-product__size-header').on('click', function () {
            $(this).next().addClass('open');
            $(this).closest('.page-product__size-box').find('.select__bg').fadeIn();
            $('body,html').css('overflow-y', 'hidden');
        })
        $('.select__header .icon, .select__bg, .select__button').on('click', function () {
            $('.select').removeClass('open');
            $(this).closest('.page-product__size-box').find('.select__bg').fadeOut();
            var size = $('.select .swiper-slide-active').find('.select__size').text();
            $(this).closest('.page-product__size-box').find('.page-product__size-title').text('Размер ' + size);
            $('body,html').css('overflow-y', 'auto');
        })
        //выподалка размеров мобилка
    }
})

// description переключение
$('.description__nav-item').on('click', function () {
    var btn = $(this);
    var btnItem = btn.parent().find('.description__nav-item');
    var blocks = btn.closest('.description').find('.description__content').find('.description__content-item');
    var i;
    if (!btn.hasClass('active')) {
        $(btnItem).each(function () {
            $(this).removeClass('active');
        })
        btn.addClass('active');


        $(btnItem).each(function (index) {
            if ($(this).hasClass('active')) {
                i = index;
            }
        })

        $(blocks).each(function (index2) {
            if (index2 === i) {
                $(this).addClass('open');
            } else {
                $(this).removeClass('open');
            }
        })

    }
})
// description переключение конец

$('.select-item-header').on('click', function () {
    var btn = $(this);
    var block = btn.closest('.select-item');
    block.find('.select-item-body').slideToggle();
    block.find('.select-item-icon').toggleClass('icon-triangle-down');
    block.find('.select-item-icon').toggleClass('icon-triangle-up');
})

//popup
//popup нажатие вне body
$(document).on('click', function (e) {
    if (!$(e.target).closest(".change-pass").length && !$(e.target).closest(".btn-popup").length) {
        $('.popup').fadeOut();
    }
    e.stopPropagation();
});
//popup нажатие вне body end

$('.btn-popup').on('click', function () {
    var btn = $(this);
    $($('body').find('.popup')).each(function () {
        $(this).fadeOut();
    })
    $($('body').find('.popup')).each(function () {

        if (btn.hasClass('btn-popup__change')) {
            if ($(this).hasClass('popup-change')) {
                $(this).fadeIn();
            }
        } else {
            $(this).fadeOut();
        }
    })
})
$('.popup__close').on('click', function () {
    $(this).closest('.popup').fadeOut();
})
//popup end

//Редактирование личной информации 
$('.profile__edit-btn, .profile__back-btn').on('click', function () {
    var btn = $(this);
    var block = btn.closest('.profile__container');

    var BlockVal = block.find('.profile__value');
    $(BlockVal).each(function () {
        $(this).slideToggle();
    })

    var BlockInput = block.find('.profile__item');
    $(BlockInput).each(function () {
        $(this).find('.profile__input').slideToggle();
    })

    block.find('.profile__accept').toggleClass('d-flex');

    block.find('.profile__back-btn').slideToggle();
    block.find('.profile__button').slideToggle();

    block.find('.profile__edit-btn').slideToggle();
})
//Конец редактирования