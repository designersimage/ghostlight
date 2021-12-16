const getSavedPath = () => {
    const pathJSON = sessionStorage.getItem('path')

    try {
        return pathJSON ? JSON.parse(pathJSON).path : ''
    } catch (e) {
        return ''
    }
}

const savePath = (path) => {
    sessionStorage.setItem('path', JSON.stringify({path: path}))
}

const loadImages = () => {
    if (document.images) {
        const img1 = new Image();
        const img2 = new Image();
        const img3 = new Image();
        const img4 = new Image();
        const img5 = new Image();
        const img6 = new Image();
        const img7 = new Image();
        const img8 = new Image();
        const img9 = new Image();
        const img10 = new Image();
        const img11 = new Image();
    
        img1.src = "../images/index_bgDesktop.jpg";
        img2.src = "../images/general_bgDesktop.jpg";
        img3.src = "../images/workshop_bgDesktop.jpg";
        img4.src = "../images/community_bgDesktop.jpg";
        img5.src = "../images/career_bgDesktop.jpg";
        img6.src = "../images/audition_bgDesktop.jpg";
        img7.src = "../images/acting_bgDesktop.jpg";
        img8.src = "../images/blog_bgDesktop.jpg";
        img9.src = "../images/modeling_bgDesktop.jpg";
        img10.src = "../images/ghost_light_logo.png";
        img11.src = "../images/ghost_light_logoOver.png";
    }
}

const navPage = () => {
    const bgContainer = document.querySelector('#bg-container');
    const mainContainer = document.querySelector('#main');
    switch(path) {
        case 'forward':
            if (mainContainer.style.display === 'none') {
                mainContainer.style.left = '100vw'
                mainContainer.style.display = 'block';
                setTimeout(() => {
                    mainContainer.style.left = '0';
                }, 100)
            }
            if (bgContainer.style.display === 'none') {
                bgContainer.style.left = '100vw'
                bgContainer.style.display = 'block';
                setTimeout(() => {
                    bgContainer.style.left = '0';
                }, 100)
            }
            break;
        case 'group-forward':
            if (bgContainer.style.display === 'none') {
                bgContainer.style.display = 'block';
            }
            if (mainContainer.style.display === 'none') {
                mainContainer.style.left = '100vw'
                mainContainer.style.display = 'block';
                setTimeout(() => {
                    mainContainer.style.left = '0';
                }, 100);
            }
            break;
        case 'back':
            if (mainContainer.style.display === 'none') {
                mainContainer.style.left = '-100vw'
                mainContainer.style.display = 'block';
                setTimeout(() => {
                    mainContainer.style.left = '0';
                }, 100);
            }
            if (bgContainer.style.display === 'none') {
                bgContainer.style.left = '-100vw'
                bgContainer.style.display = 'block';
                setTimeout(() => {
                    bgContainer.style.left = '0';
                }, 100);
            }
            break;
        case 'group-back':
            if (bgContainer.style.display === 'none') {
                bgContainer.style.display = 'block';
            }
            if (mainContainer.style.display === 'none') {
                mainContainer.style.left = '-100vw'
                mainContainer.style.display = 'block';
                setTimeout(() => {
                    mainContainer.style.left = '0';
                }, 100);
            }
            break;
        default:
            // document.querySelector('#bg-container').className = 'load-back';
            if (mainContainer.style.display === 'none') {
                mainContainer.style.left = '-100vw'
                mainContainer.style.display = 'block';
                setTimeout(() => {
                    mainContainer.style.left = '0';
                }, 100);
            }
            if (bgContainer.style.display === 'none') {
                bgContainer.style.left = '-100vw'
                bgContainer.style.display = 'block';
                setTimeout(() => {
                    bgContainer.style.left = '0';
                }, 100);
            }
    }
}

const setNavAnimationDirections = (path) => {
    const forwardLinks = document.querySelectorAll('.forward');
    for(let i = 0; i < forwardLinks.length; i++) {
        forwardLinks[i].addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
            path = 'forward';
            savePath(path);
            let href = e.target.href;
            if (e.target.tagName === 'IMG' || e.target.tagName === 'SPAN') {
                href = e.target.parentElement.href
            }
            const bgPage = document.querySelector('#bg-container');
            bgPage.className = 'unload-left';
            setTimeout(() => {
                location.assign(href);
            }, 500)
        })
    };
    const groupForwardLinks = document.querySelectorAll('.group-forward');
    for(let i = 0; i < groupForwardLinks.length; i++) {
        groupForwardLinks[i].addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
            path = 'group-forward';
            savePath(path);
            let href = e.target.href;
            if (e.target.tagName === 'IMG' || e.target.tagName === 'SPAN') {
                href = e.target.parentElement.href
            }
            const bgPage = document.querySelector('#main');
            bgPage.className = 'unload-left';
            setTimeout(() => {
                location.assign(href);
            }, 500)
        })
    };
    const backLinks = document.querySelectorAll('.back');
    for(let i = 0; i < backLinks.length; i++) {
        backLinks[i].addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
            path = 'back';
            savePath(path);
            let href = e.target.href;
            if (e.target.tagName === 'IMG' || e.target.tagName === 'SPAN') {
                href = e.target.parentElement.href
            }
            const bgPage = document.querySelector('#bg-container');
            bgPage.className = 'unload-right';
            setTimeout(() => {
                location.assign(href);
            }, 500)
            
        })
    };
    const groupBackLinks = document.querySelectorAll('.group-back');
    for(let i = 0; i < groupBackLinks.length; i++) {
        groupBackLinks[i].addEventListener('click', (e) => {
            e.preventDefault();
            closeMenu();
            path = 'group-back';
            savePath(path);
            let href = e.target.href;
            if (e.target.tagName === 'IMG' || e.target.tagName === 'SPAN') {
                href = e.target.parentElement.href
            }
            const bgPage = document.querySelector('#main');
            bgPage.className = 'unload-right';
            console.log(path)
            setTimeout(() => {
                location.assign(href);
            }, 500)
        })
    };
}

const getTeamMembers = () => {
    const teamEl = document.getElementById('team');
    teamEl.innerHTML = '';
    team.forEach((member) => {
        const memberEl = document.createElement('a');
        memberEl.setAttribute('class', 'member');
        memberEl.setAttribute('href', `bio.html?id=${member.id}`);
        memberEl.classList.add('group-forward')
        const headshotEl = document.createElement('img');
        headshotEl.setAttribute('src', `../images/headshots/${member.headshot}`);
        headshotEl.setAttribute('alt', `${member.name}`);
        const nameEl = document.createElement('div');
        nameEl.setAttribute('class', 'member-name');
        nameEl.textContent = member.name;
        const titleEl = document.createElement('div');
        titleEl.setAttribute('class', 'member-title');
        titleEl.textContent = member.title;
        memberEl.append(headshotEl);
        memberEl.append(nameEl);
        memberEl.append(titleEl);
        teamEl.append(memberEl);
    })
}

const getMemberBio = () => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const id = parseInt(url.searchParams.get('id'));
    const bio = team.filter(member => member.id === id)[0];
    document.querySelector('#bio-name').textContent = bio.name;
    const bioEl = document.querySelector('#bio-content');
    const bioImg = document.createElement('img');
    bioImg.setAttribute('src', `../images/headshots/${bio.headshot}`);
    bioImg.setAttribute('alt', bio.name);
    bioEl.innerHTML = bio.bio;
    bioEl.insertBefore(bioImg, bioEl.firstChild);
}

const getWorkshops = () => {
    const listEl = document.querySelector('#workshops');
    listEl.innerHTML = '';
    workshops.forEach((workshop) => {
        const workshopEl = document.createElement('p');
        const workshopLink = document.createElement('a');
        const workshopPitch = document.createTextNode(workshop.pitch)
        workshopLink.setAttribute('class', 'workshop-link');
        workshopLink.setAttribute('href', `course.html?id=${workshop.id}`);
        workshopLink.classList.add('group-forward');
        workshopLink.textContent = `${workshop.title.split(' ')[0]} - ${workshop.subtitle} » `;
        workshopEl.append(workshopLink);
        workshopEl.append(workshopPitch);
        listEl.append(workshopEl)
    });
}

const getWorkshopInfo = () => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const id = parseInt(url.searchParams.get('id'));
    const workshop = workshops.filter(workshop => workshop.id === id)[0];
    const benefits = workshop.benefitValue.benefits;
    const standardTotal = workshop.benefitValue.standardTotal;
    const glpTotal = workshop.benefitValue.glpTotal;
    const workshopEl = document.querySelector('#workshop-info');

    const descriptionEl = document.createElement('div');
    descriptionEl.setAttribute('class', 'description');
    const descriptionTitle = document.createElement('h1');
    const descriptionSubtitle = document.createElement('h2');
    const descriptionContent = document.createElement('p');
    const backLink = document.createElement('a');
    descriptionTitle.textContent = workshop.title;
    descriptionSubtitle.textContent = workshop.subtitle;
    descriptionContent.textContent = workshop.description;
    backLink.setAttribute('class', 'group-back');
    backLink.setAttribute('href', './');
    backLink.setAttribute('title', 'Back to Workshops');
    backLink.textContent = "« Back to Workshops";
    descriptionEl.appendChild(descriptionTitle);
    descriptionEl.appendChild(descriptionSubtitle);
    descriptionEl.appendChild(descriptionContent);
    descriptionEl.appendChild(backLink);

    const scheduleEl = document.createElement('div');
    scheduleEl.setAttribute('class', 'schedule');
    const scheduleTitle = document.createElement('h1');
    const scheduleSubtitle = document.createElement('h2');
    const scheduleIntro = document.createElement('p');
    const scheduleItems = document.createElement('ul');
    const closeTag = document.createElement('p');
    scheduleTitle.textContent = 'Schedule';
    scheduleSubtitle.innerHTML = '&nbsp;'
    scheduleIntro.textContent = workshop.scheduleIntro;
    workshop.scheduleList.forEach((item) => {
        console.log(typeof item)
        if (typeof item === 'object') {
            const scheduleSubItems = document.createElement('ul');
            item.forEach((subItem) => {
                const listSubItem = document.createElement('li');
                listSubItem.textContent = subItem;
                scheduleSubItems.appendChild(listSubItem);
            });
            scheduleItems.appendChild(scheduleSubItems);
        } else {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            scheduleItems.appendChild(listItem)
        }
    });
    closeTag.innerHTML = workshop.closeTag;
    scheduleEl.appendChild(scheduleTitle);
    scheduleEl.appendChild(scheduleSubtitle);
    scheduleEl.appendChild(scheduleIntro);
    scheduleEl.appendChild(scheduleItems);
    scheduleEl.appendChild(closeTag);

    const benefitEl = document.createElement('div');
    benefitEl.setAttribute('class', 'benefit-value');
    benefitTitle = document.createElement('h1');
    benefitSubtitle = document.createElement('h2');
    benefitTableTitle = document.createElement('p');
    benefitTableTools = document.createElement('span');
    benefitTableCost = document.createElement('span');
    benefitStandard = document.createElement('p');
    benefitGhostLight = document.createElement('p');
    benefitGhostLight.setAttribute('class', 'gl-total')
    benefitTitle.textContent = 'Benefits & Value';
    benefitSubtitle.innerHTML = '&nbsp;';
    benefitTableTitle.setAttribute('class', 'benefits-title');
    benefitTableCost.setAttribute('class', 'table-cost')
    benefitTableTools.textContent = 'Service/Tools Included';
    benefitTableCost.textContent = 'Standard Cost';
    benefitTableTitle.appendChild(benefitTableTools);
    benefitTableTitle.appendChild(benefitTableCost);

    benefitEl.appendChild(benefitTitle);
    benefitEl.appendChild(benefitSubtitle);
    benefitEl.appendChild(benefitTableTitle);
    benefits.forEach((item) => {
        const itemEl = document.createElement('p');
        const benefitTitle = document.createElement('span');
        const benefitCost = document.createElement('span');
        benefitCost.setAttribute('class', 'bold')
        benefitTitle.textContent = item.benefit;
        benefitCost.textContent = item.benefitCost;

        itemEl.appendChild(benefitTitle);
        itemEl.appendChild(benefitCost);
        benefitEl.appendChild(itemEl);
        if (item.listItems) {
            const subEl = document.createElement('ul');
            item.listItems.forEach((subItem) => {
                const subItemEl = document.createElement('li');
                const subItemTitle = document.createElement('span');
                const subItemCost = document.createElement('span');
                subItemTitle.innerHTML = subItem.item;
                subItemCost.textContent = subItem.cost;
                subItemEl.appendChild(subItemTitle);
                subItemEl.appendChild(subItemCost);
                subEl.appendChild(subItemEl);
                benefitEl.appendChild(subEl)
            })
            
        }
        
    });

    const benefitStandardTitle = document.createElement('span');
    const benefitStandardCost = document.createElement('span');
    benefitStandardTitle.textContent = 'Standard Total:';
    benefitStandardCost.textContent = standardTotal;
    benefitStandard.appendChild(benefitStandardTitle);
    benefitStandard.appendChild(benefitStandardCost);

    const benefitGhostLightTitle = document.createElement('span');
    const benefitGhostLightCost = document.createElement('span');
    benefitGhostLightTitle.textContent = 'Ghost Light Total:';
    benefitGhostLightCost.textContent = glpTotal;
    benefitGhostLight.appendChild(benefitGhostLightTitle);
    benefitGhostLight.appendChild(benefitGhostLightCost);

    
    benefitEl.appendChild(benefitStandard);
    benefitEl.appendChild(benefitGhostLight);

    workshopEl.appendChild(descriptionEl);
    workshopEl.appendChild(scheduleEl);
    workshopEl.appendChild(benefitEl)
}

const closeMenu = () => {
    const navMenu = document.querySelector('#nav-menu');
    navMenu.className = 'hidden';
}