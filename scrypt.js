// funzione che  crea un  oggetto (personaggio) , i quali dati verranno inseriti poi dall' utente
 function Player(nome,età,altezza,ruolo){
     this.nome = nome ,
     this.età = età ,
     this.altezza = altezza, 
     this.ruolo = ruolo

 };
// creazione effettiva dei dati da parte dell' utente
 let p1 = new Player(prompt("scrivi il nome del tuo personaggio"),prompt("scrivi l' età"),prompt("scrivi l' altezza (cm)"),prompt("scrivi il ruolo da te scelto"));



// funzioni che andranno a costituire la funzione madre "creaPersonaggio()" p.s (sono state utilizzate delle funzioni freccia)
const cambiaNome = () =>{    let nome = document.getElementById("nome");
    nome.innerHTML =" " + p1.nome ;
};

const cambiaAltezza = () =>{    let altezza = document.getElementById("altezza");
    altezza.innerHTML =" " + p1.altezza + "cm";
};

const cambiaRuolo = ()=>{    let ruolo = document.getElementById("ruolo");
    ruolo.innerHTML =" " + "Esperto" +" " + p1.ruolo ;
};

const  cambiaEtà = ()=>{    let età = document.getElementById("età");
    età.innerHTML =" " + p1.età +" " + "Anni" ;
};

// funzione Madre che lega tutte le funzioni figlie per mandare in output i dati del personaggio 
 function creaPersonaggio(){
    cambiaNome()
    cambiaAltezza()
    cambiaEtà()
    cambiaRuolo()

   
};