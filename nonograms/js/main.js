const pictureOneFiveByFive = [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 22];
const pictureOneFiveByFiveHintsTop = ['', '', '', '', '', '', '', '', '', '', '2', '4', '4', '4', '2'];
const pictureOneFiveByFiveHintsLeft = ['', '1', '1', '', '', '5', '', '', '5', '', '', '3', '', '', '1'];

let header = document.createElement('header');
header.className = 'header';
header.innerHTML = 'Nonograms Game';
document.body.append(header);

let won = document.createElement('div');
won.className = 'won';
won.innerHTML = 'Victory';
document.body.append(won);

let container = document.createElement('div');
container.className = 'container';
document.body.append(container);

let topTips = document.createElement('div');
topTips.className = 'topTips';
container.append(topTips);

let Wrapper = document.createElement('div');
Wrapper.className = 'Wrapper';
container.append(Wrapper);

let leftTips = document.createElement('div');
leftTips.className = 'leftTips';
Wrapper.append(leftTips);

let divWrapper = document.createElement('div');
divWrapper.className = 'div_wrapper';
Wrapper.append(divWrapper);

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

const creatingTopTips = (quantity) => {
    let topTipsOfColumns = '1fr ';
    let topTipsOfColumns2 = topTipsOfColumns.repeat(quantity).trim();
    topTips.style.gridTemplateColumns = topTipsOfColumns2;
    let y = 0;
    let p = 0;
    while (y < quantity) {
        let o = 0;
        while (o < Math.ceil(quantity / 2)) {
            let topTooltipElement = document.createElement('div');
            topTooltipElement.className = 'topTooltipElement';
            topTooltipElement.innerHTML = pictureOneFiveByFiveHintsTop[p];
            topTips.append(topTooltipElement);
            p += 1;
            o += 1;
        }
        y += 1;
    }
}

const creatingLeftTips = (quantity) => {
    let leftTipsOfColumns = '1fr ';
    let leftTipsOfColumns2 = leftTipsOfColumns.repeat(Math.ceil(quantity / 2)).trim();
    leftTips.style.gridTemplateColumns = leftTipsOfColumns2;
    let u = 0;
    let y = 0;
    while (y < quantity) {
        let o = 0;
        while (o < Math.ceil(quantity / 2)) {
            let leftTooltipElement = document.createElement('div');
            leftTooltipElement.className = 'leftTooltipElement';
            leftTooltipElement.innerHTML = pictureOneFiveByFiveHintsLeft[u];
            leftTips.append(leftTooltipElement);
            o += 1;
            u += 1;
        }
        y += 1;
    }
}

creatingCells(5);
creatingTopTips(5);
creatingLeftTips(5);