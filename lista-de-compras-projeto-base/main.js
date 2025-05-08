let listaDeItens = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")

form.addEventListener("submit", function (evento) {
    evento.preventDefault() //impedir padrão
    salvarItem()
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