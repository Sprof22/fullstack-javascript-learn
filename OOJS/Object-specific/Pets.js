class Pet {
    constructor(animal, age, breed, sound){
        this.animal = animal;
        this.age = age;
        this.breed = breed;
        this.sound = sound;

    }

    get activity(){
        const today = new Date();
        const hour = today.getHours();

        if (hour > 8 && hour <= 20 ){
            return 'playing'

        } else {
            return 'sleeping'
        }

    }
    get owner () {
        return this._owner;
    }

    set owner (owner){
        this._owner = owner;
        console.log('setter called')
    }

    sound(){
        console.log(this.sound);
    }
}

class Owner {
    constructor (name , address){
        this.name = name;
        this.address = address;
    }
    
    set phone(phone){
        const phoneNormalized = phone.replace(/[^0-9]/g, '')
        this._phone = phoneNormalized;
    }

    get phone (){
        return this._phone
    }
}

const ernie = new Pet('simba', 2, 'lion', 'roar');
const wazoo = new Pet('dog', 4, 'dog', 'bark');

console.log(ernie);
console.log(wazoo);

ernie.owner= new Owner('Big Shaq', '1 Nyam Shom');
ernie.owner.phone = '(+234) 8133122'

console.log(ernie.owner);