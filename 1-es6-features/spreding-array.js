const helper = require('../helper')
const print = helper.print

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]

// const arrCombinate = [...arr1, ...arr2]
// print(arrCombinate)     //[1, 2, 3, 4, 5, 6]

// //it's the same as arr1.concat(arr2)
// print(arr1.concat(arr2))    //[1, 2, 3, 4, 5, 6]

// //You can use this spread operation to return a new Array object with the same element
// const arr3 = [...arr1]
// print(arr3)             //[1, 2, 3]
// print(arr3 === arr1)    //false

// //Also, you can use spread operation to delcare a function with un-definded length parameter 
// const func = (...param) => {
//     const paramArrary = [...param]
//     print(`There is ${paramArrary.length} param(s) as below: `)
//     paramArrary.forEach(p => print(p))
// }

// //There is 2 param(s) as below: 
// //a
// //b
// func("a", "b")

// //There is 1 param(s) as below: 
// //88
// func(88)

// //There is 3 param(s) as below: 
// //11
// //23
// //China
// func(11, 23, "China")


//The typical sample:
const res1 = Math.max(1, 2, 3, 4, 5)
print("Math.max(1, 2, 3, 4, 5):", res1) //Math.max(1, 2, 3, 4, 5): 5

const res2 = Math.max([1, 2, 3, 4, 5])
print("Math.max([1, 2, 3, 4, 5]):", res2) //oooops, Math.max([1, 2, 3, 4, 5]): NaN

//If we want to find the max one in a array, we need to use "apply" or "call"
const res3 = Math.max.apply(null, [1, 2, 3, 4, 5])
print("Math.max.apply(null, [1, 2, 3, 4, 5]):", res3) //Math.max.apply(null, [1, 2, 3, 4, 5]): 5

//But we can use spreding syntax to spred the array as parameter in Math.max function
const res4 = Math.max(...[1, 2, 3, 4, 5])
print("Math.max(...[1, 2, 3, 4, 5]):", res4) //Math.max(...[1, 2, 3, 4, 5]): 5

