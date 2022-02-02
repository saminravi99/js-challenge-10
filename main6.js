// // ১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

// function feetToInches(feet) {
//     var inches = feet * 12;
//     return inches;
// }

// let myFeet = 5;
// let result = feetToInches(myFeet);
// console.log('The result is ' + result + ' inches');


// ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 


function convertCentimetersToMeters(centimeters) {
    let meters = centimeters / 100;
    return meters;
}


let myCentimeters = 500;
let result = convertCentimetersToMeters(myCentimeters);
console.log('The result is ' + result + ' meters');