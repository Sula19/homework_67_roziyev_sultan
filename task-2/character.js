let urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get('id');
const BASEURL = `https://rickandmortyapi.com/api/character/${param}`


let xhr = new XMLHttpRequest();
xhr.onload = function () {
    let char = JSON.parse(this.response);

    const card = document.getElementById('char-card')

    const img = document.createElement('img')
    img.src = char.image
    img.className = 'card-img-top'

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body'

    const h5 = document.createElement('h5')
    h5.className = 'card=title'
    h5.innerText = char.name

    const status = document.createElement('p')
    status.className = 'card-text'
    status.innerText = char.status

    const gender = document.createElement('p')
    gender.className = 'card-text'
    gender.innerText = char.gender

    const species = document.createElement('p')
    species.className = 'card-text'
    species.innerText = char.species

    const originName = document.createElement('p')
    originName.className = 'card-text'
    originName.innerText = char.origin.name

    const locationName = document.createElement('p')
    locationName.className = 'card-text'
    locationName.innerText = char.location.name


    card.appendChild(img)
    card.appendChild(cardBody)
    cardBody.appendChild(h5)
    cardBody.appendChild(status)
    cardBody.appendChild(gender)
    cardBody.appendChild(species)
    cardBody.appendChild(originName)
    cardBody.appendChild(locationName)
};

xhr.open('GET', BASEURL)
xhr.send()