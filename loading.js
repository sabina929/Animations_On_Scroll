const wrapper = document.querySelector('.wrapper');
const navbar = document.querySelector('.navigation');
const header = document.querySelector('header');
const headerText = document.querySelector('.header-text');
const cta = document.querySelector('.cta');
const logo = document.querySelector('.logo');
const scrolling = document.querySelector('.scrolling');
const mainSections = document.querySelector('main');
// const footer = document.querySelector('footer');


function loading() {
    setTimeout(() => {
        wrapper.style.opacity = 0;
        wrapper.style.display = 'none';

        navbar.style.display = 'block';
        setTimeout(() => {navbar.style.opacity = 1}, 50);

        header.style.display = 'block';
        setTimeout(() => {header.style.opacity = 1}, 50);

        headerText.style.display = 'block';
        setTimeout(() => {headerText.style.opacity = 1}, 50);

        cta.style.display = 'block';
        setTimeout(() => {cta.style.opacity = 1}, 50);

        logo.style.display = 'block';
        setTimeout(() => {logo.style.opacity = 1}, 50);

        scrolling.style.display = 'block';
        setTimeout(() => {scrolling.style.opacity = 1}, 50);

        mainSections.style.display = 'block';
        setTimeout(() => {mainSections.style.opacity = 1}, 50);

        // footer.style.display = 'block';
        // setTimeout(() => (footer.style.opacity = 1), 50);


    }, 500);
}

document.addEventListener('DOMContentLoaded', function() {
   window.addEventListener("load",  function() {
           setTimeout(() => {loading()}, 1000);
   }, false);
})
