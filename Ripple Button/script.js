const btn = document.querySelectorAll('.btn')

btn.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY
        console.log(x)
        // get X, Y clicked coordinates from the window

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        console.log(buttonLeft)
        // get x, y coordinates staring position of the button from the window

        const xInside = x - buttonLeft
        console.log(xInside)
        const yInside = y - buttonTop
        // Normal math, right?

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)
        // This adds a span to DOM, creating multiple spans every time we click

        setTimeout(() => circle.remove(), 500)
        // use remove to remove a element from DOM!
    })
})
