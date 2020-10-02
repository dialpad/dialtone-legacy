$(document).ready(function() {
    var body = $('body');
    var launchBtn = $('.js-launch-example-modal');
    var launchFull = $('.js-launch-example-modal-full');
    var launchBanner = $('.js-launch-example-modal-banner');
    var launchBannerFull = $('.js-launch-example-modal-banner-full');
    var modal = $('.js-example-modal');
    var modalFull = $('.js-example-modal-full');
    var banner = $('.js-example-modal-banner');
    var bannerFull = $('.js-example-modal-banner-full');

    $(launchBtn).on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(modal).attr('aria-hidden','false');
        $(body).addClass('d-of-hidden');
    });

    $(launchFull).on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(modalFull).attr('aria-hidden','false');
        $(body).addClass('d-of-hidden');
    });

    $(launchBanner).on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(banner).toggleClass('d-d-none');
    });

    $(launchBannerFull).on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(bannerFull).toggleClass('d-d-none');
    });

    $('.js-example-modal-close, .js-example-modal-cancel').on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(modal).attr('aria-hidden','true');
        $(modalFull).attr('aria-hidden','true');
        $(body).removeClass('d-of-hidden');
        $(banner).removeClass('d-d-none').addClass('d-d-none');
        $(bannerFull).removeClass('d-d-none').addClass('d-d-none');
    });
});
