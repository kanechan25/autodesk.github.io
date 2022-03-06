import html from "../../js/core.js";


function footer_privacy() {
    return html`
        <div class="footer-privacy">
            <div class="grid wide">
                <div class="col">
                    <div class="footer__privacy-wrap">
                        <div class="footer__privacy-items">
                            <a class="footer-item__link underline" href="" target="_blank" >Privacy settings</a>
                            <a class="footer-item__link" href="https://www.autodesk.com/company/legal-notices-trademarks/ccpa-do-not-sell" target="_blank">Do not sell my personal information</a>
                            <a class="footer-item__link underline" href="https://www.autodesk.com/company/legal-notices-trademarks/privacy-statement" target="_blank">Privacy/Cookies</a>
                            <a class="footer-item__link underline" href="https://www.autodesk.com/company/legal-notices-trademarks/privacy-statement/autodesk-privacy-statement-2015-english#mixpanel" target="_blank">About our Ads</a>
                            <a class="footer-item__link underline" href="https://www.autodesk.com/company/legal-notices-trademarks" target="_blank">Legal</a>
                            <a class="footer-item__link underline" href="https://www.autodesk.com/genuine/report-piracy" target="_blank">Report Noncompliance</a>
                            <a class="footer-item__link underline" href="https://www.autodesk.com/sitemap" target="_blank">Site map</a>
                        </div>
                        <a class="footer-item__copyright" target="_blank">© 2021 Autodesk Inc. All rights reserved</a>
                    </div>
                </div>
            </div>
        </div>
    `
}
export default footer_privacy