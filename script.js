$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('.header-row').addClass('active');
            $('.header').addClass('active');
            $('.submenu-menu').css('top', '40px')
            $('.submenu-menu').css('background-color', '#1d1d20')

        } else {
            $('.header-row').removeClass('active');
            $('.header').removeClass('active');
            $('.submenu-menu').css('top', '57px')
            $('.submenu-menu').css('background-color', '#000')
        }
    });
});


var sections = $('section'),
    nav = $('nav'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();
    sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});
nav.find('a').on('click', function() {
    var $el = $(this),
        id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 900);

    return false;
});
$('a[href*="#"]').on('click', function() {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


$('body').on('click', '.submenu-title', function() {
    $('.submenu-menu, .submenu-title').toggleClass('active');

})

$('body').on('click', '.media-menu', function() {
    $('.burger-menu, .media-menu__text, .media-menu__menu').toggleClass('active');
    $('body').toggleClass('lock');
    if ($('.header').hasClass('active')) {
        $('.media-menu__menu').css('background-color', '#1d1d20');
    } else {
        $('.media-menu__menu').css('background-color', '#000');
    }
})


$(function() {
    $("ul").on("click", "li:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.tab-inner")
            .find(".tab-item")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });
});

$('.review-btn').on('click', function() {
    $(this).toggleClass('active');
    $(this).prev().toggleClass('active');
    if ($(this).hasClass('active')) {
        $(this).text('Cвернуть коментарий');
    } else {
        $(this).text('Полный отзыв');
    }
})

$(function() {
    $('.review-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }]
    });
})
