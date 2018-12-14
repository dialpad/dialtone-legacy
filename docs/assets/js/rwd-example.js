$(document).ready(function() {
    var btn = $(".js-example-rwd-btn");
    var example = $(".js-example-rwd-object");
    var brClasses = ("br-xl btr-xl bbr-xl brr-xl blr-xl");
    var baClasses = ("ba bt bb bl br");
    var bsClasses = ("bs-sm bs-md bs-lg bs-xl bs-none");
    var bgcClasses = ("bgc-blue bgc-blue-dark bgc-navy bgc-navy-dark bgc-teal");

    btn.on("click", function(e) {
        var newClass = $(this).data("class");
        var bgc = $(this).data("background");
        var type = example.data("example");

        e.preventDefault();
        e.stopPropagation();

        btn.removeClass("dds-docs--example-btn__selected");
        $(this).addClass("dds-docs--example-btn__selected");

        if (type == "br") {
            example
                .removeClass(brClasses)
                .removeClass(bgcClasses)
                .addClass(newClass)
                .addClass(bgc);
        }
        else if (type == "ba") {
            example
                .removeClass(baClasses)
                .addClass(newClass);
        }
        else if (type == "bs") {
            example
                .removeClass(bsClasses)
                .addClass(newClass)
        }
    });
});
