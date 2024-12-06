// OOP
/// ENCAPSULATION
import Animal from "./Animal.js";
import Mammal from "./Mammal.js";

const elephant = new Animal("Gajah", "Herbivore", 100, true,100);
const tiger = new Animal("Macan", "Carnivore", 50, true,19);
const orangutan = new Mammal("Orangutan", "Omnivore", 200, true,21);

console.log(orangutan);
console.log(tiger.isAdult())
console.log(typeof(tiger));

console.log(elephant);
console.log(tiger.food);
console.log(tiger.showKTH());
console.log(tiger.isAdult());