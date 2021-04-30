$(document).ready(function() {
    var body = $('body');
    var topNav = $('.js-navigation-header');
    var sideNav = $('.js-navigation-sidebar');
    var tableOfContents = $('.js-navigation-toc');
    var content = $('.js-content');
    var launchBtn = $('.js-style-select-show-btn');
    var removeBtn = $('.js-style-select-remove-btn');

    var banner = $('.js-banner-example');
    var dialog = $('.js-banner-example-dialog');
    var title = $('.js-banner-example-title');
    var desc = $('.js-banner-example-desc');
    const link = $('.js-banner-example-link');
    var icon = $('.js-banner-example-icon');
    var actions = $('.js-banner-example-actions');
    var actionBtn = $('.js-banner-example-action-btn');
    var closeBtn = $('.js-banner-example-close-btn');

    var selectMenu = $('.js-banner-style-menu');
    var important = $('.js-banner-important');
    var pinned = $('.js-banner-pinned');
    var iconTypes = $('.js-banner-example-icon-info, .js-banner-example-icon-warning, .js-banner-example-icon-error, .js-banner-example-icon-success');
    var classTypes = ("d-banner--info d-banner--warning d-banner--error d-banner--success d-banner--important d-banner--pinned");

    launchBtn.on('click', function(e) {
        var style = selectMenu.find(':selected').data('class');
        var iconStyle = $('.js-banner-example-icon-' + style);
        var bannerClass = 'd-banner--' + style;
        var bannerTitle = style + '-banner-title';
        var bannerDesc = style + '-banner-desc';

        e.stopPropagation();
        e.preventDefault();

        content.css('padding-top','4.8rem');
        sideNav.attr('style','top: 11.2rem!important');
        tableOfContents.css('transform', 'translate3d(0,4.8rem,0)');
        topNav.attr('style','');

        $(this).text('Update example');
        removeBtn.removeClass('d-d-none');
        banner.attr('aria-hidden', 'false').removeClass(classTypes);
        dialog.attr('aria-labelledby', bannerTitle).attr('aria-describedby', bannerDesc);
        title.attr('id', bannerTitle);
        desc.attr('id', bannerDesc);

        // Reset Classes
        actionBtn.removeClass('d-btn--inverted');
        closeBtn.removeClass('d-btn--inverted');
        link.removeClass('d-link--inverted');
        iconTypes.addClass('d-d-none');

        if (pinned.is(':checked')) {
            banner.addClass('d-banner--pinned');
            actions.addClass('d-d-none');
            topNav.attr('style','height: 11.2rem !important; padding-top: 4.8rem; max-height: 11.2rem !important;');
        }

        if (important.is(':checked')) {
            banner.addClass('d-banner--important');

            if (style !== 'warning') {
                actionBtn.addClass('d-btn--inverted');
                closeBtn.addClass('d-btn--inverted');
                link.addClass('d-link--inverted');
            }
        }

        if (style == 'none') {
            icon.addClass('d-d-none');
        }

        if (style != 'none') {
            banner.addClass(bannerClass);
            actions.removeClass('d-d-none');
            icon.removeClass('d-d-none');
            iconStyle.removeClass('d-d-none');
        }
    });


    function closeBanner() {
      var style = selectMenu.find(':selected').data('class');
      var iconStyle = "js-banner-example-icon-" + style;

      sideNav.attr('style','');
      topNav.attr('style','');
      tableOfContents.attr('style','');
      content.attr('style','');
      launchBtn.text('Show example');
      removeBtn.addClass('d-d-none');
      banner.attr('aria-hidden', 'true').removeClass(classTypes);
      icon.addClass('d-d-none');
      iconStyle.addClass('d-d-none');
    }
    closeBtn.add(removeBtn).on('click', function(e) {
      e.stopPropagation();
      e.preventDefault();

      closeBanner();
    });
});
