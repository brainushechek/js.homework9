let elem = document.querySelector('ol')
let button = document.querySelector('button')

button.onclick = (event) => {
    elem.removeChild(elem.lastElementChild)
}
