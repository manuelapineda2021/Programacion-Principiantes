export class Car {

    public readonly brand:string;
    public door:number;
    public fuelTank:number;
    public isRunning:boolean;
    public type:string;

    public readonly createdAt:number;

    constructor(brand:string, type:string){
        this.brand = brand;
        this.door = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;

        this.createdAt = 123456789;
    }

    public turnOn(){

        if(this.isRunning){

            console.log('El carro ya estaba encendido... Se daño el motor');
            return;
        }

        if(this.fuelTank <= 0 ){

            console.log('El carro no tiene gasolina');
            return;
        }

        this.isRunning = true;
        console.log('El carro está encendido');
        
    }

    public fillTank(gas: number){

        /*
        gas:number
        gas > 100, this.fuelTank = 100
        gas tiene positivo
        si ya está lleno, no sobre llenar
        si fuelTank es 90, y añado 50, fuelTank debería de ser 100
        */

        if(gas <= 0){
            console.log('El gas tiene que ser positivo');
            return;
        }

        let newFuelTank = this.fuelTank + gas;

        if(newFuelTank >= 100){
            newFuelTank = 100;
        }
            
        this.fuelTank = newFuelTank;
        
    }
}

let myMazda = new Car('Mazda', 'Sedán');
//console.log(myMazda);
//myMazda.turnOn();
//myMazda.fillTank(50);
console.log(myMazda);

