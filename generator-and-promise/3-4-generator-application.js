const helper = require('../helper')
const print = helper.print


//in order to traverse a binary tree
//define a tree
function Tree(left, label, right) {
    this.left = left
    this.right = right
    this.label = label
}

//traverse the tree with inorder
function* inorder(t) {
    yield* inorder(t.left)
    yield t.label
    yield* inorder(t.right)
}


//flatten the array by using generator
function* flattenArray(array) {
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            yield* flattenArray(array[i])
        }
    } else {
        yield array
    }
}
const arr = ['a', ['b', 'c', ['d', 'e', 'f']], 'g', ['h', 'i']]
print([...flattenArray(arr)]) // [a,b,c,d,e,f,g,h,i]

