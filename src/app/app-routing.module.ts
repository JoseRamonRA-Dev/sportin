import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './contenido/principal/principal.component';
import { BasquetComponent } from './contenido/basquet/basquet.component';
import { FutbolComponent } from './contenido/futbol/futbol.component';
import { CiclismoComponent } from './contenido/ciclismo/ciclismo.component';
import { NatacionComponent } from './contenido/natacion/natacion.component';
import { RunComponent } from './contenido/run/run.component';
import { RegistroComponent } from './contenido/registro/registro.component';
import { MenuComponent } from './contenido/Administrador/menu/menu.component';
import { MenuprodComponent } from './contenido/Administrador/menu/menuprod/menuprod.component';
import { MenuserComponent } from './contenido/Administrador/menu/menuser/menuser.component';
import { InsertarprodComponent } from './contenido/Administrador/crudProducto/insertarprod/insertarprod.component';
import { InsertaruserComponent } from './contenido/Administrador/crudUsuario/insertaruser/insertaruser.component';
import { EliminarprodComponent } from './contenido/Administrador/crudProducto/eliminarprod/eliminarprod.component';
import { EliminaruserComponent } from './contenido/Administrador/crudUsuario/eliminaruser/eliminaruser.component';
import { ConsultarprodComponent } from './contenido/Administrador/crudProducto/consultarprod/consultarprod.component';
import { ConsultaruserComponent } from './contenido/Administrador/crudUsuario/consultaruser/consultaruser.component';
import { ActualizarprodComponent } from './contenido/Administrador/crudProducto/actualizarprod/actualizarprod.component';
import { ActualizaruserComponent } from './contenido/Administrador/crudUsuario/actualizaruser/actualizaruser.component';
import { CarritoComponent } from './contenido/carrito/carrito.component';
import { WishlistComponent } from './contenido/wishlist/wishlist.component';
import { BuscadorcategoriaComponent } from './contenido/buscadorcategoria/buscadorcategoria.component';
const routes: Routes = [
  {path:'home',component:PrincipalComponent},
  {path: 'basquetbol', component: BasquetComponent},
  {path: 'futbol', component: FutbolComponent},
  {path: 'natacion', component: NatacionComponent},
  {path: 'ciclismo', component: CiclismoComponent},
  {path: 'run', component: RunComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'administrador', component: MenuComponent},
  {path: 'menuusuario', component: MenuserComponent},
  {path: 'menuproducto', component: MenuprodComponent},
  {path: 'altaprod', component: InsertarprodComponent},
  {path: 'bajaprod', component: EliminarprodComponent},
  {path: 'consultaprod', component: ConsultarprodComponent},
  {path: 'actualizarprod', component: ActualizarprodComponent},
  {path: 'altauser', component: InsertaruserComponent},
  {path: 'bajauser', component: EliminaruserComponent},
  {path: 'consultauser', component: ConsultaruserComponent},
  {path: 'actualizaruser', component: ActualizaruserComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'buscadorcat', component: BuscadorcategoriaComponent},
   {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
