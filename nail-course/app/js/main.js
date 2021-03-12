$(function(){

    $('.checkbox-style').styler();
    
    $('input:radio').styler({
        wrapper: 'div.type-connection',
    });
    
    $('.gallery__wrapper').magnificPopup({
        delegate: 'a', 
        type: 'image',
        gallery: {
            enabled: true,
        },
        removalDelay: 300,
        mainClass: 'mfp-fade',
    });

    //срываем элемент scroll-arrow при скролле

    
    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 100){
            $('.scroll-arrow').fadeOut();
        } else {
            $('.scroll-arrow').fadeIn();
        }
    })

    //плавный скролл

    $("#nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });


    //Валидация


    function validateForms(form){
        $("#main-form").validate({
            submitHandler: function(form) {     
                form.submit();
            },
            rules: {
                name: "required",
                phone: "required",
            },
            messages: {
                name: "*Пожалуйста, введите ваше имя",
                phone: "*Пожалуйста, введи ваш номер телефона",
            }
        });
        
    };
    validateForms('#main-form');


    /* $('form').on("submit" , function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });  */
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});  

jQuery(function($){
    $('#phone').inputmask("+7 (999) 999-9999");
});

