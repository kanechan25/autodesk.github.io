import html from "../../js/core.js";
import carousel_banner from "./carousel-banner.js";
import carousel_core from "./carousel-core.js";
import main_xfpage from "./main-xfpage.js";
import main_items from "./main-items.js";

function Main() {
    return html`
        <main class="app__main">
            ${carousel_banner()}
            ${carousel_core()}
            ${main_xfpage()}
            ${main_items()}
        </main>
    `
}
export default Main