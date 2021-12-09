import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioGeneralService } from '../../servicios/servicio-general.service';

@Component({
  selector: 'app-rastreo',
  templateUrl: './rastreo.component.html',
  styleUrls: ['./rastreo.component.css']
})
export class RastreoComponent implements OnInit {

  idPedidos="61b181cd14cfb09a9a53458a"
  rastreo:any

  constructor(private router:Router, private crudPedido:ServicioGeneralService) { }

  ngOnInit() {
    this.crudPedido.obtenerRastreo(this.idPedidos).subscribe(
      data => {
        this.rastreo = data
        console.log("RASTREO: ",this.rastreo)
      }
    )
  }
  
  regresar(){
    this.router.navigate(['/pedido'])
  }

}
