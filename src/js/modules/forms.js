/*
 *  --------------------------------------------------
 *  |   MAIN WEBSITE FORMS LOADER FUNCTIONS          |
 *  --------------------------------------------------
 *  Project: Ghost Light Perfomance, Inc.
 *  Author: Jonathan Wheeler
*/

/**
 * A function for loading the contact form content.
 * 
 * @return none
 */
export const contactForm = async (ref) => {
    const contactInterest = document.querySelector('#contact-interest');
    
    if (ref && ref !== '') {
        contactInterest.value = ref;
    }
}