//input
const ansattLocation = document.querySelector("#location-input");
const ansattStilling = document.querySelector("#job-input");
const ansattNavn = document.querySelector("#name-input");
const ansattNummer = document.querySelector("#number-input");

///hvor ny staff bilr lagt til
const managerSection = document.querySelector("#manager-section");
const staffSection = document.querySelector("#staff-section");

///knapp
const leggtilBtn = document.querySelector("#save-manager-btn");
const leggtilBtnStaff = document.querySelector("#save-staff-btn");

leggtilBtn.addEventListener('click',() => {

    generateNewManager();

});

leggtilBtnStaff.addEventListener('click',() => {

    generateNewStaff();

});

///generere ny daglig leder
const generateNewManager = () => {

    const locationAnsatt = ansattLocation.value;
    const stillingAnsatt = ansattStilling.value;
    const navnAnsatt = ansattNavn.value;
    const nummerAnsatt = ansattNummer.value;

    managerSection.innerHTML +=  `<div class="column is-3-desktop">

    <div class="card is-rounded">

        <div class="card-content">
            <p class="title is-size-5">${locationAnsatt}</p>
            <p class="is-size-5">${stillingAnsatt}</p>
            <p>Navn: ${navnAnsatt}    </p>
            <p>Tlf: ${nummerAnsatt}</p>
        </div>

        <footer class="card-footer">
                <p class="card-footer-item">
                <button id="edit-btn" class="button is-light">Rediger</button>
                <button class="button delete-btn is-danger is-light">Slett</button>
            </p>
        </footer>

    </div>

</div>`;
};

///generere nye ansatte
const generateNewStaff = () => {

    const locationAnsatt = ansattLocation.value;
    const stillingAnsatt = ansattStilling.value;
    const navnAnsatt = ansattNavn.value;
    const nummerAnsatt = ansattNummer.value;

    staffSection.innerHTML += `<div class="column is-3-desktop">

    <div class="card is-rounded">

        <div class="card-content">
            <p class="title is-size-5">${locationAnsatt}</p>
            <p class="is-size-5">${stillingAnsatt}</p>
            <p>Navn: ${navnAnsatt}    </p>
            <p>Tlf: ${nummerAnsatt}</p>
        </div>

        <footer class="card-footer">
            <p class="card-footer-item">
                <button id="edit-btn" class="button is-light">Rediger</button>
                <button class="button delete-btn is-danger is-light">Slett</button>
            </p>
        </footer>

    </div>

</div>`;

};
