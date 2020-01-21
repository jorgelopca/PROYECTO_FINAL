import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.scss']
})
export class PartidaComponent implements OnInit {

   usuario:UsuarioComponent;
   fallos=0;
   puntosConseguidos=0;

  constructor() {
    
   }

   setFallos(){
     this.fallos++;
   }

   setPuntos(puntos){
     this.puntosConseguidos+=puntos;
   }

   getPuntos(){
     return this.puntosConseguidos;
   }

  ngOnInit() {
  }

}
