const ratingScreen = document.getElementById('rating-screen')
const thankyouScreen = document.getElementById('thank-you-screen')
const buttons = document.querySelectorAll('.btn')
const submitButton = document.getElementById('submit-button')
const ratingSpan = document.getElementById('rating-span')

var ratingNumber = 0

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        buttons.forEach((idx) => {
            if (idx.classList.contains('selected')) {
                idx.classList.remove('selected')
            }
        })
        btn.classList.toggle('selected')
        ratingNumber = btn.innerText

    })
})

submitButton.addEventListener('click', () => {
    ratingScreen.style.visibility = 'hidden'
    thankyouScreen.style.visibility = 'visible'
    ratingSpan.innerText = `You selected ${ratingNumber} out of 5.`
})
