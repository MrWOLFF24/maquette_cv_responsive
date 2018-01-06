const app = (function () {
    "use strict";

    // variables
    let flipContainer1, flipContainer2, modal, form;

    // Envoi mail en ajax
    const sendAJAXMail = function () {
        const messageBox = document.getElementById("message-mail");

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            let formData = new FormData(form);
            const xhr = new XMLHttpRequest();

            xhr.open('POST', 'libs/form-contact.php', true);
            xhr.onload = function () {
                if(xhr.readyState === 4 && xhr.status === 200) {
                    messageBox.style.display = "block";
                    messageBox.innerHTML = `Votre message a bien été envoyé <span id="close-message">&times;</span>`;
                    modal.style.display = 'none';
                    document.querySelector("textarea").value = "";
                    document.querySelectorAll("input").forEach(function (el) {
                        el.value = "";
                    });
                    const closeBtn = document.getElementById("close-message");
                    if (closeBtn){
                        closeBtn.onclick = () => messageBox.style.display = "none";
                    }
                    setTimeout(() => {messageBox.style.display = 'none'}, 3000);
                }else {
                    messageBox.style.display = 'block';
                    messageBox.style.background = '#e74c3c';
                    messageBox.innerHTML = `Votre message n'a pas pu être envoyé <span id="close-message">&times;</span>`;

                    const closeBtn = document.getElementById("close-message");
                    if (closeBtn){
                        closeBtn.onclick = () => messageBox.style.display = "none";
                    }
                }
            };

            xhr.send(formData);
        });
    };

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
        form = document.getElementById("Form");
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
        sendAJAXMail();
    };

    window.addEventListener("DOMContentLoaded", init);
}());




