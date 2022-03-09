import html from "../../js/core.js";

function header_right_language() {
    return html`
        <div class="right-language__wrap">
            <ul class="right-language__selector-header">
                <li class="right-language__selector-heading">Suggested Location:</li>
                <li class="right-language__selector-item language-selected" data-locale="en-US" data-testid="right-language__selector-li-en-US">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-en-US" >
                        <div>United States</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7"
                            class="language-selector__small-checkmark-icon">
                            <path fill="#4d4d4d"
                                d="M3.52 6.15a.65.65 0 01-.43-.17L0 3.11l.86-.93L3.5 4.64 8.1 0l.9.89-5.03 5.07c-.12.13-.28.19-.45.19z">
                            </path>
                        </svg>
                    </a>
                </li>
                <li class="right-language__selector-heading">Available Sites:</li>
            </ul>
            <ul class="right-language__selector-container" aria-label="all languages">
                <li class="right-language__selector-item" data-locale="en-AU" data-testid="right-language__selector-li-en-AU">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-en-AU">
                        Australia
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="nl-BE" data-testid="right-language__selector-li-nl-BE">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-nl-BE">
                        België
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="fr-BE" data-testid="right-language__selector-li-fr-BE">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-fr-BE">
                        Belgique
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="pt-BR" data-testid="right-language__selector-li-pt-BR">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-pt-BR">
                        Brasil
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="en-CA" data-testid="right-language__selector-li-en-CA">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-en-CA">
                        Canada (English)
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="fr-CA" data-testid="right-language__selector-li-fr-CA">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-fr-CA">
                        Canada (Français)
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="cs-CZ" data-testid="right-language__selector-li-cs-CZ">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-cs-CZ">
                        Česko
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="da-DK" data-testid="right-language__selector-li-da-DK">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-da-DK">
                        Danmark
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="de-DE" data-testid="right-language__selector-li-de-DE">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-de-DE">
                        Deutschland
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="es-ES" data-testid="right-language__selector-li-es-ES">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-es-ES">
                        España
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="en-NL" data-testid="right-language__selector-li-en-NL">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-en-NL">
                        Europe (English)
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="fr-FR" data-testid="right-language__selector-li-fr-FR">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-fr-FR">
                        France
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="en-HK" data-testid="right-language__selector-li-en-HK">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-en-HK">
                        Hong Kong (English)
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="en-IN" data-testid="right-language__selector-li-en-IN">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-en-IN">
                        India (English)
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="it-IT" data-testid="right-language__selector-li-it-IT">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-it-IT">
                        Italia
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="es-AR" data-testid="right-language__selector-li-es-AR">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-es-AR">
                        Latinoamérica
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="hu-HU" data-testid="right-language__selector-li-hu-HU">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-hu-HU">
                        Magyarország
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="en-MY" data-testid="right-language__selector-li-en-MY">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-en-MY">
                        Malaysia (English)
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="es-MX" data-testid="right-language__selector-li-es-MX">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-es-MX">
                        México
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="en-AE" data-testid="right-language__selector-li-en-AE">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-en-AE">
                        Middle East (English)
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="nl-NL" data-testid="right-language__selector-li-nl-NL">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-nl-NL">
                        Nederland
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="en-NZ" data-testid="right-language__selector-li-en-NZ">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-en-NZ">
                        New Zealand
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="no-NO" data-testid="right-language__selector-li-no-NO">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-no-NO">
                        Norge
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="de-AT" data-testid="right-language__selector-li-de-AT">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-de-AT">
                        Österreich
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="pl-PL" data-testid="right-language__selector-li-pl-PL">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-pl-PL">
                        Polska
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="pt-PT" data-testid="right-language__selector-li-pt-PT">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-pt-PT">
                        Portugal
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="en-SG" data-testid="right-language__selector-li-en-SG">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-en-SG">
                        Singapore (English)
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="fi-FI" data-testid="right-language__selector-li-fi-FI">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-fi-FI">
                        Suomi
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="sv-SE" data-testid="right-language__selector-li-sv-SE">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-sv-SE">
                        Sverige
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="de-CH" data-testid="right-language__selector-li-de-CH">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-de-CH">
                        Schweiz
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="en-ZA" data-testid="right-language__selector-li-en-ZA">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-en-ZA">
                        South Africa (English>
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="fr-CH" data-testid="right-language__selector-li-fr-CH">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-fr-CH">
                        Suisse
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="it-CH" data-testid="right-language__selector-li-it-CH">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-it-CH">
                        Svizzera
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="tr-TR" data-testid="right-language__selector-li-tr-TR">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-tr-TR">
                        Türkiye
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="en-GB" data-testid="right-language__selector-li-en-GB">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-en-GB">
                        United Kingdom
                    </a>
                </li>

                <li class="right-language__selector-item" data-locale="ru-RU" data-testid="right-language__selector-li-ru-RU">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-ru-RU">
                        Россия
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="zh-CN" data-testid="right-language__selector-li-zh-CN">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-zh-CN">
                        中国大陆地区
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="zh-TW" data-testid="right-language__selector-li-zh-TW">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-zh-TW">
                        台灣
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="ja-JP" data-testid="right-language__selector-li-ja-JP">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-ja-JP">
                        日本
                    </a>
                </li>
                <li class="right-language__selector-item" data-locale="ko-KR" data-testid="right-language__selector-li-ko-KR">
                    <a class="right-language__selector-a" data-testid="right-language__selector-item-ko-KR">
                        한국­
                    </a>
                </li>
            </ul>
        </div>
    `
}
export default header_right_language
