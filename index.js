const init = () => {
    initSections();
    initResizeScreenEvent();
    initClickEvents();
}

const initSections = () => {
    initInformationSection();
    initMenuSection();
}

const toggleMenu = () => {
    const menu = document.getElementById("menu");
    const collapsedClass = 'collapsed'
    if (!menu.classList.contains(collapsedClass)) {
        menu.className += ' ' + collapsedClass;
    } else if (menu.classList.contains(collapsedClass)) {
        menu.classList.remove(collapsedClass);
    }
}

const initResizeScreenEvent = () => {
    window.addEventListener("resize", function() {
        initInformationSection();
        initMenuSection();
    });
}

const initClickEvents = () => {
    const toggleSection = document.querySelectorAll('.nav-item');
    console.log(toggleSection);
    toggleSection.forEach(element => element.addEventListener('click', toggleMenu));
}

const initInformationSection = () => {
    const maxWidth = 750;
    const parentElementLowResolution = document.getElementById('contacts');
    const searchElement = document.getElementById('information');
    const parentElementHighResolution = document.getElementById('experience');

    document.body.clientWidth < maxWidth && searchElement 
        ? parentElementLowResolution.parentNode.insertBefore(searchElement, parentElementLowResolution)
        : parentElementHighResolution.parentNode.insertBefore(searchElement, parentElementHighResolution);
}

const initMenuSection = () => {
    const maxWidth = 750;
    const searchElement = document.getElementById('menu').closest('.header');
    const newClass = 'mobile';

    if (document.body.clientWidth < maxWidth && searchElement && !searchElement.classList.contains(newClass)) {
        searchElement.className += ' ' + newClass;
    } else if (document.body.clientWidth >= maxWidth && searchElement.classList.contains(newClass)) {
        searchElement.classList.remove(newClass);
    }
}

window.addEventListener('DOMContentLoaded', function () {
    init();
});