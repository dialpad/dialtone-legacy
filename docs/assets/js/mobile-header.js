$(document).ready(() => {
    const navigationHeader = $('.js-navigation-header')
    const btnSearch = $('.js-mobile-header-search')
    const btnMenu = $('.js-mobile-header-menu')
    const btnClose = $('.js-mobile-header-close')
    const inputSearchWrapper = $('.js-input-search-wrapper')
    const dropDownMenu = $('.js-mobile-header-drop-down-menu')
    const breadcrumbsWrapper = $('.js-mobile-header-breadcrumbs')
    const breadcrumbArrow = $('.js-mobile-header-breadcrumb-arrow')
    const dropDownNavigation = $('.js-mobile-header-drop-down-navigation')
    const headerLogo = $('.js-header-logo')
    const headerContent = $('.js-header-content')
    const dialtoneSearch = $('.js-dialtone-search')
    const algoliaAutocomplete = dialtoneSearch.parent()

  toggleDropDown()
    toggleDropDownNavigation()

    const toggleButtons = (showButtonClose = false) => {
        btnClose.toggleClass('d-d-none', !showButtonClose)
        btnSearch.toggleClass('d-d-none', showButtonClose)
        btnMenu.toggleClass('d-d-none', showButtonClose)
    }

    const showInputSearch = () => {
        inputSearchWrapper.removeClass('md:d-d-none')
        inputSearchWrapper.addClass('md:d-w100p')
        algoliaAutocomplete.addClass('md:d-w100p')
        headerLogo.addClass('md:d-d-none')
        headerContent.addClass('md:d-ml0 md:d-w100p md:d-jc-space-between')
        toggleButtons(true)
        dialtoneSearch.focus()
    }

    const hideInputSearch = () => {
        inputSearchWrapper.addClass('md:d-d-none')
        inputSearchWrapper.removeClass('md:d-w100p')
        algoliaAutocomplete.removeClass('md:d-w100p')
        headerLogo.removeClass('md:d-d-none')
        headerContent.removeClass('md:d-ml0 md:d-w100p md:d-jc-space-between')
    }


    const hideDropDownMenu = () => {
        inputSearchWrapper.addClass('md:d-d-none')
        toggleDropDown()
    }


    btnSearch.click(showInputSearch)

    btnMenu.click(() => {
        hideInputSearch()
        toggleDropDown(window.innerHeight - navigationHeader.outerHeight(), false)
        toggleButtons(true)
    })

    btnClose.click(() => {
        hideDropDownMenu()
        hideInputSearch()
        toggleButtons()
    })

    breadcrumbArrow.click(() => {
        breadcrumbArrow.toggleClass('breadcrumb-arrow--top')
        const isOpen = breadcrumbArrow.hasClass('breadcrumb-arrow--top')
        isOpen ? toggleDropDownNavigation(window.innerHeight - navigationHeader.outerHeight() + breadcrumbsWrapper.outerHeight(), false) : toggleDropDownNavigation()
    })

    function toggleDropDown (height = 0, opacity = true) {
        dropDownMenu.css('height', height)
        dropDownMenu.css('top', navigationHeader.outerHeight())
        dropDownMenu.toggleClass('d-o0', opacity)
        dropDownMenu.toggleClass('d-py24', !!height)
        dropDownMenu.toggleClass('d-px16', !!height)
        $('body').toggleClass('md:d-ps-fixed', !!height)
        navigationHeader.toggleClass('md:d-w100vw', !!height)
    }

    function toggleDropDownNavigation (height = 0, opacity = true) {
        dropDownNavigation.css('height', height)
        dropDownNavigation.css('top', navigationHeader.outerHeight() + breadcrumbsWrapper.outerHeight())
        dropDownNavigation.css('padding-bottom', '15.2rem')
        dropDownNavigation.toggleClass('d-o0', opacity)
        dropDownNavigation.toggleClass('d-pt24', !!height)
        dropDownNavigation.toggleClass('d-px16', !!height)
        navigationHeader.toggleClass('md:d-w100vw', !!height)
        $('body').toggleClass('md:d-ps-fixed', !!height)
    }
})
