// Function to calculate the cube of a number
function calculateCube(num) {
    return num * num * num;
}

// Array of numbers
const numbers = [1, 2, 3, 4];

// Use the map function to apply calculateCube to each element
const cubes = numbers.map(calculateCube);

console.log("The cubes of the numbers are:", cubes);
