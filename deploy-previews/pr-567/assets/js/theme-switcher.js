$(document).ready(function() {
    var toggle = $('.js-theme-switcher');
    var body = $('body');

    $(toggle).on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        body.toggleClass('theme-dark');
    });
});
