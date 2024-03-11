// iteration in an array - 8 methods

// forEach

[1, 2, 3].forEach(function (item, index) {
    console.log(item, index)
})

// map
// takes an item in an array and does something and then puts that value in that place

const three = [1, 2, 3]
const doubled = three.map(function (item) {
    return item * 2;
});

console.log(doubled);

// filter - take an item and checks whether the item follows the condition or not
const ints = [1,2,3]
const events = ints.filter(function (item) {
    return item % 2 === 0
})
console.log(events);


// What is reduce? - it takes an array and reduces it to a single value
const sum = [1, 2, 3].reduce(function (result, item) {
    return result + item
}, 0) // the number 0 defines the initial result
console.log(sum);

// some
const hasNegativeNumbers = [1,2,3,4,-1,2].some(function (item) {
    return item < 0;
})
console.log(hasNegativeNumbers);

//every
const allPositiveNumbers = [1,2,3].every(function (item) {
    return item > 0;
})

console.log(allPositiveNumbers);

// find
const objects = [{id: 'a'}, {id: 'b'}, {id: 'c'}]
const found = objects.find(function (item) {
    return item.id === 'b';
})

console.log(found);

// findindex
const objects2 = [{id: 'a'}, {id: 'b'}, {id: 'c'}]
const foundIndex = objects2.findIndex(function (item) {
    return item.id === 'b';
})
console.log(foundIndex);