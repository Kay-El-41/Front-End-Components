const navDiv = document.querySelectorAll('.nav')
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')

openBtn.addEventListener('click', () => {
    navDiv.forEach(nav => {
        nav.classList.add('visible')
    })
})

closeBtn.addEventListener('click', () => {
    navDiv.forEach(nav => {
        nav.classList.remove('visible')
    })
}) 