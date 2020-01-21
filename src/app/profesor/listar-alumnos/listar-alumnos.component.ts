import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.scss']
})
export class ListarAlumnosComponent implements OnInit {

  listaUsuarios=JSON.parse(localStorage.getItem('listaUsers'));

  listaAlumnos:any=[];

  alumnoExpediente;

  constructor(private router:Router) {
    for(let x=0; x<this.listaUsuarios.length; x++){
      if(this.listaUsuarios[x].tipo==="2"){
        this.listaAlumnos.push(this.listaUsuarios[x]);
      }
    }
  }

  ngOnInit() {
  }

  verExpediente(id){
    for(let x=0; x<this.listaAlumnos.length; x++){
      if(this.listaAlumnos[x].id===id){
        this.alumnoExpediente=this.listaAlumnos[x];
      }
    }
    localStorage.setItem('expedienteAlumno', JSON.stringify(this.alumnoExpediente));
    this.router.navigate(["/expediente"]);
  }

  ordenarApellido(){
    this.listaAlumnos.sort((a,b) => a.apellido.localeCompare(b.apellido));
  }

  ordenarAhorcado(){
    this.listaAlumnos.sort((a,b) => b.puntos_ahorcado.localeCompare(a.puntos_ahorcado));
  }

  ordenarOperaciones(){
    this.listaAlumnos.sort((a,b) => b.puntos_operaciones.localeCompare(a.puntos_operaciones));
  }


}
