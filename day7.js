// oops

let baseSalary = 30000
let overtime = 10
let rate = 20

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate)
} // procedural function

let employee = {
    baseSalary: 70000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate)
    }
}
employee.getWage()
// the oop way


// objects
const circle = {
    radius: 1, // these are properties of the circle object
    location: {
        x: 1,
        y: 1
    },
    draw: function () { // this is a method of drawing a circle
        console.log('create a circle')
    }
};

circle.draw()
console.log(circle.radius)

// factories or the constructor functions

function createCircle(radius) { // factory function -- implicit return statement
    return {
        radius, // radius = radius es6 format
        draw: function() {
            console.log('create a circle12121')
        }
    }
}

const circle2 = createCircle(1)
circle2.draw()

// another way to create an object using constructor functions

// naming convention for constructor functions - ConstrtructorFunction 

// note in js we don't have the concept of classes

function Circle(radius) { // constructor function -- explicit return statement using this keyword
    console.log('this', this);
    this.radius = radius
    this.draw = function() {
        console.log('create a circle1212222')
    }
}

const another = new Circle(1) // if someone forgets to declare the new keyword then he will be messing with the global operators. It is a bad practice and might create new bugs in the codebase
another.draw()

// in js functions are actually objects

// reference based and memory based dtypes

// memory copied directly in primitive forms
let x = 10;
let y = x;

x = 20

// reference based - object 
let u = {value: 10}
let v = u

u.value = 12


// example - 1 - memory based and scoping funciton 
let num = 10;

function increase(num) {
    num++
}

increase(num)
console.log(num);

// example 2 - reference based

let obj = {value: 10}

function inc(obj) {
    obj.value++
}
console.log(obj);

// Adding and removing properties

function Rectangle(sides) {
    this.sides = sides,
    this.draw = function () {
        console.log('rect created')
    }
}

const rect = new Rectangle(12)

rect.location = { x:2 }

const propertyName = 'center location'
rect[propertyName] = { x:2, y:3 }

delete rect.location

// Enumerating properties
// for this we can use for in loop

for (let key in rect) {
    if (typeof rect[key] !== 'function')
        console.log(key, rect[key])
}

const keys = Object.keys(rect)
console.log(keys);

if ('sides' in rect) {
    console.log('rect has a sides');
}

// Abstraction

// private props and methods

function polygon(sides) {
    let color = "red"

    this.sides = sides
    let defaultLocation = { x:0, y:0 }

    

    this.computeOptimumLocation = function(factor) {
        // ...
    }

    this.draw = function () {
        computeOptimumLocation(1.3)
        // defaultLocation
        console.log('great polygon it is!!!');
    }

    // method 1
    this.getDefaultLocation = function() {
        return defaultLocation
    }
    // method 2
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation
        },
        set: function (value) {
            if (!value.x || !value.y) {
                throw new Error("Invalid location.")
            } 
            defaultLocation = value;
        }
    })
}

const poly = new polygon(4)
poly.getDefaultLocation()
poly.defaultLocation = 45

// getters and setters



// practice - create a stopwatch object
function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running)
            throw new Error('Stopwatch has already started')
        running = true
        startTime = new Date()
    }

    this.stop = function () {
        if (!running)
            throw new Error('Stopwatch has already stopped')
        running = false
        endTime = new Date()

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    }

    this.reset = function () {
        startTime = null
        endTime = null
        running = false
        duration = 0
    }

    Object.defineProprety(this, 'duration', {
        get: function () {
            return duration
        }
    })
}
