//Crear una función que reciba 3 argumentos numéricos y dicha función debe de 
//determinar cuál es el mayor de los 3 y retornalo.


export function max (num1: number, num2: number, num3:number){

    let numbers = [num1, num2, num3];
    let maxnumber = -9999;

    for(let i = 0; i < numbers.length; i++){

        if(maxnumber < numbers[i]){

            maxnumber = numbers[i];

        }
    }

    return maxnumber;

    //SOLUCIÓN POR EL PROFESOR
    // if(num1 < num2){
    //     return (num1>num3) ? num1 : num3;
    // }

    // if(num2 > num3){
    //     return num2;
    // }

    // return (num1 > num3) ? num1 : num3;
}

let maxValue = max(20, 2, 6);
console.log(`El número mayor es: ${maxValue}`);