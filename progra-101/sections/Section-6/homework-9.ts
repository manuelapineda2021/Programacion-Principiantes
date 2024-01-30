//Crear una función que reciba un arreglo como argumento, la función debe de retornar un
//nuevo arreglo pero filtrnado todos los nombres que empiezan con una letra determinada.

export function heroesThatStartsWith (nameHeores:string[], letter:string){

    let newHeores: string[] = [];

    for(let i = 0; i < nameHeores.length; i++){

        let heroe = nameHeores[i];
        
        if(heroe.startsWith(letter)){

            newHeores.push(heroe);
        }
    }

    return newHeores;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Capitain Marvel'];
let herosWithLetters = heroesThatStartsWith(heroes, 'D');
console.log(herosWithLetters);