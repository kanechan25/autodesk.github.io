import html from "../../js/core.js";
import mn_top from "./mn-top.js"
import mn_main from "./mn-main.js"

function Mobile() {
    return html`
        <div class="mobile-navbar-wrap activeee">
            <div class="mobile-navbar">
                ${mn_top()}
                ${mn_main()}
            </div>
        </div>
    `
}
export default Mobile