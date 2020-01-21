import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-alumno',
  templateUrl: './menu-alumno.component.html',
  styleUrls: ['./menu-alumno.component.scss']
})
export class MenuAlumnoComponent implements OnInit {

  usuario=JSON.parse(localStorage.getItem('usuario'));

  constructor(private router:Router) { }

  ngOnInit() {
  }

  cerrarSesion(){
    localStorage.setItem('usuario', "");
    this.router.navigate(['']);
  }

}
