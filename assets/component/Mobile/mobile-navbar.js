import html from "../../js/core.js";
import mn_top from "./mn-top.js"
import mn_main from "./mn-main.js"

function mobile_navbar() {
    return html`
        <div class="mobile-navbar-wrap">
            <div class="mobile-navbar">
                ${mn_top()}
                ${mn_main()}
            </div>
        </div>
    `
}
export default mobile_navbar