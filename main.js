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

// This will be the list of numbers that is checked through
let numberList = [];

  
// This will be the function that checks through the list of numbers to see if the sum of any 2 numbers equal the 'goal' number
let doMath = function(goal, numberList) {
    console.log("goal is " + goal)
    // Initialize result so we have a variable to be true/false based on the numbers being checked
    let result

    // This for loop will loop through the number list to get each number in the array
    for (let i = 0; i < numberList.length; i++) {
        // newNum takes the goal and subtracts the indexed number so we have a number to compare to each remaining number in the array
        const newNum = goal - numberList[i];
        console.log(newNum)
    
        // This inner for loop will iterate through the number list so we can check each number in the array
        for (let j = i + 1; j < numberList.length; j++) {
            // comparingNumber will use the index j to iterate through numberList and give the number to compare newNum to
            const comparingNumber = numberList[j];
            console.log(comparingNumber)

            // This if statement will make result = true if newNum is equal to the comparingNumber 
            if (newNum === comparingNumber) {
                result = true
        } 
}
console.log(result)
    if (result) {
    console.log(`Yes, 2 of these numbers do add up to equal ${goal}`)
    } 
    else {
    console.log(`No, 2 of these numbers do not add up to equal ${goal}`)
    }
}
}
doMath(17, [10, 15, 3, 7]);