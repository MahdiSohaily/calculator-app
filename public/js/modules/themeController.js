"use strict";
const track = document.querySelector('.track');
track.addEventListener('click', (e) => {
    const elem = e.target;
    const position = elem.getAttribute('data-position');
});
const reposition = (elem, position) => {
    switch (position) {
        case '1': {
            elem.style.left = '27px';
            elem.setAttribute('data-position', '2');
            break;
        }
        case '2': {
            elem.style.left = '51px';
            elem.setAttribute('data-position', '3');
            break;
        }
        case '3': {
            elem.style.left = '3px';
            elem.setAttribute('data-position', '1');
            break;
        }
        default:
            elem.style.left = '3px';
            elem.setAttribute('data-position', '1');
    }
};
