const helper = require('../helper')
const print = helper.print

function* WeaponGenerator1() {
    print("Now we are in WeaponGenerator, this is the 1st time to call next(), Katana will be returned")
    yield "Katana"
    print("We are back to WeaponGenerator again, this is the 2nd time to call next(), Wakizashi will be returned")
    yield "Wakizashi"
    print("this is the 3rd time to call next(), Wakizashi will be returned")
    yield "Kusarigama"
}
const iterator = WeaponGenerator1()
print(iterator.next())
// Now we are in WeaponGenerator, this is the 1st time to call next(), Katana will be returned
// { value: 'Katana', done: false }

print("We are in the main progress now")

print(iterator.next())
// We are back to WeaponGenerator again, this is the 2nd time to call next(), Wakizashi will be returned
// { value: 'Wakizashi', done: false }

print("We are in the main progress now")
print(iterator.next())
// this is the 3rd time to call next(), Wakizashi will be returned
// { value: 'Kusarigama', done: false }

print("We are in the main progress now")
print(iterator.next())  //{ value: undefined, done: true } all yield item are returned

