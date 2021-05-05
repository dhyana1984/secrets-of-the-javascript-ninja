const helper = require('../helper')
const print = helper.print


let myset = new Set([1, 2, 3, 4, 5, 6, 6])
print(myset)    //{1,2,3,4,5,6}

myset = new Set([...[1, 2, 3], ...[2, 3, 5]])
print(myset)    // {1,2, 3,5}

const arr = [...myset]
print(arr)      //[1,2,3,5]


const arrA = new Set([1, 2, 3])
print("arrA:", arrA)
const arrB = new Set([4, 3, 2])
print("arrB:", arrB)

//union
const union = new Set([...arrA, ...arrB])
print("arrA union arrB:", union) //arrA union arrB: Set(4) { 1, 2, 3, 4 }

//intersection
const intersect = new Set([...arrA].filter(x => arrB.has(x)))
print("arrA intersect arrB:", intersect)    //arrA intersect arrB: Set(2) { 2, 3 }

//difference
let difference = new Set([...arrA].filter(x => !arrB.has(x)))
print("arrA diff from arrB:", difference)   //arrA diff from arrB: Set(1) { 1 }




