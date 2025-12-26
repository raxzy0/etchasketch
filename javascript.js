
let container = document.querySelector(".container")
let btn = document.querySelector("button")
let num = 0


btn.addEventListener('click', () => {
    deletegrid()
    num = prompt("How many squares?:")
    
    for (let i = 0; i < num; i++) {
    let row = document.createElement("div")
    row.classList.add('row' + i, 'row')
    document.querySelector('row')
    container.append(row)

    for (let i = 0; i < num; i++) {
        let col = document.createElement("div")
        col.classList.add('col' + i, 'square')
        document.querySelector('.square')
        row.append(col)
    }
    const boxes = document.querySelectorAll('.square')
    boxes.forEach(box => {
        box.style.height = (700/num) + 'px'
        box.style.width = (700/num ) + 'px'
    })
}

container.addEventListener('mouseover', (e) => {
    e.target.addEventListener('mouseenter', () => {
        e.target.style.backgroundColor = 'blue'
    })
})
})

function deletegrid() {
    for (let i = 0; i < num; i++) {
    let row = document.querySelector('.row')
    container.removeChild(row)
    }   
}