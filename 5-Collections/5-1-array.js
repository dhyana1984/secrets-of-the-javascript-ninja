const helper = require('../helper')
const print = helper.print


const arr = [1, 2, 3, 4, 5]

let res = arr.find(t => t === 3)
print(res)            //3, find返回一个元素

res = arr.filter(t => t > 2)
print(res)            //[3,4,5], filter返回一个新数组

res = arr.includes(1)
print(res)              //true

res = arr.pop()
print(arr)              //[1,2,3,4]
print(res)              //6

res = arr.push(5)
print(arr)              //[1,2,3,4,5]
print(res)              //5

res = arr.shift()
print(arr)              //[2,3,4,5]
print(res)              //1

res = arr.unshift(1)
print(arr)              //[1,2,3,4,5]
print(res)              //5, 



arr.forEach(t => print(t)) // 1 2 3 4 5

res = arr.map(t => t + 1) //[2,3,4,5,6]
print(res)

res = [...arr]
print(res)          //[1,2,3,4,5] 
print(res === arr)  //



arr.splice(1, 3)
print(arr)          //[ 1, 5 ]

arr.splice(0, 2, 1, 2, 3, 4, 5)
print(arr)                      //[1,2,3,4,5]

arr.sort((a, b) => a - b)
print(arr)                      //[1,2,3,4,5]
arr.sort((a, b) => b - a)
print(arr)                      //[5,4,3,2,1]