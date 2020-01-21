import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-alumno',
  templateUrl: './pantalla-alumno.component.html',
  styleUrls: ['./pantalla-alumno.component.scss']
})
export class PantallaAlumnoComponent implements OnInit {
  usuario=JSON.parse(localStorage.getItem('usuario'));

  constructor() { }

  ngOnInit() {
  }

}
