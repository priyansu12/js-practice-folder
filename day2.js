// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object


let num1 = 9.99;

let string = "adfoafghijklmnopqr";

let bool = true;

// const <objname> = {key : value}
const obj1 = {
    "first Name" : "Priyansu",
    "last Name" : "Sekhar",
    "my age" : 21,
    "Phone no" : 43546365
}

console.log(obj1);

const arr = [1,2,34,5,6,23]

const date = new Date("2023-05-15")

console.log(date.toString());

// find the difference between null and undefined values
// try to understand how bigint and exponentiation in js -- examples and practice 

// scoping - global and local

// let name1 = "test"

// {
//     let name2 = "test2"
//     {
//         let name = "Priyansu";
//         console.log(name);
//     }
    
//     console.log(name1);
// }

// console.log(name2);

function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;

}

// fibonacci series function - HW


// console.log(sumArr(arr));



// function ConvertToCelsius(farhenheit) {
//     return (farhenheit - 32) * 5/9
// }

// let value = ConvertToCelsius(88);

// console.log(typeof(value));


const car1 = {
    0 : "blue",
    1 : "BMW",
    2: 100
}

const car2 = {
    "color" : "red",
    "name" : "Audi",
    "mileage" : 200
}

// console.log(car1["color"]);
// console.log(car1.color);

const newObj = {
    name: "Test",
    "Number" : 5546546,
    obj_child : {
        name2 : this.name,
        class : "std"
    },
    "date" : "12-12-12"
}

function sum (a, b) {
    return a + b;
}

function calculator (operation, a, b) {
    if(operation == "sum") {
        sum(a, b)
    }
}

calculator(sum(2,3));

for (let i = 0; i < 3; i++) {
    console.log(car1[i]);
}

