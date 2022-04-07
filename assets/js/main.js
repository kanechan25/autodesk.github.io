"use strict";
import App from "../component/App.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// width >= 768px
var bigImgLink = [
    "url('assets/img/2_body_carousel/aec-factoryos-hero-banner-2000x1200.jpg')",
    "url('assets/img/2_body_carousel/pdm-hyundai-hero-banner-2000x1200.jpg')",
    "url('assets/img/2_body_carousel/me-laika-hero-banner-2000x1200.jpg')"
]
// width < 768px
var smallImgLink = [
    "url('assets/img/2_body_carousel/aec-factoryos-hero-banner-mobile-800x500-4.jpg')",
    "url('assets/img/2_body_carousel/pdm-hyundai-hero-banner-mobile-800x500-4.jpg')",
    "url('assets/img/2_body_carousel/me-laika-hero-banner-mobile-800x500-4.jpg')"
]

function clearAll() {
    navMobile.classList.remove('active');
    rightTaskContainer.classList.remove('active')
    mobileLanguageWindow.classList.remove('active')
    pcLanguageWindow.classList.remove('active')
    accountPopup.classList.remove('active')
    closeNavPopups()
}
// #region 1. Render html
function renderHtml(inputElement, html) {
        const output = html()
        inputElement.innerHTML = output
}

var appElement = $('.app');
if (appElement) {
    renderHtml(appElement, App);
}
// #endregion Render html

// #region 2. Navigation Popups
const navBtn = $$('.nav__btn')
var tranOverlay = document.getElementById('tranOverlay');
var darkOverlay = document.getElementById('darkOverlay');

if (tranOverlay) {            
    tranOverlay.onclick = function() {
        clearAll()
        tranOverlay.classList.remove("active")
    }
}
if (darkOverlay) {            
    darkOverlay.onclick = function() {
        clearAll()
        darkOverlay.classList.remove("active")
    }
}

function closeNavPopups() {
    for (let j = 0; j < navBtn.length; j++) {
        var closePopup = navBtn[j].querySelector('.navbar__selector');
        closePopup.classList.remove("active");
    }
}
if (navBtn) {
    function openPopup(x) {
        var openPopup = navBtn[x].querySelector('.navbar__selector');
        openPopup.classList.add("active");
    }
    function closePopup(y) {
        var closePopup = navBtn[y].querySelector('.navbar__selector');
        closePopup.classList.remove("active");
    }
    for (let i = 0; i < navBtn.length; i++) {
        navBtn[i].onclick = function() {
            if (navBtn[i].querySelector('.navbar__selector').classList.contains('active')) {
                closePopup(i)
                tranOverlay.classList.remove("active")
            } else {
                for (let j = 0; j < navBtn.length; j++) {
                    if (j !== i) {
                        closePopup(j)
                    }
                }
                openPopup(i)
                tranOverlay.classList.add("active")
            }
        }

    }

}
// #endregion 2. Navigation Popups

//#region 3. Toggle Mobile Navigation

function getParent (element, selector) { // tu input element -> lay ra duoc parent element cua message element
    //element: o day la input element (element dung de tim ve parent element cua messgae element)
    //selector: o day la parent element cua message element
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
};

var miniBar = $('.header__left-mini-bar');
var navMobile = $('.mobile-navbar-wrap');
var closeNavMobile = $('.mn__btn-nav');
miniBar.onclick = function openMobileNavbar() {
    navMobile.classList.add('active');
    darkOverlay.classList.add('active');
}
closeNavMobile.onclick = function closeMobileNavbar() {
    navMobile.classList.remove('active');
    darkOverlay.classList.remove('active');
}


var level00 = $('.mn__main-component-ul.level-00');
var level00_items = $$('.item-mobile-level-0');
var backBtns = $$('.mobile-back-icon-clickable');
var clickableLevels = $$('.level-clickable')

var findElementbyClassName = (...input) => {
    let className =  '.' + Array.from(input).join(".")
    let element = $(className)
    return element
  };

function openLevels(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].onclick = function () {
            let clickedId = this.id
            let clickedContainer = findElementbyClassName('mn__main-component-ul', clickedId)
            clickedContainer.classList.add('active');
            this.closest('.mn__main-component-ul').classList.remove('active');
        }
    }
}
openLevels(level00_items)
openLevels(clickableLevels)

for (let j = 0; j < backBtns.length; j++) {
    backBtns[j].onclick = function () {
        let levelContainBack = getParent(backBtns[j], '.mn__main-component-ul.active');
        levelContainBack.classList.remove('active')
        let classNameOfParent = levelContainBack.getAttribute("data-testid");
        if (classNameOfParent == 'level-1') {
            level00.classList.add('active');
        }
        if (classNameOfParent == 'level-2') {
            if (levelContainBack.classList.contains('level-2-1-2')) {
                var containLevel = $('.mn__main-component-ul.level-1-1')
                containLevel.classList.add('active');
            }
            else {
                var containLevel = $('.mn__main-component-ul.level-1-0')
                containLevel.classList.add('active');
            }
        }

    }
}

//#endregion 3. Toggle Mobile Navigation

// #region 4. Carousel

function findActive(elements) {
    var activeNum; //return order number of active element
    for (let i = 0; i < elements.length; i++) {
        var isActive = elements[i].classList.contains('active')
        if(isActive) {
            var activeNum = i
        }
    }
    return activeNum
}
var headingBtns = $$('.carousel-heading')
var slides = $$('.carousel-slide')
var carouselBanner = $$('.carousel-banner')[0]
var coreCarousels = $$('.core-react')

var prevHalfBtn = $('.prev-slide.control-half-btn')
var nexHalftBtn = $('.next-slide.control-half-btn')
var prevBtn = $('.prev-slide.control-btn')
var nextBtn = $('.next-slide.control-btn')





window.addEventListener("load", (e) => {
    if(window.innerWidth >= 768) {
        carouselBanner.style.backgroundImage = bigImgLink[0];
        
    } else {
        carouselBanner.style.backgroundImage = smallImgLink[0];
    }
})
function changeBackground() {
    if(window.innerWidth >= 768) {
        carouselBanner.style.backgroundImage = bigImgLink[0];
    } else {
        carouselBanner.style.backgroundImage = smallImgLink[0];
    }
}
window.addEventListener('resize', changeBackground);

headingBtns.forEach((headingBtn, index) => {
    const slide = slides[index];
    const coreCarousel = coreCarousels[index]
    headingBtn.onclick = function () {
        $('.carousel-heading.active').classList.remove('active');
        $('.carousel-slide.active').classList.remove('active');
        $('.core-react.active').classList.remove('active');
        headingBtn.classList.add('active');
        slide.classList.add('active');
        coreCarousel.classList.add('active');
        FadeIn(coreCarousel)
        FadeIn(slide)
        FadeIn(carouselBanner)
        changeBackgroundImage(carouselBanner, index);
    }
});

function FadeIn(element) {
    element.animate([
        // keyframes
        { opacity : 0.7 },
        { opacity : 1 }
      ], {
        // timing options
        duration: 800,
      });
}

function changeBackgroundImage(element, index) {
    if(window.innerWidth >= 768) {
        element.style.backgroundImage = bigImgLink[index];
    } else {
        element.style.backgroundImage = smallImgLink[index];
    }

    function changeBackground() {
        if(window.innerWidth >= 768) {
            element.style.backgroundImage = bigImgLink[index];
        } else {
            element.style.backgroundImage = smallImgLink[index];
        }
    }
    window.addEventListener('resize', changeBackground);
}


function prevBtnActive(activeNum) {
    switch (activeNum) {
        case 0:
            headingBtns[0].classList.remove('active');
            slides[0].classList.remove('active');
            coreCarousels[0].classList.remove('active');
            headingBtns[2].classList.add('active');
            slides[2].classList.add('active');
            coreCarousels[2].classList.add('active');
            FadeIn(coreCarousels[2])
            FadeIn(slides[2])
            FadeIn(carouselBanner)
            changeBackgroundImage(carouselBanner, 2)
            break;
        case 1:
            headingBtns[1].classList.remove('active');
            slides[1].classList.remove('active');
            coreCarousels[1].classList.remove('active');
            headingBtns[0].classList.add('active');
            slides[0].classList.add('active');
            coreCarousels[0].classList.add('active');
            FadeIn(coreCarousels[0])
            FadeIn(slides[0])
            FadeIn(carouselBanner)
            changeBackgroundImage(carouselBanner, 0)
            break;
        case 2:
            headingBtns[2].classList.remove('active');
            slides[2].classList.remove('active');
            coreCarousels[2].classList.remove('active');
            headingBtns[1].classList.add('active');
            slides[1].classList.add('active');
            coreCarousels[1].classList.add('active');
            FadeIn(coreCarousels[1])
            FadeIn(slides[1])
            FadeIn(carouselBanner)
            changeBackgroundImage(carouselBanner, 1)
            break;
    }
}
function nextBtnActive(activeNum) {
    switch (activeNum) {
        case 2:
            headingBtns[2].classList.remove('active');
            slides[2].classList.remove('active');
            coreCarousels[2].classList.remove('active');
            headingBtns[0].classList.add('active');
            slides[0].classList.add('active');
            coreCarousels[0].classList.add('active');
            FadeIn(coreCarousels[0])
            FadeIn(slides[0])
            FadeIn(carouselBanner)
            changeBackgroundImage(carouselBanner, 0)
            break;
        case 1:
            headingBtns[1].classList.remove('active');
            slides[1].classList.remove('active');
            coreCarousels[1].classList.remove('active');
            headingBtns[2].classList.add('active');
            slides[2].classList.add('active');
            coreCarousels[2].classList.add('active');
            FadeIn(coreCarousels[2])
            FadeIn(slides[2])
            FadeIn(carouselBanner)
            changeBackgroundImage(carouselBanner, 2)
            break;
        case 0:
            headingBtns[0].classList.remove('active');
            slides[0].classList.remove('active');
            coreCarousels[0].classList.remove('active');
            headingBtns[1].classList.add('active');
            slides[1].classList.add('active');
            coreCarousels[1].classList.add('active');
            FadeIn(coreCarousels[1])
            FadeIn(slides[1])
            FadeIn(carouselBanner)
            changeBackgroundImage(carouselBanner, 1)
            break;
    }
}

prevHalfBtn.onclick = function prev() {  
    var activeNum = findActive(headingBtns)
    prevBtnActive(activeNum);
}
nexHalftBtn.onclick = function next() {  
    var activeNum = findActive(headingBtns)
    nextBtnActive(activeNum);
}
prevBtn.onclick = function prev() {  
    var activeNum = findActive(headingBtns)
    prevBtnActive(activeNum);
}
nextBtn.onclick = function next() {  
    var activeNum = findActive(headingBtns)
    nextBtnActive(activeNum);
}
// #endregion 4. Carousel

// #region 5. Language Button

//a. language button on Mobile
var dotBtn = $('.header__right-mini-dot')
var rightTaskContainer = $('.right-task-container')

dotBtn.onclick = function dotBtnClick() {
    if (rightTaskContainer.classList.contains('active')) {
        rightTaskContainer.classList.remove('active')
        tranOverlay.classList.remove("active")
    }
    else {
        rightTaskContainer.classList.add('active')
        tranOverlay.classList.add("active")

    }
}

var languageBtnMobile = $('.task__language')
var mobileLanguageWindow = $('.mobile-language-wrap')
languageBtnMobile.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    rightTaskContainer.classList.remove('active')
    
    darkOverlay.classList.add("active")
    mobileLanguageWindow.classList.add('active')
}
var closeMobileLanguage = $('.mn__btn-nav.mobile-right-close')
closeMobileLanguage.onclick = function () {
    mobileLanguageWindow.classList.remove('active')
    darkOverlay.classList.remove("active")
    
}
// b. language button on PC
var languageBtnPC = $('.header__right-language')
var pcLanguageWindow = $('.right-language__list')
languageBtnPC.onclick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (pcLanguageWindow.classList.contains('active')) {
        pcLanguageWindow.classList.remove('active')
        tranOverlay.classList.remove("active")
    }
    else {
        pcLanguageWindow.classList.add('active')
        tranOverlay.classList.add("active")

    }
}


// #endregion

// #region 6.Search Button Mobile

var searchIconPC = $('.header__right-search-mini')
var searchPopupMobile = $('.mobile-search-wrap')

searchIconPC.onclick = function () {
    if (searchPopupMobile.classList.contains('active')) {
        searchPopupMobile.classList.remove('active')
    }
    else {
        searchPopupMobile.classList.add('active')
    }
}
var searchIconMobile = $('.task__search-mini')
searchIconMobile.onclick = function () {
    if (searchPopupMobile.classList.contains('active')) {
        searchPopupMobile.classList.remove('active')
    }
    else {
        searchPopupMobile.classList.add('active')
    }
}
var closeSearchIcon = searchPopupMobile.querySelector('.mn__btn-nav')
closeSearchIcon.onclick = function() {
    searchPopupMobile.classList.remove('active')
}

// #endregion

// #region 7. Account Button
var accountBtn = $('.right-account__btn')
var accountPopup = $('.right-account__panel-container')
accountBtn.onclick = function() {
    if (accountPopup.classList.contains('active')) {
        accountPopup.classList.remove('active')
        tranOverlay.classList.remove("active")
    }
    else {
        accountPopup.classList.add('active')
        tranOverlay.classList.add("active")
    }
}

// #endregion
