const helper = require('../helper')
const print = helper.print


function Ninja(name) {
    this.name = name
}
Ninja.prototype.swingSword = () => true
Ninja.compare = (ninja1, ninja2) => ninja1.level - ninja2.level


// This is the same as above
class Ninja {
    constructor(name) {
        this.name = name
    }
    //The instance method in class actually is the property method in constructor function
    swingSword = () => true

    //The static method in class in actually the constructor function method
    static compare = (ninja1, ninja2) => ninja1.level - ninja2.level
}


