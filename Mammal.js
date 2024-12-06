// INHERITANCE
import Animal from "./Animal.js";
class Mammal extends Animal{
    constructor(name, food, energy, canReproduce, age) {
        super(name, food, energy, canReproduce, age)
    }

    /// Polymorphism
    isAdult(){
        return this.getAge() > 50
    }
}
export default Mammal;