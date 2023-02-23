import drikkeArray from "./drikkeArray.js";
 import pizzaArray from './pizzaArray.js';

 const searchInput = document.querySelector("#searchInput");
 const searchBtn = document.querySelector("#searchBtn");
 const pizzaDiv = document.querySelector("#pizza-type-div");


//lager søkefunksjon 
 searchBtn.addEventListener('click', () => {
    const Inputsearch = searchInput.value;
    if(Inputsearch === ""){return false};

     searchArray();
 });

 const searchArray = () => {

    const Inputsearch = searchInput.value;

    let htmlTxt = "";

//lager søkefunksjon for navn Pizza
    pizzaArray.getAll().forEach(pizzaObject => {

     if(pizzaObject.navn === Inputsearch){
         htmlTxt = 
         `<div class="column is-3-desktop">
         <div class="card is-rounded">
             <div class="card-content">
                 <p class="title is-size-5">${pizzaObject.navn}</p>
                 <p>Innholder: ${pizzaObject.beskrivelse}    </p>
                 <p>Allergier: ${pizzaObject.allergener}</p>
                 <p>Pris: ${pizzaObject.pris}</p>
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

     pizzaDiv.innerHTML = htmlTxt; 
     }

    });

//lager søkefunksjon for navn Drikke
    drikkeArray.getAll().forEach(drikkeObject =>{

     if(drikkeObject.navnDrikke === Inputsearch){

         htmlTxt += 
         `<div class="column is-3-desktop">
         <div class="card is-rounded">
             <div class="card-content">
                 <p class="title is-size-5">${drikkeObject.navnDrikke}</p>
                 <p>Pris: ${drikkeObject.prisDrikke}</p>
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
     pizzaDiv.innerHTML = htmlTxt;
     }

    })

 }