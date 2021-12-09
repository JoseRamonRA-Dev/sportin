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
import { ConsultarprodComponent } from './contenido/Administrador/crudProducto/consultarprod/consultarprod.component';
import { ConsultaruserComponent } from './contenido/Administrador/crudUsuario/consultaruser/consultaruser.component';
import { ActualizarprodComponent } from './contenido/Administrador/crudProducto/actualizarprod/actualizarprod.component';
import { ActualizaruserComponent } from './contenido/Administrador/crudUsuario/actualizaruser/actualizaruser.component';
import { CarritoComponent } from './contenido/carrito/carrito.component';
import { WishlistComponent } from './contenido/wishlist/wishlist.component';
import { BuscadorcategoriaComponent } from './contenido/buscadorcategoria/buscadorcategoria.component';
import { AcercaComponent } from './contenido/acerca/acerca.component';
import { ContactoComponent } from './contenido/contacto/contacto.component';
import { PreguntasfComponent } from './contenido/preguntasf/preguntasf.component';
import { OpcionesComponent } from './contenido/pago/opciones/opciones.component';
import { PagooxxoComponent } from './contenido/pago/pagooxxo/pagooxxo.component';
import { PagobancoComponent } from './contenido/pago/pagobanco/pagobanco.component';
import { InsertarComponent } from './contenido/Administrador/crudProvedor/insertar/insertar.component';
import { ConsultarComponent } from './contenido/Administrador/crudProvedor/consultar/consultar.component';
import { AcercadeComponent } from './contenido/acercade/acercade.component';
import { MenuprovComponent } from './contenido/Administrador/menu/menuprov/menuprov.component';
import { ActualizarComponent } from './contenido/Administrador/crudProvedor/actualizar/actualizar.component';
import { InsertarrastreoComponent } from './contenido/Administrador/Rastreo/insertarrastreo/insertarrastreo.component';
import { ConsultarrastreoComponent } from './contenido/Administrador/Rastreo/consultarrastreo/consultarrastreo.component';
import { ActualizarrastreoComponent } from './contenido/Administrador/Rastreo/actualizarrastreo/actualizarrastreo.component';
import { MenurastreoComponent } from './contenido/Administrador/menu/menurastreo/menurastreo.component';

import { PerfilComponent } from './contenido/usuario/perfil/perfil.component';
import { InsertarDirComponent } from './contenido/Administrador/Direc/insertar-dir/insertar-dir.component';
import { MostrarDirsComponent } from './contenido/Administrador/Direc/mostrar-dirs/mostrar-dirs.component';
import { ActualizarDirComponent } from './contenido/Administrador/Direc/actualizar-dir/actualizar-dir.component';

const routes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'acercade', component: AcercaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'preguntasf', component: PreguntasfComponent },
  { path: 'perfil', component: PerfilComponent },

  { path: 'basquetbol', component: BasquetComponent },
  { path: 'futbol', component: FutbolComponent },
  { path: 'natacion', component: NatacionComponent },
  { path: 'ciclismo', component: CiclismoComponent },
  { path: 'run', component: RunComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'administrador', component: MenuComponent },
  { path: 'menuusuario', component: MenuserComponent },
  { path: 'menuproducto', component: MenuprodComponent },
  { path: 'menuproveedor', component: MenuprovComponent },
  { path: 'menurastreo', component: MenurastreoComponent },
  { path: 'altaprod', component: InsertarprodComponent },
  {
    path: 'consultaprod',
    component: ConsultarprodComponent,
    children: [
      { path: 'actualizarprod/:id', component: ActualizarprodComponent },
    ],
  },
  { path: 'altauser', component: InsertaruserComponent },
  {
    path: 'consultauser',
    component: ConsultaruserComponent,
    children: [
      { path: 'actualizaruser/:id', component: ActualizaruserComponent },
    ],
  },
  { path: 'altaproveedor', component: InsertarComponent },
  {
    path: 'consultapro',
    component: ConsultarComponent,
    children: [{ path: 'actualizarpro/:id', component: ActualizarComponent }],
  },
  { path: 'carrito', component: CarritoComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'buscadorcat/:nom/:cat', component: BuscadorcategoriaComponent },
  {
    path: 'opcionespago',
    component: OpcionesComponent,
    children: [
      { path: 'pagooxxo', component: PagooxxoComponent },
      { path: 'pagobanco', component: PagobancoComponent },
    ],
  },
  { path: 'altarastreo', component: InsertarrastreoComponent },
  { path: 'consultarastreo', component: ConsultarrastreoComponent },
  { path: 'actualizarrastreo/:id', component: ActualizarrastreoComponent },
  { path: 'insertarDireccion/:iduser', component: InsertarDirComponent },
  { path: 'mostrarDirecciones/:id', component: MostrarDirsComponent },
  { path: 'actualizarDir/:idDir', component: ActualizarDirComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
