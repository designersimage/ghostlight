/*
 *  --------------------------------------------------
 *  |   MAIN WEBSITE ROUTE LOADER FUNCTIONS          |
 *  --------------------------------------------------
 *  Project: Ghost Light Perfomance, Inc.
 *  Author: Jonathan Wheeler
*/
import { loadAboutPage, loadActorsPage, loadAuditionsPage, loadCareersPage, loadCommunityPage, loadHomePage, loadModelsPage, loadWorkshopPage } from "./pages";
import { contactForm } from "./forms";
/**
 * A function for loading the webpage content based on the page url.
 * 
 * @return none
 */
export const routeLoader = async (basename) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    switch(basename) {
        case '/':
        case '/index.html':
            await loadHomePage();
            break;

        case '/community_partners/':
        case '/community_partners/index.html':
            await loadCommunityPage('about');
            break;

        case '/actors/':
        case '/actors/index.html':
            await loadActorsPage('about');
            break;

        case '/auditions/':
        case '/auditions/index.html':
            await loadAuditionsPage('about');
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
            await contactForm(urlParams.get('ref'));
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

        case '/career/':
        case '/career/index.html':
            await loadCareersPage();
            break;

        case '/models/':
        case '/models/index.html':
            await loadModelsPage();
            break;
        
        case '/workshops/':
        case '/wrkshops/index.html':
            await loadWorkshopPage();
            break;
            
        case '/workshops/course.html':
            await loadWorkshopPage(parseInt(urlParams.get('id')));
            break;

        default:
            console.log("404 Not Found");
    }
}