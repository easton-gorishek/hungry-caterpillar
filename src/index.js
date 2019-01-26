
const fruits = [
    'apple',
    'banana',
    'blueberry',
    'cherry',
    'green-apple',
    'mango',
    'orange'
];

const fruitButtons = document.getElementById('fruit-buttons');

for(let index = 0; index < fruits.length; index++) {
    const fruit = fruits[index];

    const fruitButton = document.createElement('button');
    fruitButton.classList.add('fruit');
    fruitButton.value = fruit;

    const image = document.createElement('img');
    const source = 'assets/fruits/' + fruit + '.png';
    image.src = source;

    fruitButton.appendChild(image);
    fruitButtons.appendChild(fruitButton);

    fruitButton.addEventListener('click', function() {
        feedCaterpillar(fruitButton.value);
    });
}

const caterpillar = document.getElementById('caterpillar');

function feedCaterpillar(fruit) {
    const part = document.createElement('span');
    part.classList.add('part');
    part.classList.add(fruit);
    caterpillar.appendChild(part);
}

const danceButtons = document.querySelectorAll('button.dance');

for(let index = 0; index < danceButtons.length; index++) {
    const danceButton = danceButtons[index];
    danceButton.addEventListener('click', function() {
        resetAllParts();
        makeDance(danceButton.value);
    });
}

function resetAllParts() {
    const parts = document.querySelectorAll('.part');

    for(let index = 0; index < parts.length; index++) {
        const part = parts[index];
        part.classList.remove('dancing');
    }
}

function makeDance(fruit) {
    const selector = '.part.' + fruit;
    const parts = document.querySelectorAll(selector);

    for(let index = 0; index < parts.length; index++) {
        const part = parts[index];
        part.classList.add('dancing');
    }
}
