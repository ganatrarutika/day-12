// Step 1: Initialize the array with numerical scores
let scores = [85, 90, 78, 92, 88]; // Example scores

// Step 2: Calculate the sum of the scores
let total = 0;
for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}

// Step 3: Compute the average
let average = total / scores.length;

// Step 4: Print the average to the console
console.log("Average score:", average);
