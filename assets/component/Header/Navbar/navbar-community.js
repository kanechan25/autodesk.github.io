import html from "../../../js/core.js";

function navbar_community() {
    return html`
        <div class="navbar__community-container navbar__selector">
            <div class="navbar__panel">
                <ul class="navbar__panel-container">
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable" href="https://forums.autodesk.com/" target="__blank">
                            <div class="navbar__container-item-title">Forums</div>
                        </a>
                    </li>
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable" href="https://knowledge.autodesk.com/community/groups#/overview" target="__blank">
                            <div class="navbar__container-item-title">Groups</div>
                        </a>
                    </li>
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable" href="https://www.autodesk.com/blogs" target="__blank">
                            <div class="navbar__container-item-title">Blogs</div>
                        </a>
                    </li>
                    <li class="navbar__container-item">
                        <a class="navbar__container-item-clickable" href="https://www.autodesk.com/developer-network/overview" target="_blank">
                            <div class="navbar__container-item-title">Developer Network
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
export default navbar_community



