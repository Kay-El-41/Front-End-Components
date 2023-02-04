const button = document.getElementById('button')
const container = document.getElementById('toast')

const messges = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
]

const types = ["info", "success", "error"]

button.addEventListener('click', () => createNotifications())

function createNotifications(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : randomTypes())
    notif.innerText = message ? message : randomMessage()
    container.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 4000);

}

function randomMessage() {
    return messges[Math.floor(Math.random() * messges.length)]
}

function randomTypes() {
    return types[Math.floor(Math.random() * types.length)]
}