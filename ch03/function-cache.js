function isPrime(value) {
    //create cache at first time call this function
    if (!isPrime.answers) {
        isPrime.answers = {}
    }

    //return valye from cache
    if (isPrime.answers[value] !== undefined) {
        console.log("this is from cache!")
        return isPrime.answers[value]
    }

    //1 is not a prime
    let prime = value !== 0 && value !== 1
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            prime = false
            break
        }
    }
    console.log("this is NOT from cache!")
    return isPrime.answers[value] = prime
}

console.log(isPrime(6))
console.log(isPrime(6))
console.log(isPrime.answers[6])