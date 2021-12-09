import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import { CruduserService } from 'src/app/contenido/servicios/cruduser.service';
import { ServicioGeneralService } from 'src/app/contenido/servicios/servicio-general.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-insertarrastreo',
  templateUrl: './insertarrastreo.component.html',
  styleUrls: ['./insertarrastreo.component.css']
})
export class InsertarrastreoComponent implements OnInit {
  forma: FormGroup;
  datos: any;
  public pedidos:any;
  public nombresUsuarios:any;
  public bandera: boolean = false;
  constructor(private formBuilder: FormBuilder, public serivicogen: ServicioGeneralService,
    private router: Router, public servicioUsuario: CruduserService){
      this.serivicogen.mostrarPeidios().subscribe((res)=>{
         console.log(res);
         this.pedidos = res;
         this.servicioUsuario.obtenerUsuarios().subscribe((respuesta)=>{
           console.log(respuesta);
            this.nombresUsuarios = respuesta;
            this.forma = new FormGroup({
              'id_ped': new FormControl('',Validators.required),
              'dist': new FormControl('',Validators.required),
              'obsv': new FormControl('',Validators.required)
             });
             this.bandera = true;
        });
      });
      // this.forma = new FormGroup({
      //   'id_ped': new FormControl('',Validators.required),
      //   'dis': new FormControl('',Validators.required),
      //   'obsv': new FormControl('',Validators.required),
      //   'fecha': new FormControl('',Validators.required),
      //   'hora': new FormControl('',Validators.required),
      //   'estado': new FormControl('',Validators.required)
      //  });

  }
  nombreUsuario(idUuser){
    //console.log(idUuser);
    for(let dato of this.nombresUsuarios){
      if(dato._id == idUuser){
        return dato.Nombre;
      }
    }
    
  }
  guardarCambios():void{
    this.datos = this.forma.value
    if(this.forma.valid){
      this.serivicogen.crearRastreo(this.datos).subscribe((res)=>{
        
        if(res["response"] == "Añadido"){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se inserto correctamente el rastreo',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(["/menurastreo"]);
        }
      })
      
    }else{

    }
    
   }
  ngOnInit(): void {
  }
}
