const helper = require('../helper')
const print = helper.print

function Person({ name, age, level }) {
    this.name = name
    this.age = age
    let _level = level

    this.levelUp = () => {
        print(`${name} level up!`)
        _level++
    }

    this.displayLevel = () => {
        return _level
    }
}

const jack = new Person({ name: "Jack", age: 25, level: 1 })

print("jack:", jack)    //We cannot see "_level" here
print("jack's age:", jack.age) //25

Person.address = "lake road"
Person.setAddress = (address) => {
    Person.address = address
    print("Person's static address updated!")
}

print("Person's static address:", Person.address) // lake road
Person.setAddress("center street")
print("Person's static address:", Person.address) // center street

/* 
 * Please note here, the constructor property of instance is the instance's costuctor function, 
 * jack.constructor is pointed to "Person", so I can get the "Person"'s address property by using jack.constructor.address
 */
print("jack's constructor address:", jack.constructor.address) //jack's address: center street
print(jack.constructor === Person) // true
print("jack's address:", jack.address)  //undefined, we cannot visit static method in instance

print("jack's level:", jack.displayLevel()) // jack's level: 1
jack.levelUp()
print("jack's current level:", jack.displayLevel()) // jack's current level: 2

// const tom = new Person({ name: "Tom", age: 21, level: 3 })
// print("tom's level:", tom.displayLevel()) //tom's level: 3