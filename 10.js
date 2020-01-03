let elem = document.getElementById('myunique')

elem.onclick = (event) => {
    if(elem.classList.contains('www')) {
        elem.removeAttribute('class')
    }
} 
