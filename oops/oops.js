// use of new keyword in creating real-time entity

const bikeObj = {
  brand: "Yamaha",
  model: "R15",
};

console.log("Normal Obj", bikeObj);

// above simple object is tend to change the contents or elements of it

// so there is need to create a definite object called Bike

// We need to create a blueprint
// kind mould to create multiple objects of the same type/kind

// Introduced in ES6
class Bike {}

const Yamaha = new Bike(); // new means using the class to create new type of it
// new is used  to create a new instance of the class

const Honda = new Bike(); // second instance of the same Bike class

console.log("Yamaha", Yamaha);
console.log("Honda", Honda);

// instanceOf --> can check whether an object belongs to this instance
// bikeObj instanceof Object
// true
// Yamaha instanceof Object
// true
// bikeObj instanceof Bike
// false
// Yamaha instanceof Bike;
// true
// Bike instanceof Object
// true
