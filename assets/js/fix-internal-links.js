$(document).ready(function() {
  var pathname = window.location.href.split('#')[0];
  $('a[href^="#"]').each(function() {
      var $this = $(this),
          link = $this.attr('href');
      $this.attr('href', pathname + link);
  });
});
