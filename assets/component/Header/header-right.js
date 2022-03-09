import html from "../../js/core.js";
import header_right_language from "../Header/header-right-language.js"
import mobile_language from "../Mobile/mobile-language.js"
import mobile_search from "../Mobile/mobile-search.js";
import header_right_account from "./header-right-account.js";

function header_right() {
    return html`
        <div class="header__right">
            <div class="header__right-search-mini">
                <svg class="header__search-icon right" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path class="header__search-icon-logo" stroke-linecap="round" stroke-width="1.5" 
                        d="M15.028 15.334l4.644 4.644m-2.889-8.88a5.99 5.99 0 01-5.991 5.991 5.99 5.99 0 110-11.983 5.99 5.99 0 015.991 5.992z">
                    </path>
                </svg>
            </div>
            <!-- html of Mobile search here -->
            ${mobile_search()}
            <div class="header__right-cart">
                <a class="right-cart__wrap" target="_blank" href="https://checkout.autodesk.com/en-US?currency=USD">                               
                    <svg class="right-cart__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M17.6 14.3H5.9c-.3 0-.5-.2-.6-.5L2.8 1.2H0V0h3.2c.3 0 .5.2.6.5l2.5 12.6 10.8.1 1.7-8.1 1.2.2-1.8 8.5c0 .3-.3.5-.6.5z" fill="#fff"></path>
                        <circle cx="7.2" cy="18" r="2" fill="#fff"></circle>
                        <circle cx="16.3" cy="18" r="2" fill="#fff"></circle>
                    </svg>
                    <span class="right-cart__notice">3</span>
                </a>
            </div>
            <div class="header__right-language">
                <button class="right-language__btn">
                    <svg class="right-language__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
                        <path  fill="#fff" d="M12.9.4C11.9.1 11 0 10 0S8.1.1 7.2.4C3 1.6 0 5.5 0 10c0 5.5 4.5 10 10 10s10-4.5 10-10c0-4.5-3-8.3-7.1-9.6zm-11.8 10h3.5c0 1.2.2 2.3.4 3.3H1.9c-.5-1-.7-2.1-.8-3.3zm9.5-5.5V1.1c.6 0 1.1.1 1.7.3.3.5 1 1.7 1.5 3.6l-3.2-.1zM14 6c.2 1 .3 2.1.3 3.4h-3.8V6H14zM9.5 4.9H6.4c.5-1.8 1.2-3 1.5-3.5.5-.1 1.1-.2 1.6-.2v3.7zm0 1.1v3.4H5.7c0-1.3.1-2.4.3-3.4h3.5zM4.6 9.4H1.1c.1-1.2.4-2.4 1-3.4h2.8c-.2 1-.3 2.1-.3 3.4zm1.1 1.1h3.7v3.3H6.1c-.2-1.1-.3-2.1-.4-3.3zm3.8 4.3v4c-.6 0-1.1-.1-1.7-.3-.2-.3-.9-1.7-1.4-3.8l3.1.1zm1.1 0h3.1c-.5 2.1-1.2 3.4-1.4 3.7-.6.1-1.1.2-1.7.3v-4zm0-1.1v-3.3h3.8c-.1 1.2-.2 2.3-.4 3.3h-3.4zm4.8-3.2h3.5c-.1 1.2-.4 2.3-.8 3.3h-3c.1-1 .3-2.1.3-3.3zm0-1.1c0-1.3-.1-2.4-.3-3.4H18c.5 1 .8 2.2.9 3.4h-3.5zM17.3 5h-2.4c-.3-1.3-.7-2.2-1.1-3 1.4.6 2.6 1.7 3.5 3zM6.2 1.9c-.3.8-.7 1.7-1 3H2.8c.8-1.3 2-2.3 3.4-3zM2.5 14.8h2.7c.3 1.4.7 2.5 1.1 3.3-1.6-.7-2.9-1.9-3.8-3.3zm11.2 3.3c.3-.7.7-1.8 1.1-3.2h2.6c-.9 1.4-2.2 2.5-3.7 3.2z"></path>
                    </svg>
                    <span class="right-language__text">US</span>
                </button>
                <div class="right-language__list">
                    <div class="right-language__selector">
                        <!-- html of language list here-->
                        ${header_right_language()}
                    </div>
                </div>
            </div>
            <button class="header__right-mini-dot">
                <i class="fas fa-ellipsis-h"></i>
                <div class="right-task-container">
                    <ul class="right-task">
                        <li class="right-task-icon search-wrap">
                            <div class="task__search-mini">
                                <svg class="header__search-icon right" xmlns="http://www.w3.org/2000/svg" fill="none">
                                    <path class="header__search-icon-logo" stroke-linecap="round" stroke-width="1.5" d="M15.028 15.334l4.644 4.644m-2.889-8.88a5.99 5.99 0 01-5.991 5.991 5.99 5.99 0 110-11.983 5.99 5.99 0 015.991 5.992z">
                                    </path>
                                </svg>
                            </div>
                        </li>
                        <li class="right-task-icon cart-wrap">
                            <div class="task__cart">
                                <a class="right-cart__wrap" target="_blank" href="https://checkout.autodesk.com/en-US?currency=USD">                               
                                    <svg class="right-cart__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path fill="#000" d="M17.6 14.3H5.9c-.3 0-.5-.2-.6-.5L2.8 1.2H0V0h3.2c.3 0 .5.2.6.5l2.5 12.6 10.8.1 1.7-8.1 1.2.2-1.8 8.5c0 .3-.3.5-.6.5z"></path>
                                        <circle cx="7.2" cy="18" r="2" fill="#000"></circle>
                                        <circle cx="16.3" cy="18" r="2" fill="#000"></circle>
                                    </svg> 
                                    <span class="right-cart__notice">3</span>
                                </a>
                            </div>
                        </li>
                        <li class="right-task-icon language-wrap">
                            <div class="task__language">
                                <div class="right-language__btn">
                                    <svg class="right-language__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
                                        <path  fill="#000" d="M12.9.4C11.9.1 11 0 10 0S8.1.1 7.2.4C3 1.6 0 5.5 0 10c0 5.5 4.5 10 10 10s10-4.5 10-10c0-4.5-3-8.3-7.1-9.6zm-11.8 10h3.5c0 1.2.2 2.3.4 3.3H1.9c-.5-1-.7-2.1-.8-3.3zm9.5-5.5V1.1c.6 0 1.1.1 1.7.3.3.5 1 1.7 1.5 3.6l-3.2-.1zM14 6c.2 1 .3 2.1.3 3.4h-3.8V6H14zM9.5 4.9H6.4c.5-1.8 1.2-3 1.5-3.5.5-.1 1.1-.2 1.6-.2v3.7zm0 1.1v3.4H5.7c0-1.3.1-2.4.3-3.4h3.5zM4.6 9.4H1.1c.1-1.2.4-2.4 1-3.4h2.8c-.2 1-.3 2.1-.3 3.4zm1.1 1.1h3.7v3.3H6.1c-.2-1.1-.3-2.1-.4-3.3zm3.8 4.3v4c-.6 0-1.1-.1-1.7-.3-.2-.3-.9-1.7-1.4-3.8l3.1.1zm1.1 0h3.1c-.5 2.1-1.2 3.4-1.4 3.7-.6.1-1.1.2-1.7.3v-4zm0-1.1v-3.3h3.8c-.1 1.2-.2 2.3-.4 3.3h-3.4zm4.8-3.2h3.5c-.1 1.2-.4 2.3-.8 3.3h-3c.1-1 .3-2.1.3-3.3zm0-1.1c0-1.3-.1-2.4-.3-3.4H18c.5 1 .8 2.2.9 3.4h-3.5zM17.3 5h-2.4c-.3-1.3-.7-2.2-1.1-3 1.4.6 2.6 1.7 3.5 3zM6.2 1.9c-.3.8-.7 1.7-1 3H2.8c.8-1.3 2-2.3 3.4-3zM2.5 14.8h2.7c.3 1.4.7 2.5 1.1 3.3-1.6-.7-2.9-1.9-3.8-3.3zm11.2 3.3c.3-.7.7-1.8 1.1-3.2h2.6c-.9 1.4-2.2 2.5-3.7 3.2z"></path>
                                    </svg>
                                    <span class="right-language__text">US</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </button>
            ${mobile_language()}
            <div class="header__right-account">
                <button class="right-account__btn">
                    <div class="right-account__wrap">
                        <img class="right-account__img" src="./assets/img/1. header_navbar/navbar/x40.jpg" alt="avatar">
                    </div>
                </button>
                ${header_right_account()}
            </div>
        </div>
    `
}
export default header_right