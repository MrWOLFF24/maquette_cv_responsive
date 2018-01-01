const app = (function () {
    "use strict";

    // variables
    let flipContainer1, flipContainer2, modal;

    // modal form contact
    const modalContact = function () {
        const btnContact = document.querySelector(".btn.contact");
        btnContact.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "block";
        });
    };

    // close modal
    const closeModal = function () {
       const closeBtn = document.querySelector(".close-modal");
       closeBtn.addEventListener("click", () => {
           modal.style.display = "none";
       });
       window.addEventListener("click", (e) => {
          if (e.target === modal){
              modal.style.display = "none";
          }
       });
    };

    // flip card1
    const flipCardRight = function () {
        const btn1 = document.getElementById("btn_flip1");
        btn1.addEventListener("click", (e) => {
            e.preventDefault();
            flipContainer1.classList.toggle("flip");
        });
    };

    // flip card2
    const flipCardLeft = function () {
        const btn2 = document.getElementById("btn_flip2");
        btn2.addEventListener("click", (e) => {
            e.preventDefault();
            flipContainer2.classList.toggle("flip");
        });
    };

    // close card1
    const closeCard1 = function () {
        const closeBtn1 = document.getElementById("close1");
        closeBtn1.addEventListener("click", () => {
            flipContainer1.classList.toggle("flip");
        });
    };

    // close card2
    const closeCard2 = function () {
        const closeBtn2 = document.getElementById("close2");
        closeBtn2.addEventListener("click", () => {
            flipContainer2.classList.toggle("flip");
        });
    };

    // menu hamburger
    const menuHamburger = function menuHamburger() {
        const btn = document.getElementById('burger');
        const nav = document.getElementById('nav');
        btn.addEventListener('click', function () {
            btn.classList.toggle("active");
            nav.classList.toggle("show");
        });
    };

    const init = function () {
        flipContainer1 = document.querySelector(".flip-container");
        flipContainer2 = document.querySelector(".flip-container2");
        modal = document.getElementById("modal");
        menuHamburger();
        flipCardRight();
        flipCardLeft();
        closeCard1();
        closeCard2();
        modalContact();
        closeModal();
    };

    window.addEventListener("DOMContentLoaded", init);
}());




