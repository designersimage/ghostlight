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
    const contentEl = document.querySelector('main.models-content > .container');

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
        document.title = `Ghost Light Performance, Inc. | Bio - ${bio.name}`;
        
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
 * A function for loading the workshops page content.
 * 
 * @param id    Int         The ID value for the course page
 * 
 * @return none
 */
 export const loadWorkshopPage = async (id = null) => {
    const workshopPage = pagesData.find(page => page.slug === 'workshop');
    const contentEl = document.querySelector('main.workshop-content > .container');

    addPageDirection();

    const titleEl = document.createElement('h1');
    titleEl.innerText = workshopPage.title;

    const mainContentEl = document.createElement('section');
    mainContentEl.classList.add('main-content');
    mainContentEl.innerHTML = workshopPage.content;

    contentEl.append(titleEl);
    contentEl.append(mainContentEl);

    if (id) {
        const workshopPage = pagesData.find(page => page.slug === 'course');
        mainContentEl.innerHTML = workshopPage.content;

        const courseEl = document.querySelector('.course-content');
        const course = workshopsData.find(course => course.id === id);
        document.title = `Ghost Light Performance, Inc. | ${course.title.split(' ')[0]} ${course.subtitle}`
        const nameEl = document.querySelector('.workshop-content > .container > h1');
        nameEl.remove();

        const descriptionEl = document.createElement('article');
        descriptionEl.classList.add('description');

        const descriptionTitle = document.createElement('h1');
        descriptionTitle.innerText = course.title;
        const descriptionSubTitle = document.createElement('h3');
        descriptionSubTitle.innerText = course.subtitle;

        const descriptionContent = document.createElement('p');
        descriptionContent.innerText = course.description;

        const backLink = document.createElement('a');
        backLink.setAttribute('data-nav', 'group-back');
        backLink.setAttribute('href', './');
        backLink.setAttribute('title', 'Back to Workshops')
        backLink.innerText = '« Back to Workshops'

        descriptionEl.append(descriptionTitle, descriptionSubTitle, descriptionContent, backLink);

        const scheduleEl = document.createElement('article');
        scheduleEl.classList.add('schedule');

        const scheduleTitle = document.createElement('h1');
        scheduleTitle.innerText = 'Schedule';
        const scheduleSubTitle = document.createElement('h3');
        scheduleSubTitle.innerHTML = '&nbsp;';

        const scheduleIntro = document.createElement('p');
        scheduleIntro.innerText = course.scheduleIntro;

        const scheduleList = document.createElement('ul');
        course.scheduleList.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerText = item;
            scheduleList.append(listItem);
        });

        const scheduleTag = document.createElement('p');
        scheduleTag.innerHTML = course.closeTag;

        scheduleEl.append(scheduleTitle, scheduleSubTitle, scheduleIntro, scheduleList, scheduleTag);

        const benValueEl = document.createElement('article');
        benValueEl.classList.add('benefit-value');

        const benValueTitle = document.createElement('h1');
        benValueTitle.innerText = 'Benefits & Value';
        const benValueSubTitle = document.createElement('h3');
        benValueSubTitle.innerHTML = '&nbsp;';

        const benefitsTitle = document.createElement('p');
        benefitsTitle.classList.add('benefits-title');
        const span1 = document.createElement('span');
        span1.innerText = 'Service/Tools Included';
        const span2 = document.createElement('span');
        span2.classList.add('table-cost');
        benefitsTitle.append(span1, span2);
        benValueEl.append(benValueTitle, benValueSubTitle, benefitsTitle)
        course.benefitValue.benefits.forEach(benefit => {
            const lineItem = document.createElement('p');
            const span1 = document.createElement('span');
            span1.innerText = benefit.benefit;
            const cost = document.createElement('strong');
            cost.innerText = benefit.benefitCost;
            lineItem.append(span1, cost);

            const benefitList = document.createElement('ul');
            benefit.listItems.forEach(item => {
                const benefitItem = document.createElement('li');
                const span1 = document.createElement('span');
                span1.innerHTML = item.item;
                const span2 = document.createElement('span');
                span2.innerText = item.cost;
                benefitItem.append(span1, span2);
                benefitList.append(benefitItem);
            })
            benValueEl.append(lineItem, benefitList);
        })

        const standardTotal = document.createElement('p');
        const standardTitle = document.createElement('span');
        standardTitle.innerText = 'Standard Total:';
        const standardCost = document.createElement('span');
        standardCost.innerText = course.benefitValue.standardTotal;
        standardTotal.append(standardTitle, standardCost);

        const glTotal = document.createElement('p');
        glTotal.classList.add('gl-total');
        const totalTitle = document.createElement('span');
        totalTitle.innerText = 'Ghost Light Total:'
        const totalCost = document.createElement('span');
        totalCost.innerText = course.benefitValue.glpTotal;
        glTotal.append(totalTitle, totalCost);

        benValueEl.append(standardTotal, glTotal);
        courseEl.append(descriptionEl, scheduleEl, benValueEl);

		return;
    }
    const workshopsEl = document.querySelector('#workshops');
    const workshops = workshopsData;
    workshops.forEach(workshop => {
        const workshopItemEl = document.createElement('p');
        const workshopItemLinkEl = document.createElement('a');
        workshopItemLinkEl.setAttribute('data-nav', 'group-forward');
        workshopItemLinkEl.setAttribute('href', `course.html?id=${workshop.id}`);
        workshopItemLinkEl.classList.add('workshop-link');
        workshopItemLinkEl.innerText = `${workshop.title.split(' ')[0]} - ${workshop.subtitle} » `;
        workshopItemEl.append(workshopItemLinkEl);
        workshopItemEl.append(`${workshop.pitch}`)
        workshopsEl.append(workshopItemEl);
    })
    console.log(workshopsData)
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