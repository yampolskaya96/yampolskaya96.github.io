$(function(){

    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 990,
                settings:{
                    arrows: false
                }
            }
        ]
    });

    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        //обязательная инициализация слайдера

        $('.product-slider').slick('setPosition');
    });

    $('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active')
    });

    $('.product-slider').slick({
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-left-black.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-right-black.svg" alt=""></button>',
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1301,
                settings:{
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 1201,
                settings:{
                    arrows: false,
                    slidesToShow: 3,
                    dots: true,
                } 
            },
            {
                breakpoint: 870,
                settings:{
                    arrows: false,
                    slidesToShow: 2,
                    dots: true,
                } 
            },
            {
                breakpoint: 590,
                settings:{
                    arrows: false,
                    slidesToShow: 1,
                    dots: true,
                } 
            }
        ]
    });

    //фильтры

    $('.filter-style').styler();

    $('.filter__item-drop, .filter-extra').on('click', function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().stop(true, true).slideToggle('fast');
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 600,
        max: 47000,
    });

    $('.filter__item-listselect').on('click', function(){
        $('.jq-selectbox__trigger').toggleClass('.jq-selectbox__trigger--active');
    });

    $('.catalog__filter-btnline').on('click', function(){
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    $('.catalog__filter-btngrid').on('click', function(){
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    $('.catalog__filter-itemtag').on('click', function(){
        $(this).toggleClass('catalog__filter-item--active');
    });

    $('.aside__btn').on('click', function(){
        $(this).next().slideToggle();
    });

    //rate star

    $(".rate-yo").rateYo({
        normalFill: "rgba(255,255,255,0.3)",
        ratedFill: "#015422",
        spacing: "7px",
    });

    //menu mobile

    $('.menu__btn').on('click', function(){
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
        $('.dark-bg').toggleClass('dark-bg--active');
        $('body').toggleClass('body-overflow');
    });


    //footer

    $('.footer__top-infotitle').on('click', function(){
        $(this).next().stop(true, true).slideToggle();
        $(this).toggleClass('footer__top-infotitle--active');
    });

});

