$(document).ready(function() {
  var allToggleButtons = $('.d-toggle');
  var dtToggleCheckedClassName = 'd-toggle--checked';

  allToggleButtons.each(function () {
    $(this).on("click", function(){
      var isChecked = $(this).hasClass(dtToggleCheckedClassName)
      if (isChecked) {
        $(this).removeClass(dtToggleCheckedClassName)
        return $(this).attr('aria-checked', 'false')
      }
      $(this).addClass(dtToggleCheckedClassName)
      return $(this).attr('aria-checked', 'true')
    });
  })
});
