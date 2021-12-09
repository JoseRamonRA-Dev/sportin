import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudproveedorService } from 'src/app/contenido/servicios/crudproveedor.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  public datos:any;
  public buscar = '';
  constructor(private router: Router, private servicio: CrudproveedorService) {
    this.datos = [];
    
   }
  ngOnInit(): void {
    this.servicio.obtenerProveedores().subscribe((res)=>{
      console.log(res);
      this.datos = res;
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
      title: '¿Estas seguro de eliminar al proveedor?',
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
          'El proveedor ha sido eliminado..',
          'success'
        )
        this.router.navigate(['/menuproveedor']);
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El proveedor sigue en la base de datos.',
          'error'
        )
      }
    })
  }

}
