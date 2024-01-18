let RandomPuzzles = Math.floor(Math.random() * puzzles.length);
let { mystery, answer } = puzzles[RandomPuzzles];
let currendAnswer = answer;
let removedPuzzles = puzzles.splice(RandomPuzzles, 1);
let errors = 0;
let x = 0;
let y = 0;
let examination = 0;
let z = 0;
let result = 0;
const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
]
let KeyDownN = addEventListener('keydown', e => {
    let CharCode = e.key;
    if (alphabet.includes(CharCode) && result === 0) {
        while (z < key_button.length) {
            if (key_button[z].innerHTML === CharCode) {
                if (!key_button[z].classList.contains('clicked')) {
                    thisGame(CharCode);
                    key_button[z].classList.add('clicked');
                }
            }
            z += 1;
        }
        z = 0;
    }
});

const thisGame = (CharCode) => {
    if(currendAnswer.includes(CharCode)) {
        while (y < currendAnswer.length) {
            if (CharCode === currendAnswer[y]) {
                let classLetter = 'letter'.repeat(y + 1);
                let requiredLetter = document.querySelector(`.${classLetter}`);
                requiredLetter.innerHTML = CharCode;
                requiredLetter.classList.add('solved');
                examination += 1;
                if (examination === currendAnswer.length) {
                    div_modal_wrapper.style.display = 'flex';
                    span_modal_text1.innerText = 'You won!!!';
                    result = 1;
                }
            }
            y += 1;
        }
        y = 0;
    } else {
        errors += 1
        if (errors > 5) {
            div_modal_wrapper.style.display = 'flex';
            result = 1;
        }
        attempts.innerHTML = `Incorrect guesses: <span class="attempts_text">${errors} / 6<span>`;
        img.setAttribute('src', `./img/png/hangman${errors + 1}.png`);
    }
}

let header = document.createElement('header');
header.className = 'header';
header.innerHTML = 'Hangman Game';
document.body.append(header);



let main = document.createElement('main');
main.className = 'main';
document.body.append(main);



let div_wrapper = document.createElement('div');
div_wrapper.className = 'div_wrapper';
main.append(div_wrapper);



let img = document.createElement('img');
img.className = 'img';
div_wrapper.append(img);
function imgErrors() {
    img.setAttribute('src', `./img/png/hangman${errors + 1}.png`);
}
imgErrors();
img.setAttribute('alt', 'hangman1');



let div_container = document.createElement('div');
div_container.className = 'div_container';
main.append(div_container);



let div_wd = document.createElement('div');
div_wd.className = 'div_wd';
div_container.append(div_wd);



let answerLength = answer.length;
function answerLetters() {
    while (x < answerLength) {
        let letters = document.createElement('span');
        letters.classList.remove('solved');
        letters.className = 'span_wd';
        let classLetters = 'letter'.repeat(x + 1);
        letters.classList.add(`${classLetters}`);
        div_wd.append(letters)
        x += 1;
    }
}
answerLetters();


let div_mystery = document.createElement('div');
div_mystery.className = 'mystery';
function divMystery() {
    div_mystery.innerText = mystery;
}
divMystery();
div_container.append(div_mystery);



let attempts = document.createElement('div');
attempts.className = 'attempts';
function attemptsText() {
    attempts.innerHTML = `Incorrect guesses: <span class="attempts_text">${errors} / 6<span>`;
}
attemptsText();
div_container.append(attempts);



let keys = document.createElement('div');
keys.className = 'keys';
div_container.append(keys);

let i = 97;
while (i < 123) {
    let key = document.createElement('button');
    key.className = 'key';
    key.innerHTML = String.fromCharCode(i);
    let CharCode = String.fromCharCode(i);
    keys.append(key);
    key.addEventListener('click', () => {
        if(!key.classList.contains('clicked')) {
            key.classList.add('clicked');
            thisGame(CharCode);
        }
    })
    i += 1;
}
let key_button = document.querySelectorAll('.key')


let div_modal_wrapper = document.createElement('div');
div_modal_wrapper.className = 'div_modal_wrapper';
document.body.append(div_modal_wrapper);



let div_modal = document.createElement('div');
div_modal.className = 'div_modal';
div_modal_wrapper.append(div_modal);



let span_modal_text1 = document.createElement('span');
span_modal_text1.className = 'span_modal_text';
span_modal_text1.innerText = 'Unfortunately you lost.';
div_modal.append(span_modal_text1);



let span_modal_text2 = document.createElement('span');
span_modal_text2.className = 'span_modal_text';
function spanModalText() {
    span_modal_text2.innerText = `Correct answer: ${currendAnswer}`;
}
spanModalText();
div_modal.append(span_modal_text2);



let button_again = document.createElement('button');
button_again.className = 'button_again';
button_again.innerText = `Again`;
div_modal.append(button_again);




function beginningOfTheGame() {
    RandomPuzzles = Math.floor(Math.random() * puzzles.length);
    mystery = puzzles[RandomPuzzles].mystery;
    answer = puzzles[RandomPuzzles].answer;
    currendAnswer = answer;
    answerLength = currendAnswer.length;
    puzzles.push(removedPuzzles[0]);
    removedPuzzles = puzzles.splice(RandomPuzzles, 1);
    errors = 0;
    x = 0;
    y = 0;
    examination = 0;
    z = 0;
    result = 0;
}


let d = 0;
let t = 0;
button_again.addEventListener('click', () => {
    div_modal_wrapper.style.display = 'none';
    let Letters = document.querySelectorAll('.span_wd');
    beginningOfTheGame();
    attemptsText();
    spanModalText();
    imgErrors();
    divMystery();
    while (t < Letters.length) {
        Letters[t].remove();
        t += 1;
    }
    answerLetters();
    while (d < key_button.length) {
        key_button[d].classList.remove('clicked');
        d += 1;
    }
    t = 0;
    d = 0;
})