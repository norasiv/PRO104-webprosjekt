import staffModule from './staffModule.js'

const staffSection = document.querySelector("#staff-section");

//genererer ansatte og legger de i bulma-cards

let htmlTxt = "";
staffModule.getAllStaff().forEach( staff => { 
    htmlTxt += `
    <div class="column is-3-desktop">

        <div class="card is-rounded">

            <div class="card-content delete-txt is-hidden">
                <p class="title is-size-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ansatt er slettet</p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button id="undo-staff-btn" class="button is-light">Angre</button>
            </div>

            <div class="card-content">
                <p class="title is-size-5">${staff.location}</p>
                <p class="is-size-5">${staff.title}</p>
                <p>Navn: ${staff.name}    </p>
                <p>Tlf: ${staff.number}</p>
            </div>

            <footer class="card-footer">
                <p class="card-footer-item">
                    <button id="edit-btn-two" class="button is-light">Rediger</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="button delete-staff-btn is-danger is-light">Slett</button>
                </p>
            </footer>

        </div>

</div>`;
} );


staffSection.innerHTML = htmlTxt;






