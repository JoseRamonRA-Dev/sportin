import { Component, OnInit } from '@angular/core';
import { CruduserService } from '../../servicios/cruduser.service';

interface membresia {
  name: string;
  value: number;
}
@Component({
  selector: 'app-grafica2',
  templateUrl: './grafica2.component.html',
  styleUrls: ['./grafica2.component.css']
})
export class Grafica2Component implements OnInit {
   public datos: any;
   public load: boolean = false;
   public datos2: any;
   public ordenados:  membresia[] = [];
   public ordenados2: membresia[] = [];
   single: any[];
   multi: any[];
 
   view: [number,number] = [700, 400];
 
   // options
   showXAxis = true;
   showYAxis = true;
   gradient = false;
   showLegend = true;
   showXAxisLabel = true;
   xAxisLabel = 'Tipo de membresía';
   showYAxisLabel = true;
   yAxisLabel = 'Usuarios';
 
 
   onSelect(event) {
     console.log(event);
   }
  constructor(public servicio: CruduserService) { 
    this.servicio.todasMembresias().subscribe((resp)=>{
      this.datos = resp;
      let body: membresia={
        name: "Platinum",
        value: 0
     }
     let body2: membresia={
      name: "Oro",
      value: 0
   }
   let body3: membresia={
    name: "Bronce",
    value: 0
 }
     this.ordenados.push(body);
     this.ordenados.push(body2);
     this.ordenados.push(body3);
     for(let dato of this.datos){
      for(let i=0; i<this.ordenados.length; i++){
        //console.log(this.ordenados[i]["nombre"])
        if(this.ordenados[i]["name"] == dato.Tipo){
          this.ordenados[i]["value"] = this.ordenados[i]["value"] + 1;
        }
      
      }
     
    }
    
       this.single = this.ordenados;
      this.load = true;
    });
  }

  ngOnInit(): void {
  }

}
