//Impresión en consola números pares e impares

export let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];

for(let i=0; i < numbers.length; i++){

    let calculation = numbers[i] % 2;

    if(calculation === 0){

        console.log('El número', numbers[i], 'es PAR');

    }else{

        console.log('El número', numbers[i], 'es IMPAR');
    }
}