function Vehicle (brand, model, speed,fuelType){
    this.brand = brand;
    this.model = model;
     this.speed = speed;
     this.fuelType = fuelType;
}

Vehicle.prototype.brake = function(){
    this.speed -= 10;
}

Vehicle.prototype.accelerate = function(){
    this.speed += 20;
}

Vehicle.prototype.refuel= function(){
console.log(`${this.brand} is refueling`)
}

// constrector function for creating car
function Car(brand, model, speed,fuelType,numberOfWheels){
    Vehicle.call(this,brand, model, speed,fuelType)
    this.numberOfWheels = numberOfWheels;
}

Object.setPrototypeOf(Car.prototype,Vehicle.prototype)
let car1 = new Car('tata',2023,20,'petrol',4)
console.log(car1);

car1.accelerate()
car1.brake()

console.log(car1)
// car.refuel()

// constrector function for Airplane
function Airplane(brand, model, speed,fuelType,numberOfEngines,hasLandingGear){
Vehicle.call(this,brand, model, speed,fuelType);
this.numberOfEngines = numberOfEngines;
this.hasLandingGear  = hasLandingGear
}
Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype)

Airplane.prototype.TekeOff = function(){
    console.log(`${this.brand} is Off`)
}
let airplane1 = new Airplane('tata',2023,100,'petrol',2,'yes')
airplane1.accelerate()
airplane1.TekeOff()
console.log(airplane1)
