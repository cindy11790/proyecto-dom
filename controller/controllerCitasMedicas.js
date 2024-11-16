import{especialista, sedesDisponibles}from"../model/ModelCitasMedicas.js";

export function listarEspecialidad(){
     document.getElementById('contenido').innerHTML = ''
     especialista.map((nombreEspecialidad) => {
    
        let contenedor = document.createElement('div')
        let nombre = document.createElement('p')
        let especialidad = document.createElement('ul')
        let fecha = document.createElement('p')
        let hora = document.createElement('p')
        

        nombre.textContent = 'Nombre:'+ nombreEspecialidad.nombre
        especialidad.textContent = 'Especialidad'+ nombreEspecialidad.especialidad
        fecha.textContent = 'Fecha'+ nombreEspecialidad.fecha
        hora.textContent = 'Hora'+ nombreEspecialidad.hora
       

        contenedor.append(nombre, especialidad, fecha, hora) //append es para agregar los elementos de html en java
        
        document.getElementById('contenido').append(contenedor)
    })
}
export function listarSedesDisponibles(){
    document.getElementById('contenido').innerHTML = ''
    sedesDisponibles.map((sedeDisponible) => {
        console.log(document.createElement)
        let contenedor = document.createElement('div')
        let nombre = document.createElement('p')
        let municipios = document.createElement('ul')
       

        nombre.textContent = 'Nombre:'+ sedeDisponible.nombre
        municipios.textContent = 'Municipio:'+ sedeDisponible.municipios
        

        contenedor.append(nombre, municipios) //append es para agregar los elementos de html en java
        
        document.getElementById('contenido').append(contenedor)
    })
}

 export function filtrarPorNombre(value){
        let especialista = nombreEspecialidad.filter((nombreEspecialidad)=> nombreEspecialidad.nombre ==value)
        crearEspecialidadPorNombre(especialista)
    }
    function crearEspecialidadPorNombre(especialista){

        document.getElementById('contenido').innerHTML = ''
        especialista.map((nombreEspecialidad) => {
           console.log(document.createElement)
           let contenedor = document.createElement('div')
           let nombre = document.createElement('p')
           let especialidad = document.createElement('ul')
           let fecha = document.createElement('p')
           let hora = document.createElement('p')
          
   
           nombre.textContent = 'Nombre:'+ nombreEspecialidad.nombre
           especialidad.textContent = 'Especialidad:'+ nombreEspecialidad.especialidad
           fecha.textContent = 'Fecha:' + nombreEspecialidad.fecha
           hora.textContent = 'Hora:' + nombreEspecialidad.hora
           
   
           contenedor.append(nombre, especialidad, hora, fecha) //append es para agregar los elementos de html en java
           
           document.getElementById('contenido').append(contenedor)
       })
   }

export function filtrarPorEspecilidad(value){
    let especialista = nombreEspecialidad.filter((nombreEspecialidad)=> nombreEspecialidad.tipo ==value)
    crearCitasPorEspecialidad(especialista)
}
function crearCitasPorEspecialidad(especialista){

    document.getElementById('contenido').innerHTML = ''
    especialista.map((nombreEspecialidad) => {
       console.log(document.createElement)
       let contenedor = document.createElement('div')
       let nombre = document.createElement('p')
       let especialidad = document.createElement('ul')
       let fecha = document.createElement('p')
       let hora = document.createElement('p')

       
       nombre.textContent = 'Nombre:'+ nombreEspecialidad.nombre
       especialidad.textContent = 'Especialidad:'+ nombreEspecialidad.especialidad
       fecha.textContent = 'Fecha:' + nombreEspecialidad.fecha
       hora.textContent = 'Hora:' + nombreEspecialidad.hora
       

       contenedor.append(nombre, especialidad, fecha, hora) //append es para agregar los elementos de html en java
       
       document.getElementById('contenido').append(contenedor)
   })
}

export function filtarPorNombre(value){

    let sedes = sedesDisponibles.filter((sedeDisponible)=> sedeDisponible.nombre ==value)
    crearsedePorNombre(sedes)
}
function crearsedePorNombre(sedes){

    document.getElementById('contenido').innerHTML = ''
    sedes.map((sedeDisponible) => {
       console.log(document.createElement)
       let contenedor = document.createElement('div')
       let nombre = document.createElement('p')
       let municipios = document.createElement('ul')
      

       nombre.textContent = 'Nombre:'+ sedeDisponible.nombre
       municipios.textContent = 'Municipio:'+ sedeDisponible.municipios
       

       contenedor.append(nombre, municipios) //append es para agregar los elementos de html en java
       
       document.getElementById('contenido').append(contenedor)
   })
}


export function filtarPorMunicipios(value){

    let sedes = sedesDisponibles.filter((sedeDisponible)=> sedeDisponible.nombre ==value)
    crearCitaPorSede(sedes)
}
function crearCitaPorSede(sedes){

    document.getElementById('contenido').innerHTML = ''
    sedes.map((sedeDisponible) => {
       console.log(document.createElement)
       let contenedor = document.createElement('div')
       let nombre = document.createElement('p')
       let municipios = document.createElement('ul')
      

       nombre.textContent = 'Nombre:'+ sedeDisponible.nombre
       municipios.textContent = 'Municipio'+ sedeDisponible.municipios
       

       contenedor.append(nombre, municipios) //append es para agregar los elementos de html en java
       
       document.getElementById('contenido').append(contenedor)
   })
}





