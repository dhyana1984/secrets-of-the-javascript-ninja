# module mode
Expose the common interface via returning object, and keep the private variable and function active via closure which is created by the common interface
```javascript
//MouseCounterModule module is a IIFE in fact
const MouseCounterModule = function (){
    //This private variable will be called by interface only
    let numClicks = 0
    //This private function will be called by interface only
    const handleClick = () =>{
        console.log(++numClicks)
    }

    return {
        countClicks: () =>{
            document.addEventListener("click", handleClick)
        }
    }

}()

//We cannot do this
MouseCounterModule.numClicks //undefined
MouseCounterModule.handleClicks //undefined
//We can do this
MouseCounterModule.countClicks() //1


```
If we have to extend this kind of module, we can do it like below
```javascript
const MouseCounterModule = function (){
    let numClicks = 0
    const handleClick = () =>{
        console.log(++numClicks)
    }

    //Return the interface(object)
    return {
        countClicks: () =>{
            document.addEventListener("click", handleClick)
        }
    }

}()

/* This IIFE function is designed to extend the Module Model object,
 * but the problem is that original module and the extended module cannot share their own private variables and functions,
 * because they have their own domain.ß
 */ 
(function(module){
    //new private variable and function which could be called by new interface only
    let numScrolls = 0
    const handleScroll = () =>{
        console.log(++numScrolls)
    } 

    //Return the new interface
    module.countScrolls = () =>{
        document.addEventListener("wheel", handleScroll)
    }
//This is a IIFE as well but we have to pass the module that should be extended
})(MouseCounterModule)
```
