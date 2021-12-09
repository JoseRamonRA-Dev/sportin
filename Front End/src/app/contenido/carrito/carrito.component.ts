import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  public bandera: boolean = true;
  public datos: any;
  constructor(public router: Router) {
    this.datos = [];
    for(let i=0; i<3; i++){
      let producto = "prod";
      this.datos.push(producto);
    }
   }
  ngOnInit(): void {
  }
  incrementar(id:any){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se añadio un elemento más',
      showConfirmButton: false,
      timer: 1500
    })
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
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'El producto ha sido eliminado del carrito',
          'success'
        )
        this.router.navigate(['/carrito']);
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
