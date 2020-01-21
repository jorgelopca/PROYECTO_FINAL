import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { UsuarioComponent } from 'src/app/clases/usuario/usuario.component';
import usuarios from "src/assets/nfo/usuarios.json";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario:any;

  


  constructor(private router:Router){
    
    if(localStorage.getItem('listaUsers')!=null){

    }else{
      localStorage.setItem('listaUsers', JSON.stringify(usuarios));
    }

  }

  ngOnInit() {
  }

  comprobarLogin(nombre:string, pass:string):boolean{
    let correcto=false;
    let listaUsuarios=JSON.parse(localStorage.getItem('listaUsers'));
    
     for(let x=0; x<listaUsuarios.length; x++){
       if((listaUsuarios[x].nombre_usuario===nombre)&&(listaUsuarios[x].contraseña===pass)){
         correcto = true;
         this.usuario=listaUsuarios[x];
         localStorage.setItem('usuario', JSON.stringify(this.usuario));
       }
     }
     return correcto; 
  }

  presionarBoton(){
    
    let recoger:any;
    let nombre:string;
    let pass:string;
    

    recoger=document.getElementById("txt-input");
    nombre=recoger.value;
    recoger=document.getElementById("pwd");
    pass=recoger.value;
    
    if(this.comprobarLogin(nombre, pass)){
      if(this.usuario.tipo==="0"){
        this.router.navigate(['admin']);
      }else if(this.usuario.tipo==="1"){
        this.router.navigate(['profe']);
      }else{
        this.router.navigate(['alumno']);
      }
    }else{
      alert("Inténtalo otra vez");
    }
    
  }

  

}
