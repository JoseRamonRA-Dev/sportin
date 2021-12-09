import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { CrudproductoService } from '../servicios/crudproducto.service';
import { ServicioGeneralService } from '../servicios/servicio-general.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public bandera: boolean = false;
  public datos: any;
  public productos:any
  public total:number = 0;
  constructor(public router: Router, public carrito: ServicioGeneralService, public servicio:CrudproductoService) {
    this.datos = [];
    this.servicio.obtenerProductos().subscribe((res)=>{
       this.productos = res
    });
    this.carrito.mostrarDetalles(localStorage.getItem("id_carrito")).subscribe((respuesta)=>{
       this.datos = respuesta;
       console.log(respuesta)
       if(respuesta["length"] ==0){

       }else{
           this.bandera = true;
       }
    });
   }
  ngOnInit(): void {
  }
  nombreProducto(idprod, total:any){
    this.total = this.total + total;
    for(let dato of this.productos){
      if(dato._id == idprod){
        return dato.Nombre;
      }
    }
    
  }
  incrementar(data:any){
    console.log(data);
    let body ={
      id_prod: data.ID_Producto,
      id_ped: data.ID_Pedido,
      cantidad: data.Cantidad+1,
      precio: data.Precio,
      estado:0,
      descuento:0.1
    }
    this.carrito.modificarDetalle(data._id, body).subscribe((respuesta)=>{
      if(respuesta["response"]=="Modificado"){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se añadio un elemento más',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
   
  }
  eliminar(id:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿Estas seguro de eliminar el producto del carrito?',
      text: "¡Puedes cancelar el proceso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.carrito.eliminarDetalle(id).subscribe((respuesta)=>{
            if(respuesta["response"] =="Eliminado"){
              swalWithBootstrapButtons.fire(
                '¡Eliminado!',
                'El producto ha sido eliminado del carrito',
                'success'
              )
              this.router.navigate(['/carrito']);
            }
        });
        
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El producto sigue disponible en el carrito',
          'error'
        )
      }
    })
  }

}
