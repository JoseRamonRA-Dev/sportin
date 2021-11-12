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
import { EliminarprodComponent } from './Administrador/crudProducto/eliminarprod/eliminarprod.component';
import { ConsultarprodComponent } from './Administrador/crudProducto/consultarprod/consultarprod.component';
import { ActualizarprodComponent } from './Administrador/crudProducto/actualizarprod/actualizarprod.component';
import { InsertaruserComponent } from './Administrador/crudUsuario/insertaruser/insertaruser.component';
import { EliminaruserComponent } from './Administrador/crudUsuario/eliminaruser/eliminaruser.component';
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
    EliminarprodComponent,
    ConsultarprodComponent,
    ActualizarprodComponent,
    InsertaruserComponent,
    EliminaruserComponent,
    ActualizaruserComponent,
    ConsultaruserComponent,
    CarritoComponent,
    WishlistComponent,
    BuscadorcategoriaComponent,
    AcercaComponent,
    ContactoComponent,
    PreguntasfComponent
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
    MatInputModule

  ],
  exports: [PrincipalComponent, BasquetComponent, AcercaComponent]
})
export class ContenidoModule { }
