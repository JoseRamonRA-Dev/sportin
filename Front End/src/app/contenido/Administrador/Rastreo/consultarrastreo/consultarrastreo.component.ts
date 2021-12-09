import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-consultarrastreo',
  templateUrl: './consultarrastreo.component.html',
  styleUrls: ['./consultarrastreo.component.css']
})
export class ConsultarrastreoComponent implements OnInit {
  public datos:any;
  public buscar = '';
  constructor(private router: Router) {
    this.datos = [];
    for(let i=0; i<10; i++){
      let producto = "prod";
      let categoria = "Algo";
      this.datos.push(producto);
    }
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
      title: '¿Estas seguro de eliminar el rastreo ?',
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
          'El rastreo ha sido eliminado..',
          'success'
        )
        this.router.navigate(['/menurastreo']);
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El rastreo sigue en la base de datos.',
          'error'
        )
      }
    })
  }
}
