# CommonJS mode to create a module
* Use module.exports to define the interface object rather than return
* The default module utilized in Node.js
* One file is one module, it's designed for server side
* Don't support for browser, need Browserify or RequireJS to support browser

```javascript
//MouseCounterModule.js
const $ = require("jQuery")
 let numClicks = 0
const handleClick = () =>{
    console.log(++numClicks)
}

module.exports = {
    countClicks: () =>{
        $(document).on("click", handleClick)
    }
}
```
