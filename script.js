// script.js

// Function to remove the selected color option from the dropdown list
function removeColor() {
  var selectElement = document.getElementById("colorSelect");
  var selectedIndex = selectElement.selectedIndex;

  if (selectedIndex !== -1) {
    selectElement.remove(selectedIndex);
  }
}

// Event listener for the button click
document.addEventListener("DOMContentLoaded", function () {
  var removeButton = document.querySelector("input[type='button']");
  removeButton.addEventListener("click", removeColor);
});
