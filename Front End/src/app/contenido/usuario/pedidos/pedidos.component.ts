import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioGeneralService } from '../../servicios/servicio-general.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  idUser=localStorage.getItem('id_usuario')
  idPedidos="61b181cd14cfb09a9a53458a"
  pedidos:any
  detalle:any

  constructor(private router:Router, private crudPedido:ServicioGeneralService) { }

  ngOnInit() {
    this.crudPedido.obtenerPedidos(this.idUser).subscribe(
      data => {
        this.pedidos = data
        console.log("PEDIDOS: ",this.pedidos)
      }
    )
    this.crudPedido.obtenerDetalle(this.idPedidos).subscribe(
      data => {
        this.detalle = data
        console.log("DETALLES: ",this.detalle)
      }
    )
  }

  rastreo(){
    this.router.navigate(['/rastreo'])
  }

}
