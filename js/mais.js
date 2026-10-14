async function carregarComponente(id, arquivo) {

    const elemento = document.querySelector(id)

    const resposta = await fetch(arquivo)

    const html = await resposta.text()

    elemento.innerHTML = html
}

carregarComponente("#header", "components/header.html")