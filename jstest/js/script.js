const memories = [
  "A tab remembers the page you meant to return to.",
  "A search stays open after its question has changed.",
  "A loading page becomes its own small waiting room.",
  "The tab is still open, even after the reason is gone."
];
const colors = ["#f3efe6", "#dde8e3", "#f0d8cc", "#e4e0f0"];
const memory = document.querySelector("#memory");
const button = document.querySelector("#change-memory");
let currentMemory = 0;

function changeMemory() {
  currentMemory = (currentMemory + 1) % memories.length;
  memory.innerHTML = memories[currentMemory];
  document.body.style.backgroundColor = colors[currentMemory];
}

button.addEventListener("click", changeMemory);
