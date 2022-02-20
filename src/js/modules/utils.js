/*
 *  --------------------------------------------------
 *  |   MAIN WEBSITE UTILITY FUNCTIONS               |
 *  --------------------------------------------------
 *  Project: Ghost Light Perfomance, Inc.
 *  Author: Jonathan Wheeler
*/
import { backward, forward, groupBackward, groupForward } from "./nav-directs";

/**
 * A function for getting all links on page to navigation direction.
 * 
 * @return none
 */
export const getPageLinks = () => {
    /* Get all links on current page */
    const pageLinks = document.querySelectorAll('a');

    /* Loop through links list */
    pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            /* Get the a element */
            const linkEl = e.target.tagName.toLowerCase() !== 'a' ? e.target.parentElement : e.target;

            /* Get the url reference */
            const url = linkEl.href;

            /* Get the page navigation direction */
            const navDirection = linkEl.dataset.nav;

            /* Switch between directions and call appropriate function */
            switch(navDirection) {
                case 'back':
                    backward()
                    return;

                case 'forward':
                    forward();
                    return;
                
                case 'group-back':
                    groupBackward();
                    return;

                case 'group-forward':
                    groupForward();
                    return;

                default:
                    forward();
            }

        })
    })

}

/**
 * A function for loading the content dtermined by current page.
 * 
 * @return none
 */
export const loadPageContent = () => {
    const basename = window.location.pathname.split( '/' )[1];
    switch(basename) {
        case '':
            console.log("home");
            return;
    }
}

export const loadWebsiteData = () => {
    return 0;
}

export const preloadImages = () => {
    return 0;
}