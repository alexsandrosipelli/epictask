document.querySelector("#salvar").addEventListener("click", cadastrar)
function cadastrar() {

    const titulo = document.querySelector("#titulo").value
    const diculdade = document.querySelector("#diculdade").value
    const categoria = document.querySelector("#categoria").value

    const cadastro = { titulo: titulo, diculdade: diculdade, categoria: categoria }

    document.querySelector("#cadastros").innerHTML +=criarCard(cadastro)
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