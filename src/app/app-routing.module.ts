import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './paginas_inicio/inicio/inicio.component';
import { AcercaComponent } from './paginas_inicio/acerca/acerca.component';
import { ContactoComponent } from './paginas_inicio/contacto/contacto.component';
import { PreguntasfComponent } from './paginas_inicio/preguntasf/preguntasf.component';


const routes: Routes = [
  {path: "inicio", component:InicioComponent},
  {path: "acercade", component:AcercaComponent},
  {path: "contacto", component:ContactoComponent},
  {path: "preguntasf", component:PreguntasfComponent},
  {path: "", pathMatch: "full", redirectTo: "inicio"},
  {path: "**", pathMatch: "full", redirectTo: "inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
