import pizzaArray from './pizzaArray.js';

const pizzaDiv = document.querySelector("#pizza-type-div");
const pbutton = document.querySelector("#pbtn");

//genererer pizza og legger de i bulma-cards
pbutton.addEventListener('click', () => {
    generatePizza();
});

const generatePizza = () => {
    let htmlTxt="";

    pizzaArray.getAll().forEach(pizzaObject => {

        htmlTxt += 
        `<div class="column is-3-desktop">
        <div class="card is-rounded">

        <div class="card-content delete-txt is-hidden">
        <p class="title is-size-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ansatt er slettet</p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button id="undo-pizza-btn" class="button is-light">Angre</button>

    </div>
            <div class="card-content info-txt">
                <p class="title is-size-5">${pizzaObject.navn}</p>
                <p>Beskrivelse: ${pizzaObject.beskrivelse}    </p>
                <p>Allergener: ${pizzaObject.allergener}</p>
                <p>Pris: ${pizzaObject.pris}</p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <button id="edit-pizza-btn" class="button is-light">Rediger</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="button delete-pizza-btn is-danger is-light">Slett</button>
                </p>
            </footer>
        </div>
    </div>`
        
    });

    pizzaDiv.innerHTML = htmlTxt;
}

generatePizza();