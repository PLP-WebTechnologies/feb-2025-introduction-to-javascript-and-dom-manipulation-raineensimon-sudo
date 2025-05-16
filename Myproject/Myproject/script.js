// Change text content dynamically
const heading = document.getElementById("main-heading");
const description = document.getElementById("description");

heading.textContent = "Hello, JavaScript World!";

// Modify CSS styles via JavaScript
const changeStyleBtn = document.getElementById("change-style-btn");
changeStyleBtn.addEventListener("click", () => {
  description.style.color = "darkblue";
  description.style.fontWeight = "bold";
});

// Add or remove an element when a button is clicked
const toggleBtn = document.getElementById("toggle-btn");
const article = document.getElementById("dynamic-article");

let elementAdded = false;

toggleBtn.addEventListener("click", () => {
  if (!elementAdded) {
    const newElement = document.createElement("p");
    newElement.id = "new-paragraph";
    newElement.textContent = "This paragraph was dynamically added!";
    newElement.style.backgroundColor = "#f0f0f0";
    newElement.style.padding = "10px";
    article.appendChild(newElement);
    toggleBtn.textContent = "Remove Element";
    elementAdded = true;
  } else {
    const existingElement = document.getElementById("new-paragraph");
    if (existingElement) {
      article.removeChild(existingElement);
    }
    toggleBtn.textContent = "Add Element";
    elementAdded = false;
  }
});
