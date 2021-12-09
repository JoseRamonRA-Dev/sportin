import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclismo',
  templateUrl: './ciclismo.component.html',
  styleUrls: ['./ciclismo.component.css']
})
export class CiclismoComponent implements OnInit {
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
