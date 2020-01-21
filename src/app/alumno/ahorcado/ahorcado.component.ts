import { Component, OnInit } from '@angular/core';
import ahorcado from 'src/assets/documents/ahorcado.json';
import { PartidaComponent } from 'src/app/clases/partida/partida.component';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent implements OnInit {

  listaPalabras = ahorcado;
  imagen: string;
  palabra: string;
  letra: any;
  letras: any = [];
  letrasEscondidas: any = [];
  letrasUsadas: any = [];
  partida = new PartidaComponent();
  imagenAhorcado = "/assets/images/ahorcado_6.png";
  usuario2=JSON.parse(localStorage.getItem('usuario'));

  constructor(private router: Router) { }

  ngOnInit() {
    this.elegirPalabra();
  }

  elegirPalabra() {
    let numero: number = Math.floor(Math.random() * this.listaPalabras.length);
    for (let x = 0; x < this.listaPalabras.length; x++) {
      if (x === numero) {
        this.imagen = "/assets/images/" + this.listaPalabras[x].imagen;
        this.palabra = JSON.stringify(this.listaPalabras[x].palabra);
      }
    }
    this.letras = this.palabra.split("");
    this.letras.shift();
    this.letras.pop();
    this.letrasEscondidas = [];
    for (let x = 0; x < this.letras.length; x++) {
      this.letrasEscondidas.push("_");
    }
  }


  presionarBoton() {
    let recoger: any = document.getElementById('letra');
    let letraValida = true;
    let letra = recoger.value;
    if (letra.length > 1) {
      alert("No introduzcas más de una letra a la vez");
      letraValida = false;
    }
    recoger.value = "";
    let acertar = false;
    let pasar = true;

    for (let x = 0; x < this.letras.length; x++) {
      if (letra === this.letras[x]) {
        this.letrasEscondidas[x] = letra;
        acertar = true;
      }
    }
    if (letraValida === true) {
      if (acertar === false) {
        this.partida.setFallos();
        if (this.partida.fallos < 5) {
          switch (this.partida.fallos) {
            case 1:
              this.imagenAhorcado = "/assets/images/ahorcado_5.png";
              break;
            case 2:
              this.imagenAhorcado = "/assets/images/ahorcado_4.png";
              break;
            case 3:
              this.imagenAhorcado = "/assets/images/ahorcado_2.png";
              break;
            case 4:
              this.imagenAhorcado = "/assets/images/ahorcado_0.png";
              break;
          }
          this.letrasUsadas.push(letra);
          alert("Has fallado, prueba otra vez");

        } else {
          alert("Has fallado cinco veces. Final del juego.");
          this.router.navigate(['alumno']);
        }
      } else {
        for (let x = 0; x < this.letrasEscondidas.length; x++) {
          if (this.letrasEscondidas[x] === "_") {
            pasar = false;
          }
        }

        if (pasar === true) {
          alert("Has acertado");
          this.partida.setPuntos(1000);
          this.elegirPalabra();
        }

      }
    }

    this.guardarAlumno();


  }

  guardarAlumno(){
    let listaUsuarios=JSON.parse(localStorage.getItem('listaUsers'));
    

    for(let x=0; x<listaUsuarios.length;x++){
      if(this.usuario2.id===listaUsuarios[x].id){
        listaUsuarios[x].puntos_ahorcado=(this.partida.getPuntos()+parseInt(listaUsuarios[x].puntos_ahorcado));
        
        
      }
    }

    localStorage.setItem('listaUsers', JSON.stringify(listaUsuarios));
    
}

}
