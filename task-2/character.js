let urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get('id');
const BASEURL = `https://rickandmortyapi.com/api/character/${param}`
const card = document.getElementById('char-card')

fetch(BASEURL)
    .then(response => response.json())
    .then(data => {
        const image = document.createElement('img')
        image.src = data.image
        image.classList.add('card-img-top')
        card.append(image)

        const name = document.createElement('h5')
        name.classList.add('card-title')
        name.innerHTML = `Name: ${data.name}`
        card.append(name)

        const status = document.createElement('p')
        status.className = 'card-text'
        status.innerHTML = `Status: ${data.status}`
        card.append(status)

        const gender = document.createElement('p')
        gender.className = 'card-text'
        gender.innerHTML = `Gender: ${data.gender}`
        card.append(gender)

        const species = document.createElement('p')
        species.className = 'card-text'
        species.innerHTML = `Species: ${data.species}`
        card.append(species)

        const originName = document.createElement('p')
        originName.className = 'card-text'
        originName.innerHTML = `Origin: ${data.origin.name}`
        card.append(originName)

        const locationName = document.createElement('p')
        locationName.className = 'card-text'
        locationName.innerHTML = `Location ${data.location.name}`
        card.append(locationName)

    })