import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basquet',
  templateUrl: './basquet.component.html',
  styleUrls: ['./basquet.component.css']
})
export class BasquetComponent implements OnInit {
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
