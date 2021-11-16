import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-natacion',
  templateUrl: './natacion.component.html',
  styleUrls: ['./natacion.component.css']
})
export class NatacionComponent implements OnInit {
  datos:any;
  constructor() {
    this.datos = [];
    for(let i=0; i<10; i++){
      let nombre = "Hola";
      let apellido = "Jesus";
      this.datos.push(nombre);
    }
   }
  ngOnInit(): void {
  }

}
