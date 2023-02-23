const deleteTxt = document.querySelector(".delete-txt");
const cardImg = document.querySelector(".card-image");
const cardTxt = document.querySelector(".info-txt");
const cardFooter = document.querySelector(".card-footer");



//clickfunksjoner for slette-knapp for manager
document.querySelectorAll(".delete-btn").forEach(button => {
    button.addEventListener("click", (b)=>{
        cardImg.classList.add('is-hidden');
        cardTxt.classList.add('is-hidden');
        cardFooter.classList.add('is-hidden');
        deleteTxt.classList.remove('is-hidden');

        })
    })


//clickfunksjoner for angre-knapp for manager
document.querySelectorAll("#undo-btn").forEach(undoButton => {
    undoButton.addEventListener("click", (b)=>{
        cardImg.classList.remove('is-hidden');
        cardTxt.classList.remove('is-hidden');
        cardFooter.classList.remove('is-hidden');
        deleteTxt.classList.add('is-hidden');
    })
})


//clickfunksjoner for slette-knapp for ansatte
document.querySelectorAll(".delete-staff-btn").forEach(button => {
    button.addEventListener("click", (b)=>{
        cardImg.classList.add('is-hidden');
        cardTxt.classList.add('is-hidden');
        cardFooter.classList.add('is-hidden');
        deleteTxt.classList.remove('is-hidden');

        })
    })


//clickfunksjoner for angre-knapp for ansatte
document.querySelectorAll("#undo-staff-btn").forEach(undoButton => {
    undoButton.addEventListener("click", (b)=>{
        cardImg.classList.remove('is-hidden');
        cardTxt.classList.remove('is-hidden');
        cardFooter.classList.remove('is-hidden');
        deleteTxt.classList.add('is-hidden');
})
})