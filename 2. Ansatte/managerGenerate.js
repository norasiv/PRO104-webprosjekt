import managerModule from './managerModule.js'

const managerSection = document.querySelector("#manager-section");

//genererer managers og legger de i bulma-cards
let htmlTxt = "";
managerModule.getAllManagers().forEach( managers => { 
    htmlTxt += `
        <div class="column is-3-desktop">
            <div class="card manager-card is-rounded">

                <section class="card-image">
                    <img class="manager-img" src="../images/${ managers.image }">
                </section>
                
                <div class="card-content delete-txt is-hidden">
                    <p class="title is-size-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ansatt er slettet</p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button id="undo-btn" class="button is-light">Angre</button>
                </div>

                <div class="card-content info-txt">
                    <p class="title is-size-5">${managers.location}</p>
                    <p class="is-size-5">${managers.title}</p>
                    <p>Navn: ${managers.name}</p>
                    <p>Tlf: ${managers.number}</p>
                </div>

                <footer class="card-footer">
                <p class="card-footer-item">
                    <button id="edit-manager-btn" class="button is-light">Rediger</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="button delete-staff-btn is-danger is-light">Slett</button>
                </p>
            </footer>

            </div>
        </div>`;
} );

managerSection.innerHTML = htmlTxt;


