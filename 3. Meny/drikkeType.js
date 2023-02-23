import drikkeArray from "./drikkeArray.js";

const drikkeDiv = document.querySelector("#pizza-type-div");
const dbutton = document.querySelector("#dbtn");

//genererer drikke og legger de i bulma-cards
dbutton.addEventListener('click', () => {
    generateDrikke();
});

const generateDrikke = () => {
    let htmlTxt = "";

    drikkeArray.getAll().forEach( drikkeObject => {

        htmlTxt += 
        `<div class="column is-3-desktop">
        <div class="card is-rounded">
            <div class="card-content">
                <p class="title is-size-5">${drikkeObject.navnDrikke}</p>
                <p>Pris: ${drikkeObject.prisDrikke}</p>
            </div>

            <footer class="card-footer">
                <p class="card-footer-item">
                    <button id="edit-drink-btn" class="button is-light">Rediger</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="button delete-drink-btn is-danger is-light">Slett</button>
                </p>
            </footer>
        </div>
    </div>`
    });

    drikkeDiv.innerHTML = htmlTxt;
}