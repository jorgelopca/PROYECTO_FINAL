import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperacionesComponent } from './alumno/operaciones/operaciones.component';
import { LoginComponent } from './login/login.component';
import { JugarComponent } from './alumno/jugar/jugar.component';
import { AhorcadoComponent } from './alumno/ahorcado/ahorcado.component';
import { PantallaComponent } from './admin/pantalla/pantalla.component';
import { AltaProfesorComponent } from './admin/altas/alta-profesor/alta-profesor.component';
import { AltaAlumnoComponent } from './admin/altas/alta-alumno/alta-alumno.component';
import { PantallaProfeComponent } from './profesor/pantalla-profe/pantalla-profe.component';
import { ListarAlumnosComponent } from './profesor/listar-alumnos/listar-alumnos.component';
import { ExpedienteComponent } from './profesor/expediente/expediente.component';
import { PantallaAlumnoComponent } from './alumno/pantalla-alumno/pantalla-alumno.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: PantallaComponent
  },
  {
    path: 'profe',
    component: PantallaProfeComponent
  },
  {
    path: 'altaProf',
    component: AltaProfesorComponent
  },
  {
    path:'alumno',
    component:PantallaAlumnoComponent
  },
  {
    path: 'altaAlumno',
    component: AltaAlumnoComponent
  },
  {
    path: 'jugar',
    component: JugarComponent
  },
  {
    path: 'expediente',
    component: ExpedienteComponent
  },
  {
    path:'listar',
    component:ListarAlumnosComponent
  },
  {
    path: 'operaciones',
    component: OperacionesComponent
  },
  {
    path: 'ahorcado',
    component: AhorcadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
