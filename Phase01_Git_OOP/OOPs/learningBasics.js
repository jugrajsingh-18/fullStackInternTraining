// CREATING A CLASS
class Person{

}

// CREATING A CLASS WITH CONSTRUCTOR
class Train{
    constructor(){
        console.log("constructor of Train class called");
    }
}

// CREATING AN OBJECT OF CLASS TRAIN
var myTrain1 = Object.create(Train) // CREATING OBJECT USING "Object.create(className)"
var myTrain2 = new Train(); // CREATING OBJECT USING "new" KEYWORD

// CREATING PARAMETERIZED CONSTRUCTOR
class  Mobile{
    constructor(brand,color){
        this.color = color;
        this.brand=brand;
        console.log(`Constructor called from Mobile class, your mobile brand is ${brand} and mobile color is ${color}`);
    }
}
var mobile1 = new Mobile("Oneplus", "white")
var mobile2 = new Mobile("iPhone", "orange")

// CREATING METHOD IN CLASS
class Car{
    constructor(brand,color){
        this.brand = brand;
        this.color = color;
    }
    showDetails(){
        console.log(`Your car brand is ${this.brand} and color is  ${this.color}`);
    }
}

var car1 = new Car("porsche","black");
var car2 = new Car("cadillac","white");

// CALLING METHOD "showDetails"
car1.showDetails();
car2.showDetails();
