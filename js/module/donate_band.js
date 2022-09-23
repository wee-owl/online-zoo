// Creating a band of donation values and change the picture depending on the donation


const donateCircles = document.querySelectorAll('.donate__circle');
const donateSumItems = document.querySelectorAll('.donate__sum-item');
const amountAnimals = document.querySelectorAll('.amount__animal');


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
