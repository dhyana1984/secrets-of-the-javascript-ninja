const helper = require('../helper')
const print = helper.print

const subObj1 = {
    age: 20,
    nickName: "Tom",
    idCard: 1234567
}

const subObj2 = {
    id: 2,
    amount: 5,
    number: 108
}

const subObj3 = {
    id: 1,
    amount: 8,
    number: 112
}

const parentObj = {
    subObj1: subObj1,
    subObj2    //This is a new feature as well
}

const spreadParentObj = { ...parentObj }
const spreadSubObj = { ...subObj1, ...subObj2 }

print("parentObj:", parentObj)
print("spreadParentObj:", spreadParentObj)  // The same as parentObj
print("spreadSubObj:", spreadSubObj)     //Combined subObj1 and subObj2 as a new object

// const spreadTheSamePropertyObj = { ...subObj2, ...subObj3 }
// // print(spreadTheSamePropertyObj)     // What is the result?

// //Get the rest of the objects
// const { id, age, ...rest } = spreadSubObj
// print("id:", id)
// print("age:", gae)
// print("rest:", rest)

// //We can set the default value(we can do this in Array spreading as well)
// //This is very good method to avoid exception when you get the result from API and de-structure assign to variables
// const { ClientId = 500000, CustomerId = 122, HierarchyId = "00000000-128" } = { ClientId: 500209, CustomerId: 137 }

// //ClientId was rewritten by the assigned value
// print("ClientId:", ClientId)        //500209
// //CustomerId iwas rewritten by the assigned value
// print("CustomerId:", CustomerId)    //137
// //HierarchyId is the default value
// print("HierarchyId:", HierarchyId)  //00000000-128
