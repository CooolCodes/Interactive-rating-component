"use strict";

let rating = 0;

const buttons = document.querySelectorAll(".rating");
const submit = document.querySelector(".submit-button");
const message = document.querySelector(".output-text");
const page1 = document.querySelector(".input");
const page2 = document.querySelector(".output");

// For the rating options
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] == button) {
        buttons[i].classList.add("active");
        rating = button.textContent;
      } else {
        buttons[i].classList.remove("active");
      }
    }
  });
});

// For the submit button
submit.addEventListener("click", () => {
  if (rating) {
    message.textContent = `You selected ${rating} out of 5`;
    page1.style.display = "none";
    page2.style.display = "flex";
  } else {
    alert("Please select a rating");
  }
});
