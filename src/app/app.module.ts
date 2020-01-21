import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuAdminComponent } from './menus/menu-admin/menu-admin.component';
import { MenuProfesorComponent } from './menus/menu-profesor/menu-profesor.component';
import { AltaProfesorComponent } from './admin/altas/alta-profesor/alta-profesor.component';
import { AltaAlumnoComponent } from './admin/altas/alta-alumno/alta-alumno.component';
import { ListarAlumnosComponent } from './profesor/listar-alumnos/listar-alumnos.component';
import { ExpedienteComponent } from './profesor/expediente/expediente.component';
import { MenuAlumnoComponent } from './menus/menu-alumno/menu-alumno.component';
import { JugarComponent } from './alumno/jugar/jugar.component';
import { OperacionesComponent } from './alumno/operaciones/operaciones.component';
import { AhorcadoComponent } from './alumno/ahorcado/ahorcado.component';
import { PartidaComponent } from './clases/partida/partida.component';
import { UsuarioComponent, Alumno } from './clases/usuario/usuario.component';

import {HttpClientModule} from '@angular/common/http';
import { ArticulosService } from './bd.service';
import { PantallaComponent } from './admin/pantalla/pantalla.component';
import { PantallaProfeComponent } from './profesor/pantalla-profe/pantalla-profe.component';
import { PantallaAlumnoComponent } from './alumno/pantalla-alumno/pantalla-alumno.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuAdminComponent,
    MenuProfesorComponent,
    AltaProfesorComponent,
    AltaAlumnoComponent,
    ListarAlumnosComponent,
    ExpedienteComponent,
    MenuAlumnoComponent,
    JugarComponent,
    OperacionesComponent,
    AhorcadoComponent,
    PartidaComponent,
    UsuarioComponent,
    Alumno,
    PantallaComponent,
    PantallaProfeComponent,
    PantallaAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  login:string="Hola, Jorge";
}
