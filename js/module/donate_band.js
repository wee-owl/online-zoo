// Creating a band of donation values and change the picture depending on the donation


const donateCircles = document.querySelectorAll('.donate__circle');
const donateSumItems = document.querySelectorAll('.donate__sum-item');
const amountAnimals = document.querySelectorAll('.amount__animal');
const mediaSmall = window.matchMedia("(max-width: 1000px)");
const mediaTablet = window.matchMedia("(max-width: 640px)");


function changeSizeSmall(e) {
    if (e.matches) {
        donateSumItems.forEach((item, i) => {
            donateCircles.forEach((circle, j) => {
                if ( (i === j) && !donateSumItems[j].classList.contains('donate__item-active') ) {
                    donateCircles[5].classList.add('donate__circle-active');
                    donateSumItems[5].classList.add('donate__item-active');
                    amountAnimals[5].classList.add('amount__animal-active');
                } else {
                    donateCircles[j].classList.remove('donate__circle-active');
                    donateSumItems[j].classList.remove('donate__item-active');
                    amountAnimals[j].classList.remove('amount__animal-active');
                }
            });
        });
    };
};
changeSizeSmall(mediaSmall);
mediaSmall.addEventListener("change", changeSizeSmall);


function changeSizeTablet(e) {
    if (e.matches) {
        donateSumItems.forEach((item, i) => {
            donateCircles.forEach((circle, j) => {
                if ( (i === j) && !donateSumItems[j].classList.contains('donate__item-active') ) {
                    donateCircles[5].classList.add('donate__circle-active');
                    donateSumItems[5].classList.add('donate__item-active');
                    amountAnimals[5].classList.add('amount__animal-active');
                } else {
                    donateCircles[j].classList.remove('donate__circle-active');
                    donateSumItems[j].classList.remove('donate__item-active');
                    amountAnimals[j].classList.remove('amount__animal-active');
                }
            });
        });
    };
};
changeSizeTablet(mediaTablet);
mediaTablet.addEventListener("change", changeSizeTablet);


donateCircles.forEach((circle, i) => {
    circle.addEventListener('click', () => {
        donateSumItems.forEach((item, j) => {
            if ( i === j ) {
                donateCircles[j].classList.add('donate__circle-active');
                donateSumItems[j].classList.add('donate__item-active');
            } else {
                donateCircles[j].classList.remove('donate__circle-active');
                donateSumItems[j].classList.remove('donate__item-active');
            }
        });
    });
});


donateSumItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        donateCircles.forEach((circle, j) => {
            if ( i === j ) {
                donateCircles[j].classList.add('donate__circle-active');
                donateSumItems[j].classList.add('donate__item-active');
            } else {
                donateCircles[j].classList.remove('donate__circle-active');
                donateSumItems[j].classList.remove('donate__item-active');
            }
        });
    });
});


donateCircles.forEach((circle, i) => {
    circle.addEventListener('click', () => {
        amountAnimals.forEach((animal, j) => {
            if ( i === j ) {
                donateCircles[j].classList.add('donate__circle-active');
                amountAnimals[j].classList.add('amount__animal-active');
            } else {
                donateCircles[j].classList.remove('donate__circle-active');
                amountAnimals[j].classList.remove('amount__animal-active');
            }
        });
    });
});


donateSumItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        amountAnimals.forEach((animal, j) => {
            if ( i === j ) {
                amountAnimals[j].classList.add('amount__animal-active');
                donateSumItems[j].classList.add('donate__item-active');
            } else {
                amountAnimals[j].classList.remove('amount__animal-active');
                donateSumItems[j].classList.remove('donate__item-active');
            }
        });
    });
});