"use strict";
const keys = document.querySelectorAll('.key-text');
keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        console.log(e.target);
    });
});
