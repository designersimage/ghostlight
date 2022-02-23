/*
 *  --------------------------------------------------
 *  |   MAIN SCRIPTS                                 |
 *  --------------------------------------------------
 *  Project: Ghost Light Perfomance, Inc.
 *  Author: Jonathan Wheeler
*/
import { getPageLinks, loadPageContent } from './modules/utils';

export const pageEl = document.querySelector('body > section');
export const pageContentEl = document.querySelector('body > section > main');
export const direction = sessionStorage.getItem('direction') ?? 'group-forward';

if (direction == 'back' || direction == 'forward') {
    pageEl.classList.add('hide');
}

/* Load page content */
loadPageContent();

/* Add action to every page link */
getPageLinks();
