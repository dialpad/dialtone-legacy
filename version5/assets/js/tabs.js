$(document).ready(function() {
    var tablist = $('.js-tablist');
    var tab = $('.js-tab');
    var panel = $('.js-tab-panel');

    $(tab).on('click', function(e) {
        var allTab = $(this).siblings(tab);
        var tabID = $(this).attr('aria-controls');
        var allPanel = $(this).parent().parent(tablist).find(panel);

        allTab.removeClass('d-tab--selected');
        allPanel.hide();
        $(this).addClass('d-tab--selected');
        $('#' + tabID).show();
    });
});
