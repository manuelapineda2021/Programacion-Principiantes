export let base = 10;
let limit = 50;
let cont = 1;

do{
    
    let multiplication = base * cont;
    console.log(base, ' x ', cont, ' = ', multiplication );
    cont++;

}while(cont<=limit)