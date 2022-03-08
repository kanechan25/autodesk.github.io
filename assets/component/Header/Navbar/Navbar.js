import html from "../../../js/core.js";
import navbar_components from "./navbar-components.js"

function Navbar() {
    return html`
        <nav class="navbar col">
            ${navbar_components()}
        </nav>
    `
}

export default Navbar
