const box = document.querySelector('#box');

document.addEventListener('keydown', () => {
  box.style.backgroundColor = 'red';
});

document.addEventListener('keyup', () => {
  box.style.backgroundColor = 'white';
});
