
const Grid = document.querySelector("#GridDeCards")
const Radio = document.querySelector("#seleccionDeTamaños")
const Submit = document.querySelector("#enviarRadio")

function radio () {

    enviarRadio.addEventListener('click', (e) => {
            e.preventDefault()
            let seleccionado = document.querySelector('input[type="radio"]:checked');    
    const elije = seleccionado.value  
        return console.log(elije)
    })
    }
radio();

function listasJsonFetch () {
    
    fetch("./listas.json")
    .then(response => response.json())
    .then(estilos => { 
        
        
        estilos.forEach((cardEstilo) =>{
        const {Estilo, Tipo, imagen, precio, id}= cardEstilo
        
        if (Estilo === "Neo Traditional"){
            console.log("hola")
            Grid.innerHTML += `
            <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
                    <div class="card-header">Estilo ${Estilo}</div>
                        <div class="card-body">
                                <h4 class="card-title">Precio ${Tipo}</h4>
                                <h4 class="card-title">Precio ${id}</h4>
                                <h4 class="card-title">Precio ${precio}</h4>
                            <img style="width:200px;" src="${imagen}">
                            <button id="BotonEnviar${id}">Agregar</button>
                        </div>
            </div>    `} 
                                        } 
                        )


                        })
                            }
        listasJsonFetch()



//funcion que elije estilo de tatuaje delistas.json
// function listasJsonFetchO () {
//     fetch("./listas.json")
//     .then(response => response.json())
//     .then(estilos => { 
//     estilos.forEach((cardEstilo) =>{
//     const {Estilo, Tipo, imagen, precio, id}= cardEstilo
    
//     console.log(cardEstilo)
    
        
//     //let arrayObjet = Object.entries(cardEstilo)
//     //console.log(arrayObjet)
//     //let arrayCards = [].slice.call(cardEstilo);
//     //console.log(arrayCards)
//     // const arrayObjet = Object.values(cardEstilo)
//     // console.log(arrayObjet)
//     //arrayObjet.forEach((selec)
//     //if())
// //     const array = [];
// //     for(let i in cardEstilo) {
// //     array.push([i,cardEstilo[i]])
// // }
// // console.log(array)

// } 
// )
// })
// }


// listasJsonFetchO()

