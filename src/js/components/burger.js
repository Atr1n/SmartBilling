window.addEventListener('DOMContentLoaded', () => {
    const BurgerListeners = () => {
        let navToggle = document.querySelector('#navToggle')
        let overlay = document.querySelector('.overlay')
        let body = document.querySelector('body')
        let links = document.querySelectorAll('.header-links')

        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active')
            overlay.classList.toggle('open')
            body.classList.toggle('locked')
        })

        links.forEach(link => {
            link.addEventListener('click', e => {
                navToggle.classList.remove('active')
                overlay.classList.remove('open')
            })
        })
    }

    const ChangeOffsetHeigth = () => {
        let main = document.querySelector('main')
        let arrow = document.querySelector('.arrow')
        let headerHeight = main.offsetHeight


        let addClassBurger = () => navToggle.classList.add('burger-active')
        let removeClassBurger = () => navToggle.classList.remove('burger-active')

        let addClassArrow = () => arrow.classList.add('arrow-active')
        let removeClassArrow = () => arrow.classList.remove('arrow-active')

        window.addEventListener('scroll', () => {
            let scrollpos = window.scrollY
            scrollpos = window.scrollY

            if (scrollpos >= headerHeight) {
                addClassBurger()
                addClassArrow()
            } else {
                removeClassBurger()
                removeClassArrow()
            }
        })
    }

    const UrlCleanup = () => {
        window.location.replace('#')

        if (typeof window.history.replaceState == 'function') {
            history.replaceState({}, '', window.location.href.slice(0, -1))
        }
    }

    BurgerListeners()
    ChangeOffsetHeigth()
    UrlCleanup()
})