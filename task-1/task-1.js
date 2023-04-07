let input = document.getElementById('add-item-btn');
const container = document.getElementById('container');

function f(){
    const div = document.createElement('div');
    div.className = 'element';
    div.innerText = 'Create element';
    setTimeout(() => div.remove(), 5000);
    const close = document.createElement('button')
    close.className = 'close'
    close.innerText = 'Close'
    div.append(close)
    container.appendChild(div)

    close.addEventListener('click', function () {
        div.remove()
    })
}

input.addEventListener('click', f)