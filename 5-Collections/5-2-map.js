const helper = require('../helper')
const print = helper.print


const directory = new Map();

directory.set("Jack", "+81 26 6462");
directory.set("Tom", "+81 52 2378 6462");
directory.set("Bob", "+81 76 277 46");

for (let item of directory) {
    print("key:", item[0], ", value:", item[1])
}


for (let key of directory.keys()) {
    print("key:", key, "value:", directory.get(key))
}

for (let value of directory.values()) {
    print(value)
}

print("directory has Tom?", directory.has("Tom"))
print("How many element in directory?", directory.size)




const obj = { a: 1 }
const objConstructor = obj.constructor
const dictConstructor = directory.get("constructor")


print(objConstructor)       // Function Object，我并没有在obj上定义叫做constructor的键，但是却找到值
print(dictConstructor)      // undefined

let map = {}
map[5] = "foo"


print(map["5"]) //foo

key1 = {}
key2 = {}
map[key1] = "foo"

print(map[key2]) // foo 我在map中有定义key2这个键，但是却找到了值，并且和key1的值一样



const privates = new WeakMap();

function Public() {
    const private_data = {
        /* 私有变量和私有方法 */
    };

    privates.set(this, private_data);
}

Public.prototype.method = function () {
    const private_data = privates.get(this);
    /* 利用private_data里面的私有变量和方法进行相关操作 */
}



