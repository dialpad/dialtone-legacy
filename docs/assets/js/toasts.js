$(document).ready(function() {
  // Toast example controls
  const launchBtn = $('.js-style-select-show-btn');
  const removeBtn = $('.js-style-select-remove-btn');
  const syleSelectMenu = $('.js-toast-style-menu');
  const positionSelectMenu = $('.js-toast-position-menu');
  const important = $('.js-toast-important');

  // Toast elements
  const toastWrapper = $('.js-toast-example-wrapper');
  const toast = $('.js-toast-example-toast');
  const dialog = $('.js-toast-example-dialog');
  const title = $('.js-toast-example-title');
  const desc = $('.js-toast-example-desc');
  const link = $('.js-toast-example-link');
  const icon = $('.js-toast-example-icon');
  const actions = $('.js-toast-example-actions');
  const actionBtn = $('.js-toast-example-action-btn');
  const closeBtn = $('.js-toast-example-close-btn');

  const iconTypes = $('.js-toast-example-icon-info, .js-toast-example-icon-warning, .js-toast-example-icon-error, .js-toast-example-icon-success');
  const styleClassTypes = ("d-toast--info d-toast--warning d-toast--error d-toast--success d-toast--important");
  const positionClassTypes = ("d-toast--top-center");


  function closeToast() {
    const style = syleSelectMenu.find(':selected').data('class');
    const iconStyle = `js-toast-example-icon-${style}`;

    // Update controls
    launchBtn.text('Show example');
    removeBtn.addClass('d-d-none');

    // Hide toast
    toast.attr('aria-hidden', 'true')
      .removeClass(styleClassTypes);
    toastWrapper.removeClass(positionClassTypes);
    icon.addClass('d-d-none');
    iconStyle.addClass('d-d-none');
  }

  launchBtn.on('click', function(e) {
    const style = syleSelectMenu.find(':selected').data('class');
    const position = positionSelectMenu.find(':selected').data('class');
    const iconStyle = $(`.js-toast-example-icon-${style}`);

    // Configure toast classes
    const toastStyleClass = `d-toast--${style}`;
    const toastPositionClass = `d-toast--${position}`;
    const toastTitle = `${style}-toast-title`;
    const toastDesc = `${style}-toast-desc`;

    e.stopPropagation();
    e.preventDefault();

    // Update controls
    $(this).text('Update example');
    removeBtn.removeClass('d-d-none');

    // Set toast example attrs
    toast.attr('aria-hidden', 'false')
      .removeClass(styleClassTypes);
    toastWrapper.removeClass(positionClassTypes);
    dialog
      .attr('aria-labelledby', toastTitle)
      .attr('aria-describedby', toastDesc);
    title.attr('id', toastTitle);
    desc.attr('id', toastDesc);

    // Reset Classes
    actionBtn.removeClass('d-btn--inverted');
    closeBtn.removeClass('d-btn--inverted');
    link.removeClass('d-link--inverted');
    iconTypes.addClass('d-d-none');

    // Set important classes
    if (important.is(':checked')) {
        toast.addClass('d-toast--important');

        if (style !== 'warning') {
          actionBtn.addClass('d-btn--inverted');
          closeBtn.addClass('d-btn--inverted');
          link.addClass('d-link--inverted');
        }
    }

    // Hide icon for default example
    if (style == 'none') {
      icon.addClass('d-d-none');
    }

    // Add toast style classes
    if (style != 'none') {
      toast.addClass(toastStyleClass)
      actions.removeClass('d-d-none');
      icon.removeClass('d-d-none');
      iconStyle.removeClass('d-d-none');
    }

    // Add toast wrapper position class
    toastWrapper.addClass(toastPositionClass);
  });

  closeBtn.add(removeBtn).on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();

    closeToast();
  });
});
