
const fruitButtons = document.querySelectorAll('button.fruit');

for(let index = 0; index < fruitButtons.length; index++) {
    const fruitButton = fruitButtons[index];
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
        part.classList.remove('dance');
    }
}

function makeDance(fruit) {
    const selector = '.part.' + fruit;
    const parts = document.querySelectorAll(selector);

    for(let index = 0; index < parts.length; index++) {
        const part = parts[index];
        part.classList.add('dance');
    }
}