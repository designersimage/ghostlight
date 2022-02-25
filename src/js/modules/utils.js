/*
 *  --------------------------------------------------
 *  |   MAIN WEBSITE UTILITY FUNCTIONS               |
 *  --------------------------------------------------
 *  Project: Ghost Light Perfomance, Inc.
 *  Author: Jonathan Wheeler
*/
import { pagesData, teamData, workshopsData  } from "../preload";
import { pageEl, pageContentEl, direction } from "../main";

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

    switch(basename) {
        case '/':
        case '/index.html':
            await loadHomePage();
            break;

        case '/company/':
        case '/company/index.html':
            await loadAboutPage('about');
            break;

        case '/company/bio.html':
            await loadAboutPage('bio');
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

const addPageDirection = () => {
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
}


const loadHomePage = async () => {
    const homePage = pagesData.find(page => page.slug === 'home');
    const contentEl = document.querySelector('main.home-content > .container');

    addPageDirection();

    const titleEl = document.createElement('h1');
    titleEl.innerText = homePage.title;

    const mainContentEl = document.createElement('section');
    mainContentEl.classList.add('main-content');
    mainContentEl.innerHTML = homePage.content;

    contentEl.append(titleEl);
    contentEl.append(mainContentEl);
}

const loadAboutPage = async (slug) => {
    const aboutPage = pagesData.find(page => page.slug === slug);
    const contentEl = document.querySelector('main.about-content > .container');

    addPageDirection();

    const titleEl = document.createElement('h1');
    titleEl.innerText = aboutPage.title;

    const mainContentEl = document.createElement('section');
    mainContentEl.classList.add('main-content');
    mainContentEl.innerHTML = aboutPage.content;

    contentEl.append(titleEl);
    contentEl.append(mainContentEl);

    if (slug === 'team') {
        const teamEl = document.querySelector('#team');
        teamData.forEach(member => {
            const memberLink = document.createElement('a');
            memberLink.setAttribute('data-nav', 'group-forward');
            memberLink.setAttribute('href', `bio.html?id=${member.id}`)
            memberLink.classList.add('member');

            const memberImg = document.createElement('img');
            memberImg.setAttribute('src', `../assets/images/headshots/${member.headshot}`);
            memberImg.setAttribute('alt', member.name);

            const memberName = document.createElement('span');
            memberName.classList.add('member-name');
            memberName.innerText = member.name;

            const memberTitle = document.createElement('span');
            memberTitle.classList.add('member-title');
            memberTitle.innerText = member.title;

            memberLink.append(memberImg);
            memberLink.append(memberName);
            memberLink.append(memberTitle);
            teamEl.append(memberLink);
        });
    }
}
