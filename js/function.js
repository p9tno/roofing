$(document).ready(function() {

    function openMobileNav() {
        $('.header__toggle').click(function(event) {
            $('.header__content').toggleClass('header__content_open');
            $('.header__toggle').toggleClass('header__toggle_open');
            $( 'body' ).toggleClass( 'nav-open' );
        });
    };
    openMobileNav();

    function showBullets() {
        $('.bullets__toggle').click(function(event) {
            $('.bullets').toggleClass('hide');
            $('.bullets__info').toggleClass('hide');
            $('.bullets__toggle').toggleClass('active');
        });
    };
    showBullets();

    function activeNav() {
        $('.navbar__item').on('click', function() {
            $('.navbar__item').removeClass('current');
            $(this).addClass('current');
        })
    };
    activeNav();

});
