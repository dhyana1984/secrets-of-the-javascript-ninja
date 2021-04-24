const helper = require('../helper')
const print = helper.print

function* WarriorGenerator() {
    yield "Sun Tzu"
    yield* NinjaGenerator() // we can yield a Generator, but we still have to add * before the Generator name
    yield "Genghis Khan"
}

function* NinjaGenerator() {
    yield "Hatori"
    yield "Yoshi"
}

for (let warrior of WarriorGenerator()) {
    // Item in NinjaGenerator will be returned in 1 time if we traverse the iterator
    print(warrior)
    // Sun Tzu
    // Hatori
    // Yoshi
    // Genghis Khan
}

const iterator = WarriorGenerator()

//But the NinjaGenerator will return yield item 1 by 1 when we call next manually
print(iterator.next().value)        // "Sun Tzu"
print(iterator.next().value)        //Hatori
print(iterator.next().value)        //Yoshi
print(iterator.next().value)        //Genghis Khan


