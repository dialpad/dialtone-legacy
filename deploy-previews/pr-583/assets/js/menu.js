$(document).ready(function() {
    var navIcon = $(".js-dialtone-menu-button");
    var navMenu = $(".js-dialtone-menu");
    var navBar = $(".js-dialtone-menubar");
    var navHeader = $(".js-dialtone-nav-header");
    var navLink = $(".js-dailtone-nav-header-link");

    // Open the menu
    navIcon.click("on", function(e) {
        e.stopPropagation();
        e.preventDefault();

        var btnState = $(this).attr('data-state');
        var menuState = navMenu.attr('data-state');

        if (btnState === "selected") {
            navIcon.attr({
                'data-state': 'unselected',
                'data-menu': 'closed'
            });
            navMenu.attr('data-state', 'closed');
            navBar.attr('data-state', 'normal');
        }
        else if (btnState === "unselected") {
            navIcon.attr({
                'data-state': 'selected',
                'data-menu': 'open'
            });
            navMenu.attr('data-state','open');
            navBar.attr('data-state', 'open');
        };
    });

    // Open the submenus in the menu
    navLink.click("on", function(e) {
        e.stopPropagation();
        e.preventDefault();

        var header = $(this).closest(navHeader);
        var headerState = header.attr('data-open');

        //  Update the icon and show the submenu
        if (headerState === "false") {
            header.attr('data-open', 'true');
        }
        else if (headerState === "true") {
            header.attr('data-open', 'false');
        };
    })

    //  Theme Switcher
    var themeIcon = $(".js-theme-switcher");
    var themeMenu = $(".js-theme__menu");
    var themeLink = $(".js-theme__link");
    var themeCSS = $("#css-theme");

    themeIcon.click("on", function(e) {
        e.stopPropagation();
        e.preventDefault();

        var menuState = themeMenu.attr('data-open');

        //  Update the icon and show the submenu
        if (menuState === "false") {
            themeMenu.attr('data-open', 'true');
        }
        else if (menuState === "true") {
            themeMenu.attr('data-open', 'false');
        };
    })

    themeLink.click("on", function(e) {
        var linkTheme = $(".js-theme__link").attr('data-theme');

        //  Close the menu
        themeMenu.attr('data-open', 'false');

        //  Update the theme CSS file
        if (linkTheme === "default") {
            themeCSS.attr('pathname','dialtone-docs.min.css');
        }
        else if (linkTheme === "dark") {
            themeCSS.attr('pathname','dialtone-docs--dark.min.css');
        }
        else if (linkTheme === "tmo") {
            themeCSS.attr('pathname','dialtone-docs--tmo.min.css');
        };
    })
});
