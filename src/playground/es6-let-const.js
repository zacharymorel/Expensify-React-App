var nameVar = 'Zach'

var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'foo'
console.log('nameLet', nameLet)

const nameConst = 'frank'
console.log('nameConst', nameConst)

// function getPetName() {
//     const petName = 'Hal'
//     return petName
// }

// const petName = getPetName()
// console.log(petName)

// Block scoping let and const variables are blocked scoping within if and funcitons 
let fullName = 'Zach Morel'
let firstName

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log('2', fullName)