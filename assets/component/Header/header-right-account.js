import html from "../../js/core.js";

function header_right_account() {
    return html`
        <div class="right-account__panel-container">
            <div class="right-account__panel-inner-container">
                <!-- html of account information here -->
                <div class="right-account__content">
                    <div class="right-account__content-profile">
                        <p class="right-account__category-name-text">TRAN Van Khoa</p>
                        <p class="content-profile__email">kt.itengineer@gmail.com</p>
                        <div class="content-profile__sign-out">
                            <button class="content-profile__sign-out-button">
                                <p class="sign-out-button-text">Sign out</p>
                            </button>
                        </div>
                    </div>
                    <div class="right-account__category-wrapper">
                        <a class="right-account__category-heading">
                            <div class="right-account__category-heading-content">
                                <div class="right-account__category-heading-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 19.3245L21 19.3245L21 6.61862L9.35294 6.61862L9.35294 4.50098L3 4.50098L3 19.3245Z"
                                            stroke="black" stroke-width="1.5" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <p class="right-account__category-heading-text">My account</p>
                            </div>
                        </a>
                        <a class="right-account__category-link">
                            <p class="right-account__category-link-text">Products and services</p>
                        </a>
                        <a class="right-account__category-link">
                            <p class="right-account__category-link-text">Product updates</p>
                        </a>
                        <a class="right-account__category-link">
                            <p class="right-account__category-link-text">Trials</p>
                        </a>
                    </div>
                    <div class="right-account__category-wrapper">
                        <a class="right-account__category-heading">
                            <div class="right-account__category-heading-content">
                                <div class="right-account__category-heading-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.87 19.1345C17.6251 16.5976 15.0165 14.8513 12 14.8513C8.9835 14.8513 6.37488 16.5976 5.13 19.1345M14.9 9.33297C14.9 10.9898 13.6016 12.333 12 12.333C10.3984 12.333 9.1 10.9898 9.1 9.33297C9.1 7.67612 10.3984 6.33297 12 6.33297C13.6016 6.33297 14.9 7.67612 14.9 9.33297ZM22 12.001C22 17.5238 17.5228 22.001 12 22.001C6.47715 22.001 2 17.5238 2 12.001C2 6.47813 6.47715 2.00098 12 2.00098C17.5228 2.00098 22 6.47813 22 12.001Z"
                                            stroke="black" stroke-width="1.5" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <p class="right-account__category-heading-text">My profile and settings</p>
                            </div>
                        </a>
                        <a class="right-account__category-link">
                            <p class="right-account__category-link-text">Password and security</p>
                        </a>
                        <a class="right-account__category-link">
                            <p class="right-account__category-link-text">Language</p>
                        </a>
                        <a class="right-account__category-link">
                            <p class="right-account__category-link-text">Communications</p>
                        </a>
                    </div>
                    <div class="right-account__category-wrapper">
                        <a class="right-account__category-heading">
                            <div class="right-account__category-heading-content">
                                <div class="right-account__category-heading-icon"><svg width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.5 21.001C2.5 17.6938 4.60793 14.001 9.01396 14.001C13.42 14.001 15.5 17.6938 15.5 21.001M21.5 15.501C21.5 13.67 20.3547 11.4473 18.0395 11.4473C15.7242 11.4473 14.5 13.001 14.5 13.001M12.5 7.50098C12.5 9.43397 10.933 11.001 9 11.001C7.067 11.001 5.5 9.43397 5.5 7.50098C5.5 5.56798 7.067 4.00098 9 4.00098C10.933 4.00098 12.5 5.56798 12.5 7.50098ZM20.0395 7.038C20.0395 8.17709 19.1441 9.1005 18.0395 9.1005C16.9349 9.1005 16.0395 8.17709 16.0395 7.038C16.0395 5.89891 16.9349 4.9755 18.0395 4.9755C19.1441 4.9755 20.0395 5.89891 20.0395 7.038Z"
                                            stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <p class="right-account__category-heading-text">My community</p>
                            </div>
                        </a>
                        <a class="right-account__category-link">
                            <p class="right-account__category-link-text">Community profile</p>
                        </a>
                        <a class="right-account__category-link">
                            <p class="right-account__category-link-text">Contributions</p>
                        </a>
                        <a class="right-account__category-link">
                            <p class="right-account__category-link-text">Forum preferences</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `
}
export default header_right_account
