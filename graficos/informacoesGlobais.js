const url='https://raw.githubusercontent.com/walterganja/dados-do-grafico/refs/heads/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
}
visualizarInformacoesGlobais()