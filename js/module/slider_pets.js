// Create slider for pets-block


const petsPhoto = document.querySelectorAll('.pets__photo-block');
const petsFeature = document.querySelectorAll('.pets__feature');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const pets1 = document.getElementById('pets1');
const pets2 = document.getElementById('pets2');
const array1 = Array.from(pets1.children);
const array2 = Array.from(pets2.children);
let i = 0;
pets1.innerHTML = array1[i].innerHTML;
pets2.innerHTML = array2[i].innerHTML;


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
};

arrowRight.addEventListener('click', () => {
    arrowLeft.disabled = true;
    arrowRight.disabled = true;
    shuffleArray(array1);
    shuffleArray(array2);
    petsPhoto.forEach((photo, j) => {
        petsFeature.forEach((feature, y) => {
            petsPhoto[y].classList.remove('animation__left');
            petsFeature[y].classList.remove('animation__left');
            petsPhoto[y].classList.add('animation__right');
            petsFeature[y].classList.add('animation__right');
        });
    });
    if (i < array1.length-1) {
        i++;
    } else {
        i = 0;
    };
    pets1.innerHTML = array1[i].innerHTML;
    pets2.innerHTML = array2[i].innerHTML;

    setTimeout(() => {
        arrowLeft.disabled = false;
        arrowRight.disabled = false;
    }, 900);
});

arrowLeft.addEventListener('click', () => {
    arrowLeft.disabled = true;
    arrowRight.disabled = true;
    shuffleArray(array1);
    shuffleArray(array2);
    petsPhoto.forEach((photo, j) => {
        petsFeature.forEach((feature, y) => {
            petsPhoto[y].classList.remove('animation__right');
            petsFeature[y].classList.remove('animation__right');
            petsPhoto[y].classList.add('animation__left');
            petsFeature[y].classList.add('animation__left');
        });
    });
    if (i > 0) {
        i--;
    } else {
        i = array1.length-1;
    };
    pets1.innerHTML = array1[i].innerHTML;
    pets2.innerHTML = array2[i].innerHTML;

    setTimeout(() => {
        arrowLeft.disabled = false;
        arrowRight.disabled = false;
    }, 900);
});