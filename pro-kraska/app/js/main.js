$(function() {
	$('input, select').styler();

	$('.menu__burger-mobile').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
	});

	$('.menu__list-item').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
	});

});