let links = document.querySelectorAll('a')

document.body.onmouseover = (event) => {
    for (let i = 0; i < links.length; i++) {
        if (event.target == links[i]) {
            links[i].title = links[i].text
        }
    }
} 

