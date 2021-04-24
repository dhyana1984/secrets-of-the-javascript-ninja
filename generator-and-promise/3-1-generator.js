const helper = require('../helper')
const print = helper.print

function* WeaponGenerator() {
    yield "Katana"
    yield "Wakizashi"
    yield "Kusarigama"
}

for (let weapon of WeaponGenerator()) {
    print(weapon)
    //Katana
    //Wakizashi
    //Kusarigama
}

