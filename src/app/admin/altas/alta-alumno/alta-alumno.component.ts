import { Component, OnInit } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-alta-alumno',
  templateUrl: './alta-alumno.component.html',
  styleUrls: ['./alta-alumno.component.scss']
})
export class AltaAlumnoComponent implements OnInit {

  recoger:any;
  nombre:string;
  apellido:string;
  nombre_usuario:string;
  pass:string;
  direccion:string;
  telefono:string;
  puntos_operaciones="0";
  puntos_ahorcado="0";
  listaUsers=JSON.parse(localStorage.getItem('listaUsers'));

  constructor() { }

  ngOnInit() {
    
  }

  darDeAlta(){
    let validar=true;
    let error:string;

    let long=this.listaUsers.length+1;
    
    this.recoger=document.getElementById('nombre');
    this.nombre=this.recoger.value;
    
     
    this.recoger=document.getElementById('apellido');
    this.apellido=this.recoger.value;

    this.recoger=document.getElementById('pass');
    this.pass=this.recoger.value;

    this.recoger=document.getElementById('mail');
    this.nombre_usuario=this.recoger.value;
    validar=this.validarMail(this.nombre_usuario);
    if(!validar){
      error="El correo no es válido";
    }

    this.recoger=document.getElementById('direccion');
    this.direccion=this.recoger.value;

    this.recoger=document.getElementById('telefono');
    this.telefono=this.recoger.value;
     
    this.listaUsers.push({
      "id":JSON.stringify(long),
      "nombre":this.nombre,
      "apellido":this.apellido,
      "nombre_usuario":this.nombre_usuario,
      "contraseña":this.pass,
      "direccion":this.direccion,
      "telefono":this.telefono,
      "tipo":"2",
      "puntos_ahorcado":this.puntos_ahorcado,
      "puntos_operaciones":this.puntos_operaciones
      });

    localStorage.setItem('listaUsers', JSON.stringify(this.listaUsers));
    


  }

  validarMail(texto){
    let reg=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(reg.test(this.nombre_usuario)){
      return false;
    }else{
      return true;
    }
}
}



