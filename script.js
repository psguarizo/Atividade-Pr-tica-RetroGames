
const btnCadastrar = document.getElementById("btnCadastrar")
const btnCancelar = document.getElementById("btnCancelar")
const modalCadastro = document.getElementById("modalCadastro")
const form = document.getElementById("formJogo")
const lista = document.getElementById("listarJogos")
const mensagemVazia = document.getElementById("mensagemVazia")

btnCadastrar.addEventListener("click", () => {
    modalCadastro.showModal()
})

btnCancelar.addEventListener("click", () => {
    modalCadastro.close()
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const titulo = document.getElementById("titulo").value.trim()
    const plataforma = document.getElementById("plataforma").value.trim()
    const desenvolvedora = document.getElementById("desenvolvedora").value.trim()
    const imagem = document.getElementById("imagem").value.trim()
    const preco = Number(document.getElementById("preco").value)

    criarCard(titulo, plataforma, desenvolvedora, imagem, preco)

    form.reset()
    modalCadastro.close()
})

function criarCard(titulo, plataforma, desenvolvedora, imagem, preco) {
    mensagemVazia.hidden = true

    const card = document.createElement("article")
    card.classList.add("card-jogo")

    const capa = document.createElement("div")
    capa.classList.add("capa")

    const imagemCapa = document.createElement("img")
    imagemCapa.src = imagem
    imagemCapa.alt = "Capa do jogo " + titulo

    capa.appendChild(imagemCapa)

    const info = document.createElement("div")
    info.classList.add("info-jogo")

    const nomeJogo = document.createElement("h3")
    nomeJogo.textContent = titulo

    const nomePlataforma = document.createElement("p")
    nomePlataforma.textContent = "Plataforma: " + plataforma

    const nomeDesenvolvedora = document.createElement("p")
    nomeDesenvolvedora.textContent = "Desenvolvedora: " + desenvolvedora

    const valor = document.createElement("strong")
    valor.classList.add("preco")
    valor.textContent = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    info.append(nomeJogo, nomePlataforma, nomeDesenvolvedora, valor)
    card.append(capa, info)
    lista.appendChild(card)
}
