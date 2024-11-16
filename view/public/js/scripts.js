import { buscarUsuario } from "../../../controller/controllerUsuarios.js"
import {listarEspecialidad, listarSedesDisponibles, filtrarPorNombre,filtrarPorEspecilidad,filtarPorMunicipios}
from "../../../controller/controllerCitasMedicas.js"


let btnIniciar= document.querySelector('#btnIniciar')
if(btnIniciar){
  console.log("j")
  btnIniciar.addEventListener('click', iniciarSesion)
  function iniciarSesion(){
    if(buscarUsuario()) {
      window.location.href = '/view/pages/home.html'
    }else{
      console.log('error de credenciales')
    }
  }
}

let especialidad = document.getElementById('especialidad')

if(especialidad){
  especialidad.addEventListener('click',()=> {
    listarEspecialidad()

  })
}

// document.getElementById('contenido').textContent = 'Recetas Vegetarianas'  //solo para mostrar que estaba funcionnado

let sedesDisponibles = document.getElementById('sedes disponibles')
  if(sedesDisponibles){
    sedesDisponibles.addEventListener('click',()=> {
      listarSedesDisponibles()
  })
}

    // document.getElementById('contenido').textContent = 'Recetas No Vegetarianas'

    let cerrarSesion = document.getElementById('cerrar-sesion')
    if(cerrarSesion){
      cerrarSesion.addEventListener('click',()=> {  //esta opcion hace lo mismo que, solo que se puede aplicar la cantidad de 
        window.location.href = '/index.html'          // funciones en simultaneo
      })
  }

 
  let inputs = document.querySelectorAll('form input')
  inputs.forEach((input) => { 
     input.addEventListener('keyup',(e)=> {  //el keyup es apenas presiono la tecla//
      switch (e.target.name){ //evento vaya al objetivo y seleccione la propiedad que le estoy diciendo'nombre'
          case 'nombre':
            filtrarPorNombre()
            break;
          case 'especialidad':
            filtrarPorEspecilidad()
            break;
          case 'municipios':
            filtarPorMunicipios()
              break;  
      }

     })
  })  
