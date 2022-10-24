"use strict";
const track = document.querySelector('.track');
track.addEventListener('click', (e) => {
    const elem = e.target;
    const theme = elem.getAttribute('data-display');
    switchTheme(elem, theme);
});
const switchTheme = (elem, theme) => {
    switch (theme) {
        case 'dark': {
            elem.style.left = '27px';
            elem.setAttribute('data-position', 'light');
            break;
        }
        case 'light': {
            elem.style.left = '51px';
            elem.setAttribute('data-position', 'purple');
            break;
        }
        case 'purple': {
            elem.style.left = '3px';
            elem.setAttribute('data-position', 'dark');
            break;
        }
        default:
            elem.style.left = '3px';
            elem.setAttribute('data-position', 'dark');
    }
};
function updateLocalStorage(theme, position) {
    localStorage.setItem('theme', JSON.stringify({ theme, position }));
}
