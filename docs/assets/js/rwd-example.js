$(document).ready(function() {
    var btn = $(".js-example-rwd-btn");
    var example = $(".js-example-rwd-object");
    var oldClasses = ("br-xl btr-xl bbr-xl brr-xl blr-xl ba bt bb bl br");
    var bgcClasses = ("bgc-blue bgc-blue-dark bgc-navy bgc-navy-dark bgc-teal");

    btn.on("click", function(e) {
        var newClass = $(this).data("class");
        var bgc = $(this).data("background");

        e.preventDefault();
        e.stopPropagation();

        btn.removeClass("dds-docs--example-btn__selected");
        $(this).addClass("dds-docs--example-btn__selected");
        
        example
            .removeClass(oldClasses)
            .removeClass(bgcClasses)
            .addClass(newClass)
            .addClass(bgc);
    });
});
