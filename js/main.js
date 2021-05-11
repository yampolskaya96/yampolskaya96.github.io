$(document).on('ready', function() {
	$(".regular").slick({
		dots: true,
		//autoplay:true,
		//arrows:true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button id="next" type="button" class="slick-arrow slick-next"><span class="home_arrow_right"></span></button>',
        nextArrow: '<button id="prev" type="button" class="slick-arrow slick-prev"><span class="home_arrow_left"></span></button>'
	});
});
$(document).on('ready', function() {
	$(".workshop_slider").slick({
		dots: true,
		//autoplay:true,
		//arrows:true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button id="next" type="button" class="slick-arrow slick-next"><span class="home_arrow_right"></span></button>',
        nextArrow: '<button id="prev" type="button" class="slick-arrow slick-prev"><span class="home_arrow_left"></span></button>',
			responsive: [
		{
      breakpoint: 721,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
		prevArrow: '<button id="next" type="button" style="display:none;" class="slick-arrow slick-next"><span class="home_arrow_right"></span></button>',
        nextArrow: '<button id="prev" type="button" style="display:none;" class="slick-arrow slick-prev"><span class="home_arrow_left"></span></button>',
      }
    },
    {
      breakpoint: 321,
      settings: {
		  dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
	});
});
//Попапы
$(function () {
	$('a.open_modal').click(function () {
		$('div.'+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
		$('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
		return false;				
	});	
	$('div.close_callback').click(function () {
		$(this).parent().fadeOut(100);
		$('#overlay').remove('#overlay');
		return false;
	});
});
//Маска ввода телефона
 $(function($){
   $('#phone').mask("+7(999) 999-99-99");
   $('#phone2').mask("+7(999) 999-99-99");
});
//Отправка формы
	
   $(document).ready(function () {
    $("form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data); 
				//location.reload(); 
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);         
            }
        });
        return false;
    });
});

$(document).ready(function(){
				


 $('a.open_hide').click(function () {
		$('div.'+$(this).attr("rel")).slideToggle("slow");
		return false;				
	});	

});












 





