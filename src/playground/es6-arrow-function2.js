// arguments object - is no longer bound with arrow functions

// const add = function (a, b) {
//     console.log(arguments)
//     return a + b
// }

const add = (a, b) => {
    // console.log(arguments)
    return a + b
}


 console.log(add(55, 1, 1001))

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['phili', 'New York', 'Tampa'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
} 

console.log(user.printPlacesLived())

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number)
    }
}
console.log(multiplier.multiply())