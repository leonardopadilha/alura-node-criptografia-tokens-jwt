const dados = [
    {
        nome: "um",
        idade: 20
    },
    {
        nome: "dois",
        idade: 25
    }
]

for (let i = 0; i < dados.length; i++) {
    console.log(dados[i].nome)
}

dados.map(elemento => {
    console.log(elemento.nome)
})

dados.forEach(nomes => {
    console.log(nomes.nome)
})