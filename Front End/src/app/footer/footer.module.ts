import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    FooterComponentComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[FooterComponentComponent]
})
export class FooterModule { }
