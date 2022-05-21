// Problem
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

// Notes
// - k is the goal sum
// - subtract one of the numbers in the list from the goal sum (k)...set this number to newNum
// - check if the next number in the list is equal to newNum
// -- if newNum is equal to any other number in the list, then return true
// -- if newNum is not equal to another number in the list

let k = 17;
let numberList = [10, 15, 3, 7];
let i

console.log(`The set of numbers for this will be: ${numberList}`);
  
let doMath = function() {
    console.log("k is " + k)

    // looping through array to get each number in the array
    for (let i = 0; i < numberList.length; i++) {
        const initialNumber = numberList[i];
        const newNum = k - numberList[i];
        // console.log("initialNumber is " + initialNumber)
    
    // console.log(newNum + "  is k minus array number")
        for (let j = i + 1; j < numberList.length; j++) {
            const comparingNumber = numberList[j];
            // console.log("comparingNumber is " + comparingNumber)
            // console.log('new num is ' + newNum)

            if (newNum === comparingNumber) {
                result = "true"
        }   else {
                result = "false"
        }
        if (result === "true") {
            console.log(`Yes, 2 of these numbers do add up to equal ${k}`)
        } else {
            console.log(`No, 2 of these numbers do not add up to equal ${k}`)
        }
}
}
}
doMath();