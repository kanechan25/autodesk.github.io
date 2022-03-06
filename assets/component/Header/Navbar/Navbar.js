import html from "../../../js/core.js";
import navbar_component from "../Navbar/navbar-component.js"

function Navbar() {
    return html`
        <nav class="navbar col">
            ${navbar_component()}
        </nav>
    `
}

export default Navbar
