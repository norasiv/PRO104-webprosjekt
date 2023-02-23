///input
const pizzaNAVN = document.querySelector("#name-input");
const pizzaBeskrivelse = document.querySelector("#description-input");
const pizzaAllergener = document.querySelector("#allergens-input");
const pizzaPris = document.querySelector("#price-input");
///div. dette er hvor retter bllir lagt til
const pizzaDiv = document.querySelector("#pizza-type-div");
//her er knapper
const leggtilBtn = document.querySelector("#save-btn");
const leggTilDrikke = document.querySelector("#save-drikke-btn");

//starten for funsjonenen for å legge til pizza
leggtilBtn.addEventListener('click',() => {

   
   generateNewPizza(); 
  
});
 const generateNewPizza = () => {

     const navnPizza = pizzaNAVN.value;
    const Beskrivelsepizza = pizzaBeskrivelse.value; 
    const AllergenerPizza = pizzaAllergener.value;
    const PrisPizza = pizzaPris.value;

    
///generere ny pizza
    pizzaDiv.innerHTML += 
    `<div class="column is-3-desktop">
    <div class="card is-rounded">
        <div class="card-content">
            <p class="title is-size-5">${navnPizza}</p>
            <p>Innholder: ${Beskrivelsepizza}    </p>
            <p>Allergier: ${AllergenerPizza}</p>
            <p>Pris: ${PrisPizza}</p>
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
</div>`
        
    };

///generere ny drikke
    leggTilDrikke.addEventListener('click',() => {
        generateNewDrikke();
    });
    const generateNewDrikke = () => {

        const navnPizza = pizzaNAVN.value;
       const PrisPizza = pizzaPris.value;
   
       
   
       pizzaDiv.innerHTML += 
       `<div class="column is-3-desktop">
       <div class="card is-rounded">
           <div class="card-content">
               <p class="title is-size-5">${navnPizza}</p>
               <p>Pris: ${PrisPizza}</p>
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
   </div>`

};