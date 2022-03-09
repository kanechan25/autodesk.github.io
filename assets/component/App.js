import html from "../js/core.js";
import mobile_navbar from "./Mobile/mobile-navbar.js";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";

function App() {
    return html`
        <div class="tranOverlay" id="tranOverlay"></div>
        <div class="darkOverlay" id="darkOverlay"></div>
        ${mobile_navbar()}
        ${Header()}
        ${Main()}
        ${Footer()}
        
        `
}

export default App