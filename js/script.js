const botaoTema = document.querySelector('#botao-tema');
const fundo = document.querySelector('body');
const tema = document.querySelector('.tema');
const digitar = document.querySelector('#pesquisa')
const botao = document.querySelector('#botao')
const navbar = document.querySelector('.digitar')
const apiKey = '203312d8'

function branco() {
    document.documentElement.style.setProperty('--fundo', 'rgb(240, 240, 240)');
    document.documentElement.style.setProperty('--cor-botao', 'rgb(210, 210, 210)');
    document.documentElement.style.setProperty('--cor-borda', 'rgb(200, 200,200)');
    document.documentElement.style.setProperty('--cor-texto', 'rgb(78, 78, 78)');
    tema.innerHTML = '<i class="bi bi-moon-fill" id="botao-tema"></i>'


    console.log('branco');

    tema.removeEventListener('click', branco);
    tema.addEventListener('click', preto);
}

function preto() {
    document.documentElement.style.setProperty('--fundo', 'rgb(26, 26, 26)');
    document.documentElement.style.setProperty('--cor-botao', 'rgb(20, 20, 20)');
    document.documentElement.style.setProperty('--cor-borda', 'rgb(46, 46, 46)');
    document.documentElement.style.setProperty('--cor-texto', 'rgb(199, 197, 197)');
    tema.innerHTML = '<i class="bi bi-brightness-high-fill" id="botao-tema"></i>'


    console.log('preto');

    tema.removeEventListener('click', preto);
    tema.addEventListener('click', branco);
}

tema.addEventListener('click', branco);

botao.addEventListener('click', ()=>{
    if (digitar.value == ""){
        alert ('Preencha o campo!')
        return
    }

    fetch(`http://www.omdbapi.com/?s=${digitar.value}&apikey=${apiKey}`)
    .then(result => result.json())
    .then(json => carregarLista(json))
})

const carregarLista = (json =>{
    const lista = document.querySelector('div.box')
    lista.innerHTML = ""

    if (json.Response == 'False'){
        alert('Nenhum filme foi encontrado.')
        return
    }

    json.Search.forEach(element =>{
        console.log(element)

        let item = document.createElement("div")
        item.classList.add('filmes')

        item.innerHTML = `<img src = "${element.Poster}"/><h2>${element.Title}</h2><h3>${element.Year}</h3>`
        lista.appendChild(item)


    })
})

