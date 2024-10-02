// Function to calculate the area of a square
function calculateArea(sideLength) {
    return sideLength * sideLength;
}

// Array of side lengths
const sideLengths = [2, 4, 6, 8];

// Use the map function to apply calculateArea to each element
const areas = sideLengths.map(calculateArea);


console.log("The areas of the squares are:", areas);
