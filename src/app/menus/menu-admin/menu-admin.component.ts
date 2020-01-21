import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {

  usuario=JSON.parse(localStorage.getItem('usuario'));

  constructor(private router:Router) { }

  ngOnInit() {
  }

  cerrarSesion(){
    localStorage.setItem('usuario', "");
    this.router.navigate(['']);
  }

}
