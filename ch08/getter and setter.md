# Using getter and setter to simulate private variable
```javascript
function Ninja() {
    // this is the private variable
    let _skillLevel = 0;

    // note the first param "this".
    Object.defineProperty(this, 'skillLevel', {
        get: () => {
            return _skillLevel;
        },
        set: value => {
            _skillLevel = value;
        }
    });
}

const ninja = new Ninja();
console.log(ninja.skillLevel)
```