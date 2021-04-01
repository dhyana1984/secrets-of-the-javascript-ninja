**time counter**
```javascript
console.time("my operation")
const maxCount = 10 //define the times for running code
for(let i =0; i< maxCount; i++){
    /*perform the operation to be measured*/
}
console.timeEnd("my operation")
```
