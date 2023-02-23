//salgs-array
const salesModule = ( function(){ 

    const sales = [
        { location: "Sagene", image: "sageneGraf.png", name: "Per Normann", mail: "sagene@salg.org", number: "+47 23781930"},
        { location: "Kampen", image: "kampenGraf.png", name: "Trude Nilsen", mail: "kampen@salg.org", number: "+47 23476409"},
        { location: "Majorstuen", image: "majorstuenGraf.png", name: "Anita Johannesen", mail: "majorstuen@salg.org", number: "+47 23782790"},
        { location: "Bislett", image: "bislettGraf.png", name: "Bengt Jonsen", mail: "bislett@salg.org", number: "+47 23943328"}
        
    ];
 
    const getAllSales = () => sales;

    return { getAllSales }


}() ); 

export default salesModule;