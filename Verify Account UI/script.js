const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = ''
            // when we type a number, clear the existing number and change it to what we typed
            // so that it won't end up with two numbers
            setTimeout(() => codes[idx + 1].focus(), 10)
            // setTimeout is important, so that it won't skip to next number before we type
        } else if (e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})