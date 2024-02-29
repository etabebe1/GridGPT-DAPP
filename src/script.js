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



// Handles form submission, displays user input, fetches and displays AI response.
export const handleSubmit = async (e) => {
  e.preventDefault();

  // Core functionality for handling chat interactions and managing free trials.
  const data = new FormData(form);
  chatContainer.innerHTML += chatStripe(false, data.get("prompt"));
  form.reset();

  const uniqueId = generateUniqueId();
  chatContainer.innerHTML += chatStripe(true, "", uniqueId);

  const messageDiv = document.getElementById(uniqueId);

  loader(messageDiv);

  // TODO: REPLACE API FETCH WITH AXIOS POST METHOD
  const response = await fetch("http://localhost:4000", {
    method: "POST",
    header: {
      "Content-Type": "application;json",
    },

    body: JSON.stringify({
      prompt: data.get("prompt"),
    }),
  });

  clearInterval(loadInterval);
  messageDiv.innerHTML = " ";

  if (response.ok) {
    const data = await response.json();
    const parsedData = data.bot.trim();

    typeText(messageDiv, parsedData);
    const freeTrial = localStorage.getItem("freeTrail");
    const FREE_TRAIL = JSON.parse(freeTrial);

    function freeTrailFunc(trail) {
      const freeTrail = JSON.stringify(trail + 1);
      localStorage.setItem("freeTrail", freeTrail);

      trail === 10
        ? remove_element.remove()
        : (freeTry_element.innerHTML = trail + 1);
    }

    if (FREE_TRAIL === 1) {
      freeTrailFunc(FREE_TRAIL);
    } else if (FREE_TRAIL === 2) {
      freeTrailFunc(FREE_TRAIL);
    } else if (FREE_TRAIL === 3) {
      freeTrailFunc(FREE_TRAIL);
    } else if (FREE_TRAIL === 4) {
      freeTrailFunc(FREE_TRAIL);
    } else if (FREE_TRAIL === 5) {
      freeTrailFunc(FREE_TRAIL);
    } else if (FREE_TRAIL === 6) {
      freeTrailFunc(FREE_TRAIL);
    } else if (FREE_TRAIL === 7) {
      freeTrailFunc(FREE_TRAIL);
    } else if (FREE_TRAIL === 8) {
      freeTrailFunc(FREE_TRAIL);
    } else if (FREE_TRAIL === 9) {
      freeTrailFunc(FREE_TRAIL);
    } else if (FREE_TRAIL === 10) {
      freeTrailFunc(FREE_TRAIL);
    } else if (FREE_TRAIL === 11) {
      console.log("Pro Member");
    } else {
      const freeTrail = JSON.stringify(1);
      localStorage.setItem("freeTrail", freeTrail);
      freeTry_element.innerHTML = 1;
    }
  } else {
    const error = await response.text();
    messageDiv.innerHTML = `Something went wrong, Reload the page!`;
    alert(error);
  }
};

// Correctly attaches event listeners to form for handling submit and Enter key press.
form.addEventListener("submit", handleSubmit());
form.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleSubmit();
  }
});

