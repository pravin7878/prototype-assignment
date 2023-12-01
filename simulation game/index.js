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

function Car(brand, model, speed,fuelType,numberOfWheels){
    this.brand = Vehicle.brand.call()
    this.numberOfWheels = numberOfWheels;
}
let car = new Car('tata',2023,20,'petrol')
console.log(car);

// car.accelerate()
// console.log(car);

// car.brake()
// console.log(car);

// car.refuel()