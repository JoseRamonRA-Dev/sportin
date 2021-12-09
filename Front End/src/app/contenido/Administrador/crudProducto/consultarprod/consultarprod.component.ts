import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudproductoService } from 'src/app/contenido/servicios/crudproducto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-consultarprod',
  templateUrl: './consultarprod.component.html',
  styleUrls: ['./consultarprod.component.css']
})
export class ConsultarprodComponent implements OnInit {
  public datos:any;
  public buscar = '';
  constructor(private router: Router, public servicio: CrudproductoService) {
    this.datos = [];
    this.servicio.obtenerProductos().subscribe((res)=>{
      this.datos = res;
    });
   }
  ngOnInit(): void {
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
      title: '¿Estas seguro de eliminar el producto?',
      text: "¡Puedes cancelar el proceso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminarProducto(id).subscribe((res)=>{
          swalWithBootstrapButtons.fire(
            '¡Eliminado!',
            'El producto ha sido eliminado..',
            'success'
          )
          this.router.navigate(['/menuproducto']);
        });
        
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El producto sigue en la base de datos.',
          'error'
        )
      }
    })
  }
}
