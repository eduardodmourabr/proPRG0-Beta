const CMControleSubmenu = document.querySelector('#CMControleSubmenu')
const CMbloco01 = document.querySelector('#blocoCampanhaModelo01')
const CMbloco02 = document.querySelector('#blocoCampanhaModelo02')
const CMbloco03 = document.querySelector('#blocoCampanhaModelo03')
const CMbloco04 = document.querySelector('#blocoCampanhaModelo04')
const CMbloco05 = document.querySelector('#blocoCampanhaModelo05')

CMControleSubmenu.addEventListener('click', ()=>{
    if(CMControleSubmenu.classList.contains('CMIconInverter1')){
        CMControleSubmenu.classList.remove('CMIconInverter1')
        CMControleSubmenu.classList.add('CMIconInverter2')
        CMbloco05.classList.add('CMIdeslizar2')
        CMbloco01.classList.add('CMIdeslizar1')
        CMbloco02.classList.add('CMIdeslizar1')
        CMbloco03.classList.add('CMIdeslizar1')
        /* CMbloco04.classList.add('CMIdeslizar1') */
        
    }else{
        CMControleSubmenu.classList.remove('CMIconInverter2')
        CMControleSubmenu.classList.add('CMIconInverter1')
        CMbloco05.classList.remove('CMIdeslizar2')
        CMbloco01.classList.remove('CMIdeslizar1')
        CMbloco02.classList.remove('CMIdeslizar1')
        CMbloco03.classList.remove('CMIdeslizar1')
        /* CMbloco04.classList.remove('CMIdeslizar1') */
        
    }
})

const btnEnviar = document.getElementById('btnEnviarMensagem')

btnEnviar.addEventListener('click',()=>{
    alert('Mensagem Enviada!')
})