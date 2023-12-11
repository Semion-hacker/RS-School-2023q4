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