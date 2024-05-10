const $ = document

const inputElem = $.querySelector("#input-field")
const colorsBox = $.querySelectorAll(".color-box")
const btnSaveElem = $.querySelector("#btn-save")
const btnDeleteElem = $.querySelector("#btn-delete")
const list = $.querySelector("#listed")

colorsBox.forEach(function (item) {
    item.addEventListener("click", function () {
        inputElem.style.backgroundColor = item.style.backgroundColor
    })
})

function btnDeleteHandler() {
    inputElem.value = ""
    inputElem.style.backgroundColor = "white"
}

function btnSaveHandler () {
    let pElem = $.createElement("p")
    pElem.className = "card-text p-3"
    pElem.innerHTML = inputElem.value
    
    let divElem = $.createElement("div")
    divElem.className = "card shadow-sm rounded"
    divElem.style.backgroundColor = inputElem.style.backgroundColor
    divElem.addEventListener("click", removeHandler)

    divElem.append(pElem)
    list.append(divElem)

    inputElem.value = ""
    inputElem.style.backgroundColor = "white"
}

function removeHandler(event) {
    event.target.parentElement.remove()
}

function deleteHandler(event) {
    if (event.keyCode === 27) {
        inputElem.value = ""
        inputElem.style.backgroundColor = "white"
    }
}

function addHandler (event) {
    if (event.keyCode === 13)
    btnSaveHandler()
}

btnDeleteElem.addEventListener("click", btnDeleteHandler)
btnSaveElem.addEventListener("click", btnSaveHandler)
inputElem.addEventListener("keyup", deleteHandler)
inputElem.addEventListener("keyup", addHandler)