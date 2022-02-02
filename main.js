let myString = "Hello, world!";

let myNumber = 123;

let myBoolean1 = true;
let myBoolean2 = false;

let newString = "Hello, world!";

newString = "I love JavaScript!";

console.log(newString);

const newNumber = 123;

// newNumber = 456; // error
console.log(newNumber);


let num1 = 10;
let num2 = 20;
let add = num1 + num2;
let subtract = num2 - num1;
let multiply = num1 * num2;
let divide = num2 / num1;
let modulus = num2 % num1;

console.log(add);
console.log(subtract);
console.log(multiply);
console.log(divide);
console.log(modulus);


let num3 = 40;
let num4 = 10;

let comparison1 = num3 > num4;
let comparison2 = num3 < num4;
let comparison3 = num3 >= num4;
let comparison4 = num3 <= num4;
let comparison5 = num3 == num4;
let comparison6 = num3 != num4;

console.log(comparison1);
console.log(comparison2);
console.log(comparison3);
console.log(comparison4);
console.log(comparison5);
console.log(comparison6);

console.log(typeof num1);


let num5 = 10;
let num6 = 10;
let num7 = 30;
let num8 = 30;
let num9 = 40;
let num10 = 50;

let newComparison1 = num5 == num6 && num7 == num8;
let newComparison2 = num9 == num10 || num7 == num8;
let newComparison3 = num9 == num10 && num7 == num8;
let newComparison4 = num9 < num10 && num7 == num8;

console.log(newComparison1);
console.log(newComparison2);
console.log(newComparison3);
console.log(newComparison4);

if (num5 == num6) {
    console.log("num1 is equal to num2");
} else {
    console.log("num1 is not equal to num2");
}

if (num9 <= num10) {
    console.log("num9 is less than num10");
} else {
    console.log("num9 is not less than num10");
}

// find odd nUmbers between 7 and 19

function oddNumbers() {
    let i = 7;
    while (i <= 19) {
        if (i % 2 != 0) {
            let num = i;
            console.log(num);
        
        }
        i++;
        
    }
}

console.log(oddNumbers());


let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myArrayElements = myArray.length;
// console.log(myArrayElements);
console.log(myArray.indexOf(1));

let change = myArray[3] = "hello";
// console.log(change);
console.log(myArray);
console.log(myArray[4])


// Show Array element with for loop

let myArray2 = [1, 2, 23, 44, 57, 65, 87, 8, 9, 10];

for (let i = 0; i < myArray2.length; i++) {
    console.log(myArray2[i]);
}


// Show Array Elements if the number is greater than 50


let myArray3 = [1, 2, 23, 44, 57, 65, 87, 89, 90, 1004];


for (let i = 0; i < myArray3.length; i++) {
    if (myArray3[i] > 80) {
        console.log(myArray3[i]);
    }
}










