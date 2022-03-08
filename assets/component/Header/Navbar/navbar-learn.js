import html from "../../../js/core.js";

function navbar_learn() {
    return html`
        <div class="navbar__learn-container navbar__selector">
            <div class="navbar__panel">
                <ul class="navbar__panel-container">
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable" href="https://www.autodesk.com/certification" target="__blank">
                            <div class="navbar__container-item-title">Learning and certification</div>
                        </a>
                    </li>
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable" href="https://www.autodesk.com/training" target="__blank">
                            <div class="navbar__container-item-title">Training</div>
                        </a>
                    </li>
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable" href="https://www.autodesk.com/autodesk-university/" target="_blank">
                            <div class="navbar__container-item-title">Autodesk University
                                <svg class="navbar__external-icon icon-padding-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                                    <path fill="#4d4d4d" d="M10.9 7.2v3.7H1.1V1.1h3.7V0H.5C.2 0 0 .3 0 .6v10.9c0 .3.2.5.5.5h10.9c.3 0 .5-.2.5-.5V7.2h-1z"></path>
                                    <path fill="#4d4d4d" d="M6.4 6.4l4.5-4.5v3H12V.6c0-.3-.2-.6-.5-.6H7.2v1.1h3L5.6 5.6l.8.8z"></path>
                                </svg>
                            </div>
                        </a>
                    </li>
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable" href="https://www.autodesk.com/events" target="__blank">
                            <div class="navbar__container-item-title">Conferences and events</div>
                        </a>
                    </li>
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable" href="https://customersuccess.autodesk.com/" target="_blank">
                            <div class="navbar__container-item-title">Autodesk Customer Success
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
export default navbar_learn



