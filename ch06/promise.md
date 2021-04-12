# Promise
## concurrency promiese
```javascript
const getData1 = async(param) =>{
    const res = await fetchDataMethod1(param)
    return res
}

const getData2= async(param) =>{
    const res = await fetchDataMethod2(param)
    return res
}
const getData = async (p1, p2) =>{
    const [res1, res2] = await Promise.all(getData1(p1), getData2(p1))
  
    //Some logic with res1 and res2
} 

const anotherWayToGetData = async (p1, p2) =>{
    const promise1 = getData1()
    const promise2 = getData2()

    let res1, res2

    res1 = await promise1
    res2 = await promise2

    //Some logic with res1 and res2
} 



const someFunctionToTriggerGetData = async (p1, p2) =>{
    await getData(p1,p2)
    // some other logic
    //This is the same as below
    // getData(p1,p2).then(res => {
    //     // some other logic
    // })
}


```
