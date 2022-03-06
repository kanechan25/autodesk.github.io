import html from "../../../js/core.js";

function navbar_component() {
    return html`
        <ul class="nav__component">
            <li class="nav__btn nav__btn-product">
                <button class="nav__btn-item nav__btn-product-item">
                    Products
                    <svg  class="nav_btn-dropdown" width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.001 6.25l-3.5 3.5-3.5-3.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <!-- nav - PRODUCT - container -->
            </li>
            <li class="nav__btn nav__btn-support">
                <button class="nav__btn-item nav__btn-support-item">
                    Support
                    <svg  class="nav_btn-dropdown" width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.001 6.25l-3.5 3.5-3.5-3.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <!-- nav - SUPPORT - container -->
            </li>
            <li class="nav__btn nav__btn-learn">
                <button class="nav__btn-item nav__btn-learn-item">
                    Learn
                    <svg  class="nav_btn-dropdown" width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.001 6.25l-3.5 3.5-3.5-3.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <!-- nav - LEARN - container -->
            </li>
            <li class="nav__btn nav__btn-community">
                <button class="nav__btn-item nav__btn-community-item">
                    Community
                    <svg  class="nav_btn-dropdown" width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.001 6.25l-3.5 3.5-3.5-3.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </button>
                <!-- nav - COMMUNITY - container -->
            </li>
        </ul>
    `
}
export default navbar_component



