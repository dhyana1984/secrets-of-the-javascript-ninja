# IIFE(Immediately-Invoke Function Expression)
```javascript
(function(param){
    //do something
})(value)

(function(param){
    //do something
}(value))
```

# Argument and Parameter
**Argument is related to function declaration, parameter is related to function invoke**
```javascript
function getSomeData(argument){
    //...
}

getSomeData(parameter)
```

# The rest of parameter
**...rest must at the end of function argument**
```javascript
function restParameters(value1,value2, ...rest){
    //rest is a array that store other parameters
}
```