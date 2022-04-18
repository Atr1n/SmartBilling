const navToggle = document.querySelector('#navToggle')
const overlay = document.querySelector('.overlay')
const body = document.querySelector('body')

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active')
    overlay.classList.toggle('open')
    body.classList.toggle('locked')
})

let scrollpos = window.scrollY
const main = document.querySelector('main')
const header_height = main.offsetHeight

const add_class_on_scroll = () => navToggle.classList.add('mn')
const remove_class_on_scroll = () => navToggle.classList.remove('mn')

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY

    if (scrollpos >= header_height) {
        add_class_on_scroll()
    } else {
        remove_class_on_scroll()
    }
})