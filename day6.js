const arr = [1,2,43,4,6,7]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let x in arr) {
//     console.log(arr[x])
// }


for (let x of arr) {
    console.log(x)
}

// const letters = new Set(["a", "b", "c"])
// letters.add("d")
// console.log(letters)
const names = new Map(
    [["firstName", "priyansu"],
    ["lastName", "sekhar"]]
    )
    
console.log(names.get("firstName"))

console.log(names.set("lastName", "behera"))
console.log(names.has("lastName"))