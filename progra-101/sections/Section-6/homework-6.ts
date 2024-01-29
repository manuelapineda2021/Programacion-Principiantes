/*Imprimir la siguiente tabla:
    1 2 3 4 5 
    2 4 6 8 10
    3 6 9 12 15
    4 8 12 16 20
    5 10 15 20 25
*/

export let numbers = [1, 2, 3 , 4, 5];

for(let i = 0; i < numbers.length; i++){

    let line = '';

    for(let x = 0; x < numbers.length; x++){

        line += ` ${numbers[i] * numbers[x]}`;
    }

    console.log(line);
}
