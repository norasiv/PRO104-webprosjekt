//ansatte-array som legges i cards

const staffModule = ( function(){ 

    const fullStaff = [
        { location: "Sagene", title: "Servitør", name: "Trine Gabrielsen", number: "+47 28745693"},
        { location: "Sagene", title: "Servitør", name: "Petter Kvamme", number: "+47 28729693"},
        { location: "Majorstuen", title: "Servitør", name: "Sandra Fjellstad", number: "+47 29465830"},
        { location: "Majorstuen", title: "Servitør", name: "Amir Lindholm", number: "+47 67987646"},
        { location: "Bislett", title: "Servitør", name: "Erik Rasmussen", number: "+47 43895743"},
        { location: "Kampen", title: "Servitør", name: "Erik Johnsen", number: "+47 43891937"},

        { location: "Majorstuen", title: "Bartender", name: "Andreas Solheim", number: "+47 43891937"},
        { location: "Sagene", title: "Bartender", name: "Tiril Nesse", number: "+47 43891937"},

        { location: "Sagene", title: "Kokk", name: "Konrad Solem", number: "+47 43891937"},
        { location: "Majorstuen", title: "Kokk", name: "Anna Melby", number: "+47 43891937"},
        { location: "Kampen", title: "Kokk", name: "Bjørn Eikemo ", number: "+47 43891937"},
        { location: "Bislett", title: "Kokk", name: "Nina Gustafsson", number: "+47 43891937"}
    ];

    
    const getAllStaff = () => fullStaff;

    return { getAllStaff }

}() ); 

export default staffModule;




