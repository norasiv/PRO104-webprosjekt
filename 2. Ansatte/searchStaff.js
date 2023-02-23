import staffModule from './staffModule.js'
import managerModule from './managerModule.js'

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const staffSection = document.querySelector("#staff-section");
const managerSection = document.querySelector("#manager-section");

//lager søkefunksjon
searchBtn.addEventListener('click', () => {

    const InputSearch = searchInput.value;
    if(InputSearch === ""){return false};
    searchStaff();
});

const searchStaff = () => {

   const InputSearch = searchInput.value;

   let htmlTxt = "";

//lager søkefunksjon for navn  Ansatte
staffModule.getAllStaff().forEach ( staff => {

    if(staff.name === InputSearch){


        htmlTxt += `
        <div class="column is-3-desktop">

            <div class="card is-rounded">

                <div class="card-content">
                    <p class="title is-size-5">${staff.location}</p>
                    <p class="is-size-5">${staff.title}</p>
                    <p>Navn: ${staff.name}    </p>
                    <p>Tlf: ${staff.number}</p>
                </div>

                <footer class="card-footer">
                <p class="card-footer-item">
                    <button class="button is-light">Rediger</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="button delete-staff-btn is-danger is-light">Slett</button>
                </p>
            </footer>

            </div>

    </div>`;


    }

//lager søkefunksjon for tittel  Ansatte
   else if(staff.title === InputSearch){
        htmlTxt += `
        <div class="column is-3-desktop">

            <div class="card is-rounded">

                <div class="card-content">
                    <p class="title is-size-5">${staff.location}</p>
                    <p class="is-size-5">${staff.title}</p>
                    <p>Navn: ${staff.name}    </p>
                    <p>Tlf: ${staff.number}</p>
                </div>

                <footer class="card-footer">
                <p class="card-footer-item">
                    <button class="button is-light">Rediger</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="button delete-staff-btn is-danger is-light">Slett</button>
                </p>
            </footer>

            </div>

    </div>`;


    }
//lager søkefunksjon for restaurant/filial Ansatte
    else if(staff.location === InputSearch){
        htmlTxt += `
        <div class="column is-3-desktop">

            <div class="card is-rounded">

                <div class="card-content">
                    <p class="title is-size-5">${staff.location}</p>
                    <p class="is-size-5">${staff.title}</p>
                    <p>Navn: ${staff.name}    </p>
                    <p>Tlf: ${staff.number}</p>
                </div>

                <footer class="card-footer">
                <p class="card-footer-item">
                    <button class="button is-light">Rediger</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="button delete-staff-btn is-danger is-light">Slett</button>
                </p>
            </footer>

            </div>

    </div>`;


    }
        staffSection.innerHTML = htmlTxt;
   });

   managerModule.getAllManagers().forEach ( managers => {

//lager søkefunksjon for navn Ansatte
    if(managers.name === InputSearch){

        htmlTxt += `
        <div class="column is-3-desktop">
            <div class="card is-rounded">

                <section class="card-image">
                    <img class="manager-img" src="../images/${ managers.image }">
                </section>

                <div class="card-content">
                    <p class="title is-size-5">${managers.location}</p>
                    <p class="is-size-5">${managers.title}</p>
                    <p>Navn: ${managers.name}</p>
                    <p>Tlf: ${managers.number}</p>
                </div>

                <footer class="card-footer">
                <p class="card-footer-item">
                    <button class="button is-light">Rediger</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="button delete-staff-btn is-danger is-light">Slett</button>
                </p>
            </footer>

            </div>
        </div>`;



    }

//lager søkefunksjon for tittel Ansatte
   else if(managers.title === InputSearch){

        htmlTxt += `
        <div class="column is-3-desktop">
            <div class="card is-rounded">

                <section class="card-image">
                    <img class="manager-img" src="../images/${ managers.image }">
                </section>

                <div class="card-content">
                    <p class="title is-size-5">${managers.location}</p>
                    <p class="is-size-5">${managers.title}</p>
                    <p>Navn: ${managers.name}</p>
                    <p>Tlf: ${managers.number}</p>
                </div>
                <footer class="card-footer">
                <p class="card-footer-item">
                    <button class="button is-light">Rediger</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="button delete-staff-btn is-danger is-light">Slett</button>
                </p>
            </footer>

            </div>
        </div>`;



    }
//lager søkefunksjon for restaurant/filial Managers
    else if(managers.location === InputSearch){

        htmlTxt += `
        <div class="column is-3-desktop">
            <div class="card is-rounded">

                <section class="card-image">
                    <img class="manager-img" src="../images/${ managers.image }">
                </section>

                <div class="card-content">
                    <p class="title is-size-5">${managers.location}</p>
                    <p class="is-size-5">${managers.title}</p>
                    <p>Navn: ${managers.name}</p>
                    <p>Tlf: ${managers.number}</p>
                </div>

                <footer class="card-footer">
                <p class="card-footer-item">
                    <button class="button is-light">Rediger</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button class="button delete-staff-btn is-danger is-light">Slett</button>
                </p>
            </footer>

            </div>
        </div>`;



    };
    managerSection.innerHTML = htmlTxt;

    staffSection.innerHTML = "";

})
}
