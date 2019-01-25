
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

function getColor(fruit) {
    if(fruit === 'apple') {
        return '#d52a34';
    }
    else if(fruit === 'banana') {
        return '#f8cf00';
    }
    else if(fruit === 'blue-berry') {
        return '#4c5d9f';
    }
    else if(fruit === 'cherry') {
        return '#6c0f10';
    }
    else if(fruit === 'green-apple') {
        return '#a0d53f';
    }
    else if(fruit === 'mango') {
        return '#ff7a59';
    }
    else if(fruit === 'orange') {
        return 'f68419';
    }
}