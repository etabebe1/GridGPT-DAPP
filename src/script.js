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

// Simulates typing effect for displaying text in an element.
function typeText(element, text) {
  // Gradually appends characters to element's content.
  let index = 0;
  let interval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
    } else {
      clearInterval(interval);
    }
  }, 20);
}

// Generates a unique ID using the current timestamp and a random number.
function generateUniqueId() {
  // Returns a string that is likely to be unique.
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);
  return `id-${timestamp}-${hexadecimalString}`;
}

// Returns HTML markup for a chat message.
function chatStripe(isAi, value, uniqueId) {
  // Dynamically creates chat message based on parameters.
  return `
  <div class="wrapper">
    <div class="chat">
      <div class="profile">
        <img src=${isAi ? "./bot.svg" : "user.svg"} alt=${
    isAi ? "bot" : "user"
  }/>
        <div class="message" id=${uniqueId}>${value}</div>
      </div>
    </div>
  </div>
    `;
}
