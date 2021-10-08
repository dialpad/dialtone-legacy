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
    
    toggleDropDown()
    toggleDropDownNavigation()

    const toggleButtons = (showButtonClose = false) => {
        btnClose.toggleClass('d-d-none', !showButtonClose)
        btnSearch.toggleClass('d-d-none', showButtonClose)
        btnMenu.toggleClass('d-d-none', showButtonClose)
    }

    const showInputSearch = () => {
        inputSearchWrapper.removeClass('md:d-d-none')
        toggleButtons(true)
    }

    const hideInputSearch = () => {
        inputSearchWrapper.addClass('md:d-d-none')
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
        $('.js-navigation-header').css('width', !!height ? '100vw' : '100%')
    }

    function toggleDropDownNavigation (height = 0, opacity = true) {
        dropDownNavigation.css('height', height)
        dropDownNavigation.css('top', navigationHeader.outerHeight() + breadcrumbsWrapper.outerHeight())
        dropDownNavigation.toggleClass('d-o0', opacity)
        dropDownNavigation.toggleClass('d-py24', !!height)
        dropDownNavigation.toggleClass('d-px16', !!height)
        $('body').toggleClass('md:d-ps-fixed', !!height)
        $('.js-navigation-header').css('width', !!height ? '100vw' : '100%')
    }
})