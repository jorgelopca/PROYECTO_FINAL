import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.scss']
})
export class PantallaComponent implements OnInit {

  usuario=JSON.parse(localStorage.getItem('usuario'));

  constructor() { }

  ngOnInit() {
  }

}
