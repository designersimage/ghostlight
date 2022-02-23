/*
 *  --------------------------------------------------
 *  |   MAIN SCRIPTS                                 |
 *  --------------------------------------------------
 *  Project: Ghost Light Perfomance, Inc.
 *  Author: Jonathan Wheeler
*/
import { getPageLinks, loadPageContent } from './modules/utils';

/* Load page content */
loadPageContent();

/* Add action to every page link */
getPageLinks();
