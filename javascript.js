
let container = document.querySelector(".container")


for (let i = 0; i < 16; i++) {
    let row = document.createElement("div")
    row.classList.add('row')
    document.querySelector('.row')
    row.textContent = "p"
    container.append(row)
}
