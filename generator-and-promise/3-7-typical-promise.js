
const helper = require('../helper')
const print = helper.print


const myPromise = new Promise((resolve, reject) => {
    resolve("fullfilled!");
    reject("An error resolving a promise!") // this will be ignored because promise status will not change
})

myPromise.then(data => {
    print(data) //fullfilled!
}, err => {
    print(err) // will not execute now
})


const myPromise1 = new Promise((resolve, reject) => {
    reject("An error resolving a promise!");
})

/*
 .then() contains 2 callbacks, the 1st one will be called when fulfilled,
 the 2nd one will be called when rejected
*/
myPromise1.then(data => {
    print(data) // will not execute
}, err => {
    print(err) // An error resolving a promise!
})

/*
    Also, we can use .catch as the rejected callback as the chain expression,
    it's more simple
*/
myPromise1.then(data => print(data))
    .catch(err => print(err)) //An error resolving a promise!


const promise = new Promise((resolve, reject) => {
    undeclaredVariable++;   //undeclaredVariable is not declared, a exception will be thrown here
});

// .catch will handle the exception in primise
promise.then(() => print("Happy path, won't be called!"))
    .catch(error => print("The promise was rejected because an exception was thrown!")) //The promise was rejected because an exception was thrown!
