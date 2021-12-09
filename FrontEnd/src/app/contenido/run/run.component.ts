import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {

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
