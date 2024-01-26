//¿Cuál es el número mayor?

export let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let largestNumber = -999999;

for(let i=0; i < numbers.length; i++){

    if(largestNumber < numbers[i]){

        largestNumber = numbers[i];
    }

}

console.log('El número mayor que se encuentra en el arreglo es:', largestNumber);