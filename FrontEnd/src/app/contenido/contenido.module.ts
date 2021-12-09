import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { NatacionComponent } from './natacion/natacion.component';
import { BasquetComponent } from './basquet/basquet.component';
import { FutbolComponent } from './futbol/futbol.component';
import { CiclismoComponent } from './ciclismo/ciclismo.component';
import { RunComponent } from './run/run.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './Administrador/menu/menu.component';
import { MenuserComponent } from './Administrador/menu/menuser/menuser.component';
import { MenuprodComponent } from './Administrador/menu/menuprod/menuprod.component';
import { InsertarprodComponent } from './Administrador/crudProducto/insertarprod/insertarprod.component';
import { ConsultarprodComponent } from './Administrador/crudProducto/consultarprod/consultarprod.component';
import { ActualizarprodComponent } from './Administrador/crudProducto/actualizarprod/actualizarprod.component';
import { InsertaruserComponent } from './Administrador/crudUsuario/insertaruser/insertaruser.component';
import { ActualizaruserComponent } from './Administrador/crudUsuario/actualizaruser/actualizaruser.component';
import { ConsultaruserComponent } from './Administrador/crudUsuario/consultaruser/consultaruser.component';
import { CarritoComponent } from './carrito/carrito.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BuscadorcategoriaComponent } from './buscadorcategoria/buscadorcategoria.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PreguntasfComponent } from './preguntasf/preguntasf.component';

import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AcercadeComponent } from './acercade/acercade.component';
import { BuscadorPipe } from './pipe/buscador.pipe';
import { PagooxxoComponent } from './pago/pagooxxo/pagooxxo.component';
import { PagobancoComponent } from './pago/pagobanco/pagobanco.component';
import { OpcionesComponent } from './pago/opciones/opciones.component';
import { InsertarComponent } from './Administrador/crudProvedor/insertar/insertar.component';
import { ActualizarComponent } from './Administrador/crudProvedor/actualizar/actualizar.component';
import { ConsultarComponent } from './Administrador/crudProvedor/consultar/consultar.component';
import { MenuprovComponent } from './Administrador/menu/menuprov/menuprov.component';
import { InsertarrastreoComponent } from './Administrador/Rastreo/insertarrastreo/insertarrastreo.component';
import { ActualizarrastreoComponent } from './Administrador/Rastreo/actualizarrastreo/actualizarrastreo.component';
import { ConsultarrastreoComponent } from './Administrador/Rastreo/consultarrastreo/consultarrastreo.component';
import { MenurastreoComponent } from './Administrador/menu/menurastreo/menurastreo.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD:Front End/src/app/contenido/contenido.module.ts
import { InsertarDirComponent } from './Administrador/Direc/insertar-dir/insertar-dir.component';
import { MostrarDirsComponent } from './Administrador/Direc/mostrar-dirs/mostrar-dirs.component';
import { ActualizarDirComponent } from './Administrador/Direc/actualizar-dir/actualizar-dir.component';
=======
import { ChatComponent } from './chat/chat.component';

>>>>>>> master:FrontEnd/src/app/contenido/contenido.module.ts
@NgModule({
  declarations: [
    PrincipalComponent,
    NatacionComponent,
    BasquetComponent,
    FutbolComponent,
    CiclismoComponent,
    RunComponent,
    RegistroComponent,
    MenuComponent,
    MenuserComponent,
    MenuprodComponent,
    InsertarprodComponent,
    ConsultarprodComponent,
    ActualizarprodComponent,
    InsertaruserComponent,
    ActualizaruserComponent,
    ConsultaruserComponent,
    CarritoComponent,
    WishlistComponent,
    BuscadorcategoriaComponent,
    AcercaComponent,
    ContactoComponent,
    PreguntasfComponent,
    AcercadeComponent,
    BuscadorPipe,
    PagooxxoComponent,
<<<<<<< HEAD:Front End/src/app/contenido/contenido.module.ts
    PagobancoComponent, OpcionesComponent, 
    InsertarComponent, ActualizarComponent, ConsultarComponent, MenuprovComponent, 
    InsertarrastreoComponent, ActualizarrastreoComponent, ConsultarrastreoComponent,
    MenurastreoComponent,
    InsertarDirComponent,
    MostrarDirsComponent,
    ActualizarDirComponent
=======
    PagobancoComponent, 
    OpcionesComponent,
    InsertarComponent, 
    ActualizarComponent, 
    ConsultarComponent, 
    MenuprovComponent,
    InsertarrastreoComponent, 
    ActualizarrastreoComponent, 
    ConsultarrastreoComponent,
    MenurastreoComponent,
    ChatComponent
>>>>>>> master:FrontEnd/src/app/contenido/contenido.module.ts
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule, HttpClientModule

  ],
  exports: [PrincipalComponent, BasquetComponent, AcercaComponent]
})
export class ContenidoModule { }
