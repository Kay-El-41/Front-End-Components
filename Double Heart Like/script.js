const loveMe = document.querySelector(".love-me")
const times = document.querySelector("#times")

let clickTIme = 0
let timesClicked = 0


loveMe.addEventListener('click', (e) => {
    if (clickTIme == 0) {
        clickTIme = new Date().getTime()
    } else {
        if ((new Date().getTime() - clickTIme) < 800) {
            createHeart(e)
            clickTIme = 0
        } else {
            clickTIme = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const xDiv = e.target.offsetLeft
    const yDiv = e.target.offsetTop

    const xIndise = x - xDiv
    const yIndise = y - yDiv

    heart.style.top = `${yIndise}px`
    heart.style.left = `${xIndise}px`

    loveMe.appendChild(heart)
    setTimeout(() => { heart.remove() }, 1000)

    times.innerHTML = ++timesClicked
}