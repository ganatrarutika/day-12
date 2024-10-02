// Step 1: Define the array with ages
let ages = [25, 40, 35, 50, 29]; // Example ages

// Step 2: Initialize a variable to store the oldest age
let oldestAge = ages[0]; // Start with the first age in the array

// Step 3: Loop through the array to find the oldest age
for (let i = 1; i < ages.length; i++) {
    if (ages[i] > oldestAge) {
        oldestAge = ages[i];
    }
}

// Step 4: Print the oldest age to the console
console.log("The oldest age is:", oldestAge);
