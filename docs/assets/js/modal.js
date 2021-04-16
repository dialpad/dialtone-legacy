$(document).ready(function() {
    var body = $('body');
    var launchBtn = $('.js-launch-example-modal');
    var launchFull = $('.js-launch-example-modal-full');
    var launchDanger = $('.js-launch-example-modal-danger');
    var launchBanner = $('.js-launch-example-modal-banner');
    var modal = $('.js-example-modal');
    var dialog = $('.js-example-modal-dialog');
    var banner = $('.js-example-modal-banner');
    var btnSave = $('.js-example-modal-btn-save');
    var btnCancel = $('.js-example-modal-btn-cancel');
    var close = $('.js-example-modal-btn-cancel, .js-example-modal-close');

    $.fn.closeModal = function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(modal).attr('aria-hidden','true');
        if ($('.js-example-modal.d-modal--danger')) {
            $(modal).removeClass('d-modal--danger');
        }
        if ($('.js-example-modal.d-modal--full')) {
            window.setTimeout(function() {
                $(modal).removeClass('d-modal--full');
            }, 200);
        }

        $(body).removeClass('d-of-hidden');
        $(banner).addClass('d-d-none');

        if ($('.js-example-modal-btn-cancel.d-btn--danger')) {
            $(btnCancel).removeClass('d-btn--danger').addClass('d-btn');
        }
        if ($('.js-example-modal-btn-save.d-btn--danger--primary')) {
            $(btnSave).removeClass('d-btn--danger--primary').addClass('d-btn--primary');
        }
    };

    $(launchBtn).on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(modal).attr('aria-hidden','false');
        $(body).addClass('d-of-hidden');
    });

    $(launchFull).on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(modal).attr('aria-hidden','false').addClass('d-modal--full');
        $(body).addClass('d-of-hidden');
    });

    $(launchDanger).on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(modal).attr('aria-hidden','false').addClass('d-modal--danger');
        $(btnCancel).removeClass('d-btn').addClass('d-btn--danger');
        $(btnSave).removeClass('d-btn--primary').addClass('d-btn--danger--primary');
        $(body).addClass('d-of-hidden');
    });

    $(launchBanner).on('click', function(e) {
        e.stopPropagation();
        e.preventDefault();

        $(modal).attr('aria-hidden','false');
        $(body).addClass('d-of-hidden');
        $(banner).removeClass('d-d-none');
    });

    $(document).on('keyup', function(e) {
        if(e.keyCode === 27) {
            $.fn.closeModal(e);
        }
    })
    $(modal).on('click', function(e) {
        var target = $(e.target);

        if(!target.closest(dialog).length && dialog.is(":visible")) {
            $.fn.closeModal(e);
        }
    });

    $(close).on('click', function(e) {
        $.fn.closeModal(e);
    });
});
