// Validity check of the sum field


const donateInput = document.querySelector('.donate__input');

document.addEventListener('click', (e) => {
    if (e.target !== donateInput) {
        donateInput.type = 'number';
    };
});

donateInput.addEventListener('click', (e) => {
    donateInput.type = 'text';
});


// Filling out the the donation form


const donateForm = document.getElementById('donate__form');
const donateSumItems = document.querySelectorAll('.donate__sum-item');
const donateCircles = document.querySelectorAll('.donate__circle');
const amountAnimals = document.querySelectorAll('.amount__animal');

donateForm.value = '100';

donateSumItems.forEach((item, i) => {
    donateCircles.forEach((circle, j) => {
        donateSumItems[5].classList.add('donate__item-active');
        donateCircles[5].classList.add('donate__circle-active');
        amountAnimals[5].classList.add('amount__animal-active');

    item.addEventListener('click', () => {
        let itemValue = donateSumItems[i].innerHTML;
        donateForm.value = itemValue;
    });

    circle.addEventListener('click', () => {
        let itemValue = donateSumItems[j].innerHTML;
        donateForm.value = itemValue;
    });

    donateForm.addEventListener('input', function(e) { 
        let formValue = this.value;
        if (formValue == 25) {
            donateSumItems[5].classList.remove('donate__item-active');
            donateCircles[5].classList.remove('donate__circle-active');
            amountAnimals[5].classList.remove('amount__animal-active');
            donateSumItems[i].classList.remove('donate__item-active');
            donateCircles[i].classList.remove('donate__circle-active');
            amountAnimals[i].classList.remove('amount__animal-active');
            donateSumItems[7].classList.add('donate__item-active');
            donateCircles[7].classList.add('donate__circle-active');
            amountAnimals[7].classList.add('amount__animal-active');
        } else if (formValue == 50) {
            donateSumItems[5].classList.remove('donate__item-active');
            donateCircles[5].classList.remove('donate__circle-active');
            amountAnimals[5].classList.remove('amount__animal-active');
            donateSumItems[i].classList.remove('donate__item-active');
            donateCircles[i].classList.remove('donate__circle-active');
            amountAnimals[i].classList.remove('amount__animal-active');
            donateSumItems[6].classList.add('donate__item-active');
            donateCircles[6].classList.add('donate__circle-active');
            amountAnimals[6].classList.add('amount__animal-active');
        } else if (formValue == 100) {
            donateSumItems[i].classList.remove('donate__item-active');
            donateCircles[i].classList.remove('donate__circle-active');
            amountAnimals[i].classList.remove('amount__animal-active');
            donateSumItems[5].classList.add('donate__item-active');
            donateCircles[5].classList.add('donate__circle-active');
            amountAnimals[5].classList.add('amount__animal-active');
        } else if (formValue == 250) {
            donateSumItems[5].classList.remove('donate__item-active');
            donateCircles[5].classList.remove('donate__circle-active');
            amountAnimals[5].classList.remove('amount__animal-active');
            donateSumItems[i].classList.remove('donate__item-active');
            donateCircles[i].classList.remove('donate__circle-active');
            amountAnimals[i].classList.remove('amount__animal-active');
            donateSumItems[4].classList.add('donate__item-active');
            donateCircles[4].classList.add('donate__circle-active');
            amountAnimals[4].classList.add('amount__animal-active');
        } else if (formValue == 500) {
            donateSumItems[5].classList.remove('donate__item-active');
            donateCircles[5].classList.remove('donate__circle-active');
            amountAnimals[5].classList.remove('amount__animal-active');
            donateSumItems[i].classList.remove('donate__item-active');
            donateCircles[i].classList.remove('donate__circle-active');
            amountAnimals[i].classList.remove('amount__animal-active');
            donateSumItems[3].classList.add('donate__item-active');
            donateCircles[3].classList.add('donate__circle-active');
            amountAnimals[3].classList.add('amount__animal-active');
        } else if (formValue == 1000) {
            if (window.innerWidth >= 641) {
                donateSumItems[5].classList.remove('donate__item-active');
                donateCircles[5].classList.remove('donate__circle-active');
                amountAnimals[5].classList.remove('amount__animal-active');
                donateSumItems[i].classList.remove('donate__item-active');
                donateCircles[i].classList.remove('donate__circle-active');
                amountAnimals[i].classList.remove('amount__animal-active');
                donateSumItems[2].classList.add('donate__item-active');
                donateCircles[2].classList.add('donate__circle-active');
                amountAnimals[2].classList.add('amount__animal-active');
            } else {
                donateSumItems[i].classList.remove('donate__item-active');
                donateCircles[i].classList.remove('donate__circle-active');
            }
        } else if ((formValue == 2000)) {
            if (window.innerWidth >= 641) {
                donateSumItems[5].classList.remove('donate__item-active');
                donateCircles[5].classList.remove('donate__circle-active');
                amountAnimals[5].classList.remove('amount__animal-active');
                donateSumItems[i].classList.remove('donate__item-active');
                donateCircles[i].classList.remove('donate__circle-active');
                amountAnimals[i].classList.remove('amount__animal-active');
                donateSumItems[1].classList.add('donate__item-active');
                donateCircles[1].classList.add('donate__circle-active');
                amountAnimals[1].classList.add('amount__animal-active');
            }
        } else if (formValue == 5000) {
            if (window.innerWidth >= 1001) {
                donateSumItems[5].classList.remove('donate__item-active');
                donateCircles[5].classList.remove('donate__circle-active');
                amountAnimals[5].classList.remove('amount__animal-active');
                donateSumItems[i].classList.remove('donate__item-active');
                donateCircles[i].classList.remove('donate__circle-active');
                amountAnimals[i].classList.remove('amount__animal-active');
                donateSumItems[0].classList.add('donate__item-active');
                donateCircles[0].classList.add('donate__circle-active');
                amountAnimals[0].classList.add('amount__animal-active');
            } else {
                donateSumItems[i].classList.remove('donate__item-active');
                donateCircles[i].classList.remove('donate__circle-active');
            }
        } else {
            donateSumItems[i].classList.remove('donate__item-active');
            donateCircles[i].classList.remove('donate__circle-active');
        };
    });
});
});