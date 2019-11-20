$(document).ready(function() {
    var card = $('.js-dialtone-icon-card');
    var footer = $('.js-dialtone-icon-card-footer');
    var body = $('body');

    $(card).on('click', function(e) {
        var allCards = card.not(this);
        var attr = $(this).attr('data-selected');

        allCards.attr('data-selected', 'no');

        if (attr === "no") {
            $(this).attr('data-selected', 'yes');
        }
        else if (attr === "yes")  {
            $(this).attr('data-selected', 'no');
        }
    });

    $(document).click(function(e) {
        var target = $(e.target);

        if (!target.closest(card).length && (card).is(':visible')) {
            $(card).attr('data-selected', 'no');
        }
    });
});
