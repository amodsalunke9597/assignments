const input = document.querySelector('#input');
const count = document.querySelector('#count');

input.addEventListener('mouseup', () => {
  const selection = window.getSelection().toString();
  count.textContent = `${selection.length} characters selected`;
});
