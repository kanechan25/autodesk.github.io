import html from "../js/core.js";
import Mobile from "./Mobile/Mobile.js";
import Header from "./Header/Header.js";
import Main from "./Main/Main.js";
import Footer from "./Footer/Footer.js";

function App() {
    return html`
        <div class="overlay" id="overlay"></div>
        ${Mobile()}
        ${Header()}
        ${Main()}
        ${Footer()}
        
        `
}

export default App