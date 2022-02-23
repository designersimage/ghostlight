/*
 *  --------------------------------------------------
 *  |   MAIN WEBSITE UTILITY FUNCTIONS               |
 *  --------------------------------------------------
 *  Project: Ghost Light Perfomance, Inc.
 *  Author: Jonathan Wheeler
*/
import { pages, team, workshops } from '../../data/data';
import { backward, forward, groupBackward, groupForward } from "./nav-directs";

let pagesData, teamData, workshopsData;

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
    const pageEl = document.querySelector('body > section');
    const pageContentEl = document.querySelector('body > section > main');

    /* Loop through links list */
    pageLinks.forEach(link => {
        if (link.dataset.nav) {
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
                setTimeout(() => {
                    window.location = url;
                }, 250);

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
    const basename = window.location.pathname;
    const direction = sessionStorage.getItem('direction') ?? 'group-forward';
    const pageEl = document.querySelector('body > section');
    const pageContentEl = document.querySelector('body > section > main');
    
    if (direction == 'back' && direction == 'forward') {
        pageEl.classList.add('hide');
    }

    switch(basename) {
        case '/':
        case '/index.html':
            await loadHomePage(direction, pageEl, pageContentEl);
            break;

        case '/company/':
        case '/company/index.html':
            await loadAboutPage(direction, pageEl, pageContentEl);
            break;

        default:
            console.log("404 Not Found");
    }

    const currentYear = document.querySelectorAll('.current-year');
    const date = new Date();
    currentYear.forEach(el => {
        el.innerText = date.getFullYear();
    })

    if (pageContentEl.classList.contains('hide')) {
        pageContentEl.classList.remove('hide');

    }
    
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
    }, 500)
    
}

/**
 * A function for loading the content into session storage.
 * 
 * @return none
 */
export const loadWebsiteData = () => {
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

export const preloadImages = ( images = [] ) => {

    images.forEach(image => {
        const imageEl = new Image();
        imageEl.src = `${window.location.origin}/assets/images/${image}`;
    });
    
}

const loadHomePage = async (direction, pageEl, pageContentEl) => {
    const pagesData = JSON.parse(sessionStorage.getItem('pages'));
    const homePage = pagesData.find(page => page.slug === 'home');
    const contentEl = document.querySelector('main.home-content > .container');

    switch(direction) {
        case 'back':
            pageEl.classList.add('left');
            break;

        case 'forward':
            pageEl.classList.add('right');
            break;

        case 'group-back':
            pageContentEl.classList.add('left');
            break;

        case 'group-forward':
            pageContentEl.classList.add('right');
            break;

        default:
            pageContentEl.classList.add('right');
    }

    const titleEl = document.createElement('h1');
    titleEl.innerText = homePage.title;

    const mainContentEl = document.createElement('section');
    mainContentEl.classList.add('main-content');
    mainContentEl.innerHTML = homePage.content;

    contentEl.append(titleEl);
    contentEl.append(mainContentEl);

    if (pageEl.classList.contains('hide')) {
        pageEl.classList.remove('hide');
    }
}

const loadAboutPage = async (direction, pageEl, pageContentEl) => {
    const pagesData = JSON.parse(sessionStorage.getItem('pages'));
    const aboutPage = pagesData.find(page => page.slug === 'about');
    const contentEl = document.querySelector('main.about-content > .container');

    switch(direction) {
        case 'back':
            pageEl.classList.add('left');
            break;

        case 'forward':
            pageEl.classList.add('right');
            break;

        case 'group-back':
            pageContentEl.classList.add('left');
            break;

        case 'group-forward':
            pageContentEl.classList.add('right');
            break;

        default:
            pageContentEl.classList.add('right');
    }

    const titleEl = document.createElement('h1');
    titleEl.innerText = aboutPage.title;

    const mainContentEl = document.createElement('section');
    mainContentEl.classList.add('main-content');
    mainContentEl.innerHTML = aboutPage.content;

    contentEl.append(titleEl);
    contentEl.append(mainContentEl);

    if (pageEl.classList.contains('hide')) {
        pageEl.classList.remove('hide');
    }
}