let listaDeItens = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")

form.addEventListener("submit", function (evento) {
    evento.preventDefault() //impedir padrão
    salvarItem()
})

function salvarItem() {
    const comprarItem = itensInput.value

    listaDeItens.push({
        valor: comprarItem
    })

    console.log(listaDeItens)
}