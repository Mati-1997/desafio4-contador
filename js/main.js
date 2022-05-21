const divMensaje=document.getElementById("mensaje")
const container=document.querySelector('.container-fluid')
const span=document.getElementById('span')
const btn=document.querySelector('btn-dark')
const bgSuccess=document.querySelector('.bg-sucess')
const divResultado=document.getElementById("resultado")


let contador=0

container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn-info')){
        contador++
        span.textContent=contador
        divMensaje.innerHTML="<p>Diste click en boton aumentar</p>"
    }

    if(e.target.classList.contains('btn-danger')){
        contador--
        span.textContent=contador
        divMensaje.innerHTML="<p>Diste click en boton disminuir</p>"
    }
    e.stopPropagation()
})

document.body.addEventListener('click',()=>{
    divMensaje.innerText="Tu resultado fue "+ span.textContent
})