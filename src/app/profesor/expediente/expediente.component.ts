import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expediente',
  templateUrl: './expediente.component.html',
  styleUrls: ['./expediente.component.scss']
})
export class ExpedienteComponent implements OnInit {

  alumno=JSON.parse(localStorage.getItem('expedienteAlumno'));

  constructor(  ) {
    
   }

  ngOnInit() {
  }

}
