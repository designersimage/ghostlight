/*
 *  --------------------------------------------------
 *  |   MAIN WEBSITE PAGE LOADER FUNCTIONS           |
 *  --------------------------------------------------
 *  Project: Ghost Light Perfomance, Inc.
 *  Author: Jonathan Wheeler
*/
import { pagesData, teamData, workshopsData  } from "../preload";
import { pageEl, pageContentEl, direction } from "../main";

/**
 * A function for loading the home page content.
 * 
 * @return none
 */
export const loadHomePage = async () => {
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


/**
 * A function for loading the community partners page content.
 * 
 * @return none
 */
export const loadCommunityPage = async () => {
    const communityPage = pagesData.find(page => page.slug === 'community-partners');
    const contentEl = document.querySelector('main.community-content > .container');

    addPageDirection();

    const titleEl = document.createElement('h1');
    titleEl.innerText = communityPage.title;

    const mainContentEl = document.createElement('section');
    mainContentEl.classList.add('main-content');
    mainContentEl.innerHTML = communityPage.content;

    contentEl.append(titleEl);
    contentEl.append(mainContentEl);
}


/**
 * A function for loading the auditions page content.
 * 
 * @return none
 */
 export const loadAuditionsPage = async () => {
    const auditionsPage = pagesData.find(page => page.slug === 'auditions');
    const contentEl = document.querySelector('main.audition-content > .container');

    addPageDirection();

    const titleEl = document.createElement('h1');
    titleEl.innerText = auditionsPage.title;

    const mainContentEl = document.createElement('section');
    mainContentEl.classList.add('main-content');
    mainContentEl.innerHTML = auditionsPage.content;

    contentEl.append(titleEl);
    contentEl.append(mainContentEl);
}


/**
 * A function for loading the career page content.
 * 
 * @return none
 */
 export const loadCareersPage = async () => {
    const careersPage = pagesData.find(page => page.slug === 'career');
    const contentEl = document.querySelector('main.career-content > .container');

    addPageDirection();

    const titleEl = document.createElement('h1');
    titleEl.innerText = careersPage.title;

    const mainContentEl = document.createElement('section');
    mainContentEl.classList.add('main-content');
    mainContentEl.innerHTML = careersPage.content;

    contentEl.append(titleEl);
    contentEl.append(mainContentEl);
}


/**
 * A function for loading the actors page content.
 * 
 * @return none
 */
 export const loadActorsPage = async () => {
    const actorsPage = pagesData.find(page => page.slug === 'actors');
    const contentEl = document.querySelector('main.actor-content > .container');

    addPageDirection();

    const titleEl = document.createElement('h1');
    titleEl.innerText = actorsPage.title;

    const mainContentEl = document.createElement('section');
    mainContentEl.classList.add('main-content');
    mainContentEl.innerHTML = actorsPage.content;

    contentEl.append(titleEl);
    contentEl.append(mainContentEl);
}


/**
 * A function for loading the models page content.
 * 
 * @return none
 */
 export const loadModelsPage = async () => {
    const modelsPage = pagesData.find(page => page.slug === 'models');
    const contentEl = document.querySelector('main.model-content > .container');

    addPageDirection();

    const titleEl = document.createElement('h1');
    titleEl.innerText = modelsPage.title;

    const mainContentEl = document.createElement('section');
    mainContentEl.classList.add('main-content');
    mainContentEl.innerHTML = modelsPage.content;

    contentEl.append(titleEl);
    contentEl.append(mainContentEl);
}


/**
 * A function for loading the company page content.
 * 
 * @param slug  String      The slug identifier for the page
 * @param id    Int         The ID value for the bio page
 * 
 * @return none
 */
export const loadAboutPage = async (slug, id = null) => {
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

    if (slug === 'bio' && id) {
        const bioEl = document.querySelector('#bio-content');
        const bio = teamData.find(member => member.id === id);
        
        const nameEl = document.querySelector('.about-content > .container > h1');
        nameEl.innerText = bio.name;

        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', `../assets/images/headshots/${bio.headshot}`);
        imgEl.setAttribute('alt', bio.name);

        bioEl.append(imgEl);

        const contentParagraphs = bio.bio.split('\n');
        console.log(contentParagraphs)
        contentParagraphs.forEach(paragraph => {
            const contentEl = document.createElement('p');
            contentEl.innerHTML = paragraph;
            bioEl.append(contentEl);
        })
		
    }
}


/**
 * A function for adding the navigation direction to the page or page element.
 * 
 * @return none
 */
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