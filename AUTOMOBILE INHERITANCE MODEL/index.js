let Fourwheelsvehical = {
    speed: 240,
    fiultype: 'petrol',
    numofwiheels: 4
}

   function Car(model,brands,typeofengin){
    this.model = model;
    this.brands = brands;
    this.typeofengin = typeofengin;
}

Car.prototype = Fourwheelsvehical
let car1 =new Car(2023,'tata', 'non electric')
console.log(car1)

let car2 =new Car(2024,'bmw', 'non electric')
console.log(car2)

console.log(car2.speed);

