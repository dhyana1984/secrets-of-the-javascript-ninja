const helper = require('../helper')
const print = helper.print


function Animal() {
    this.animalRun = () => {
        print("animal is running!")
    }
}

function Dog() {

}
Dog.prototype = new Animal()


function Bichon() {

}
Bichon.prototype = new Dog()
const bichon = new Bichon()
console.log(bichon)

function Foo() {

}
Foo.prototype = new Bichon()


const foo = new Foo()
console.log(foo)
foo.animalRun()

