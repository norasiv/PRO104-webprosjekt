
//lager klikkevent for alle ansatte-knapp
const visAnsatte = document.querySelector("#show-all");

visAnsatte.addEventListener('click', () => {
    
    HentAlleAnsatte();

})

const HentAlleAnsatte = () => {

    location.reload();
 
}