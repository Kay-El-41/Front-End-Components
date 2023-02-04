const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

let text = 'We Love Programming|' // remove | if retype from first

let idx = 1
let speed = 300

writeTxt()
speedEl.addEventListener('change', (e) => {
    speed = 300 / speedEl.value
})

function writeTxt() {
    textEl.innerText = text.slice(0, idx)
    idx++

    if (idx > text.length) {
        setTimeout(removeTxt, speed) // remove this to retype from start
        // idx = 1
    }

    setTimeout(writeTxt, speed)
}

function removeTxt() {
    idx = text.length
    textEl.innerText = text.slice(0, idx)
    idx--
}