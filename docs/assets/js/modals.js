$(document).ready(function() {
    var body = $('body');
    var launchBtn = $('.js-launch-example-modal');
    var modal = $('.js-example-modal');
    var close = $('.js-example-modal-close');

    $(launchBtn).on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(modal).attr('aria-hidden','false');
    });

    $(close).on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(modal).attr('aria-hidden','true');
    });
});
