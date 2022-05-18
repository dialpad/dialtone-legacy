$(document).ready(function() {
    var chip = $('.js-chip');
    var chipBtn = $('.js-chip-button');

    $(chip).on('mousedown', function(e) {
        const target = $(e.target);
        if (!target.parents().is(chipBtn)) {
            chip.addClass('d-chip--active');
        }
    });

    $(document).on('mouseup', function(e) {
        chip.removeClass('d-chip--active');
    });
});
