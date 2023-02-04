const imgs = document.querySelector('#imgs')
const imgContainer = document.querySelector('.image-container')

const prevBtn = document.querySelector('#left')
const nextBtn = document.querySelector('#right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 2000);

function run() { // original carousal function
    idx++
    changeImage()
}

function changeImage() {
    if (idx > img.length - 1) { // if idex is over image lengths
        idx = 0
    } else if (idx < 0) {   // if idex reach first item
        idx = img.length - 1
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
}


function resetInterval() {
    changeImage()
    clearInterval(interval) // clear the existing interval
    interval = setInterval(run, 2000) // run a new interval
}

nextBtn.addEventListener('click', () => {
    idx++
    resetInterval()
})

prevBtn.addEventListener('click', () => {
    idx--
    resetInterval()
})
