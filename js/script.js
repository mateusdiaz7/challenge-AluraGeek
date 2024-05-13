const url = "http://localhost:3000/produtos";
const secaoProdutos = document.querySelector(".secao-produtos");

async function pegarProdutos() {
    const response = await fetch(url);
    const data = await  response.json();

    console.log(data);

    data.map((produto) => {
        const secao = document.createElement("section");
        secao.className("secao-produtos")
        const div = document.createElement("div");
        div.className("lista-produtos");
        

    })
}

pegarProdutos();