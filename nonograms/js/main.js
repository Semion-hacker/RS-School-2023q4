const pictureOneFiveByFive = [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 22];

let header = document.createElement('header');
header.className = 'header';
header.innerHTML = 'Nonograms Game';
document.body.append(header);

let won = document.createElement('div');
won.className = 'won';
won.innerHTML = 'Victory';
document.body.append(won);

let divWrapper = document.createElement('div');
divWrapper.className = 'div_wrapper';
document.body.append(divWrapper);

const creatingCells = (quantity) => {
    let numberOfColumns = '1fr ';
    let numberOfColumns2 = numberOfColumns.repeat(quantity).trim();
    divWrapper.style.gridTemplateColumns = numberOfColumns2;
    let i = 0;
    let result = 0;
    while (i < quantity) {
        let x = 0;
        while (x < quantity) {
            let button = document.createElement('button');
            button.className = 'button';
            const number = quantity * i + x;
            button.classList.add(`${number}`);
            divWrapper.append(button);
            button.addEventListener('click', () => {
                if (button.classList.contains('clicked')) {
                    button.classList.remove('clicked');
                    if (button.classList.contains('right')) {
                        button.classList.remove('right');
                        result -= 1;
                    }
                } else {
                    pictureOneFiveByFive.forEach((item) => {
                        if (button.classList.contains(`${item}`)) {
                            button.classList.add('right');
                            result += 1;
                            if (result === pictureOneFiveByFive.length) {
                                won.style.display = 'flex';
                            }
                        }
                    })
                    button.classList.add('clicked')
                    button.innerHTML = '';
                    button.classList.remove('clickedX');
                };
            })
            button.addEventListener('contextmenu', () => {
                if (button.classList.contains('clickedX')) {
                    button.innerHTML = '';
                    button.classList.remove('clickedX');
                } else {
                    button.classList.add('clickedX')
                    button.classList.remove('clicked');
                    button.innerHTML = 'x';
                };
            })
            x += 1;
        }
        i += 1;
    }
}
creatingCells(5);