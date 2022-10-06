// Create slider for pets-block


const petsContent = document.querySelector('.pets__content');
const petsCards = document.querySelectorAll('.pets__card');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const mediaDesktop = window.matchMedia("(min-width: 921px)");
const mediaSmall = window.matchMedia("(max-width: 920px)");
var petsCardsArray = Array.from(document.querySelector('.pets__content').children);


function changeSizeDesktop(e) {
    if (e.matches) {
        petsCardsArray.forEach((card, i) => {
            /*var cardPrev = document.getElementById('card'+(petsCards.length+i-6));
            var cardNext = document.getElementById('card'+(i+6));*/
            arrowLeft.addEventListener('click', (e) => {
                card.innerHTML = petsCardsArray[petsCardsArray.length+i-6].innerHTML;
                card.classList.add('fade');
                i--;
            });
            arrowRight.addEventListener('click', (e) => {
                card.innerHTML = petsCardsArray[i+6].innerHTML;
                card.classList.add('fade');
                i++;
            });
        });
    };
};
changeSizeDesktop(mediaDesktop);
mediaDesktop.addEventListener("change", changeSizeDesktop);


function changeSizeSmall(e) {
    if (e.matches) {
        petsCardsArray.forEach((card, i) => {
            /*var cardPrev = document.getElementById('card'+(petsCards.length+i-4));
            var cardNext = document.getElementById('card'+(i+4));*/
            arrowLeft.addEventListener('click', (e) => {
                card.innerHTML = petsCardsArray[petsCardsArray.length+i-4].innerHTML;
                card.classList.add('fade');
            });
            arrowRight.addEventListener('click', (e) => {
                card.innerHTML = petsCardsArray[i+4].innerHTML;
                card.classList.add('fade');
            });
        });
    };
};
changeSizeSmall(mediaSmall);
mediaSmall.addEventListener("change", changeSizeSmall);