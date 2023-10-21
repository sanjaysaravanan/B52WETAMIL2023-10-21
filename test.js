class Bike {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
}

Bike.prototype.isTwoWheeler = true;

const Yamaha = new Bike("Yamaha", "R15");

console.log(Yamaha);
