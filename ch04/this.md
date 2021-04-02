# "this" in the function that invoked directly
In the strict mode, "this" will return undefined
```javascript
function fn(){
    "use strict"
    return this 
}

fn() // "this" is undefined
```
In the normal, "this" is global context. In web broser environment, this is "window" object 
```javascript
function fn(){
    return this //window object in browser
}

fn() // "this" is window object in browser
```

- for top level function, "this" is point to window object
- for method function, "this" is point to the object that method belongs to 
- for constructor function, "this" is point to a new object that create by "new" syntax

# For arrow function, "this" is always point to the context when arrow function was created
```javascript
function Obj(){
    this.method = () => this // "this" in the arrow function is point to Obj
}

const obj1 = new Obj()
obj1.method() // "this" in obj1 is point to obj1(the new object) when the constructor function executed
```

# bind is the same like apply and call, which are the method of function, bind will create a new function the same as original function, but no matter how to invoke the function, the "this" will point to the parameter pass to bind()
```javascript

//...
const button ={
    clicked:false,
    click: function(){
        this.clicked = true
    }
}
const ele = document.getElementById("button")
//
ele.addEventListener("click", button.click.bind(button))
```