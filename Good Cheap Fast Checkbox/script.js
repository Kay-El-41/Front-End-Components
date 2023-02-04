const toggles = document.querySelectorAll('.toggle')

const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

var h3 = document.getElementById('service')

toggles.forEach((toggle) => {
    toggle.addEventListener('change', (e) => doTheTrick(e.target))
})

function doTheTrick(theClickedOne) {
    // Nothing is Checked
    if (!good.checked && !cheap.checked && !fast.checked) {
        h3.innerText = "Select Up to Two Services"
    }

    // All Three are Checked
    if (good.checked && cheap.checked && fast.checked) {
        if (good === theClickedOne) {
            fast.checked = false
        }

        if (cheap === theClickedOne) {
            good.checked = false
        }

        if (fast === theClickedOne) {
            cheap.checked = false
        }
    }

    // Three Conditions for Dual Checked
    if (good.checked && cheap.checked) {
        h3.innerText = "Good & Cheap"
    }

    if (good.checked && fast.checked) {
        h3.innerText = "Good & Fast"
    }

    if (cheap.checked && fast.checked) {
        h3.innerText = "Cheap & Fast"
    }

    // Only One Condition is Selected
    if (good.checked && !cheap.checked && !fast.checked) {
        h3.innerText = "Good"
    }

    if (!good.checked && cheap.checked && !fast.checked) {
        h3.innerText = "Cheap"
    }

    if (!good.checked && !cheap.checked && fast.checked) {
        h3.innerText = "Fast"
    }

    document.body.appendChild(h3)
}

