const btn = document.querySelector('.btn-color')
const heading = document.querySelector('.heading')

btn.addEventListener('click', () => {
    const colorText = `rgb(${number()},${number()},${number()})`
    document.body.style.background = colorText
    heading.innerText = colorText
})

const number = function () {
    return Math.floor(Math.random() * 255) + 1
}

