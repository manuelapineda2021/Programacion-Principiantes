export function printMultiplicationTable(base:number, limit:number = 10){

    let cont = 1;
    
    if(limit <=0){

        throw new Error('No existe tablas de multiplicar menores o iguales que cero. Intentalo de nuevo!');
    }

    do{
        console.log(base + 'X' + cont + '=' + base*cont);
        cont++;

    }while(cont<=limit);

}