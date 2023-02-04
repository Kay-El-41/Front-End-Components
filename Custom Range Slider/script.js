const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const lavel = e.target.nextElementSibling

    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')
    const labelWidth = getComputedStyle(lavel).getPropertyValue('width')
    // Get CSS Styles, Get Property Width, Get a string like "300px"

    // Convert String to convert it number
    const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2)
    // remove the last two item with substring
    const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2)

    const maxx = e.target.max
    const minn = e.target.min

    // const left = value * (numWidth / maxx) - numLabelWidth / 2
    // this gives a slightly offset in edges, kinda looks COOL!!

    const left = value * (numWidth / maxx) - numLabelWidth / 2 + scale(value, minn, maxx, 10, -10)

    lavel.style.left = left + 'px'
    lavel.innerText = value
})


const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}