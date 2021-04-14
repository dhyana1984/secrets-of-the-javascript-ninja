# prototype
Every function has a prototype object, and the prototype object will be set as prototype of the new function created by this function

# constructor
The constructor object of an object will be pointed to the construction function it self
```javascript
const Ninja = ()=>{

}
//Ninja.prototype.constructor is Ninja

const ninja = new Ninja()
//ninja.prototype is Ninja
//ninja.prototype is Ninja.prototype.constructor as well

//this is the same as const ninja = new Ninja()
const ninja1 = new Ninja.prototype.constructor()

```

# prototype chain
## redefine prototype
```javascript
    function Person() { }
    Person.prototype.dance = function () { };

    function Ninja() { }
    //set Ninja's prototype as instance of Person to inherit Person
    //now Ninja.prototype.constructor is missing
    Ninja.prototype = new Person();

    //ninja.prototype is not Ninja anymore
    const ninja = new Ninja()

    //but when re-write Ninja.prototype, the constructor will be missing, so we have to re-define Ninja.prototype's constructor
    Object.defineProperty(Ninja.prototype, "constructor", {
        enumerable: false,
        value: Ninja,
        writable: true
    });

    // now ninja1.prototype is Ninja
    const ninja1 = new Ninja()
```
Don't use Ninja.prototype = Person.prototype to implement the inherit, because all the changin in Person will happen in Ninja as well.

# class keyword
## class is the ES6 syntax, it's the syntactic sugar of prototype inherit
```javascript
const Ninja = name => this.name = name // this is construtor function

Ninja.prototype.swingSword = () => true // this is a instance method

Ninja.compare = (ninja1, ninja2) => ninja1.level - ninja2.level //this is a static(class) method
```
below code is the same as above

```javascript
class Ninja{
    constructor(name){      // this is construtor function
        this.name = name
    }

    swingSword = () => true // this is a instance method

    static compare = (ninja1, ninja2) => ninja1.level - ninja2.level //this is a static(class) method
}

```
## inherit between class and common constructor function
```javascript
function Person(name){
    this.name = name
}
Person.prototype.dance = function(){
    return true
}

function Ninja(name, weapon){
    this.name = name
    this.weapon = weapon
}
Ninja.prototype.wieldWeapon = function(){
    return true
}

const weapon = Ninja.prototype.name
Ninja.prototype = new Person(weapon)

// don't forget this!
Object.defineProperty(Ninja.prototype, "constructor", {
    enumerable: false,
    value: Ninja,
    writable: true
});

const ninja = new Ninja("Tom","Knife")
```

below code is the same as above

```javascript
class Person{
    constructor(name){
        this.name = name
    }

    dance(){
        return true
    }
}

class Ninja extends Person{ // use key word extends to inherit
    constructor(name, weapon){  
        super(name)    
        this.weapon = weapon
    }

    wieldWeapon(){
        return true
    }
}

const ninja = new Ninja("Tom","Knife")


```