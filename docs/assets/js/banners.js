$(document).ready(function() {
    var body = $('body');
    var topbar = $('.js-topbar-example');
    var mainNav = $('.js-dialtone-menubar');
    var launchBtn = $('.js-style-select-show-btn');
    var removeBtn = $('.js-style-select-remove-btn');

    var banner = $('.js-banner-example');
    var dialog = $('.js-banner-example-dialog');
    var title = $('.js-banner-example-title');
    var desc = $('.js-banner-example-desc');
    var icon = $('.js-banner-example-icon');
    var actions = $('.js-banner-example-actions');
    var actionBtn = $('.js-banner-example-action-btn');
    var closeBtn = $('.js-banner-example-close-btn, .js-style-select-remove-btn');

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

        body.css('padding-top','11.2rem');
        mainNav.css('transform', 'translate3d(0,11.2rem,0)');

        $(this).text('Update example');
        removeBtn.removeClass('d-d-none');
        topbar.removeClass('d-d-none').addClass('d-d-flex').css('transform', 'translate3d(0,0,0)');
        banner.attr('aria-hidden', 'false').removeClass(classTypes);
        dialog.attr('aria-labelledby', bannerTitle).attr('aria-describedby', bannerDesc);
        title.attr('id', bannerTitle);
        desc.attr('id', bannerDesc);

        // Reset Classes
        actionBtn.removeClass('d-btn--inverted');
        closeBtn.removeClass('d-btn--inverted');
        iconTypes.addClass('d-d-none');

        if (pinned.is(':checked')) {
            banner.addClass('d-banner--pinned');
            actions.addClass('d-d-none');
            topbar.css('transform', 'translate3d(0,4.8rem,0)');
        }

        if (important.is(':checked')) {
            banner.addClass('d-banner--important');

            if (style !== 'warning') {
                actionBtn.addClass('d-btn--inverted');
                closeBtn.addClass('d-btn--inverted');
            }
        }

        if (style == 'none') {
            icon.addClass('d-d-none');
            title.text('');
            desc.text('Your meeting invite has been sent to Ted, Vicky, David, and Trinh.');
            actionBtn.text('Edit invite');
        }

        if (style != 'none') {
            banner.addClass(bannerClass);
            actions.removeClass('d-d-none');
            icon.removeClass('d-d-none');
            iconStyle.removeClass('d-d-none');
        }

        if (style == 'info') {
            title.text('Upgrade today!');
            desc.text('Try out our new interface. You can switch back if you\'re not quite ready.');
            actionBtn.text('Upgrade');
        }
        else if (style == 'warning') {
            title.text('Poor connection.');
            desc.text('Your internet connection isn\'t very strong. Please switch to a more reliable connection soon.');
        }
        else if (style == 'error') {
            title.text('Your subscription is about to expire.');
            desc.text('Update your payment details soon to avoid a disruption in your service.');
            actionBtn.text('Update');
        }
        else if (style == 'success') {
            title.text('New department added.');
            desc.text('The Dialtone department has been created. Now invite some agents.');
            actionBtn.text('Add agents');
        }
    });


    closeBtn.on('click', function(e) {
        var style = selectMenu.find(':selected').data('class');
        var iconStyle = "js-banner-example-icon-" + style;

        e.stopPropagation();
        e.preventDefault();

        body.attr('style','');
        mainNav.attr('style','');
        launchBtn.text('Show example');
        removeBtn.addClass('d-d-none');
        topbar.removeClass('d-d-flex').addClass('d-d-none');
        banner.attr('aria-hidden', 'true').removeClass(classTypes);
        icon.addClass('d-d-none');
        iconStyle.addClass('d-d-none');

        title.text('');
        desc.text('');
        actionBtn.text('');
    });
});
