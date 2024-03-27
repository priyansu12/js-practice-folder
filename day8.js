// es6 format
// modern js essentials

const person = {
    name: 'John',
    walk: function () {
        console.log(this);
    },
    talk() {
        var self = this;
        setTimeout(function () {
            console.log('self', self)
        }, 1000)
    }
}

person.talk()

person.name
const walk = person.walk;
walk() // this will return undefined because the function is not part of the object

const targetMember = 'name'
person[targetMember.value] = 'Mark'

// this keyword

// arrow functions
const square = function (number) {
    return number * number
}

const square2 = number => number * number

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false }
]

const activeJobs = jobs.filter(function (job) { return job.isActive })
const activeJobs2 = jobs.filter((job) =>job.isActive )

const colors = ['red', 'green', 'blue']
const items = colors.map(color => `${color} is a color`)


// Objects destructuring

const address = {
    street: '',
    city: '',
    country: ''
};

// const street = address.street;
// const city = address.city;
// const country = address.country;

const { street:st, city, country } = address;

// spread operator
const first = [1,2,3]
const second = [4,5,6]  

const combined = first.concat(second)
const combination = [...first, 'a', ...second, 'b']

const clone = [...first]

const firstName = { name: 'Priyansu' }
const secondName = { name: 'Sekhar' }

const combinedNames = {...firstName, ...secondName, location: 'Australia'}


// Classes
class Person {
    constructor(name) {
        this.name = name
    }

    walk() {
        console.log('walk')
    }
}

const person12 = new Person('Priyansu');


// Inheritance

class Teacher extends Person{
    constructor (name, degree) {
        super(name)
        this.degree = degree
    }

    teach() {
        console.log('teach')
    }
}

const teacher = new Teacher('Priyansu', 'Science');


// Modules

// Default -> import ... from ''
// Named -> import { ... } from ''
// Named -> import { ... as ... } from ''


// Asynchronous Javascript






// Promises

let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Error')
    }
})

p.then((message) => {
    console.log('This is the then ' + message)
}).catch((message) => {
    console.log('This is the catch ' + message)
})

// Callback functions

const userLeft = false
const userWatchingCatMeme = false

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User watching Cat meme',
            message: 'We will rock this shit out'
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}

watchTutorialCallback((message) => {
    console.log(`Success ${message}`)
}, (error) => {
    console.log(`${error.name}, ${error.message}`)
})

