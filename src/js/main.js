/*
 *  --------------------------------------------------
 *  |   MAIN SCRIPTS                                 |
 *  --------------------------------------------------
 *  Project: Ghost Light Perfomance, Inc.
 *  Author: Jonathan Wheeler
*/
import { getPageLinks, loadPageContent, loadWebsiteData, preloadImages } from './modules/utils';

/* Execute preload before DOM is ready */
preloadImages(['ghostlight_bg.png', 'ghostlight_logo.png', 'home_bg.jpg', 'company_bg.jpg']);

/* Execute before DOM is ready */
loadWebsiteData();

/* Execute when page is ready */
ready((e) => {
    loadPageContent();
    getPageLinks();

    // console.log(team[2].bio.split('\n'))
});

/**
 * A function for determining if the DOM content is loaded.
 * 
 * @return none
 */
function ready(callbackFunction) {
    if (document.readyState != 'loading') {
        callbackFunction(event);
    } else {
        document.addEventListener("DOMContentLoaded", callbackFunction);
    }
}