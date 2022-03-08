"use strict";
import App from "../component/App.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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
var overlay = document.getElementById('overlay');

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
                overlay.classList.remove("active")
            } else {
                for (let j = 0; j < navBtn.length; j++) {
                    if (j !== i) {
                        closePopup(j)
                    }
                }
                openPopup(i)
                overlay.classList.add("active")
                overlay.style.opacity = 0;
                overlay.style.zIndex = 9;
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
    overlay.classList.add('active');
}
closeNavMobile.onclick = function closeMobileNavbar() {
    navMobile.classList.remove('active');
    overlay.classList.remove('active');
}
if (overlay) {            
    overlay.onclick = function() {
        navMobile.classList.remove('active');
        closeNavPopups()
        overlay.style.opacity = 0.7;
        overlay.classList.remove("active")

    }
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

// #region 4. Carousel

var headingBtns = $$('.carousel-heading')
var slides = $$('.carousel-slide')
var carouselBanner = $$('.carousel-banner')
var coreCarousels = $$('.core-react')

var prevHalfBtn = $('.prev-slide.control-half-btn')
var nexHalftBtn = $('.next-slide.control-half-btn')
var prevBtn = $('.prev-slide.control-btn')
var nextBtn = $('.next-slide.control-btn')


// width >= 768px
var bigImgLink = [
    "url('/assets/img/2. body_carousel/aec-factoryos-hero-banner-2000x1200.jpg')",
    "url('/assets/img/2. body_carousel/pdm-hyundai-hero-banner-2000x1200.jpg')",
    "url('/assets/img/2. body_carousel/me-laika-hero-banner-2000x1200.jpg')"
]
// width < 768px
var smallImgLink = [
    "url('/assets/img/2. body_carousel/aec-factoryos-hero-banner-mobile-800x500-4.jpg')",
    "url('/assets/img/2. body_carousel/pdm-hyundai-hero-banner-mobile-800x500-4.jpg')",
    "url('/assets/img/2. body_carousel/me-laika-hero-banner-mobile-800x500-4.jpg')"
]


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
        FadeIn(carouselBanner[0])
        changeBackgroundImage(carouselBanner[0], index);
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
            FadeIn(carouselBanner[0])
            changeBackgroundImage(carouselBanner[0], 2)
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
            FadeIn(carouselBanner[0])
            changeBackgroundImage(carouselBanner[0], 0)
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
            FadeIn(carouselBanner[0])
            changeBackgroundImage(carouselBanner[0], 1)
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
            FadeIn(carouselBanner[0])
            changeBackgroundImage(carouselBanner[0], 0)
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
            FadeIn(carouselBanner[0])
            changeBackgroundImage(carouselBanner[0], 2)
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
            FadeIn(carouselBanner[0])
            changeBackgroundImage(carouselBanner[0], 1)
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



// #endregion

