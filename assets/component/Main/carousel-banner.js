import html from "../../js/core.js";


function carousel_banner() {
    return html`
        <div class="carousel-banner">
            <div class="grid wide">
                <div class="carousel">
                    <div class="carousel-headings-wrap">
                        <ul class="carousel__headings">
                            <li class="carousel-heading active" id="carousel-heading-1">
                                Architecture, Engineering & Construction</li>
                            <li class="carousel-heading" id="carousel-heading-2">
                                Product Design & Manufacturing</li>
                            <li class="carousel-heading" id="carousel-heading-3">
                                Media & Entertainment</li>
                        </ul>
                    </div>              
                
                    <div class="carousel__toggle">
                        <div class="carousel-slide aec active">
                            <div class="slide__text">
                                <h1 class="slide__text-line">Design it.</h1>
                                <h1 class="slide__text-line">Build it.</h1>
                                <h1 class="slide__text-line">Autodesk it.</h1>
                            </div>
                            <!-- <img class="slide__img" src="./assets/img/2_body_carousel/aec-factoryos-hero-banner-2000x1200.jpg"> -->
                            <p class="slide__copyright">Image courtesy of Factory_OS</p>
                        </div>
                
                        <div class="carousel-slide pdm">
                            <div class="slide__text">
                                <h1 class="slide__text-line">Innovate it.</h1>
                                <h1 class="slide__text-line">Manufacture it.</h1>
                                <h1 class="slide__text-line">Autodesk it.</h1>
                            </div>
                            <!-- <img class="slide__img" src="./assets/img/2_body_carousel/pdm-hyundai-hero-banner-2000x1200.jpg"> -->
                            <p class="slide__copyright">Image courtesy of Huyndai Motor Group</p>
                        </div>
                
                        <div class="carousel-slide me">
                            <div class="slide__text">
                                <h1 class="slide__text-line">Animate it.</h1>
                                <h1 class="slide__text-line">Render it.</h1>
                                <h1 class="slide__text-line">Autodesk it.</h1>
                            </div>
                            <!-- <img class="slide__img" src="./assets/img/2_body_carousel/me-laika-hero-banner-2000x1200.jpg"> -->
                            <p class="slide__copyright">Image courtesy of LAIKA</p>
                        </div>
                
                        <a class="carousel-slide go-shop" target="_blank" href="https://www.autodesk.com/products">Shop all products</a>
                
                    </div>
                
                    <div class="carousel-controls col">
                        <button class="prev-slide control-btn">
                            <span class="control-btn-icon">&lsaquo;</span>
                        </button>
                        <button class="next-slide control-btn">
                            <span class="control-btn-icon">&rsaquo;</span>
                        </button>
                    </div>
                

                </div>
            </div>

            <div class="carousel-controls-half">
                <div class="carousel-controls col">
                    <button class="prev-slide control-half-btn">
                        <span class="prev-btn-icon">&lsaquo;</span>
                    </button>
                    <button class="next-slide control-half-btn">
                        <span class="next-btn-icon">&rsaquo;</span>
                    </button>
                </div>
            </div>

        </div>
    `
}
export default carousel_banner