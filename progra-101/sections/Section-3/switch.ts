export let weekDay:number = 4; //1=Lunes; 2=Martes; 3=Miércoles; ...

if(weekDay<=0){

    throw new Error('Día de la semana NO permitido')
}

switch(weekDay){

    case 1:
        console.log('Es Lunes');
        break;
    
    case 2:
        console.log('Es Martes');
        break;
    
    case 3:
        console.log('Es Miércoles');
        break;
    
    default:
        console.log('No es Lunes, Martes o Miércoles');
}