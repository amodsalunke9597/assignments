// Get the buttons and the counter element
const addButton = document.getElementById('increment');
const subtractButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
const counter = document.getElementById('input');

// Initialize the counter value
let count = 0;

// Update the counter element with the current count
function updateCounter() {
  counter.textContent = count;
}

// Add event listeners to the buttons
addButton.addEventListener('click', () => {
  count++;
  updateCounter();
});

subtractButton.addEventListener('click', () => {
  count--;
  updateCounter();
});

resetButton.addEventListener('click', () => {
  count = 0;
  updateCounter();
});


