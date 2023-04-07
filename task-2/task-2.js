const BASEURL = "https://rickandmortyapi.com/api/character"

const card = document.getElementById('card');

fetch(BASEURL)
    .then(response => response.json())
    .then(data => {
        for (let char of data.results){

            const img = document.createElement('img')
            img.src = char.image
            img.classList.add('mg-fluid')
            card.append(img)

            const a = document.createElement('a')
            a.href = `character.html?id=${char.id}`
            a.append(img)
            card.append(a)
        }
    })
