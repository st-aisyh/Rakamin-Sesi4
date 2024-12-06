// ENCAPSULATION
class Animal{
    #age /// Private
    constructor(name, food, energy, canReproduce, age){
        this.name = name;
        this.food = food;
        this.energy = energy
        this.canReproduce = canReproduce;
        this.#age = age;
    }
    //// Breaking Encapsulation
    get showKTH(){
        return this.#age
    }

    //// Tell Dont Ask (Encapsulation)
    isAdult(){
        return this.#age > 18
    }
}

export default Animal;
