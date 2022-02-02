// find odd nUmbers between 7 and 19 with for loop

function oddNumbers() {
    for (let i = 7; i <= 19; i++) {
        if (i % 2 != 0) {
            let num = i;
            console.log(num);
        }
    }
}


console.log(oddNumbers());




// Find the area of triangle given the length of three sides of the


function areaOfTriangle(side1, side2, side3) {
    let s = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return area;
}


console.log(areaOfTriangle(3, 4, 5));
