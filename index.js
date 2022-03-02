/* Criando uma função para axibir as informações em um local expecífico
da tela (GRID4) sem precisar recarregar a tela */
function abrirPagina(x, y){
    var indice = x
    var target = y
    var url = `paginas/paginas/pagina-${indice}.html`

    var xml = new XMLHttpRequest()

    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status == 200){
            document.getElementById('bloco04').innerHTML = xml.responseText
        }
    }

    xml.open("GET", url, true)
    xml.send()
}
/* Abrir conteudo na (Grid3) sem recarregar a página */
function abrirSubmenu(x, y){
    var indice = x
    var target = y
    var url = `paginas/submenu/submenu-${indice}.html`

    var xml = new XMLHttpRequest()

    xml.onreadystatechange = function(){
        if(xml.readyState == 4 && xml.status == 200){
            document.getElementById('bloco03').innerHTML = xml.responseText
        }
    }

    xml.open("GET", url, true)
    xml.send()
} 

/* FIM  */

const controleSubmenu = document.getElementById('controleSubmenu')
const bloco04 = document.getElementById('bloco04')
const logo1 = document.querySelector('#logoPerfil')
const logo2 = document.querySelector('#logoConversas')
const logo3 = document.querySelector('#logoCampanhas')
const logo4 = document.querySelector('#logoPesquisa')
const logo5 = document.querySelector('#logoNovaCampanha')


controleSubmenu.addEventListener('click', ()=>{
    if(controleSubmenu.classList.contains('iconInverter1')){
        controleSubmenu.classList.remove('iconInverter1')
        controleSubmenu.classList.add('iconInverter2')
        bloco04.classList.add('bloco04Deslizar')
    }else{
        controleSubmenu.classList.remove('iconInverter2')
        controleSubmenu.classList.add('iconInverter1')
        bloco04.classList.remove('bloco04Deslizar')
    }
})

function apenasAbrirSubmenu (){
    if(bloco04.classList.contains('bloco04Deslizar')){
        controleSubmenu.classList.remove('iconInverter2')
        controleSubmenu.classList.add('iconInverter1')
        bloco04.classList.remove('bloco04Deslizar')
    }
}

logo1.addEventListener('click', apenasAbrirSubmenu)
logo2.addEventListener('click', apenasAbrirSubmenu)
logo3.addEventListener('click', apenasAbrirSubmenu)
logo4.addEventListener('click', apenasAbrirSubmenu)
logo5.addEventListener('click', apenasAbrirSubmenu)



/* Campanha Modelo */

