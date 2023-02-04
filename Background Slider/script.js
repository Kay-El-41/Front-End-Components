const leftArrow = document.getElementById('left')
const rightArrow = document.getElementById('right')
const body = document.body
const picDivs = document.querySelectorAll('.slide')

var currentImageNo = 0
displayImages()

leftArrow.addEventListener('click', () => {
    currentImageNo--
    if (currentImageNo < 0) {
        currentImageNo = picDivs.length - 1
    }
    displayImages()
})

rightArrow.addEventListener('click', () => {
    currentImageNo++
    if (currentImageNo > picDivs.length - 1) {
        currentImageNo = 0
    }
    displayImages()
})

function displayImages() {
    picDivs.forEach(image => image.classList.remove('active'))

    picDivs[currentImageNo].classList.add('active')
    body.style.backgroundImage = picDivs[currentImageNo].style.backgroundImage
}