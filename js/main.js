// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  // Initialize counters for responses
  let yesCount = 0;
  let noCount = 0;
  let maybeCount = 0;

  // Traverse the surveyData array
  for (let i = 0; i < surveyData.length; i++) {
    const response = surveyData[i];

    if (response === "Yes") {
      yesCount++;
    } else if (response === "No") {
      noCount++;
    } else if (response === "Maybe") {
      maybeCount++;
    }
  }

  // Output the results in the outputEl element
  outputEl.innerHTML = "Survey Data<br>Yes: " + yesCount + "<br>No: " + noCount + "<br>Maybe: " + maybeCount;
}

function traverseAgeData() {
  let age1 = 0;
  let age2 = 0;
  let age3 = 0;
  let age4 = 0;

  for (let i = 0; i < ageData.length; i++) {
    const response = JSON.parse(ageData[i]);
    const age = response.age;

    if (age < 18) {
      age1++;
    } else if (age >= 18 && age <= 35) {
      age2++;
    } else if (age >= 36 && age <= 65) {
      age3++;
    } else {
      age4++;
    }
  }

  // Output the results in the outputEl element
  outputEl.innerHTML = `
    Age Data<br>
    Under 18: ${age1}<br>
    18 to 35: ${age2}<br>
    36 to 65: ${age3}<br>
    Above 65: ${age4}
  `;
}


function traverseNumberData() {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < numberData.length; i++) {
    const num = parseInt(numberData[i]);

    if (!isNaN(num)) { // Ensure that the value is a valid number
      if (num % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  }

  // Output the results in the outputEl element
  outputEl.innerHTML = `
    Number Data<br>
    Even Numbers: ${evenCount}<br>
    Odd Numbers: ${oddCount}
  `;
}

