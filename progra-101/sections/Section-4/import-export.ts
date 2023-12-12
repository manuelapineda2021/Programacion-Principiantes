import { 
    addTwoNumbers,
    substractTwoNumbers,
    timesTwoNumbers,
    divideTwoNumbers } from "../../helpers/math-helpers";


let num1:number = 50;
let num2:number = 10;

let totalAdd:number = addTwoNumbers(num1, num2);
let totalSubstract:number = substractTwoNumbers(num1, num2);
let totalTimes:number = timesTwoNumbers(num1, num2);
let totalDivide:number = divideTwoNumbers(num1, num2);

console.log('El total de la suma es: ', totalAdd);
console.log('El total de la resta es: ', totalSubstract);
console.log('El total de la multiplicación es: ', totalTimes);
console.log('El total de la división es: ', totalDivide);