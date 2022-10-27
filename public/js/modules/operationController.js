"use strict";
const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        console.log(key);
    });
});
