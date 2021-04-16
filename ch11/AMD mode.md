
# AMD mode to create module
* Create new module with ID, other part can use this module by ID
* Current module will automatically handle the dependency, as we only have to input the dependency list
* The dependency will load by async if from remote
* Multiple module can be defined in one file
* Designed for browser

```javascript
define(
    "MouseCounterModule", 
    ["JQuery"], //input the dependency list, the order is not mandatory
    $ => {ß
        let numClicks = 0
        const handleClick = () =>{
            console.log(++numClicks)
        }

        return {
            countClicks: () =>{
                $(document).on("click", handleClick)
            }
        }
})
```