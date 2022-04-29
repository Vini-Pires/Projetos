const checkBox = document.querySelector('[data-burger]')
const navList = document.querySelector('[data-list]')


const toggleCheck = (el) => {
    if (el.checked) {
        el.checked = false
        navList.toggleAttribute('hidden')
    } else {
        el.checked = true
        navList.toggleAttribute('hidden')
    }
}

