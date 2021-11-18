import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-futbol',
  templateUrl: './futbol.component.html',
  styleUrls: ['./futbol.component.css']
})
export class FutbolComponent implements OnInit {

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
