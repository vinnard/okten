$('.hamburger').on('click', function() {
    $('.navigation').toggle();
    $('.hamburger').toggleClass('active');
})

$('.menu-close').on('click', function() {
    $('.navigation').hide();
})