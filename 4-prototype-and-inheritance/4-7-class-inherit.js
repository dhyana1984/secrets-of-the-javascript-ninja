function Person(name) {
    this.name = name
}
Person.prototype.dance = function () {
    return true
}

function Ninja(name, weapon) {
    this.name = name
    this.weapon = weapon
}
Ninja.prototype.wieldWeapon = function () {
    return true
}

const weapon = Ninja.prototype.name
Ninja.prototype = new Person(weapon)

// don't forget this!
Object.defineProperty(Ninja.prototype, "constructor", {
    enumerable: false,
    value: Ninja,
    writable: true
});

const ninja = new Ninja("Tom", "Knife")

//below code is the same as above

class Person {
    constructor(name) {
        this.name = name
    }

    dance() {
        return true
    }
}

class Ninja extends Person { // use key word extends to inherit
    constructor(name, weapon) {
        super(name)
        this.weapon = weapon
    }

    wieldWeapon() {
        return true
    }
}

const ninja = new Ninja("Tom", "Knife")