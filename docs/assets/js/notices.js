$(document).ready(function() {
  // Select important warning notice link and buttons
  const importantWarningNotice = $('.d-notice--warning.d-notice--important');
  const link = importantWarningNotice.find('.d-link');
  const actionBtn = importantWarningNotice.find('.d-btn--outlined');
  const closeBtn = importantWarningNotice.find('.d-btn--circle');


  // Updated classes
  link.removeClass('d-link--inverted');
  actionBtn.removeClass('d-btn--inverted');
  closeBtn.removeClass('d-btn--inverted');
  link.addClass('d-link--muted');
  actionBtn.addClass('d-btn--muted');
  closeBtn.addClass('d-btn--muted');
});
