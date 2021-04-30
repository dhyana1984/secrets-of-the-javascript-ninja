const helper = require('../helper')
const print = helper.print

function Person() { }
Person.prototype.dance = function () { }

function Ninja() { }
const ninja = new Ninja()
print(ninja instanceof Ninja)   //true

Ninja.prototype = new Person()

// If we change the prototype, instanceof will return false
// JavaScript chain will check if Ninja.prototype is in ninja's prototype chain
print(ninja instanceof Ninja)   //false

// Basic type verificication
print(typeof (1) === 'number') // true


