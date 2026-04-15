function funkcja_zwrotna(){

    // document.forms[indeks].elements[indeks/id]
    let a = document.forms[0].elements["pole_tekstowe"].value;
    let b = document.forms[0].elements["pole_liczbowe"].value;

    console.log(`${a}:${typeof a}`);
    console.log(`${b}:${typeof b}`);
}

// window.prompt("Tekst1","Tekst2"); // window.prompt(message, default);  oba opcjonalne

function wykonajCzteryRazy() {
    for (let i = 0; i < 4; i++) {
        let a = window.prompt("Wpisz wartość", "....");
        console.log(`${a}:${typeof a}`);
    }
}


wykonajCzteryRazy(); // zawsze typem jest string,  przy anuluj jest null:object