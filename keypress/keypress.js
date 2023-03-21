const input = document.querySelector('#input');
const message = document.querySelector('#message');

input.addEventListener('keypress', (event) => {
  const key = event.key;
  message.textContent = `You pressed the ${key} key`;
});
