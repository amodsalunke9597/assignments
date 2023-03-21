const button = document.querySelector('#counter');
const increment = document.getElementById('increment');
let count = 0;

function update(){
    increment.textContent = count;
}

button.addEventListener('click', () => {
  count++;
  update();
});
