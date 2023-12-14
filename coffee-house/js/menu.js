const div_menu_grid_preview = document.querySelector('.div_menu_grid_preview')
const Modal_wrapper_1 = document.querySelector('.Modal_wrapper_1')
const Modal_wrapper = document.querySelector('.Modal_wrapper')

let i = 0;
let k = 0;

div_menu_grid_preview.addEventListener('click', () => {
    if (i == 0) {
        Modal_wrapper_1.style.display = "flex";
        i += 1;
    } else {
        Modal_wrapper_1.style.display = "none";
        i -= 1;
    }
})

Modal_wrapper.addEventListener('click', () => {
    k = 1;
})

Modal_wrapper_1.addEventListener('click', () => {
    if (k == 0) {
        Modal_wrapper_1.style.display = "none";
    }
    k = 0;
})