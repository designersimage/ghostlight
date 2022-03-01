/*
 *  --------------------------------------------------
 *  |   MAIN WEBSITE ROUTE LOADER FUNCTIONS          |
 *  --------------------------------------------------
 *  Project: Ghost Light Perfomance, Inc.
 *  Author: Jonathan Wheeler
*/
import { loadAboutPage, loadCommunityPage, loadHomePage } from "./pages";

/**
 * A function for loading the webpage content based on the page url.
 * 
 * @return none
 */
export const routeLoader = async (basename) => {
    switch(basename) {
        case '/':
        case '/index.html':
            await loadHomePage();
            break;

        case '/community_partners/':
        case '/community_partners/index.html':
            await loadCommunityPage('about');
            break;

        case '/company/':
        case '/company/index.html':
            await loadAboutPage('about');
            break;

        case '/company/bio.html':
            await loadAboutPage('bio', parseInt(urlParams.get('id')));
            break;        

        case '/company/contact.html':
            await loadAboutPage('contact');
            break;

        case '/company/industry_services.html':
            await loadAboutPage('industry-services');
            break;
    
        case '/company/offers.html':
            await loadAboutPage('offers');
            break;

        case '/company/industry_services.html':
            await loadAboutPage('industry-services');
            break;
    
        case '/company/private_training.html':
            await loadAboutPage('private-training');
            break;

        case '/company/showcases.html':
            await loadAboutPage('showcases');
            break;

        case '/company/team.html':
            await loadAboutPage('team');
            break;

        default:
            console.log("404 Not Found");
    }
}