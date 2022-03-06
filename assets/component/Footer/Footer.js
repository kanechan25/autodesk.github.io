import html from "../../js/core.js";
import footer_items from "./footer-items.js";
import footer_privacy from "./footer-privacy.js";

function Footer() {
    return html`
        <main class="app__footer">
            ${footer_items()}
            ${footer_privacy()}
        </main>
    `
}
export default Footer