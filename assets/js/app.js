const app = (function () {
    "use strict";

    const init = function () {
        const scene = document.getElementById('scene');
        let parallaxInstance = new Parallax(scene);
    };

    window.addEventListener("DOMContentLoaded", init);
}());




