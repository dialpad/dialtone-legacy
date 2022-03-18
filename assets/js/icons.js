$(document).ready(function() {
    var body = $('body');
    var card = $('.js-dialtone-icon-card');
    var footer = card.closest('.js-dialtone-icon-card-footer');
    var vue = $('.js-vue-file');

    $(vue).text(function() {
        return "<" + $(this).text() + " /\>";
    })


    $(card).on('click', function(e) {
        var allCards = card.not(this);
        var attr = $(this).attr('data-selected');

        allCards.attr('data-selected', 'no');

        if (attr === "no") {
            $(this)
                .attr('data-selected', 'yes')
                .css({
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'bottom': '0'
                });
        }
        else if (attr === "yes")  {
            $(this).attr('data-selected', 'no').attr('style','');
        }
    });

    $(document).click(function(e) {
        var target = $(e.target);

        if (!target.closest(card).length && (card).is(':visible')) {
            $(card).attr('data-selected', 'no').attr('style','');
        }
    });
});
