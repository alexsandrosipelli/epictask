document.querySelector("#salvar").addEventListener("click", cadastrar)
let cadastros = []
window.addEventListener("load", () => {
    cadastros = JSON.parse(localStorage.getItem("cadastros")) || []
    atualizar()
})
function atualizar() {
    localStorage.setItem("cadastros", JSON.stringify(cadastros))
    document.querySelector("#cadastros").innerHTML = ""
    cadastros.forEach(cadastro =>document.querySelector("#cadastros").innerHTML += criarCard(cadastro))
    
    const total = cadastros.reduce(
        (acc, cadastrar) =>  acc += Number(cadastrar.diculdade) , 0

    )
    const pontosObtidos = cadastros.filter(cadastro => cadastro.concluida).reduce((acc, cadastro) =>
        acc += Number(cadastrar.diculdade), 0)

    document.querySelector("#pontuacao").innerHTML = total

}
function filtrar(lista) {
    document.querySelector("#cadastros").innerHTML = ""
    lista.forEach(cadastro =>
        document.querySelector("#cadastros").innerHTML += criarCard(cadastro)
    )
}
function cadastrar() {
    const titulo = document.querySelector("#titulo").value
    const diculdade = document.querySelector("#diculdade").value
    const categoria = document.querySelector("#categoria").value
    const modal = bootstrap.Modal.getInstance(document.querySelector("#exampleModal"))

    const cadastro = { //JSON Java Script Object Notation
        id: Date.now(),// melhor para um usuario apenas, com mais pode gerar mesmo id para dois usuarios  
        titulo,
        diculdade,
        categoria,
        concluida: false
    }

    if (!isValid(cadastro.titulo, document.querySelector("#titulo"))) return
    if (!isValid(cadastro.diculdade, document.querySelector("#diculdade"))) return
    cadastros.push(cadastro)

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

function apagar(id){
    //botao.parentNode.parentNode.parentNode.remove() quando nao tem dados persistidos 
    cadastros = cadastros.filter(cadastro => cadastro.id !== id)/* a funçao vai dizer quais tarefas vao passar no filtro ou nao, o retorno vai ser outro array filtrado e o resultado que vai ser colocado no array de tarefas   */
    atualizar()
}



function concluir(id) {
    let cadastroEncontrado =
        cadastros.find(cadastro => cadastro.id == id)
    cadastroEncontrado.concluida = true
    atualizar()


}
function criarCard(cadastro) {

    let disabled = cadastro.concluida ? "disabled" : ""


    const card =`
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
                <a onClick="concluir(${cadastro.id})" href="#" class="btn btn-success ${disabled}" title="marcar como concluída">
                    <i class="bi bi-check2"></i>
                </a>
                <a href="#" onClick="apagar(${cadastro.id})" class="btn btn-danger" title="apagar tarefa">
                    <i class="bi bi-trash3"></i>
                </a>
            </div> <!-- card footer -->
                </div> <!-- card -->
            </div> <!-- col -->
                `

    return card
}