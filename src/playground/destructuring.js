
// ---------------------------------
// ---- DESTRUCTURING OBJECTS ------
// ---------------------------------


// const person = {
//   age: '26',
//   location: {
//     city: 'Tampa',
//     temp: '75'
//   }
// }

// const { name = 'Anonymous', age } = person 
//                ^ Declaring default value

// const name = person.name
// const age = person.age
// console.log(`${name} is ${age}`)


// const { city, temp: temperature } = person.location
//               ^ renaming Object key

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`)
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName) 


// ---------------------------------
// ---- DESTRUCTURING ARRAYS -------
// ---------------------------------

const address = ['1299 S Juniper Street', 'Philiadephia', 'Pennsylvania', '19147'] 

const [street, city, state, zip] = address

console.log(`You are in ${city}, ${state}`)

// Challenge
const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75']
const [itemName, Small, MediumPrice, Large] = item

console.log(`A medium ${itemName} costs ${MediumPrice}.`)


