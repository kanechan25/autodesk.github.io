import App from "../component/App.js";

const $ = document.querySelector.bind(document);
const $S = document.querySelectorAll.bind(document);

function renderHtml(inputElement, html) {
        const output = html()
        inputElement.innerHTML = output
}

var appElement = $('.app');
if (appElement) {
    renderHtml(appElement, App);
}
