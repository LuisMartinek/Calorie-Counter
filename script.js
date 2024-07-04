const calorieCounter = document.getElementById("calorie-counter"); // Step 14
const budgetNumberInput = document.getElementById("budget"); // Step 15
const entryDropdown = document.getElementById("entry-dropdown"); //Step 15
const addEntryButton = document.getElementById("add-entry"); // Step 16
const clearButton = document.getElementById("clear"); // Step 16
const output = document.getElementById("output"); // Step 16
let isError = false; // Step 17 

function cleanInputString(str){ // Step  18 
    /*console.log("original string: ", str); // 25 & 27*/
    const regex = /[+-\s]/g; // Step 19 & 20 & 21 & 22 & 23
    return str.replace(regex, ""); // Step 24

}

/*console.log(cleanInputString("+-99")); // 26 & 27*/

function isInvalidInput(str){ // 28
    const regex = /\d+e\d+/i; // 29 & 30 & 31 & 32 & 33
    return str.match(regex); // 34
}

console.log(isInvalidInput("1e3")); // 35