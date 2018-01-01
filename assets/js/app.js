const app = (function () {
    "use strict";

    const menuHamb = function menuHamb() {
        const btn = document.getElementById('burger');
        const nav = document.getElementById('nav');
        btn.addEventListener('click', function () {
            btn.classList.toggle("active");
            nav.classList.toggle("show");
        });
    };

    const init = function () {
        menuHamb();
    };

    window.addEventListener("DOMContentLoaded", init);
}());




