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
