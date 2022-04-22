import $ from 'jquery';

window.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('#navToggle')
    const overlay = document.querySelector('.overlay')
    const body = document.querySelector('body')
    const links = document.querySelectorAll('.header-links')

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active')
        overlay.classList.toggle('open')
        body.classList.toggle('locked')
    })

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            navToggle.classList.remove('active')
            overlay.classList.remove('open')
        })
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
    
    window.location.replace('#')

    if (typeof window.history.replaceState == 'function') {
      history.replaceState({}, '', window.location.href.slice(0, -1))
    }

})