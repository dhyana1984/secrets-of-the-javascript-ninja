const helper = require('../helper')
const print = helper.print

function* NinjaGenerator(person) {  //This Generator has param
    let res = yield ("Jack " + person)
    /* If we pass param in the 2nd next("Bob"), the param will assign to last yield, 
     * so currently imposter is "Bob", and action was not changed (Lucy)
    */
    res = yield ("Tom (" + res + ") " + person)
    yield `${"Kate"} ${res} ${person}` // person is still Lucy

}

const ninjaIterator = NinjaGenerator("Lucy")   // "skulk" will pass to the "action" in first yield

const result1 = ninjaIterator.next()
print(result1.value)  //Jack Lucy

const result2 = ninjaIterator.next("Bob")
print(result2.value)  //Tom (Bob) Lucy (Be careful here, result2.value is not Tom (Jack Lucy) Bob)

const result3 = ninjaIterator.next("Peter")
print(result3.value)    //Lucy Peter Lucy

