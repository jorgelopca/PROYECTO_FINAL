import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-profesor',
  templateUrl: './menu-profesor.component.html',
  styleUrls: ['./menu-profesor.component.scss']
})
export class MenuProfesorComponent implements OnInit {

  usuario=JSON.parse(localStorage.getItem('usuario'));

  constructor(private router:Router) { }

  ngOnInit() {
  }

  cerrarSesion(){
    localStorage.setItem('usuario', "");
    this.router.navigate(['']);
  }

}
