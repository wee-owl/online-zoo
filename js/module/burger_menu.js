// Create burger-menu


const burgerButton = document.querySelector('.burger__button');
const burgerNav = document.querySelector('.burger__nav');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

burgerButton.addEventListener('click', () => {

    burgerButton.classList.toggle('burger__button-active');
    burgerNav.classList.toggle('burger__nav-active');
    overlay.classList.toggle('overlay__active');
    header.classList.toggle('header-active');
    hero.classList.toggle('hero-active');
});

document.addEventListener('click', (e) => {
    if ( e.target.closest('.burger__item a') || 
        e.target.closest('.burger__nav a') || 
        e.target === overlay ) {

            burgerButton.classList.remove('burger__button-active');
            burgerNav.classList.remove('burger__nav-active');
            overlay.classList.remove('overlay__active');
            header.classList.remove('header-active');
            hero.style.marginTop = '0';
    };
});