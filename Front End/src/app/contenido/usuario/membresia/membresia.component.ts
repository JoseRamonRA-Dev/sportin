import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CruduserService } from '../../servicios/cruduser.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-membresia',
  templateUrl: './membresia.component.html',
  styleUrls: ['./membresia.component.css']
})
export class MembresiaComponent implements OnInit {

  membresia:any
  propietarioID = localStorage.getItem("id_usuario");
  propietario = localStorage.getItem("nombre");
  public load: boolean = false;
  public bandera: boolean =false;
  
  constructor(private crudUser:CruduserService, public router: Router) {
    this.crudUser.verificarMembresia(this.propietarioID).subscribe((res)=>{
       console.log(res);
       if(res["length"] == 0){
         this.bandera = false;
       }else{
         this.bandera = true;
       }
       this.load = true;
    });
   }

  ngOnInit() {
    this.crudUser.obtenerUsuarioActualizar(this.propietarioID).subscribe(
      data => {
        this.membresia = data
        console.log("USER: ",this.membresia)
      }
    )
  }
  platinum(){
      let body={
        id_us: this.propietarioID,
        dur: 4,
        tipo: "Platinum",
        fechaIn: new Date(),
        fechaFin: new Date(),
      }
      this.crudUser.crearMembresia(body).subscribe((res)=>{
        if(res["response"] =="Añadido"){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Membresía adquirida correctamente',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(["/perfil"]);
        }
      });
  }
  oro(){
    let body={
      id_us: this.propietarioID,
      dur: 3,
      tipo: "Oro",
      fechaIn: new Date(),
      fechaFin: new Date(),
    }
    this.crudUser.crearMembresia(body).subscribe((res)=>{
      if(res["response"] =="Añadido"){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Membresía adquirida correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(["/perfil"]);
      }
    });
  }
  bronce(){
    let body={
      id_us: this.propietarioID,
      dur: 1,
      tipo: "Bronce",
      fechaIn: new Date(),
      fechaFin: new Date(),
    }
    this.crudUser.crearMembresia(body).subscribe((res)=>{
      if(res["response"] =="Añadido"){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Membresía adquirida correctamente',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(["/perfil"]);
      }
    });
  }

}
