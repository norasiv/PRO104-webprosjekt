import salesModule from './salesModule.js'

const salesSection = document.querySelector("#sales-section");

//genererer salgs-cards
let htmlTxt = "";
salesModule.getAllSales().forEach( sales => { 
    htmlTxt += `
        <div class="column is-3-desktop">
            <div class="card is-rounded">

                <section class="card-image">
                    <img class="sales-img" src="../images/${ sales.image }">
                </section>

                <div class="card-content">
                    <p class="title is-size-5">${sales.location}</p>
                    <p>Salgsleder: ${sales.name}</p>
                    <p>Mail: ${sales.mail}</p>
                    <p>Tlf: ${sales.number}</p>
                </div>



                <footer class="card-footer">
                    <p class="card-footer-item">
                        <button id="more-info-btn" class="button is-light">Mer info &nbsp
                        <i class="fas fa-arrow-down"></i>
                        </button> 
                        <button id="less-info-btn" class="button is-light is-hidden">Lukk &nbsp
                        <i class="fas fa-arrow-up"></i>
                        </button> 
                    </p>
                </footer>

            </div>
        </div>`;
} );

salesSection.innerHTML = htmlTxt;

salesSection();