

document.querySelector("#filtrar_Pendentes").addEventListener("click",() =>{
        let  cadastrosfiltrados = cadastros.filter( cadastrar => !cadastrar.concluida  ) 
    filtrar(cadastrosfiltrados)

})
document.querySelector("#filtrar_concluidas").addEventListener("click",() =>{
        let  cadastrosfiltrados = cadastros.filter(cadastrar => cadastrar.concluida ) 
    filtrar(cadastrosfiltrados)

})
document.querySelector("#busca").addEventListener("keyup",() =>{
    let busca = document.querySelector("#busca").value 
    console.log(busca)

    let  cadastrosfiltrados = cadastros.filter(cadastrar =>
    cadastrar.titulo.toLowerCase().includes(busca.toLowerCase())
    )
filtrar(cadastrosfiltrados)

})

