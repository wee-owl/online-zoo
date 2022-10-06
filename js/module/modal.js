// Create modal window


const feedBlocks = document.querySelectorAll('.testimonials__block');
const modalBg = document.querySelector('.modal__bg');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const mediaTablet = window.matchMedia("(max-width: 640px)");


function changeSizeTablet(e) {
    if (e.matches) {
        feedBlocks.forEach((feed, i) => {
            feed.addEventListener('click', (f) => {
                f.preventDefault();

                var feedBlock = document.getElementById('block'+(i+1));
                var popup = document.getElementById('popup');

                popup.innerHTML = feedBlock.innerHTML;

                const feedBlockContent = document.querySelector('.popup .testimonials__block-content');
                const feedBackContent = document.querySelector('.popup .testimonials__block-content .testimonials__block-feedback');

                modalBg.style.display = 'flex';
                body.style.overflow = 'hidden';
                header.style.zIndex = '0';
                popup.style.cursor = 'default';
                popup.style.zIndex = '15';
                feedBlockContent.style.maxHeight = '100%';
                feedBackContent.style.webkitLineClamp = 'initial';
            });

            document.addEventListener('click', (g) => {
                if ( g.target === modalBg || g.target.closest('.modal__close') ) {
                    modalBg.style.display = 'none';
                    body.style.overflow = 'auto';
                    header.style.zIndex = '10';
                    popup.style.cursor = 'pointer';
                    popup.style.zIndex = '0';
                };
            });
        });
    };
};
changeSizeTablet(mediaTablet);
mediaTablet.addEventListener("change", changeSizeTablet);