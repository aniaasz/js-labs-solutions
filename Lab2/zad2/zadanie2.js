function sum(x,y) {
    return x+y;
}

function sum_strings(a){
    let suma = 0;
    for(let el of a){
        let liczba = parseInt(el);
        if (!isNaN(liczba)){
            suma += liczba;
        }
    }
    return suma;
}

function digits(s){
    let suma_parzysta = 0;
    let suma_nieparzysta = 0;
    let liczba = 0;

    for(let el of s){
        if (el >= '0' && el <= '9'){
            liczba = parseInt(el);
            if(liczba % 2 === 0){
                suma_parzysta += liczba;
            }
            else {
                suma_nieparzysta += liczba;
            }
        }

    }
    return [suma_nieparzysta, suma_parzysta];
}

function letters(s){
    let male_litery = 0;
    let duze_litery = 0;

    for(let el of s){
        if (el.toLowerCase() !== el.toUpperCase()){
            if (el === el.toUpperCase()){
                duze_litery++;
            }
            else if (el === el.toLowerCase()){
                male_litery++;
            }
        }

    }
    return [male_litery, duze_litery];

}