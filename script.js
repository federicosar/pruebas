


//Fin de todas las posibilidades de cards de  listas.json

const Grid = document.querySelector("#GridDeCards")
const Radio = document.querySelector("#seleccionDeTamaños")
const Submit = document.querySelector("#enviarRadio")

//funcion que elije estilo de tatuaje del listas.json
function elegirEstiloRadio() {
    enviarRadio.addEventListener('click', (e) => {
        e.preventDefault()

        const seleccionado = document.querySelector('input[type="radio"]:checked');
        //console.log(seleccionado.value)
        fetch("./listas.json")
        .then(response => response.json())
        .then(estilos => { 
            estilos.forEach((cardEstilo) =>{
    
                const {Estilo, Tipo, imagen, precio, id}= cardEstilo
                const seleccion = cardEstilo.filter((busca) => busca.Estilo === seleccionado)
                console.log(seleccion)

            //console.log(cardEstilo)    
    })
    })
        
    })
}

elegirEstiloRadio();
function funcionMostrarCards (){

}
    
    



//fin de funcion que elije estilo de tatuaje del listas.json