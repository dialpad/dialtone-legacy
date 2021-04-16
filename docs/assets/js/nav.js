$(document).ready(function() {
    var navigation = $(".js-navigation");
    var menuOpenIcon = $(".js-menu-open-icon");
    var menuCloseIcon = $(".js-menu-close-icon");

    var body = $("body");
    var navHeader = $(".js-navigation-header");

    function regenerateMenu () {
        // Hide the navigation if we've opened it
        menuOpenIcon.removeClass("d-d-none");
        menuCloseIcon.addClass("d-d-none");
        navigation.addClass("md:d-d-none");
    }

    $.when($.ready).then(function() {
        regenerateMenu();

        window.history.replaceState({
            'href': window.location.href,
            'title': $('head').filter('title').text(),
            'nav': $(document).find('#nav').html(),
            'content': $(document).find('#content').html(),
            'subnav': $(document).find('#subnav').html(),
        }, '', window.location.href),

        $('#nav').on('click', 'a', function (event) {

            // Allow opening links in new tabs
            if (event.metaKey) {
              return
            }

            // Prevent following link
            event.preventDefault()

            // Get desired link
            var href = $(this).attr('href')

            // Make Ajax request to get the page content
            $.ajax({
              method: 'GET',
              url: href,
              cache: false,
              dataType: 'html',
            }).done(function(html) {

                // Parse the HTML response
                var title = $(html).filter('title').text()
                var nav = $(html).find('#nav').html()
                var content = $(html).find('#content').html()
                var subnav = $(html).find('#subnav').html()

                // Destroy scrollSpy
                $('.js-scrollspy').scrollSpy('destroy');

                // Update the page
                $('head title').text(title)
                $('#nav').html(nav)
                $('#content').html(content)
                $('#subnav').html(subnav)

                // Scroll to the top of the page
                $(document).scrollTop(0)

                regenerateMenu();

                // Add page load to browser history
                window.history.pushState({
                    'href': href,
                    'title': title,
                    'nav': $(html).find('#nav').html(),
                    'content': $(html).find('#content').html(),
                }, '', href)

                //  Re-initiate ScrollSpy
                $('.js-scrollspy').scrollSpy();
            })
        })

        window.onpopstate = history.onpushstate = function(e) {
            if(e.state){
                // Update the page
                $('title').text(e.state.title)
                $('#nav').html(e.state.nav)
                $('#content').html(e.state.content)
                $('#subnav').html(e.state.subnav)
            }
        }
    });

    //  Initiate ScrollSpy
    $('.js-scrollspy').scrollSpy();

    //  Add box shadow to the header navigation on scroll
    $(window).scroll( () => {
        var windowTop = $(window).scrollTop();

        windowTop > 64 ? navHeader.addClass('d-bs-lg d-bc-white').removeClass('d-bc-black-100') : navHeader.removeClass('d-bs-lg d-bc-white').addClass('d-bc-black-100');
    })
});
