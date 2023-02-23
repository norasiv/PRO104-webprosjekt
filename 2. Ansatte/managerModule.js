//manager-array som legges i cards
const managerModule = ( function(){ 

    const managers = [
        { location: "Sagene", title: "Daglig leder", image: "sagene-leder.png", name: "Mathilde Hansen", number: "+47 34781930"},
        { location: "Majorstuen", title: "Daglig leder", image: "majorstuen-leder.png", name: "Petter Olsen", number: "+47 34782790"},
        { location: "Kampen", title: "Daglig leder", image: "kampen-leder.png", name: "Leah Norheim", number: "+47 23479809"},
        { location: "Bislett", title: "Daglig leder", image: "bislett-leder.png", name: "Ole Strand", number: "+47 20947578"}

    ];
 
    const getAllManagers = () => managers;

    return { getAllManagers }


}() ); 

export default managerModule;