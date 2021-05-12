const helper = require('../helper')
const print = helper.print

const person = {
    nickName: "Jack",
    age: 25,
    gender: "male",
}

// We assign the value of property to the variables by de-structrue the "person" object
let { nickName, age, gender } = person
print(nickName)   //"Jack"
print(age)        //25
print(gender)     //"male"

const company = {
    manager: "Tom",
    address: {
        road: "lake road",
        number: 32
    }
}

// We are even able to assign the  value of property from a sub-object. Please note the structure
let { manager, address: { road, number } } = company
print(manager)    //"Tom"
print(road)       //"lake road"
print(number)     //32
// print(address)    //What is the output of "address"?
