const obj = {
  name: 'Zach',
  getName() {
    return this.name
  }
}

const getName = obj.getName.bind(obj)

console.log(getName())
// Set up contructor to take name and age (default to 0)

//  PARENT CLASS
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name
    this.age = age
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old!`
  }
} 

// SUB CLASS
class Student extends Person {
  constructor(name, age, major) {
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major 
  }
  getDescription() {
    let description = super.getDescription()

    if(this.hasMajor()) {
      description += ` Their major is ${this.major}`
    }

    return description
  }
}

// SUB CLASS # 2
class Travel extends Person {
  constructor(name, age, homeLocation) {
    super(name, age)
    this.homeLocation = homeLocation
  }

  getGreeting() {
    let greeting = super.getGreeting()

    if(this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}`
    }
    return greeting
  }
}

const me = new Travel('Zach Morel', 25, 'Tampa')
console.log(me.getGreeting())

const other = new Travel()
console.log(other.getGreeting())