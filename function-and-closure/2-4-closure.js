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

// We can visit _level in the instance by displayLevel method even if currently the main process was exited from Person
print("jack's level:", jack.displayLevel()) // jack's level: 1

// We event update _level
jack.levelUp()

// Then read _level again, this is the closure
print("jack's current level:", jack.displayLevel()) // jack's current level: 2

