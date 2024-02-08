const pictureOneFiveByFive = [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 22];
const pictureTwoFiveByFive = [2, 7, 8, 12, 15, 16, 17, 18, 19, 21, 22, 23];
const pictureThreeFiveByFive = [6, 7, 9, 10, 12, 13, 16, 17, 19];
const pictureFourFiveByFive = [6, 8, 15, 19, 21, 22, 23];
const pictureFiveFiveByFive = [2, 6, 7, 8, 10, 11, 12, 13, 14, 17, 21, 22];

const pictureOneFiveByFiveHintsTop = ['', '', '', '', '', '', '', '', '', '', '2', '4', '4', '4', '2'];
const pictureTwoFiveByFiveHintsTop = ['', '', '', '', '', '', '', '', '1', '', '1', '2', '5', '2', '1'];
const pictureThreeFiveByFiveHintsTop = ['', '', '', '', '', '', '1', '', '', '1', '1', '1', '3', '1', '1'];
const pictureFourFiveByFiveHintsTop = ['', '', '', '', '', '', '1', '', '1', '', '1', '1', '1', '1', '1'];
const pictureFiveFiveByFiveHintsTop = ['', '', '', '', '', '', '2', '', '', '', '1', '1', '5', '2', '1'];

const pictureOneFiveByFiveHintsLeft = ['', '1', '1', '', '', '5', '', '', '5', '', '', '3', '', '', '1'];
const pictureTwoFiveByFiveHintsLeft = ['', '', '1', '', '', '2', '', '', '1', '', '', '5', '', '', '3'];
const pictureThreeFiveByFiveHintsLeft = ['', '', '', '', '2', '1', '', '1', '2', '', '2', '1', '', '', ''];
const pictureFourFiveByFiveHintsLeft = ['', '', '', '', '1', '1', '', '', '', '', '1', '1', '', '', '3'];
const pictureFiveFiveByFiveHintsLeft = ['', '', '1', '', '', '3', '', '', '5', '', '', '1', '', '', '2'];


const pictureOneTenByTen = [4, 13, 15, 22, 25, 27, 33, 35, 36, 38, 41, 42, 43, 44, 45, 49, 50, 54, 55, 56, 57, 58, 61, 63, 64, 66, 72, 74, 77, 84, 86, 95];
const pictureTwoTenByTen = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
const pictureThreeTenByTen = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
const pictureFourTenByTen = [2, 12, 22, 32, 42, 52, 62, 72, 82, 92];
const pictureFiveTenByTen = [3, 13, 23, 33, 43, 53, 63, 73, 83, 93];

const pictureOneTenByTenHintsTop = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '1', '1', '', '', '1', '1', '', '', '', '1', '1', '2', '1', '5', '2', '1', '1', '', '1', '1', '1', '1', '5', '1', '1', '1', '1', '1'];
const pictureTwoTenByTenHintsTop = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '10', '', '', '', '', '', '', '', '', ''];
const pictureThreeTenByTenHintsTop = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '10', '', '', '', '', '', '', '', ''];
const pictureFourTenByTenHintsTop = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '10', '', '', '', '', '', '', ''];
const pictureFiveTenByTenHintsTop = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '10', '', '', '', '', '', ''];

const pictureOneTenByTenHintsLeft = ['', '', '', '', '1', '', '', '', '1', '1', '', '', '1', '1', '1', '', '', '1', '2', '1', '', '', '', '5', '1', '', '', '', '1', '5', '', '', '1', '2', '1', '', '', '1', '1', '1', '', '', '', '1', '1', '', '', '', '', '1'];
const pictureTwoTenByTenHintsLeft = ['', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1'];
const pictureThreeTenByTenHintsLeft = ['', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1'];
const pictureFourTenByTenHintsLeft = ['', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1'];
const pictureFiveTenByTenHintsLeft = ['', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1', '', '', '', '', '1'];

const audioPress = new Audio();
audioPress.src = './audio/press.mp3';
const audioDelete = new Audio();
audioDelete.src = './audio/delete.mp3';
const audioCross = new Audio();
audioCross.src = './audio/cross.mp3';
const audioVictory = new Audio();
audioVictory.src = './audio/victory.mp3';

let header = document.createElement('header');
header.className = 'header';
header.innerHTML = 'Nonograms Game';
document.body.append(header);

let won = document.createElement('div');
won.className = 'won';
document.body.append(won);


let stopwatchWrapper = document.createElement('div');
stopwatchWrapper.className = 'stopwatchWrapper';
document.body.append(stopwatchWrapper);

let stopwatch = document.createElement('div');
stopwatch.className = 'stopwatch';
stopwatchWrapper.append(stopwatch);

let restart = document.createElement('div');
restart.className = 'restart';
restart.innerHTML = 'restart';
document.body.append(restart);

let minutesBlock = document.createElement('span');
minutesBlock.className = 'minutesBlock';
minutesBlock.innerHTML = '00';
stopwatch.append(minutesBlock);

let colon = document.createElement('span');
colon.className = 'colon';
colon.innerHTML = ':';
stopwatch.append(colon);

let secondsBlock = document.createElement('span');
secondsBlock.className = 'secondsBlock';
secondsBlock.innerHTML = '00';
stopwatch.append(secondsBlock);

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

let time = 0;
const creatingCells = (quantity, picture) => {
    restart.addEventListener('click', () => {
        divWrapper.innerHTML = '';
        creatingCells(5, picture);
        clearInterval(interval);
        minutesBlock.innerHTML = '00';
        secondsBlock.innerHTML = '00';
        seconds = 0;
        minutes = 0;
    })
    let t = 0;
    let numberOfColumns = '1fr ';
    let numberOfColumns2 = numberOfColumns.repeat(quantity).trim();
    divWrapper.style.gridTemplateColumns = numberOfColumns2;
    let i = 0;
    let result = 0;
    let notCorrect = 0;
    while (i < quantity) {
        let x = 0;
        while (x < quantity) {
            let button = document.createElement('button');
            button.className = 'button';
            const number = quantity * i + x;
            button.classList.add(`${number}`);
            divWrapper.append(button);
            button.addEventListener('click', () => {
                if (t === 0) {
                    interval = setInterval(beginning, 1000);
                    t += 1;
                }
                if (button.classList.contains('clicked')) {
                    audioDelete.play();
                    button.classList.remove('clicked');
                    if (button.classList.contains('right')) {
                        button.classList.remove('right');
                        result -= 1;
                    } else {
                        notCorrect -= 1;
                        if (result === picture.length && notCorrect === 0) {
                            audioVictory.play();
                            won.innerHTML = `Great! You have solved the nonogram in ${time} seconds!`;
                            won.style.display = 'flex';
                            clearInterval(interval);
                        }
                    }
                } else {
                    audioPress.play();
                    let examination = 0;
                    picture.forEach((item) => {
                        if (button.classList.contains(`${item}`)) {
                            button.classList.add('right');
                            result += 1;
                            examination += 1;
                            if (result === picture.length && notCorrect === 0) {
                                audioVictory.play();
                                won.innerHTML = `Great! You have solved the nonogram in ${time} seconds!`;
                                won.style.display = 'flex';
                                clearInterval(interval);
                            }
                        }
                    })
                    if (examination === 0) {
                        notCorrect += 1;
                    }
                    button.classList.add('clicked')
                    button.innerHTML = '';
                    button.classList.remove('clickedX');
                };
            })
            button.addEventListener('contextmenu', () => {
                if (t === 0) {
                    interval = setInterval(beginning, 1000);
                    t += 1;
                }
                if (button.classList.contains('clickedX')) {
                    audioDelete.play();
                    button.innerHTML = '';
                    button.classList.remove('clickedX');
                } else {
                    audioCross.play();
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

const creatingTopTips = (quantity, whatAreTheTips) => {
    restart.addEventListener('click', () => {
        topTips.innerHTML = '';
        creatingTopTips(5, whatAreTheTips);
    })
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
            topTooltipElement.innerHTML = whatAreTheTips[p];
            topTips.append(topTooltipElement);
            p += 1;
            o += 1;
        }
        y += 1;
    }
}

const creatingLeftTips = (quantity, whatAreTheTips) => {
    restart.addEventListener('click', () => {
        leftTips.innerHTML = '';
        creatingLeftTips(5, whatAreTheTips);
    })
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
            leftTooltipElement.innerHTML = whatAreTheTips[u];
            leftTips.append(leftTooltipElement);
            o += 1;
            u += 1;
        }
        y += 1;
    }
}
let interval;
let seconds = 0;
let minutes = 0;
const beginning = () => {
    time += 1;
    seconds += 1;
    if (seconds > 59) {
        minutes += 1;
        minutesBlock.innerHTML = '0' + minutes;
        seconds = 0;
    }
    if (minutes > 9) {
        minutesBlock.innerHTML =  minutes;
    }
    secondsBlock.innerHTML = '0' + seconds;
    if (seconds > 9) {
        secondsBlock.innerHTML = seconds;
    }
}

let levels = document.createElement('div');
levels.className = 'levels';
document.body.append(levels);

let levelsOne = document.createElement('div');
levelsOne.className = 'levelsOne';
levels.append(levelsOne);

let levelsFiveByFive = document.createElement('div');
levelsFiveByFive.className = 'levelsFiveByFive';
levelsFiveByFive.innerHTML = 'Level 1';
levelsOne.append(levelsFiveByFive);



let levelsOneFiveByFive = document.createElement('div');
levelsOneFiveByFive.className = 'levelsOneFiveByFive';
levelsOneFiveByFive.classList.add('levelsActive');
levelsOneFiveByFive.innerHTML = 'heart';
levelsOne.append(levelsOneFiveByFive);

levelsOneFiveByFive.addEventListener('click', () => {
    levelsOneTenByTen.classList.remove('levelsActive');
    levelsThreeTenByTen.classList.remove('levelsActive');
    levelsFourTenByTen.classList.remove('levelsActive');
    levelsTwoTenByTen.classList.remove('levelsActive');
    levelsFiveTenByTen.classList.remove('levelsActive');
    levelsTwoFiveByFive.classList.remove('levelsActive');
    levelsThreeFiveByFive.classList.remove('levelsActive');
    levelsFourFiveByFive.classList.remove('levelsActive');
    levelsFiveFiveByFive.classList.remove('levelsActive');
    levelsOneFiveByFive.classList.add('levelsActive');
    topTips.innerHTML = '';
    leftTips.innerHTML = '';
    divWrapper.innerHTML = '';
    creatingCells(5, pictureOneFiveByFive);
    creatingTopTips(5, pictureOneFiveByFiveHintsTop);
    creatingLeftTips(5, pictureOneFiveByFiveHintsLeft);
    clearInterval(interval);
    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    seconds = 0;
    minutes = 0;
})

let levelsTwoFiveByFive = document.createElement('div');
levelsTwoFiveByFive.className = 'levelsTwoFiveByFive';
levelsTwoFiveByFive.innerHTML = 'ship';
levelsOne.append(levelsTwoFiveByFive);

levelsTwoFiveByFive.addEventListener('click', () => {
    levelsOneTenByTen.classList.remove('levelsActive');
    levelsThreeTenByTen.classList.remove('levelsActive');
    levelsFourTenByTen.classList.remove('levelsActive');
    levelsTwoTenByTen.classList.remove('levelsActive');
    levelsFiveTenByTen.classList.remove('levelsActive');
    levelsOneFiveByFive.classList.remove('levelsActive');
    levelsThreeFiveByFive.classList.remove('levelsActive');
    levelsFourFiveByFive.classList.remove('levelsActive');
    levelsFiveFiveByFive.classList.remove('levelsActive');
    levelsTwoFiveByFive.classList.add('levelsActive');
    topTips.innerHTML = '';
    leftTips.innerHTML = '';
    divWrapper.innerHTML = '';
    creatingCells(5, pictureTwoFiveByFive);
    creatingTopTips(5, pictureTwoFiveByFiveHintsTop);
    creatingLeftTips(5, pictureTwoFiveByFiveHintsLeft);
    clearInterval(interval);
    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    seconds = 0;
    minutes = 0;
})

let levelsThreeFiveByFive = document.createElement('div');
levelsThreeFiveByFive.className = 'levelsThreeFiveByFive';
levelsThreeFiveByFive.innerHTML = 'fish';
levelsOne.append(levelsThreeFiveByFive);

levelsThreeFiveByFive.addEventListener('click', () => {
    levelsOneTenByTen.classList.remove('levelsActive');
    levelsThreeTenByTen.classList.remove('levelsActive');
    levelsFourTenByTen.classList.remove('levelsActive');
    levelsTwoTenByTen.classList.remove('levelsActive');
    levelsFiveTenByTen.classList.remove('levelsActive');
    levelsOneFiveByFive.classList.remove('levelsActive');
    levelsTwoFiveByFive.classList.remove('levelsActive');
    levelsFourFiveByFive.classList.remove('levelsActive');
    levelsFiveFiveByFive.classList.remove('levelsActive');
    levelsThreeFiveByFive.classList.add('levelsActive');
    topTips.innerHTML = '';
    leftTips.innerHTML = '';
    divWrapper.innerHTML = '';
    creatingCells(5, pictureThreeFiveByFive);
    creatingTopTips(5, pictureThreeFiveByFiveHintsTop);
    creatingLeftTips(5, pictureThreeFiveByFiveHintsLeft);
    clearInterval(interval);
    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    seconds = 0;
    minutes = 0;
})

let levelsFourFiveByFive = document.createElement('div');
levelsFourFiveByFive.className = 'levelsFourFiveByFive';
levelsFourFiveByFive.innerHTML = 'smile';
levelsOne.append(levelsFourFiveByFive);

levelsFourFiveByFive.addEventListener('click', () => {
    levelsOneTenByTen.classList.remove('levelsActive');
    levelsThreeTenByTen.classList.remove('levelsActive');
    levelsFourTenByTen.classList.remove('levelsActive');
    levelsTwoTenByTen.classList.remove('levelsActive');
    levelsFiveTenByTen.classList.remove('levelsActive');
    levelsOneFiveByFive.classList.remove('levelsActive');
    levelsThreeFiveByFive.classList.remove('levelsActive');
    levelsTwoFiveByFive.classList.remove('levelsActive');
    levelsFiveFiveByFive.classList.remove('levelsActive');
    levelsFourFiveByFive.classList.add('levelsActive');
    topTips.innerHTML = '';
    leftTips.innerHTML = '';
    divWrapper.innerHTML = '';
    creatingCells(5, pictureFourFiveByFive);
    creatingTopTips(5, pictureFourFiveByFiveHintsTop);
    creatingLeftTips(5, pictureFourFiveByFiveHintsLeft);
    clearInterval(interval);
    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    seconds = 0;
    minutes = 0;
})

let levelsFiveFiveByFive = document.createElement('div');
levelsFiveFiveByFive.className = 'levelsFiveFiveByFive';
levelsFiveFiveByFive.innerHTML = 'umbrella';
levelsOne.append(levelsFiveFiveByFive);

levelsFiveFiveByFive.addEventListener('click', () => {
    levelsOneTenByTen.classList.remove('levelsActive');
    levelsThreeTenByTen.classList.remove('levelsActive');
    levelsFourTenByTen.classList.remove('levelsActive');
    levelsTwoTenByTen.classList.remove('levelsActive');
    levelsFiveTenByTen.classList.remove('levelsActive');
    levelsOneFiveByFive.classList.remove('levelsActive');
    levelsThreeFiveByFive.classList.remove('levelsActive');
    levelsFourFiveByFive.classList.remove('levelsActive');
    levelsTwoFiveByFive.classList.remove('levelsActive');
    levelsFiveFiveByFive.classList.add('levelsActive');
    topTips.innerHTML = '';
    leftTips.innerHTML = '';
    divWrapper.innerHTML = '';
    creatingCells(5, pictureFiveFiveByFive);
    creatingTopTips(5, pictureFiveFiveByFiveHintsTop);
    creatingLeftTips(5, pictureFiveFiveByFiveHintsLeft);
    clearInterval(interval);
    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    seconds = 0;
    minutes = 0;
})






let levelsTwo = document.createElement('div');
levelsTwo.className = 'levelsTwo';
levels.append(levelsTwo);

let levelsTenByTen = document.createElement('div');
levelsTenByTen.className = 'levelsTenByTen';
levelsTenByTen.innerHTML = 'Level 2';
levelsTwo.append(levelsTenByTen);

let levelsOneTenByTen = document.createElement('div');
levelsOneTenByTen.className = 'levelsOneTenByTen';
levelsOneTenByTen.innerHTML = 'flower';
levelsTwo.append(levelsOneTenByTen);

levelsOneTenByTen.addEventListener('click', () => {
    levelsTwoFiveByFive.classList.remove('levelsActive');
    levelsThreeFiveByFive.classList.remove('levelsActive');
    levelsFourFiveByFive.classList.remove('levelsActive');
    levelsFiveFiveByFive.classList.remove('levelsActive');
    levelsOneFiveByFive.classList.remove('levelsActive');
    levelsTwoTenByTen.classList.remove('levelsActive');
    levelsThreeTenByTen.classList.remove('levelsActive');
    levelsFourTenByTen.classList.remove('levelsActive');
    levelsFiveTenByTen.classList.remove('levelsActive');
    levelsOneTenByTen.classList.add('levelsActive');
    topTips.innerHTML = '';
    leftTips.innerHTML = '';
    divWrapper.innerHTML = '';
    creatingCells(10, pictureOneTenByTen);
    creatingTopTips(10, pictureOneTenByTenHintsTop);
    creatingLeftTips(10, pictureOneTenByTenHintsLeft);
    clearInterval(interval);
    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    seconds = 0;
    minutes = 0;
})

let levelsTwoTenByTen = document.createElement('div');
levelsTwoTenByTen.className = 'levelsTwoTenByTen';
levelsTwoTenByTen.innerHTML = 'line1';
levelsTwo.append(levelsTwoTenByTen);

levelsTwoTenByTen.addEventListener('click', () => {
    levelsTwoFiveByFive.classList.remove('levelsActive');
    levelsThreeFiveByFive.classList.remove('levelsActive');
    levelsFourFiveByFive.classList.remove('levelsActive');
    levelsFiveFiveByFive.classList.remove('levelsActive');
    levelsOneFiveByFive.classList.remove('levelsActive');
    levelsOneTenByTen.classList.remove('levelsActive');
    levelsThreeTenByTen.classList.remove('levelsActive');
    levelsFourTenByTen.classList.remove('levelsActive');
    levelsFiveTenByTen.classList.remove('levelsActive');
    levelsTwoTenByTen.classList.add('levelsActive');
    topTips.innerHTML = '';
    leftTips.innerHTML = '';
    divWrapper.innerHTML = '';
    creatingCells(10, pictureTwoTenByTen);
    creatingTopTips(10, pictureTwoTenByTenHintsTop);
    creatingLeftTips(10, pictureTwoTenByTenHintsLeft);
    clearInterval(interval);
    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    seconds = 0;
    minutes = 0;
})

let levelsThreeTenByTen = document.createElement('div');
levelsThreeTenByTen.className = 'levelsThreeTenByTen';
levelsThreeTenByTen.innerHTML = 'line2';
levelsTwo.append(levelsThreeTenByTen);

levelsThreeTenByTen.addEventListener('click', () => {
    levelsTwoFiveByFive.classList.remove('levelsActive');
    levelsThreeFiveByFive.classList.remove('levelsActive');
    levelsFourFiveByFive.classList.remove('levelsActive');
    levelsFiveFiveByFive.classList.remove('levelsActive');
    levelsOneFiveByFive.classList.remove('levelsActive');
    levelsOneTenByTen.classList.remove('levelsActive');
    levelsTwoTenByTen.classList.remove('levelsActive');
    levelsFourTenByTen.classList.remove('levelsActive');
    levelsFiveTenByTen.classList.remove('levelsActive');
    levelsThreeTenByTen.classList.add('levelsActive');
    topTips.innerHTML = '';
    leftTips.innerHTML = '';
    divWrapper.innerHTML = '';
    creatingCells(10, pictureThreeTenByTen);
    creatingTopTips(10, pictureThreeTenByTenHintsTop);
    creatingLeftTips(10, pictureThreeTenByTenHintsLeft);
    clearInterval(interval);
    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    seconds = 0;
    minutes = 0;
})

let levelsFourTenByTen = document.createElement('div');
levelsFourTenByTen.className = 'levelsFourTenByTen';
levelsFourTenByTen.innerHTML = 'line3';
levelsTwo.append(levelsFourTenByTen);

levelsFourTenByTen.addEventListener('click', () => {
    levelsTwoFiveByFive.classList.remove('levelsActive');
    levelsThreeFiveByFive.classList.remove('levelsActive');
    levelsFourFiveByFive.classList.remove('levelsActive');
    levelsFiveFiveByFive.classList.remove('levelsActive');
    levelsOneFiveByFive.classList.remove('levelsActive');
    levelsOneTenByTen.classList.remove('levelsActive');
    levelsThreeTenByTen.classList.remove('levelsActive');
    levelsTwoTenByTen.classList.remove('levelsActive');
    levelsFiveTenByTen.classList.remove('levelsActive');
    levelsFourTenByTen.classList.add('levelsActive');
    topTips.innerHTML = '';
    leftTips.innerHTML = '';
    divWrapper.innerHTML = '';
    creatingCells(10, pictureFourTenByTen);
    creatingTopTips(10, pictureFourTenByTenHintsTop);
    creatingLeftTips(10, pictureFourTenByTenHintsLeft);
    clearInterval(interval);
    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    seconds = 0;
    minutes = 0;
})

let levelsFiveTenByTen = document.createElement('div');
levelsFiveTenByTen.className = 'levelsFiveTenByTen';
levelsFiveTenByTen.innerHTML = 'line4';
levelsTwo.append(levelsFiveTenByTen);

levelsFiveTenByTen.addEventListener('click', () => {
    levelsTwoFiveByFive.classList.remove('levelsActive');
    levelsThreeFiveByFive.classList.remove('levelsActive');
    levelsFourFiveByFive.classList.remove('levelsActive');
    levelsFiveFiveByFive.classList.remove('levelsActive');
    levelsOneFiveByFive.classList.remove('levelsActive');
    levelsOneTenByTen.classList.remove('levelsActive');
    levelsThreeTenByTen.classList.remove('levelsActive');
    levelsFourTenByTen.classList.remove('levelsActive');
    levelsTwoTenByTen.classList.remove('levelsActive');
    levelsFiveTenByTen.classList.add('levelsActive');
    topTips.innerHTML = '';
    leftTips.innerHTML = '';
    divWrapper.innerHTML = '';
    creatingCells(10, pictureFiveTenByTen);
    creatingTopTips(10, pictureFiveTenByTenHintsTop);
    creatingLeftTips(10, pictureFiveTenByTenHintsLeft);
    clearInterval(interval);
    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    seconds = 0;
    minutes = 0;
})

creatingCells(5, pictureOneFiveByFive);
creatingTopTips(5, pictureOneFiveByFiveHintsTop);
creatingLeftTips(5, pictureOneFiveByFiveHintsLeft);