// Select form and chat container elements from the DOM.
const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat_container");

// Select elements for displaying free trial info and removing elements after trials end.
const freeTry_element = document.getElementById("freeTry");
const remove_element = document.getElementById("form_input_data");

// Placeholder for interval ID used in loading animation.
let loadInterval;

// Displays a loading animation on the specified element.
function loader(element) {
  // Implementation needed for animation effect.
  element.textContent = "";
  loadInterval = setInterval(() => {
    element.textContent += "";
    if (element.textContent === "...") {
      element.textContent = "";
    }
  }, 300);
}
