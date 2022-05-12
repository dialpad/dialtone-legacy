$(document).ready(function() {
    var closeButton = $('.js-chip-button');

    $(closeButton).on('click', function(e) {
        console.log('clicked');
        e.stopPropagation();
        e.preventDefault();
    });
});
