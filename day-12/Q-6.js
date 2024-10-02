// Step 1: Create the array with all months
let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Step 2: Remove the last three months using splice()
months.splice(-3); // The negative index starts removing from the end of the array

// Step 3: Print the modified array to the console
console.log(months);
