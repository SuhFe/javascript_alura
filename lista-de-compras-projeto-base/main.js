let listaDeItens = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")
const ulItens = document.getElementById("lista-de-itens")

form.addEventListener("submit", function (evento) {
    evento.preventDefault() //impedir padrão
    salvarItem()
    mostrarItem()
})

function salvarItem() {
    const comprarItem = itensInput.value
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprarItem.toUpperCase())

    if (checarDuplicado) {
        alert("Item já cadastrado")
    } else {
    listaDeItens.push({
        valor: comprarItem
    })
}

    console.log(listaDeItens)
}

function mostrarItem(){
    ulItens.innerHTML = ''

    listaDeItens.forEach((elemento,index) => {
        ulItens.innerHTML += `
    <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}"></input>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
    `
    })

    const inputsCheck = document.querySelectorAll('input[type="checkbox"]')

    inputsCheck.forEach(i => {
        i.addEventListener('click',(evento) => {
            console.log("fui clicado")
        })
    })
}