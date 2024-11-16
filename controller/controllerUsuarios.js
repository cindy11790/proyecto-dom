import { usuario } from "../model/ModelUsuarios.js" 

export function buscarUsuario(){
    let auth =usuario.some((index)=>{
         let usuario= document.querySelector('#usuario').value
         let contraseña= document.querySelector('#contraseña').value
     
         if(usuario == index.usuario && contraseña == index.contraseña){
             return true
             
         }else{
             return false
         }
         
     })
     return auth
 }