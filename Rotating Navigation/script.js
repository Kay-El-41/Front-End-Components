const open_b = document.getElementById('open')
const close_b = document.getElementById('close')
const container = document.querySelector('.container')


open_b.addEventListener('click', () => container.classList.add('show-nav'))
close_b.addEventListener('click', () => container.classList.remove('show-nav'))
