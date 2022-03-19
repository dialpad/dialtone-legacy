$(document).ready(function() {

  const popoverAnchor = $('.js-popover-anchor');
  const overlay = $('.d-modal--transparent');
  const body = document.body;
  let shown = false;

  $.fn.closeModal = function() {
    $('.d-popover__dialog').removeClass('d-vi-visible');
    popoverAnchor.removeClass('d-popover__anchor--modal-opened');
    $('.d-popover__dialog').addClass('d-vi-hidden');
    overlay.attr('aria-hidden','true');
    $(body).removeClass('d-of-hidden');
    shown = !shown;
  }

  $.fn.openModal = function(e) {
    const closestOverlay = $(e.target).closest('.d-popover').siblings('.d-modal--transparent').first();
    const contentContainer = $(e.target).siblings('.d-popover__dialog').first();
    contentContainer.removeClass('d-vi-hidden');
    contentContainer.addClass('d-vi-visible');
    closestOverlay.attr('aria-hidden','false');

    if (closestOverlay.length) {
      $(body).addClass('d-of-hidden');
    }
    shown = !shown;
  }

  popoverAnchor.on('click', function(e) {
    if (!shown) {
      $(e.target).addClass('d-popover__anchor--modal-opened')
      $.fn.openModal(e);
    } else {
      $.fn.closeModal();
    }
  });


  $(document).on('keyup', function(e) {
    if(e.keyCode === 27) {
        $.fn.closeModal(e);
    }
  });

  overlay.on('click', function(e) {
    var target = $(e.target);

    if(!target.closest('.d-popover__dialog').length && $('.d-popover__dialog').is(":visible")) {
        $.fn.closeModal(e);
    }
  });
});
