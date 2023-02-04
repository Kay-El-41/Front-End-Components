const buttons = document.querySelectorAll('.faq-toggle')

buttons.forEach(b => {
    b.addEventListener('click', ()=>{
        parent = b.parentNode
        parent.classList.toggle('active')
        // toggle.parentNode.classList.toggle('active')
    })
})