import html from "../../../js/core.js";

function navbar_product() {
    return html`
        <div class="navbar__product-container navbar__selector">
            <div class="navbar__product-panel">
                <div class="navbar__product-container-fluid">
                    <div class="row">
                        <div class="navbar__product-section col xl-9 lg-9">
                            <div class="navbar__product-section-products">
                                <div class="navbar__product-item-products col xl-4 lg-4">
                                    <div class="item-products__collection-title">Architecture, Engineering<br> &amp; Construction </div>
                                    <a class="item-products__collection-box" href="https://www.autodesk.com/collections/architecture-engineering-construction/overview" target="__blank">
                                        <img src="./assets/img/1. header_navbar/fixedbar/architecture-engineering-construction-collection-uhblack-banner-lockup-364x40.png" alt="aec logo">
                                        <p>Integrated BIM tools, including Revit, AutoCAD, and Civil 3D</p>
                                    </a>
                                    <div class="item-products__collection-list">
                                        <span>Top products</span>
                                        <ul class="item-products__product-list">
                                            <li class="item-products__item-list"> <a href="https://www.autodesk.com/products/autocad/overview" target="__blank">AutoCAD</a>
                                            </li>
                                            <li class="item-products__item-list"> <a href="https://www.autodesk.com/products/revit-family/overview" target="__blank">Revit</a>
                                            </li>
                                            <li class="item-products__item-list"> <a href="https://www.autodesk.com/products/civil-3d/overview" target="__blank">Civil 3D</a>
                                            </li>
                                            <li class="item-products__item-list"> <a href="https://www.autodesk.com/products/autocad-lt/overview" target="__blank">AutoCAD LT</a>
                                            </li>
                                            <li class="item-products__item-list"> <a href="https://www.autodesk.com/products/bim-collaborate/overview" target="__blank">BIM Collaborate Pro</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="navbar__product-item-products col xl-4 lg-4">
                                    <div class="item-products__collection-title">Product Design<br>& Manufacturing </div>
                                    <a class="item-products__collection-box" href="https://www.autodesk.com/collections/product-design-manufacturing/overview" target="__blank">
                                        <img src="./assets/img/1. header_navbar/fixedbar/product-design-manufacturing-collection-uhblack-banner-lockup-364x40.png" alt="pdm logo">
                                        <p>Professional CAD/CAM tools built on Inventor and AutoCAD</p>
                                    </a>
                                    <div class="item-products__collection-list">
                                        <span>Top products</span>
                                        <ul class="item-products__product-list">
                                            <li class="item-products__item-list"> <a href="https://www.autodesk.com/products/inventor/overview" target="__blank">Inventor</a>
                                            </li>
                                            <li class="item-products__item-list"> <a href="https://www.autodesk.com/products/autocad/overview" target="__blank">AutoCAD</a>
                                            </li>
                                            <li class="item-products__item-list"> <a href="https://www.autodesk.com/products/fusion-360/overview" target="__blank">Fusion 360</a>
                                            </li>
                                            <li class="item-products__item-list"> <a href="https://www.autodesk.com/products/navisworks/overview" target="__blank">Navisworks</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="navbar__product-item-products col xl-4 lg-4">
                                    <div class="item-products__collection-title">Media<br>& Entertainment</div>
                                    <a class="item-products__collection-box" href="https://www.autodesk.com/collections/media-entertainment/overview" target="__blank">
                                        <img src="./assets/img/1. header_navbar/fixedbar/media-entertainment-collection-uhblack-banner-lockup-364x40.png" alt="me logo">
                                        <p>Entertainment content creation tools, including 3ds Max and Maya</p>
                                    </a>
                                    <div class="item-products__collection-list">
                                        <span>Top products</span>
                                        <ul class="item-products__product-list">
                                            <li class="item-products__item-list"> <a href="https://www.autodesk.com/products/3ds-max/overview" target="__blank">3ds Max</a>
                                            </li>
                                            <li class="item-products__item-list"> <a href="https://www.autodesk.com/products/maya/overview" target="__blank">Maya</a>
                                            </li>
                                            <li class="item-products__item-list"> <a href="https://www.autodesk.com/products/arnold/overview" target="__blank">Arnold</a>
                                            </li>
                                            <li class="item-products__item-list"> <a href="https://www.autodesk.com/products/mudbox/overview" target="__blank">Mudbox</a>
                                            </li>
                                            <li class="item-products__item-list"> <a href="https://www.autodesk.com/products/shotgrid/overview" target="__blank">ShotGrid</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="navbar__product-section-bottom">
                                <div class="navbar__product-section-bottom-link">
                                    <div class="col navbar__product-section-bottom-item">
                                        <a class="navbar__product-section-bottom-item-link" href="https://autodesk.com/products" target="__blank">
                                            <span>View all products</span>
                                            <div class="navbar__caret-icon-wrap">
                                                <svg  class="navbar__caret-icon" width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.001 6.25l-3.5 3.5-3.5-3.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="navbar__product-links col xl-3 lg-3">
                            <div class="navbar__product-block-download-wrap">
                                <div class="navbar__product-block-download"> 
                                    <a class="navbar__product-link-block" href="https://www.autodesk.com/free-trials"> 
                                        <img class="download-icon icon-padding-right" src="https://damassets.autodesk.net/content/dam/autodesk/www/universal-header/primary-nav/iconography-download-light.svg" alt="">
                                        <p>Start a trial</p>
                                    </a> 
                                    <a class="navbar__product-link-block" href="https://manage.autodesk.com/cep/#products-services/all"> 
                                        <img class="download-icon icon-padding-right" src="https://damassets.autodesk.net/content/dam/autodesk/www/universal-header/primary-nav/iconography-download-light.svg" alt="">
                                        <p>Download your software</p>
                                    </a> 
                                </div>
                            </div>
                            <div class="navbar__product-block">
                                <svg class="navbar__product-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="stroke" d="M15 15L19.9957 19.9957M16.8923 10.4462C16.8923 14.0063 14.0063 16.8923 10.4462 16.8923C6.88605 16.8923 4 14.0063 4 10.4462C4 6.88605 6.88605 4 10.4462 4C14.0063 4 16.8923 6.88605 16.8923 10.4462Z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                                <p>Discover</p>
                            </div>
                            <div class="navbar__product-block-list">
                                <ul>
                                    <li><a class="navbar__product-block-list-item" href="https://www.autodesk.com/solutions" target="__blank">
                                            Industry solutions
                                        </a></li>
                                    <li><a class="navbar__product-block-list-item" href="https://www.autodesk.com/education/home" target="__blank">
                                            Educational access
                                        </a></li>
                                </ul>
                            </div>
                            <div class="navbar__product-block">
                                <svg class="navbar__product-cart-icon icon-padding-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-testid="uh-cart-icon">
                                    <path fill="#000" d="M17.6 14.3H5.9c-.3 0-.5-.2-.6-.5L2.8 1.2H0V0h3.2c.3 0 .5.2.6.5l2.5 12.6 10.8.1 1.7-8.1 1.2.2-1.8 8.5c0 .3-.3.5-.6.5z"></path>
                                    <circle cx="7.2" cy="18" r="2" fill="#000"></circle>
                                    <circle cx="16.3" cy="18" r="2" fill="#000"></circle>
                                </svg> 
                                <p>How to buy</p>
                            </div>
                            <div class="navbar__product-block-list">
                                <ul>
                                    <li> <a class="navbar__product-block-list-item" href="https://www.autodesk.com/plans">Choose your plan
                                        </a>
                                    </li>
                                    <li> <a class="navbar__product-block-list-item" href="https://www.autodesk.com/benefits/overview">Buying with Autodesk
                                        </a>
                                    </li>
                                    <li> <a class="navbar__product-block-list-item" href="https://www.autodesk.com/promotions">Special offers
                                        </a>
                                    </li>
                                    <li class="navbar__product-block-last-item">
                                        <span>Purchase by phone</span>
                                        <a class="navbar__product-block-list-item" href="tel:18556649297" target="__blank">1-855-664-9297
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    `
}
export default navbar_product



