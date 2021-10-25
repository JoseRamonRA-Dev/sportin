import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoModule } from './contenido/contenido.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    ContenidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
