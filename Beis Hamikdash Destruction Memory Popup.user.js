// ==UserScript==
// @name         Beis Hamikdash Destruction Memory Popup
// @namespace    https://mitmachim.top/uid/439
// @version      1.1
// @description  Add a popup for the memory of the Temple's destruction on all websites
// @author       David Wacholder
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addPopup() {
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Bona+Nova+SC&display=swap';
        document.head.appendChild(fontLink);

        var style = document.createElement('style');
        style.innerHTML = `
            :root {
                --background-color: #ffffff;
                --overlay-background: rgba(114, 42, 42, 0.5);
                --border-color: #444;
                --text-color: #ffffff;
                --highlight-color: #ffffff;
                --secondary-text-color: #bbb;
                --shadow-color: rgba(255, 255, 255, 0.1);
                --overlay-opacity: 0.5;
                --unit-background-color: rgba(142, 136, 136, 0.5);
            }

            #popup-container {
                position: fixed;
                bottom: 30px;
                right: 50px;
                background-color: var(--overlay-background);
                border-radius: 15px;
                padding: 20px;
                box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
                z-index: 1000;
                overflow: hidden;
                max-width: 350px;
                width: auto;
                height: auto;
                box-sizing: border-box;
                text-align: center;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                transform: translateY(-10px);
                direction: rtl;
            }

            #popup-container:hover {
                transform: translateY(-15px);
                box-shadow: 0 18px 36px rgba(0, 0, 0, 0.3);
            }

            #popup-background {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: url('https://raw.githubusercontent.com/moshelavi/beit-amikdash/main/beit%20amikdash%20script/%D7%91%D7%99%D7%AA%20%D7%94%D7%9E%D7%A7%D7%93%D7%A9.jpg');
                background-size: cover;
                background-position: center;
                mix-blend-mode: overlay;
                opacity: var(--overlay-opacity);
                z-index: 0;
                border-radius: 15px;
                filter: blur(1px);
            }

            #close-btn {
                display: none !important;
            }

            #temple-counter {
                position: relative;
                z-index: 1;
            }

            #temple-counter h2 {
                color: var(--highlight-color);
                font-size: 18px;
                margin-bottom: 10px;
                font-weight: 700;
                line-height: 1.2;
            }

            .time-unit {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 10px;
            }

            .unit {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 0 5px;
            }

            .unit.days {
                order: 2;
            }

            .unit.years {
                order: 1;
            }

            .unit-title {
                font-size: 12px;
                color: var(--secondary-text-color);
                margin-top: 4px;
            }

            .unit-value-container {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row-reverse;
            }

            .unit-value {
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                padding: 5px;
                border-radius: 6px;
                background-color: var(--unit-background-color);
                font-family: 'Digital-7', Arial, sans-serif;
                font-size: 20px;
                font-weight: 700;
                color: var(--text-color);
                min-width: 20px;
                width: 20px;
                margin: 0 1px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                box-sizing: border-box;
            }

            .colon {
                font-size: 16px;
                line-height: 30px;
                font-family: 'Digital-7', Arial, sans-serif;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 30px;
                margin: 0 2px;
                position: relative;
                top: -8px;
            }

            .action {
                font-size: 14px;
                color: var(--highlight-color);
                margin-top: 10px;
                text-transform: uppercase;
                font-weight: 700;
            }

            @media (max-width: 480px) {
                #popup-container {
                    width: 90vw;
                    padding: 5px;
                    right: 10vw;
                }

                .unit-value {
                    font-size: 16px;
                    height: auto;
                }

                .colon {
                    font-size: 14px;
                    line-height: 16px;
                }
            }
        `;
        document.head.appendChild(style);

        var script = document.createElement('script');
        script.src = "https://moshelavi.github.io/beit-amikdash/beit%20amikdash%20script/popup.js";
        document.body.appendChild(script);

        setTimeout(function() {
            var leftPanel = document.querySelector('.left-panel-class');
            if (leftPanel) {
                var popup = document.getElementById('popup-container');
                popup.style.right = '100px';
            }
        }, 1000);

    setTimeout(function() {
        var popup = document.getElementById('popup-container');
        popup.addEventListener('click', function() {
            popup.style.display = 'none';
        }, { once: true });
    }, 1000);

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        addPopup();
    } else {
        window.addEventListener('DOMContentLoaded', addPopup);
    }
})();
