const sendBtn = document.querySelector(".btn--send");
const resetBtn = document.querySelector(".btn--reset");
const phoneText = document.querySelector(".phone__text");
const pagerText = document.querySelector(".pager__text");
const keypadBtn = document.querySelectorAll(".keypad-btn");

// Variable to store the  number as it's being entered
let currentNumber = "";

// Add event listeners to keypad buttons
keypadBtn.forEach((button) => {
  button.addEventListener("click", () => {
    // Add the clicked button's text to the current number
    currentNumber += button.textContent;
    // Update the phone display
    phoneText.textContent = currentNumber;
  });
});

// Add event listener to send button
sendBtn.addEventListener("click", () => {
  // Only send if there's content to send
  if (currentNumber.trim() !== "") {
    // Send the number to the pager
    pagerText.textContent = currentNumber;
  } else {
    // Display an error message if there's nothing to send
    pagerText.textContent = "Nothing to send";
  }
});

// Add event listener to reset button
resetBtn.addEventListener("click", () => {
  // Clear both displays and reset the current number
  currentNumber = "";
  phoneText.textContent = "";
  //   pagerText.textContent = "";
});
