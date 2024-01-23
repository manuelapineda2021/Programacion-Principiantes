export interface Person {
    name:string;
    age:number;
    isActive: boolean;
}

//no importa el orden de las propiedades
//se recomienda ordenan en orden alfabetico

let manuela: Person = {
    age: 24,
    isActive: true,
    name: 'Manuela',
}

let henry: Person = {
    age: 38,
    isActive: false,
    name: 'Henry'
}

let hakuna: Person = {
    age: 3,
    isActive: false,
    name: 'Hakuna'
}

let people: Person[] = [manuela, henry, hakuna];

for(let i=0; i< people.length; i++){
    let person = people[i];
    console.log(person.name + ' ' + person.age);
}