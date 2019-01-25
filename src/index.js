
const fruitButtons = document.querySelectorAll('button.fruit');

for(let index = 0; index < fruitButtons.length; index++) {
    const fruitButton = fruitButtons[index];
    fruitButton.addEventListener('click', function(event) {
        console.log(fruitButton.value);
    });
}