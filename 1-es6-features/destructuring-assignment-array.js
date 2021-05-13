const helper = require('../helper')
const print = helper.print

const arr = ["apple", "orange", 5, 6, { id: 12, amount: 35 }]

// We de-structrure the array and assign to the variables, the index of the variables are mapping to the array
// Also, we can de-structure the object which is as a element in the array
const [fruit1, fruit2, number1, number2, { id, amount }] = arr

print("fruit1:", fruit1)      //fruit1: apple
print("fruit12:", fruit2)     //fruit12: orange
print("number1:", number1)    //number1: 5
print("number2:", number2)    //number2: 6
print("id:", id)              //id: 12
print("amount:", amount)      //amount: 35

