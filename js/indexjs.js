$('#nav').affix({
    offset: {
        top: $('header').height()
    }
});

$('#sidebar').affix({
    offset: {
        top: 260
    }
});

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function () {
    $('.scroll-top a').blur();
    $('body,html').animate({scrollTop: 0}, 1000);
});

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function () {
    var link = $(this).attr('href');
    var posi = $(link).offset().top;
    $('body,html').animate({scrollTop: posi}, 700);
});

//Set year in footer automatically
$('#currentYear').html(new Date().getFullYear());
