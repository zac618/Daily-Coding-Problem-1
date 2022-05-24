// Problem
// Given a list of numbers and a number goal, return whether any two numbers from the list add up to goal.
// For example, given [10, 15, 3, 7] and goal of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

// Notes
// - goal is the goal sum
// - subtract one of the numbers in the list from the goal sum (goal)...set this number to newNum
// - check if the next number in the list is equal to newNum
// -- if newNum is equal to any other number in the list, then return true
// -- if newNum is not equal to another number in the list

let numberList = [];

  
let doMath = function(goal, numberList) {
    console.log("goal is " + goal)
    let result

    // looping through array to get each number in the array
    for (let i = 0; i < numberList.length; i++) {
        // const initialNumber = numberList[i];
        const newNum = goal - numberList[i];
        // console.log("initialNumber is " + initialNumber)
    
    // console.log(newNum + "  is goal minus array number")
        for (let j = i + 1; j < numberList.length; j++) {
            const comparingNumber = numberList[j];
            // console.log("comparingNumber is " + comparingNumber)
            // console.log('new num is ' + newNum)

            if (newNum === comparingNumber) {
                result = true
        }
}
    if (result) {
    console.log(`Yes, 2 of these numbers do add up to equal ${goal}`)
    } else {
    console.log(`No, 2 of these numbers do not add up to equal ${goal}`)
}
}
}
doMath(17, [10, 15, 3, 7]);