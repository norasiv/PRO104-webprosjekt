const deleteTxt = document.querySelector(".delete-txt");
const cardImg = document.querySelector(".card-image");
const cardTxt = document.querySelector(".info-txt");
const cardFooter = document.querySelector(".card-footer");



//clickfunksjoner for slette-knapp for pizza
document.querySelectorAll(".delete-pizza-btn").forEach(button => {
    button.addEventListener("click", (b)=>{
       
        cardTxt.classList.add('is-hidden');
        cardFooter.classList.add('is-hidden');
        deleteTxt.classList.remove('is-hidden');

        })
    })

//clickfunksjoner for angre-knapp for pizza
document.querySelectorAll("#undo-pizza-btn").forEach(undoButton => {
    undoButton.addEventListener("click", (b)=>{
        
        cardTxt.classList.remove('is-hidden');
        cardFooter.classList.remove('is-hidden');
        deleteTxt.classList.add('is-hidden');
})
})

//clickfunksjoner for slette-knapp for drikke
document.querySelectorAll(".delete-drink-btn").forEach(button => {
    button.addEventListener("click", (b)=>{
        
        cardTxt.classList.add('is-hidden');
        cardFooter.classList.add('is-hidden');
        deleteTxt.classList.remove('is-hidden');

        })
    })

//clickfunksjoner for angre-knapp for drikke
document.querySelectorAll("#undo-drink-btn").forEach(undoButton => {
    undoButton.addEventListener("click", (b)=>{
        
        cardTxt.classList.remove('is-hidden');
        cardFooter.classList.remove('is-hidden');
        deleteTxt.classList.add('is-hidden');
})
})