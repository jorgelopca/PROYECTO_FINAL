import { Component, OnInit } from '@angular/core';
import operaciones from 'src/assets/documents/operaciones.json';
import { PartidaComponent } from 'src/app/clases/partida/partida.component';
import { UsuarioComponent } from 'src/app/clases/usuario/usuario.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss']
})
export class OperacionesComponent implements OnInit {

  listaOperaciones:any=operaciones;

  op1: string;
  op2:string;
  operador:string;
  resultado:string;
  escondido:string;
  partida=new PartidaComponent();

  usuario2=JSON.parse(localStorage.getItem('usuario'));
  constructor(private router:Router) {}
  

  ngOnInit() {
    this.elegirOperacion();
  }

  elegirOperacion(){
    let numero:number=Math.floor(Math.random()*this.listaOperaciones.length);
    for(let x=0; x<this.listaOperaciones.length; x++){
      if(x===numero){
        this.op1=this.listaOperaciones[x].operando1;
        this.op2=this.listaOperaciones[x].operando2;
        this.operador=this.listaOperaciones[x].operador;
        this.resultado=this.listaOperaciones[x].resultado;
        this.escondido=this.listaOperaciones[x].escondido;
      }
    }
  }

  presionarBoton(){
    let escondido:any=document.getElementById('escondido');
    escondido=escondido.value;
    if(escondido===this.escondido){
      alert("Acertaste");
      this.partida.setPuntos(1000);
      this.elegirOperacion();
      this.guardarAlumno();
    }else{
      this.partida.setFallos();
      if(this.partida.fallos<5){
        alert("Has fallado, prueba otra vez");
        this.guardarAlumno();
      }else{
        alert("Has fallado cinco veces. Final del juego.");
        this.guardarAlumno();
        this.router.navigate(['alumno']);
      }
      
    }
  }
  
  guardarAlumno(){
      let listaUsuarios=JSON.parse(localStorage.getItem('listaUsers'));
      

      for(let x=0; x<listaUsuarios.length;x++){
        if(this.usuario2.id===listaUsuarios[x].id){
          listaUsuarios[x].puntos_operaciones=(this.partida.getPuntos()+parseInt(listaUsuarios[x].puntos_operaciones));
          
          
        }
      }

      localStorage.setItem('listaUsers', JSON.stringify(listaUsuarios));
     
  }
  

  

}
