const helper = require('../helper')
const print = helper.print


const func1 = (a, b) => a + b

const func2 = _ => "empty"

const func3 = () => "empty"

const func4 = t => {
    const p = t * 5
    const res = Math.max(p, t)
    return res
}

const func5 = (t = 3) => {
    const p = t * 5
    const res = Math.max(p, t)
    return res
}

print(func1(1, 2))    // 3
print(func2())        //"empty"
print(func3())        //"empty"
print(func4(2))       //10
print(func5(2))       //10
print(func5())        //15