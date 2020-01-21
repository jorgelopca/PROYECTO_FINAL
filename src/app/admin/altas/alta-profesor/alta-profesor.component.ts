import { Component, OnInit } from '@angular/core';
import usuarios from "src/assets/nfo/usuarios.json";

@Component({
  selector: 'app-alta-profesor',
  templateUrl: './alta-profesor.component.html',
  styleUrls: ['./alta-profesor.component.scss']
})
export class AltaProfesorComponent implements OnInit {
  recoger: any;
  nombre: string;
  apellido: string;
  nombre_usuario: string;
  pass: string;
  direccion: string;
  telefono: string;
  dni: string;
  listaUsers = JSON.parse(localStorage.getItem('listaUsers'));


  constructor() {

  }

  ngOnInit() {
  }

  darDeAlta() {

    let validar = true;
    let long = this.listaUsers.length + 1;

    this.recoger = document.getElementById('nombre');
    this.nombre = this.recoger.value;
    if (this.nombre === "") {
      validar = false;
      alert("Nombre vacío");
    }

    this.recoger = document.getElementById('apellido');
    this.apellido = this.recoger.value;

    this.recoger = document.getElementById('pass');
    this.pass = this.recoger.value;

    this.recoger = document.getElementById('mail');
    this.nombre_usuario = this.recoger.value;
    

    this.recoger = document.getElementById('direccion');
    this.direccion = this.recoger.value;

    this.recoger = document.getElementById('telefono');
    this.telefono = this.recoger.value;

    this.listaUsers.push({
      "id": JSON.stringify(long),
      "nombre": this.nombre,
      "apellido": this.apellido,
      "nombre_usuario": this.nombre_usuario,
      "contraseña": this.pass,
      "direccion": this.direccion,
      "telefono": this.telefono,
      "tipo": "1",
      "DNI": this.dni
    });

    localStorage.setItem('listaUsers', JSON.stringify(this.listaUsers));
  }

  


}
