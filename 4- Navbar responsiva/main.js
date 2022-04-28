const checkBox = document.querySelector('#input__burger')

console.log(checkBox);

const toggleCheck = (el) => {
    if (el.checked) {
        el.checked = false
    } else {
        el.checked = true
    }
}

