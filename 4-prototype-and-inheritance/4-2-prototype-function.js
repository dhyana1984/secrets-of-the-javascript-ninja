const helper = require('../helper')
const print = helper.print


function Person() {

}

Person.prototype.run = () => {
    print("Person running!")
}

Person.prototype.age = 25
Person.prototype.addAge = () => {
    Person.prototype.age++
}

const jack = new Person()
const tom = new Person()
jack.run()          //"Person running"
tom.run()           //"Person running"
print("jack's prototype's age:", jack.age)      //jack's prototype's age: 25
print("tom's prototype's age:", tom.age)        //tom's prototype's age: 25
jack.addAge()
print("tom's prototype's age:", tom.age)        //tom's prototype's age: 26
print("jack's prototype's age:", jack.age)      //jack's prototype's age: 26
jack.age = 30                                   //define the same property in object will rewrite prototype property
jack.addAge()
print("jack's prototype's age:", jack.age)      //jack's prototype's age: 30, this is not prototype property any more
print("tom's prototype's age:", tom.age)        //tom's prototype's age: 27, this is still the prototype property




