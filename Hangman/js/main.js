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
img.setAttribute('src', './img/png/hangman1.png');
img.setAttribute('alt', 'hangman1');



let div_container = document.createElement('div');
div_container.className = 'div_container';

main.append(div_container);



let div_wd = document.createElement('div');
div_wd.className = 'div_wd';

div_container.append(div_wd);

let span_wd = document.createElement('span');
span_wd.className = 'span_wd';
/*span_wd.innerHTML = 'p';*/

div_wd.append(span_wd);

let span_wd2 = document.createElement('span');
span_wd2.className = 'span_wd';
/*span_wd2.innerHTML = 'a';*/

div_wd.append(span_wd2);

let span_wd3 = document.createElement('span');
span_wd3.className = 'span_wd';
span_wd3.classList.add('solved');
span_wd3.innerHTML = 'a';

div_wd.append(span_wd3);

let span_wd4 = document.createElement('span');
span_wd4.className = 'span_wd';
/*span_wd2.innerHTML = 'a';*/

div_wd.append(span_wd4);



let mystery = document.createElement('div');
mystery.className = 'mystery';
mystery.innerHTML = 'Hint: Primary color of the sun.';

div_container.append(mystery);



let attempts = document.createElement('div');
attempts.className = 'attempts';
attempts.innerHTML = 'Incorrect guesses: <span class="attempts_text">0 / 6<span>';

div_container.append(attempts);



let keys = document.createElement('div');
keys.className = 'keys';

div_container.append(keys);

let i = 97;
while (i < 123) {
    let button = document.createElement('button');
    button.className = 'button';
    button.innerHTML = String.fromCharCode(i);
    keys.append(button);
    i += 1;
}