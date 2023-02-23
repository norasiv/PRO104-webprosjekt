//pizza-array som legges i cards
const pizzaArray = (function(){
    const PizzaArray =[
    {navn:"Pepperoni" , beskrivelse:"Tomatsaus, Ost og Pepperoni." ,allergener:"Hvete, Melk, Selleri" ,pris:"179,-kr"},
    {navn:"Margherita" , beskrivelse:"Tomatsaus, Buffalo Mozzarella og Olivenolje." ,allergener:"Hvete, Melk, Selleri" ,pris:"179,-kr"},
    {navn:"Diavola" , beskrivelse:"Tomatsaus og Mozzarella di bufala og salami." ,allergener:"Hvete, Melk, Selleri" ,pris:"219,-kr"},
    {navn:"Mazza" , beskrivelse:"Tomatsaus, Ost, Bacon, Løk og Chili Pepper." ,allergener:"Hvete, Melk, Selleri" ,pris:"229,-kr"},
    {navn:"Hawaii" , beskrivelse:"Tomatsaus, Ost, Ananas og Skinke." ,allergener:"Hvete, Melk, Selleri" ,pris:"199,-kr"}
];

const getAll = () => PizzaArray;

const getByNavn = ( navn ) => {
     return PizzaArray.filter ( pizzaObject => pizzaObject.navn === navn);
}
const getByBeskrivelse = ( beskrivelse ) => {
    return PizzaArray.filter ( pizzaObject => pizzaObject.beskrivelse === beskrivelse);
}
const getByAllergener = ( allergener ) => {
    return PizzaArray.filter ( pizzaObject => pizzaObject.allergener === allergener);
}
const getByPris = ( pris ) => {
    return PizzaArray.filter ( pizzaObject => pizzaObject.pris === pris);
}

return {getAll,getByNavn,getByBeskrivelse,getByAllergener,getByPris}
}());

export default pizzaArray;