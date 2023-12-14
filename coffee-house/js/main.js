const nav2 = document.querySelector('.nav2')
const button_icon_burger_menu_vector_1 = document.querySelector('.button_icon_burger_menu_vector_1')
const button_icon_burger_menu_vector_2 = document.querySelector('.button_icon_burger_menu_vector_2')
const button_icon_burger = document.querySelector('.button_icon_burger')
const header_menu2 = document.querySelector('.header_menu2')
const logo2 = document.querySelector('.logo2')
const header_menu = document.querySelector('.header_menu')

button_icon_burger.addEventListener('click', () => {
    header_menu2.classList.toggle('active')
    button_icon_burger.classList.toggle('active')
    button_icon_burger_menu_vector_1.classList.toggle('active')
    button_icon_burger_menu_vector_2.classList.toggle('active')
})

header_menu2.addEventListener('click', () => {
    header_menu2.classList.toggle('active')
    button_icon_burger.classList.toggle('active')
    button_icon_burger_menu_vector_1.classList.toggle('active')
    button_icon_burger_menu_vector_2.classList.toggle('active')
})




const button_icon_dark_left = document.querySelector('.button_icon_dark_left')
const button_icon_dark_right = document.querySelector('.button_icon_dark_right')
const slider_slide_1 = document.querySelector('.slider_slide_1')
const slider_slide_2 = document.querySelector('.slider_slide_2')
const slider_slide_3 = document.querySelector('.slider_slide_3')
const slider_control_1 = document.querySelector('.slider_control_1')
const slider_control_2 = document.querySelector('.slider_control_2')
const slider_control_3 = document.querySelector('.slider_control_3')
let i = 0;

button_icon_dark_left.addEventListener('click', () => {
    if (i == 0) {
        slider_control_1.style.background = "#C1B6AD";
        slider_control_2.style.background = "#C1B6AD";
        slider_control_3.style.background = "#665F55";
        slider_slide_1.style.margin = "0 0 0 -200%";
        i += 2;
    } else  if (i == 2) {
        slider_control_1.style.background = "#C1B6AD";
        slider_control_2.style.background = "#665F55";
        slider_control_3.style.background = "#C1B6AD";
        slider_slide_1.style.margin = "0 0 0 -100%";
        i -= 1;
    } else if (i == 1) {
        slider_control_1.style.background = "#665F55";
        slider_control_2.style.background = "#C1B6AD";
        slider_control_3.style.background = "#C1B6AD";
        slider_slide_1.style.margin = "0 0 0 0";
        i -= 1;
    }
})

button_icon_dark_right.addEventListener('click', () => {
    if (i == 0) {
        slider_control_1.style.background = "#C1B6AD";
        slider_control_2.style.background = "#665F55";
        slider_control_3.style.background = "#C1B6AD";
        slider_slide_1.style.margin = "0 0 0 -100%";
        i += 1;
    } else if (i == 1) {
        slider_control_1.style.background = "#C1B6AD";
        slider_control_2.style.background = "#C1B6AD";
        slider_control_3.style.background = "#665F55";
        slider_slide_1.style.margin = "0 0 0 -200%";
        i += 1;
    } else if (i == 2) {
        slider_control_1.style.background = "#665F55";
        slider_control_2.style.background = "#C1B6AD";
        slider_control_3.style.background = "#C1B6AD";
        slider_slide_1.style.margin = "0 0 0 0";
        i -= 2;
    }
})

slider_control_1.addEventListener('click', () => {
    slider_control_1.style.background = "#665F55";
    slider_control_2.style.background = "#C1B6AD";
    slider_control_3.style.background = "#C1B6AD";
    slider_slide_1.style.margin = "0 0 0 0";
    if (i != 0) {
        i = 0;
    }
})

slider_control_2.addEventListener('click', () => {
    slider_control_1.style.background = "#C1B6AD";
    slider_control_2.style.background = "#665F55";
    slider_control_3.style.background = "#C1B6AD";
    slider_slide_1.style.margin = "0 0 0 -100%";
    if (i != 1) {
        i = 1;
    }
})

slider_control_3.addEventListener('click', () => {
    slider_control_1.style.background = "#C1B6AD";
    slider_control_2.style.background = "#C1B6AD";
    slider_control_3.style.background = "#665F55";
    slider_slide_1.style.margin = "0 0 0 -200%";
    if (i != 2) {
        i = 2;
    }
})

setInterval(function scrolling() {
    if (i == 0) {
        slider_control_1.style.background = "C1B6AD";
        slider_control_2.style.background = "#665F55";
        slider_control_3.style.background = "#C1B6AD";
        slider_slide_1.style.margin = "0 0 0 -100%";
        i += 1;
    } else if (i == 1) {
        slider_control_1.style.background = "#C1B6AD";
        slider_control_2.style.background = "#C1B6AD";
        slider_control_3.style.background = "#665F55";
        slider_slide_1.style.margin = "0 0 0 -200%";
        i += 1;
    } else if (i == 2) {
        slider_control_1.style.background = "#665F55";
        slider_control_2.style.background = "#C1B6AD";
        slider_control_3.style.background = "#C1B6AD";
        slider_slide_1.style.margin = "0 0 0 0";
        i -= 2;
    }
}, 6000);


let x1 = null;
let x2 = null;

let x11 = null;
let x22 = null;

let x111 = null;
let x222 = null;



function TouchStartSlider1(event) {
    const firstTouchStartSlider = event.touches[0];
    x1 = firstTouchStartSlider.clientX;
};

function TouchMoveSlider1(event) {
    if (!x1) {
        return false;
    }
    x2 = event.touches[0].clientX;
    withAList()
};

function withAList() {
    if (x2 < x1) {
        if (i == 0) {
            slider_control_1.style.background = "#C1B6AD";
            slider_control_2.style.background = "#665F55";
            slider_control_3.style.background = "#C1B6AD";
            slider_slide_1.style.margin = "0 0 0 -100%";
            i += 1;
        }
    } else if (x2 > x1) {
        if (i == 0) {
            slider_control_1.style.background = "#C1B6AD";
            slider_control_2.style.background = "#C1B6AD";
            slider_control_3.style.background = "#665F55";
            slider_slide_1.style.margin = "0 0 0 -200%";
            i += 2;
        }
    }
}


function TouchStartSlider2(event) {
    const firstTouchStartSlider2 = event.touches[0];
    x11 = firstTouchStartSlider2.clientX;
};

function TouchMoveSlider2(event) {
    if (!x11) {
        return false;
    }
    x22 = event.touches[0].clientX;
    withAList2()
};

function withAList2() {
    if (x22 < x11) {
        if (i == 1) {
            slider_control_1.style.background = "#C1B6AD";
            slider_control_2.style.background = "#C1B6AD";
            slider_control_3.style.background = "#665F55";
            slider_slide_1.style.margin = "0 0 0 -200%";
            i += 1;
        }
    } else if (x22 > x11) {
        if (i == 1) {
            slider_control_1.style.background = "#665F55";
            slider_control_2.style.background = "#C1B6AD";
            slider_control_3.style.background = "#C1B6AD";
            slider_slide_1.style.margin = "0 0 0 0";
            i -= 1;
        }
    }
}


function TouchStartSlider3(event) {
    const firstTouchStartSlider3 = event.touches[0];
    x111 = firstTouchStartSlider3.clientX;
};

function TouchMoveSlider3(event) {
    if (!x1) {
        return false;
    }
    x222 = event.touches[0].clientX;
    withAList3()
};

function withAList3() {
    if (x222 < x111) {
        if (i == 2) {
            slider_control_1.style.background = "#665F55";
            slider_control_2.style.background = "#C1B6AD";
            slider_control_3.style.background = "#C1B6AD";
            slider_slide_1.style.margin = "0 0 0 0";
            i -= 2;
        }
    } else if (x222 > x111) {
        if (i == 2) {
            slider_control_1.style.background = "#C1B6AD";
            slider_control_2.style.background = "#665F55";
            slider_control_3.style.background = "#C1B6AD";
            slider_slide_1.style.margin = "0 0 0 -100%";
            i -= 1;
        }
    }
}

slider_slide_1.addEventListener('touchstart', TouchStartSlider1);
slider_slide_1.addEventListener('touchmove', TouchMoveSlider1);

slider_slide_2.addEventListener('touchstart', TouchStartSlider2);
slider_slide_2.addEventListener('touchmove', TouchMoveSlider2);

slider_slide_3.addEventListener('touchstart', TouchStartSlider3);
slider_slide_3.addEventListener('touchmove', TouchMoveSlider3);