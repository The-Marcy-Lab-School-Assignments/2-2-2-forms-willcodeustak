/** GENERAL FEEDBACK:
 * Great job getting all test cases to pass! Love the use of documentation in your submissions!
 */

const handleSubmit = (e) => { 
  e.preventDefault(); //prevent page from doing default things (reloading)
  const form = e.target 
  const variableToHoldFormData = new FormData(form) // give form data into a new variable
  const formObj = Object.fromEntries(variableToHoldFormData)
const resultsUserName =  document.getElementById("results-username")
resultsUserName.textContent = formObj.username
const resultsCodingLevel = document.getElementById("results-coding-level")
resultsCodingLevel.textContent = formObj.codingLevel
const resultsLocation = document.getElementById("results-location")
resultsLocation.textContent = formObj.location

//check box is a little different , we grab it by the element like usual but...
const checkBoxValue = document.getElementById("results-did-like-assignment")
// get() method of the FormData interface returns the first value associated with a given key from within a FormData object. We attach get() to variableToHoldFormData to grab the first value from "didLikeAssignment" which is yes or no.
const didItGetChecked = variableToHoldFormData.get("didLikeAssignment");
//Checks the textContent of checkBoxValue aka if it is checked or not in the moment. Ternary to represent if checked then 'Yes' else 'No'
checkBoxValue.textContent = didItGetChecked ? 'Yes' : 'No';
//resets the form page.
document.getElementById('new-user-form').reset();

};
//initialize variable form to equal my form through its Id name
  const form = document.getElementById('new-user-form');
  //attaching a submit eventlistener to the form
    form.addEventListener('submit', handleSubmit);

//grabbing the section of the form when clicked submit it would then update/populate the page.
    

      

 