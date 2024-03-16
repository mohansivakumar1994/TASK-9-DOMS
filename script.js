function submitForm() {
 let firstNameInput = document.getElementById("first-name");
 let lastNameInput = document.getElementById("last-name");
 let addressInput = document.getElementById("address");
 let pincodeInput = document.getElementById("pincode");
 let genderInputs = document.getElementsByName("gender");
 let foodChoiceInput = document.getElementById("food-choice");
 let stateInput = document.getElementById("state");
 let countryInput = document.getElementById("country");

 // Retrieve values from the input fields
 let firstName = firstNameInput.value;
 let lastName = lastNameInput.value;
 let address = addressInput.value;
 let pincode = pincodeInput.value;
 let gender = getSelectedRadioValue(genderInputs);
 let foodChoice = foodChoiceInput.value;
 let state = stateInput.value;
 let country = countryInput.value;

 // Validate if first name and last name are provided
 if (firstName && lastName) {
     // Create a new row in the table
     let table = document.getElementById("dataTable");
     let newRow = table.insertRow(table.rows.length);

     // Insert cells with data
     let cell1 = newRow.insertCell(0);
     let cell2 = newRow.insertCell(1);
     let cell3 = newRow.insertCell(2);
     let cell4 = newRow.insertCell(3);
     let cell5 = newRow.insertCell(4);
     let cell6 = newRow.insertCell(5);
     let cell7 = newRow.insertCell(6);
     let cell8 = newRow.insertCell(7);

     // Populate cells with input values
     cell1.innerHTML = firstName;
     cell2.innerHTML = lastName;
     cell3.innerHTML = address;
     cell4.innerHTML = pincode;
     cell5.innerHTML = gender;
     cell6.innerHTML = foodChoice;
     cell7.innerHTML = state;
     cell8.innerHTML = country;

     // Clear form inputs
     firstNameInput.value = "";
     lastNameInput.value = "";
     addressInput.value = "";
     pincodeInput.value = "";
     resetRadioButtons(genderInputs);
     foodChoiceInput.value = "";
     stateInput.value = "";
     countryInput.value = "";
 } else {
     alert("Please fill in all required fields...");
 }
}

// Helper function to get the value of the selected radio button
function getSelectedRadioValue(radioInputs) {
 for (let i = 0; i < radioInputs.length; i++) {
     if (radioInputs[i].checked) {
         return radioInputs[i].value;
     }
 }
 return null; // Return null if no radio button is selected
}

// Helper function to reset radio buttons
function resetRadioButtons(radioInputs) {
 for (let i = 0; i < radioInputs.length; i++) {
     radioInputs[i].checked = false;
 }
}