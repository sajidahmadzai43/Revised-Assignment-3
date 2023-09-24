// Sajid Ahmadzai JS File
// Function to check if a string is a palindrome
function checkPalindrome() {
    var str1 = document.getElementById("initString").value; // Fetch the input value
    var cleanedStr = str1.replace(/\s+/g, '').toLowerCase(); // Remove spaces and convert to lowercase
    
    // Reversing the cleaned string
    var splitString = cleanedStr.split(""); // Split the string into an array
    var reversedArray = splitString.reverse(); // Reverse the array
    var reversedString = reversedArray.join(""); // Join the array back into a string
    
    // Check if the cleaned string is a palindrome
    if (cleanedStr === reversedString) {
        document.getElementById("result").innerHTML = "This is a palindrome";
    } else {
        document.getElementById("result").innerHTML = "This is NOT a palindrome";
    }
}
