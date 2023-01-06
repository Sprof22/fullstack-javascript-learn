class Pet {
    constructor(animal, age, breed, sound){
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;

    }

    sound(){
        console.log(this.sound);
    }
}

const ernie = new Pet('simba', 2, 'lion', 'roar');
const wazoo = new Pet('dog', 4, 'dog', 'bark');

console.log(ernie);
console.log(wazoo);