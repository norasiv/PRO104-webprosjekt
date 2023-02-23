//drikke-array som legges i cards
const drikkeArray = (function(){
    const DrikkeArray = [
        {navnDrikke:"Pepsi Max", prisDrikke:"43,-kr"},
        {navnDrikke:"Cola Light", prisDrikke:"40,-kr"},
        {navnDrikke:"Pepsi", prisDrikke:"40,-kr"},
        {navnDrikke:"coca cola", prisDrikke:"35,-kr"},
        {navnDrikke:"fanta", prisDrikke:"40,-kr"},
        {navnDrikke:"sprite", prisDrikke:"43,-kr"}
    ];

    const getAll = () => DrikkeArray;

    const getDrikke = (navnDrikke) => {
        return DrikkeArray.filter ( drikkeObject => drikkeObject.navnDrikke === navnDrikke);
    }
    const getPris = (prisDrikke) =>{
        return DrikkeArray.filter (drikkeObject => drikkeObject.prisDrikke ===  prisDrikke);
    }

    return {getAll,getDrikke,getPris}
}());
export default drikkeArray;