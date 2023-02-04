const result = document.getElementById('result')
const filter = document.getElementById('filter')

const listItems = []

getUserData()
filter.addEventListener('input', (e) => filterData(e.target.value))


async function getUserData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()
    console.log(results)

    // Clear resulst
    result.innerHTML = ''

    results.forEach(user => {
        const userLi = document.createElement('li')
        listItems.push(userLi)
        userLi.innerHTML = `
        <img src = ${user.picture.large} alt= ${user.name.first}>
        <div class = "user-info">
            <h4 id="username">${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}
        </div>
        `
        result.appendChild(userLi)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}


