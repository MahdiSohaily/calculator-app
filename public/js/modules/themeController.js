"use strict";
const track = document.querySelector('.track');
track.addEventListener('click', (e) => {
    const elem = e.target;
    const position = elem.getAttribute('data-position');
    switch (position) {
        case '1': {
            elem.style.right = '0px';
            break;
        }
        case '2': {
            break;
        }
        case '3': {
            break;
        }
        default:
    }
});
