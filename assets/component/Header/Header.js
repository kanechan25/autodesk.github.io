import html from "../../js/core.js";
import header_left from "./header-left.js"
import header_right from "./header-right.js"
import Navbar from "./Navbar/Navbar.js"

function Header() {
    return html`
    <div class="app__header">
        <div class="grid wide">
            <header class="header col">
                ${header_left()}
                ${header_right()}
            </header>
            ${Navbar()}
        </div>
    </div>
    `
}
export default Header
