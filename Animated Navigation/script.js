const navContainer = document.getElementById('navi')
const toggleButton = document.getElementById('toggle')

toggleButton.addEventListener('click', () => {
    navContainer.classList.toggle('active')
})