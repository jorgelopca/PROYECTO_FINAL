import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla-profe',
  templateUrl: './pantalla-profe.component.html',
  styleUrls: ['./pantalla-profe.component.scss']
})
export class PantallaProfeComponent implements OnInit {

  usuario=JSON.parse(localStorage.getItem('usuario'));

  constructor() { }

  ngOnInit() {
  }

}
