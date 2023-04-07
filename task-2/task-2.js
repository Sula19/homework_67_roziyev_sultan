const BASEURL = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10"


let xhr = new XMLHttpRequest();
xhr.onload = function (){
    let data = JSON.parse(this.response);
    console.log(data)

    const card = document.getElementById('card');

    for (let char of data){
        const row = document.createElement('div')
        row.className = 'row'

        const col = document.createElement('div')
        col.className = 'col'

        const img = document.createElement('img')
        img.className = 'img-fluid rounded-start'
        img.src = char.image

        const a = document.createElement('a')
        a.href = `character.html?id=${char.id}`

        const col2 = document.createElement('div')
        col2.className = 'col'

        const cardBody = document.createElement('div')
        cardBody.className = 'card-body'

        const h5 = document.createElement('h5')
        h5.className = 'card-title'
        h5.innerText = char.name

        card.appendChild(row)
        row.appendChild(col)
        col.appendChild(img)
        row.appendChild(col2)
        col2.appendChild(cardBody)
        col2.appendChild(a)
        col2.appendChild(h5)
        a.append(h5)
    }
};
xhr.open('GET', BASEURL)
xhr.send()