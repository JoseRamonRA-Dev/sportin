import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CruduserService } from 'src/app/contenido/servicios/cruduser.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-consultaruser',
  templateUrl: './consultaruser.component.html',
  styleUrls: ['./consultaruser.component.css']
})
export class ConsultaruserComponent implements OnInit {
  public datos:any;
  public buscar = '';
  constructor(private router: Router, public servicio: CruduserService) {
    this.datos = [];
   
   }
  ngOnInit(): void {
    this.servicio.obtenerUsuarios().subscribe((res)=>{
      console.log(res);
        this.datos = res;
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
      title: '¿Estas seguro de eliminar al usuario?',
      text: "¡Puedes cancelar el proceso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.servicio.eliminarUsuario(id).subscribe((res)=>{
              console.log(res["response"]);
              if(res["response"]=="Eliminado"){
                swalWithBootstrapButtons.fire(
                  '¡Eliminado!',
                  'El usuario ha sido eliminado..',
                  'success'
                )
                this.router.navigate(['/menuusuario']);
              }else{
                Swal.fire({
                  icon: 'error',
                  title: 'ERROR',
                  text: 'Ocurrio un error al intentar eliminar al usuario',
                  footer: 'Intenta de nuevo'
                })
              }
              
        });
       
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'El usuario sigue en la base de datos.',
          'error'
        )
      }
    })
  }

}
