// Create testimonials slider


const range = document.querySelector('.testimonials__range');
const mediaDesktop = window.matchMedia("(min-width: 1001px)");
const mediaSmall = window.matchMedia("(max-width: 1000px)");
var feedsContainer = Array.from(document.querySelector('.testimonials__feeds').children);
var rangeValue = range.value;
var maxValue = Number(range.max);


function changeSizeDesktop(e) {
    if (e.matches) {
        range.oninput = function() {
            rangeValue = Number(this.value);
            for (let i = 0; i <= maxValue; i++) {
                for (let j = 0; j < feedsContainer.length; j++) {
                    if (i == rangeValue) {
                        feedsContainer[j].style.transform = 'translateX('+(0-i*297)+'px)';
                    };
                };
            };
        };
    };
};
changeSizeDesktop(mediaDesktop);
mediaDesktop.addEventListener("change", changeSizeDesktop);


function changeSizeSmall(e) {
    if (e.matches) {
        range.max = '8';
        var maxValue = Number(range.max);
        range.oninput = function() {
            rangeValue = Number(this.value);
            for (let i = 0; i <= maxValue; i++) {
                for (let j = 0; j < feedsContainer.length; j++) {
                    if (i == rangeValue) {
                        feedsContainer[j].style.transform = 'translateX('+(0-i*324)+'px)';
                    };
                };
            };
        };
    };
};
changeSizeSmall(mediaSmall);
mediaSmall.addEventListener("change", changeSizeSmall);