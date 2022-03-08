/*
 *  --------------------------------------------------
 *  |   PRELOAD SCRIPTS                              |
 *  --------------------------------------------------
 *  Project: Ghost Light Perfomance, Inc.
 *  Author: Jonathan Wheeler
*/
import { pages, team, workshops } from '../data/data';

/* Images Preload */
const imagesLoaded = sessionStorage.getItem('imagesLoaded') ? true : false;
sessionStorage.setItem('imagesLoaded', '1');

/* Set a list of images */
const images = ['ghostlight_bg.png', 'ghostlight_logo.png', 'home_bg.jpg', 'company_bg.jpg', 'actor_bg.jpg', 'audition_bg.jpg', 'career_bg.jpg', 'community_bg.jpg', 'model_bg.jpg', 'workshop_bg.jpg'];

if ( !imagesLoaded ) {
    images.forEach(image => {
        const imageEl = new Image();
        imageEl.src = `${window.location.origin}/assets/images/${image}`;
    });
}


/* Website Data Preload */
export let pagesData, teamData, workshopsData;


/**
 * A function for loading the content into session storage.
 * 
 * @return none
 */
const loadWebsiteData = () => {
    // Check if data is stored in session
    pagesData = JSON.parse(sessionStorage.getItem('pages'));
    teamData = JSON.parse(sessionStorage.getItem('team'));
    workshopsData = JSON.parse(sessionStorage.getItem('workshops'));
    sessionStorage.getItem('direction') ?? sessionStorage.setItem('direction', 'group-forward');;

    if ( !pagesData ) {
        sessionStorage.setItem('pages', JSON.stringify(pages));
        pagesData = JSON.parse(sessionStorage.getItem('pages'));
    }

    if ( !teamData ) {
        sessionStorage.setItem('team', JSON.stringify(team));
        teamData = JSON.parse(sessionStorage.getItem('team'));
    }

    if ( !workshopsData ) {
        sessionStorage.setItem('workshops', JSON.stringify(workshops));
        workshopsData = JSON.parse(sessionStorage.getItem('workshops'));
    }

}

loadWebsiteData();