// CREATING VEHICLE CLASS
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

}

// CREATING SUB CHILD CLASS NAMED CAR OF PARENT CLASS VEHICLE
class Car extends Vehicle {
    constructor(make,model,year,numberOfDoors) {
        super(make,model,year); // BINDING THE PARENTS CLASS CONSTRUCTOR
        this.numberOfDoors = numberOfDoors;
    }
    showDetails() {
        console.log('-------------------------------------');
        console.log(`Vehicle Make: ${this.make}`);
        console.log(`Vehicle Model: ${this.model}`);
        console.log(`Vehicle Year: ${this.year}`);
        console.log(`Number of Doors: ${this.numberOfDoors}`);
        
    }
}

// CREATING SUB CHILD BIKE NAMED CAR OF PARENT CLASS VEHICLE
class Bike extends Vehicle {
    constructor(make,model,year,hasSideCar) {
        super(make,model,year); // BINDING THE PARENTS CLASS CONSTRUCTOR
        this.hasSideCar = hasSideCar;
    }
    showDetails() {
        console.log('-------------------------------------');
        console.log(`Vehicle Make: ${this.make}`);
        console.log(`Vehicle Model: ${this.model}`);
        console.log(`Vehicle Year: ${this.year}`);
        console.log(`Has sidecar: ${this.hasSideCar?'YES':'NO'}`);
        
    }
}

// CREAING OBJECT 
const car1 = new Car("Toyota", "Corolla", 2022, 4);
const bike1 = new Bike("Harley", "Street 750", 2021, true);

// CALLING METHOD OF EACH OBJECT
car1.showDetails();
bike1.showDetails();