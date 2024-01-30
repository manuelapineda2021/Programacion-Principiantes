//Crear una función que reciba como argumento un arreglo, la función debe retornar el
//nombre que tenga más letras del arreglo.

export function largestNameOfArray (nameHeroes:string[]){

    let lagerLetters = '';

    for(let i = 0; i < nameHeroes.length; i++){

        let hero = nameHeroes[i];

        if(hero.length > lagerLetters.length){

            lagerLetters = hero;
        }
        
    }

    return lagerLetters;


}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let heroe = largestNameOfArray(heroes);
console.log(`El nombre más largo es: ${heroe}`);