let arr = [1,2,3,4,5,6,7,8]

for (let i = 0; i < arr.length; i++) {
    (arr[i] <= 3 || arr[i] >= 6) ? console.log(arr[i]) : console.log("Greater than 6");
}

//Ternary operators
let a = 10;

let toVote = (a > 18) ? "He is eligible to vote" : "He is not eligible to vote"

console.log(toVote);

// Switch

let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";

    default:
        day = "Invalid day";
        break;
}

console.log("The day is - ", day);

let day2 = new Date();

console.log(day2.toString());