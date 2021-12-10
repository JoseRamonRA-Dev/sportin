import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioGeneralService } from '../../servicios/servicio-general.service';

@Component({
  selector: 'app-rastreo',
  templateUrl: './rastreo.component.html',
  styleUrls: ['./rastreo.component.css']
})
export class RastreoComponent implements OnInit {

  public idPedidos=""
  rastreos:any
  rastreo:any

  constructor(private router:Router, private crudPedido:ServicioGeneralService, public activated: ActivatedRoute) {
    this.idPedidos = this.activated.snapshot.params.id;
   }

  ngOnInit() {
    this.crudPedido.obtenerRastreo(this.idPedidos).subscribe(
      data => {
        this.rastreos = data["Rastreos"];
        this.rastreo = this.rastreos[0];
        console.log("RASTREO: ",this.rastreo)
      }
    )
  }
  
  regresar(){
    this.router.navigate(['/pedido'])
  }

}
