document.querySelector("#salvar").addEventListener("click", cadastrar)

let cadastros = []

window.addEventListener("load", () => {
    cadastros = JSON.parse(localStorage.getItem("cadastros")) || []
    atualizar()
})

function atualizar() {
    document.querySelector("#cadastros").innerHTML = ""
    cadastros.forEach(cadastro=>
        document.querySelector("#cadastros").innerHTML += (criarCard(cadastro)))
}

function cadastrar() {

    const titulo = document.querySelector("#titulo").value
    const diculdade = document.querySelector("#diculdade").value
    const categoria = document.querySelector("#categoria").value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const cadastro = { //JSON Java Script Object Notation
        titulo: titulo, diculdade: diculdade, categoria: categoria
    }
    if (!isValid(cadastro.titulo, document.querySelector("#titulo"))) return
    if (!isValid(cadastro.diculdade, document.querySelector("#diculdade"))) return
    cadastros.push(cadastro)
    localStorage.setItem("cadastros", JSON.stringify(cadastros))
    atualizar()
    modal.hide()
}

function isValid(valor, campo) {
    if (valor.length == 0) {
        campo.classList.add("is-invalid")
        campo.classList.remove("is-valid")
        return false
    } else {
        campo.classList.add("is-valid")
        campo.classList.remove("is-invalid")
        return true
    }
}

function apagar(botao) {
    botao.parentNode.parentNode.parentNode.remove()

}
function criarCard(cadastro) {
    const card =
        `
       <div class = "col-lg-3 col-md-6 col-sm-12">
        <div class="card ">
                    <div class="card-header">
                    ${cadastro.titulo}
                </div>
                <div class="card-body">


                    <p class="card-text"> As mãos de um cozinheiro são como varinhas mágicas que transformam alimentos em sabores e momentos.</p>

                    <p class="card-text">${cadastro.categoria}</p>
                    <span class="badge text-bg-warning">${cadastro.diculdade} diculdade </span>


                </div>

                <div class="card-footer">

                    <a href="#" class="btn btn-success" title="Marcar como concluida"><i class="bi bi-check"> </i></a>
                    <a href="#" onClick="apagar(this)"class="btn btn-danger" title="apagar cadastros"><i class="bi bi-trash3"> </i></a>


                </div>


                </div>
                </div>


                </div>
                `

    return card
}