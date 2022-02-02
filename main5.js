// ৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

function myArray(inputArray) {
    let positiveArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] >= 0) {
            positiveArray.push(inputArray[i]);
        } 
        else {
            break;
        }
       
    }
     return positiveArray;
}


let newArray = [1, 2, 0, 3, -7, 4, 5, 6, -3, -4, -5, -6, 7, 8, 9, 10, -1, -2,  -7, -8, -9, -10];
console.log(myArray(newArray));
