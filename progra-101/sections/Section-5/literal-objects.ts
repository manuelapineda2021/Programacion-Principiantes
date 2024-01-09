export let person = {
    name: 'Melissa',
    age: 30,
    isActive: true,
    hobbies: ['soccer', 'swimming', 'baseball'],
    toString(){
        let objectString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log(objectString); 
    }
}

console.log(person);
person.toString();

