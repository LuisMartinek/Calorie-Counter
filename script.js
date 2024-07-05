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

//console.log(isInvalidInput("10")); 35 & 36 & 37

function addEntry(){ // 38
    //const targetId = "#" + entryDropdown.value; 39 & 42
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`); // 40 & 41
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length; //43 & 44
    const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name"/>
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>`; // 45 & 46 6 47 & 48 & 49
}