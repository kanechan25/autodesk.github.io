import html from "../../../js/core.js";

function navbar_support() {
    return html`
        <div class="navbar__support-container navbar__selector">
            <div class="navbar__panel">
                <ul class="navbar__panel-container">
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable" href="https://knowledge.autodesk.com/support" target="__blank">
                            <div class="navbar__container-item-title">Product support and learning</div>
                        </a>
                    </li>
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable" href="https://knowledge.autodesk.com/support/system-requirements" target="__blank">
                            <div class="navbar__container-item-title">System requirements</div>
                        </a>
                    </li>
                    <li class="navbar__container-item">
                        <button class="navbar__container-item-clickable clickable-button">
                            <div class="navbar__container-item-title">Downloads</div>
                            <div class="navbar__caret-icon-wrap">
                                <svg  class="navbar__caret-icon" width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.001 6.25l-3.5 3.5-3.5-3.5" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </div>
                        </button>
                    </li>
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable" href="https://www.autodesk.com/support/download-install" target="__blank">
                            <div class="navbar__container-item-title">Installation</div>
                        </a>
                    </li>
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable" href="https://knowledge.autodesk.com/customer-service/account-management" target="__blank">
                            <div class="navbar__container-item-title">Account management support</div>
                        </a>
                    </li>
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable" href="https://www.autodesk.com/education/support" target="__blank">
                            <div class="navbar__container-item-title">Educational support</div>
                        </a>
                    </li>
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable"
                            href="https://servicesmarketplace.autodesk.com/?utm_source=autodesk.com&amp;utm_medium=referral&amp;utm_campaign=uh_nav&amp;utm_term=support" target="_blank">
                            <div>Partner professional services
                                <svg class="navbar__external-icon icon-padding-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                                    <path fill="#4d4d4d" d="M10.9 7.2v3.7H1.1V1.1h3.7V0H.5C.2 0 0 .3 0 .6v10.9c0 .3.2.5.5.5h10.9c.3 0 .5-.2.5-.5V7.2h-1z"></path>
                                    <path fill="#4d4d4d" d="M6.4 6.4l4.5-4.5v3H12V.6c0-.3-.2-.6-.5-.6H7.2v1.1h3L5.6 5.6l.8.8z"></path>
                                </svg>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `
}
export default navbar_support



