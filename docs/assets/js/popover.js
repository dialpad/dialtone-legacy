$(document).ready(function() {
  var popoverAnchor = $('.js-popover-anchor');
  var body = document.body;

  var shown = false;
  $(popoverAnchor).on('click', function(e) {
    const modal = $(e.target).closest('.dt-popover').siblings('.d-modal').first();
    modal.addClass('d-modal--animate-in');
    modal.removeClass('d-modal--animate-out');
    const componentRoot = $(e.target).closest('.dt-popover');
    const contentContainer = $(e.target).siblings('.dt-popover__content-container').first();
    if (!shown) {
      componentRoot.addClass('dt-popover--on-top');
      contentContainer.removeClass('d-vi-hidden');
      contentContainer.addClass('d-vi-visible');
      modal.attr('aria-hidden','false');

      $(body).addClass('d-of-hidden');
    } else {
      modal.addClass('d-modal--animate-out');
      modal.removeClass('d-modal--animate-in');
      componentRoot.removeClass('dt-popover--on-top');
      contentContainer.removeClass('d-vi-visible');
      contentContainer.addClass('d-vi-hidden');
      modal.attr('aria-hidden','true');
      $(body).removeClass('d-of-hidden');
    }
    shown = !shown;
  });
});
