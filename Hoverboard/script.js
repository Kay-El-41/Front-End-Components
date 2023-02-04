const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const SQUARES = 500

for (let j = 0; j < SQUARES; j++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square)) // when mouse hover
    square.addEventListener('mouseout', () => removeColor(square)) // when mouse exit the square

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
    //try removing boxShadow, there's cool effect!!
}

function getRandColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}



