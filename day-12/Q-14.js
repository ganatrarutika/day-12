// Function to reverse a string
function reverseString(str) {
    // Convert the string to an array of characters
    const charArray = str.split('');
    // Reverse the array of characters
    const reversedArray = charArray.reverse();
    // Join the reversed array back into a string
    const reversedStr = reversedArray.join('');
    // Return the reversed string
    return reversedStr;
}


const input = "hello";
const output = reverseString(input);
console.log("Reversed string:", output);
