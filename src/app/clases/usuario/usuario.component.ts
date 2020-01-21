import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  private nombre;
  private apellido;
  private tipo:TiposUSuario;
  private nombre_usuario;
  private contraseña;
  private direccion;
  private telefono;

  constructor() {
    
  }

  getNombre(){
    return this.nombre;
  }

  getApellido(){
    return this.apellido;
  }

  getNombre_usuario(){
    return this.nombre_usuario
  }

  getContraseña(){
    return this.contraseña;
  }

  getDireccion(){
    return this.direccion;
  }

  getTelefono(){
    return this.telefono;
  }

  ngOnInit() {
  }

}

enum TiposUSuario{
  Administrador,
  Profesor,
  Alumno
}

export class Alumno extends UsuarioComponent{
  private puntos_operaciones;
  private puntos_ahorcado;

  constructor(){
    super();
    
  }

  getPuntos_operaciones(){
    return this.puntos_operaciones;
  }

  getPuntos_ahorcado(){
    return this.puntos_ahorcado;
  }
}
