/*
 *  --------------------------------------------------
 *  |   MAIN WEBSITE UTILITY FUNCTIONS               |
 *  --------------------------------------------------
 *  Project: Ghost Light Perfomance, Inc.
 *  Author: Jonathan Wheeler
*/
import { pageEl, pageContentEl } from "../main";
import { routeLoader } from "./routeLoader";

/**
 * A function for getting all links on page to navigation direction.
 * 
 * @return none
 */
export const getPageLinks = () => {
    /* Get all links on current page */
    const pageLinks = document.querySelectorAll('a');
    const closeMenuBtn = document.querySelector('button.menu-close');
    const closeSigninBtn = document.querySelector('button.signin-close');
    const closeSearchBtn = document.querySelector('button.search-close');

    /* Loop through links list */
    pageLinks.forEach(link => {
        if (link.dataset.nav) {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                /* Get the a element */
                let linkEl;
                if (e.target.tagName.toLowerCase() !== 'a') {
                    if (e.target.tagName.toLowerCase() === 'path') {
                        linkEl = e.target.parentElement.parentElement.parentElement
                    } else {
                        linkEl = e.target.parentElement
                    }
                    
                } else {
                    linkEl = e.target;
                }
                
                /* Get the url reference */
                const url = linkEl.href;

                /* Get the page navigation direction */
                const navDirection = linkEl.dataset.nav;

                document.querySelector('.modal-nav').classList.remove('show');

                setTimeout(() => {
                    /* Switch between directions and call appropriate function */
                    switch(navDirection) {
                        case 'back':
                            sessionStorage.setItem('direction', 'back');
                            pageEl.classList.add('right');
                            break;

                        case 'forward':
                            sessionStorage.setItem('direction', 'forward');
                            pageEl.classList.add('left');
                            break;
                        
                        case 'group-back':
                            sessionStorage.setItem('direction', 'group-back');
                            pageContentEl.classList.add('right');
                            break;

                        case 'group-forward':
                            sessionStorage.setItem('direction', 'group-forward');
                            pageContentEl.classList.add('left');
                            break;

                        default:
                            sessionStorage.setItem('direction', 'forward');
                            pageEl.classList.add('left');
                    }
                }, 250);

                setTimeout(() => {
                    window.location = url;
                }, 500);

            });
        } else {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                /* Get the a element */
                const linkEl = e.target.tagName.toLowerCase() === 'path' ? e.target.parentElement.parentElement : e.target.parentElement;

                switch(linkEl.classList.value) {
                    case 'menu-btn':
                        document.querySelector('.modal-nav').classList.toggle('show');
                        return;
                    
                    case 'signin-btn':
                        document.querySelector('.modal-signin').classList.toggle('show');
                        return;

                    case 'search-btn':
                        document.querySelector('.modal-search').classList.toggle('show');
                        return;
                    
                    default:
                        document.querySelector('.modal-nav').classList.toggle('show');
                }
                console.log(linkEl.classList.value)
            });
        }
    })

    closeMenuBtn.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector('.modal-nav').classList.toggle('show');
    });

    closeSigninBtn.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector('.modal-signin').classList.toggle('show');
    });

    closeSearchBtn.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelector('.modal-search').classList.toggle('show');
    });

}

/**
 * A function for loading the content determined by current page.
 * 
 * @return none
 */
export const loadPageContent = async () => {
    let basename = window.location.pathname;
    basename = basename.split('?')[0];

    routeLoader(basename);

    const currentYear = document.querySelectorAll('.current-year');
    const date = new Date();
    currentYear.forEach(el => {
        el.innerText = date.getFullYear();
    })

    if (pageContentEl.classList.contains('hide')) {
        pageContentEl.classList.remove('hide');

    }
    
    setTimeout(() => {
        if (pageEl.classList.contains('hide')) {
            pageEl.classList.remove('hide');
        }
    }, 250);

    setTimeout(() => {
        if (pageEl.classList.contains('right')) {
            pageEl.classList.remove('right');
        }
    
        if (pageEl.classList.contains('left')) {
            pageEl.classList.remove('left');
        }
    
        if (pageContentEl.classList.contains('right')) {
            pageContentEl.classList.remove('right');
        }
    
        if (pageContentEl.classList.contains('left')) {
            pageContentEl.classList.remove('left');
    
        }
    }, 500);
    
}
