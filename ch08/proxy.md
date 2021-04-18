# proxy
## How to use proxy
When get or set a value in object, "get" and "set" will be triggered
```javascript
const emperor = { name: "Komei" };

//when set or get value, "get" and "set" will be triggered
const representative = new Proxy(emperor, {
    get: (target, key) => {
    report("Reading " + key + " through a proxy");
    return key in target ? target[key]
                            : "Don’t bother the emperor!"
    },
    set: (target, key, value) => {
    report("Writing " + key + " through a proxy");
    target[key] = value;
    }
});	
```

When invoke a function, "apply" will be triggered
```javascript
function isPrime(number){
    if(number < 2) { return false; }
                
    for(let i = 2; i < number; i++) {
    if(number % i == 0) { return false; }
    }
                
    return true;
}

 isPrime = new Proxy(isPrime, {
        apply: (target, thisArg, args) => { // this will trigger if isPrime is invoked as a function
        console.time("isPrime");
                        
        const result = target.apply(thisArg, args);
                                            
        console.timeEnd("isPrime");
                        
        return result;					
        }
    });				
```
### When using for-in syntax, "enumerate" will be triggered
### When set property or get property, "getPropertyOf" and "setPropertyOf" will be triggered
### When using "new" operation, "construc" will be triggered


# Using proxy to inspect the performance
```javascript
    function isPrime(number){
        if(number < 2) { return false; }
                    
        for(let i = 2; i < number; i++) {
        if(number % i == 0) { return false; }
        }
                    
        return true;
    }
                
    isPrime = new Proxy(isPrime, {
        apply: (target, thisArg, args) => {
        console.time("isPrime");
                        
        const result = target.apply(thisArg, args);
                                            
        console.timeEnd("isPrime");
                        
        return result;					
        }
    });							
                    
    isPrime(1299827);
``` 
# Using proxy to auto set property
```javascript
function Folder() {
    return new Proxy({}, {
    get: (target, property) => {
        report("Reading " + property);
        
        if(!(property in target)) {
            target[property] = new Folder();
        }

        return target[property];
    }
    });
}

const rootFolder = new Folder();

try {
    rootFolder.ninjasDir.firstNinjaDir.ninjaFile = "yoshi.txt";
    pass("An exception wasn’t raised");
}
catch(e){
    fail("An exception has occurred");
}
```