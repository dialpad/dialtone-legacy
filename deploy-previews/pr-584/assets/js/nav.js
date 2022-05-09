$(document).ready(function() {
    var navigation = $(".js-navigation");
    var menuOpenIcon = $(".js-menu-open-icon");
    var menuCloseIcon = $(".js-menu-close-icon");
    var body = $("body");
    var navHeader = $(".js-navigation-header");
    var navigationSideBar = $(".js-navigation-sidebar");
    var search = $(".js-dialtone-search")
    var banner = $('.js-banner-example');
    const dropDownNavigation = $('.js-mobile-header-drop-down-navigation')
    const navigationHeader = $('.js-navigation-header')
    const breadcrumbsWrapper = $('.js-mobile-header-breadcrumbs')
    const breadcrumbArrow = $('.js-mobile-header-breadcrumb-arrow')

    convertSearchToDialtone();

    // add dialtone child elements to the algolia search button (label and icon)
    function convertSearchToDialtone () {
      $('<span class="d-btn__label">Search Dialtone</span>').appendTo(search.find('button'))
      $('<span class="d-btn__icon d-btn__icon--left"><svg aria-hidden="true" aria-label="Search" class="d-svg d-svg--system d-svg__search" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.732 14.318h-.741l-.263-.253a6.095 6.095 0 001.389-5.009c-.441-2.607-2.619-4.69-5.246-5.009a6.103 6.103 0 00-6.823 6.82c.319 2.626 2.402 4.802 5.011 5.243a6.103 6.103 0 005.012-1.388l.253.262v.741l3.989 3.987a.992.992 0 001.398 0 .99.99 0 000-1.398l-3.979-3.996zm-5.631 0a4.217 4.217 0 01-4.223-4.22A4.216 4.216 0 0110.1 5.876a4.216 4.216 0 014.223 4.22 4.216 4.216 0 01-4.223 4.221z"></path></svg></span>').appendTo(search.find('button'))
    }

    function toggleDropDownNavigation () {
        breadcrumbArrow.toggleClass('breadcrumb-arrow--top')
        dropDownNavigation.css('height', 0)
        dropDownNavigation.css('top', navigationHeader.outerHeight() + breadcrumbsWrapper.outerHeight())
        dropDownNavigation.css('padding-bottom', '15.2rem')
        dropDownNavigation.addClass('d-o0')
        dropDownNavigation.removeClass('d-pt24')
        dropDownNavigation.removeClass('d-px16')
        navigationHeader.removeClass('md:d-w100vw')
        body.removeClass('md:d-ps-fixed')
    }

    function regenerateMenu () {
        // Hide the navigation if we've opened it
        menuOpenIcon.removeClass("d-d-none");
        menuCloseIcon.addClass("d-d-none");
        navigation.addClass("md:d-d-none");
    }

    function calcSideNavPosition () {
      const windowTop = $(window).scrollTop();
      // const baseSideNavPosition = banner.attr('aria-hidden') === 'true' ? 0 : 4.8;
      const baseSideNavPosition = 0;
      const topPosition = (windowTop > 50 ? 6.4 : 11.2 - windowTop/10) + baseSideNavPosition;

      navigationSideBar.attr('style',`top: ${topPosition}rem!important`);
    }

    $.when($.ready).then(function() {
        calcSideNavPosition();
        regenerateMenu();

        window.history.replaceState({
            'href': window.location.href,
            'title': $('head').filter('title').text(),
            'nav': $(document).find('#nav').html(),
            'content': $(document).find('#content').html(),
            'subnav': $(document).find('#subnav').html(),
            'mobile-nav': $(document).find('#mobile-nav').html(),
        }, '', window.location.href),

        $('#nav,#mobile-nav').on('click', 'a', function (event) {
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
                const breadcrumbs = $(html).find('#breadcrumbs').html()
                const mobileNav = $(html).find('#mobile-nav').html()

                // Destroy scrollSpy
                $('.js-scrollspy').scrollSpy('destroy');


                // Update the page
                $('head title').text(title)
                $('#nav').html(nav)
                $('#content').html(content)
                $('#subnav').html(subnav)
                $('#breadcrumbs').html(breadcrumbs)
                $('#mobile-nav').html(mobileNav)

                // Scroll to the top of the page
                $(document).scrollTop(0)

                regenerateMenu();

                // Add page load to browser history
                window.history.pushState({
                    'href': href,
                    'title': title,
                    'nav': $(html).find('#nav').html(),
                    'mobile-nav': $(html).find('#mobile-nav').html(),
                    'content': $(html).find('#content').html(),
                }, '', href)

                toggleDropDownNavigation()

                fixInternalLinks();
                //  Re-initiate ScrollSpy
                $('.js-scrollspy').scrollSpy({
                  getActiveElement: (id) => getActiveAbsolute(id),
                  scrollOffset: 0,
                });
                $('.js-navigation-header').attr('style', '');
                $('.js-dialtone5-banner').removeClass('d-d-none');
            })
        })

        window.onpopstate = history.onpushstate = function(e) {
            if(e.state){
                // Update the page
                $('title').text(e.state.title)
                $('#nav').html(e.state.nav)
                $('#content').html(e.state.content)
                $('#subnav').html(e.state.subnav)
                $('#mobile-nav').html(e.state['mobile-nav'])
            }
        }
    });

    fixInternalLinks();

    //  Initiate ScrollSpy
    $('.js-scrollspy').scrollSpy({
      getActiveElement: (id) => getActiveAbsolute(id),
      scrollOffset: 0,
    });

    // Custom getActiveElement to find the active element using absolute path. Needed when using the <base> tag
    function getActiveAbsolute(id) {
      const address = window.location.href.split('#')[0];
      return `a[href="${address}#${id}"]`;
    }

    // sets all internal a href links to use absolute path
    function fixInternalLinks() {
      const pathname = window.location.href.split('#')[0];
      $('a[href^="#"]').each(function() {
          var $this = $(this),
              link = $this.attr('href');
          $this.attr('href', pathname + link);
      });
    }

    //  Add box shadow to the header navigation on scroll
    $(window).scroll( () => {
        var windowTop = $(window).scrollTop();
        calcSideNavPosition();

        if(window.innerWidth <= 640) {
          navHeader.removeClass('d-bs-lg d-bc-white').addClass('d-bc-black-100');
        } else if (windowTop > 64) {
          navHeader.addClass('d-bs-lg d-bc-white').removeClass('d-bc-black-100');
        } else {
          navHeader.removeClass('d-bs-lg d-bc-white').addClass('d-bc-black-100');
        }
    })
});
