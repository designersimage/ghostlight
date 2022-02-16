let path = getSavedPath();
loadImages();
navPage();

const menuBtn = document.querySelector('#menu-btn');
if(menuBtn) {
    menuBtn.setAttribute('href', window.location)
    menuBtn.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#nav-menu').className = 'visible';
    });
}

const closeBtn = document.querySelector('#close-btn');
if(closeBtn) {
    closeBtn.setAttribute('href', window.location);
    closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        closeMenu();
    });
}


const currentYear = document.querySelectorAll('.current-year');
if(currentYear) {
    const date = new Date
    currentYear.forEach((year) => year.textContent = `${date.getFullYear()}`);
}

const teamDiv = document.querySelector('#team');
if(teamDiv) {
    getTeamMembers();
}

const memberBio = document.querySelector('.bio');
if(memberBio) {
    getMemberBio();
}

const workshopsDiv = document.querySelector('#workshops');
if(workshopsDiv) {
    getWorkshops();
}

const workshopInfo = document.querySelector('#workshop-info');
if(workshopInfo) {
    getWorkshopInfo();
}

setNavAnimationDirections();