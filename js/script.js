const url = "http://localhost:3000/produtos";
const secaoProdutos = document.querySelector(".secao-produtos");

async function pegarProdutos() {
    const response = await fetch(url);
    const data = await  response.json();

    console.log(data);

    data.map((produto) => {
        const valorProduto = document.createElement("h2");
        const nomeProduto = document.createElement("h2");
        const imagemProduto = document.createElement("img");

        imagemProduto.innerHTML = produto.imagem;
        valorProduto.innerHTML = produto.preco;
        nomeProduto.innerText = produto.nome;
        secaoProdutos.appendChild(valorProduto)
        secaoProdutos.appendChild(nomeProduto);

    })
}

pegarProdutos();