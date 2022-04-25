window.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('#film-video')
    const img = document.querySelector('#film-img')

    const ShowHideHandler = () => {
        img.addEventListener('click', () => {
            video.classList.add('show-video')
            img.classList.add('hide-img')
        })
    }

    ShowHideHandler()
})