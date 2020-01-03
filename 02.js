let link = document.querySelectorAll('a')

link.forEach((el) => el.onclick = (event) => el.innerText += `(${el.href})`)