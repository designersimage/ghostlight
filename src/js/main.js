/*
 *  --------------------------------------------------
 *  |   MAIN SCRIPTS                                 |
 *  --------------------------------------------------
 *  Project: Ghost Light Perfomance, Inc.
 *  Author: Jonathan Wheeler
*/
import { pages, team, workshops } from '../data/data';
import { getPageLinks, loadPageContent } from './modules/utils';

/* Execute when page is ready */
ready((e) => {
    // loadPageContent();
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