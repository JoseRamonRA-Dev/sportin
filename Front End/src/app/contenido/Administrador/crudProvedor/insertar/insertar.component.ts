import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import { CrudproveedorService } from 'src/app/contenido/servicios/crudproveedor.service';
import { CruduserService } from 'src/app/contenido/servicios/cruduser.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {
  forma: FormGroup;
  datos: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router, public servicio: CrudproveedorService, public servicio2: CruduserService){
    this.forma = new FormGroup({
      'Nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'ApePat': new FormControl(''),
      'ApeMat': new FormControl(''),
      'cod': new FormControl('',Validators.required),
      'int': new FormControl(''),
      'ext': new FormControl('',Validators.required),
      'calle': new FormControl('',Validators.required),
      'Email': new FormControl('',Validators.required),
      'Telefono': new FormControl('',Validators.required)
     });

  }

  guardarCambios():void{
    this.datos = this.forma.value
    if(this.forma.invalid){
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'Tienes que añadir todos los campos requeridos',
        footer: 'Intenta de nuevo'
      })
     }else{
      if(this.datos.Contrasena == this.datos.contra2){
        this.servicio2.buscarCodigo(this.datos.cod).subscribe((res)=>{
             
          if(res[0]){
           console.log(res[0]._id);
           this.servicio.insertarProveedor(this.datos).subscribe((resp)=>{
             console.log(resp);
             console.log(resp["data"]._id);
             if(resp == "Email registrado" ){
               Swal.fire({
                 icon: 'error',
                 title: 'ERROR',
                 text: 'El email ingresado ya esta registrado',
                 footer: 'Intenta de nuevo'
               });
  
             }else{
               let body ={
                 id_us: resp["data"]._id,
                 cod:res[0]._id,
                 calle: this.datos.calle,
                 int: this.datos.int,
                 ext: this.datos.ext
                }
                this.servicio2.crearDireccion(body).subscribe((respu)=>{
                 console.log(respu);
                 Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Se inserto correctamente el proveedor',
                  showConfirmButton: false,
                  timer: 1500
                });
                this.router.navigate(["/menuproveedor"]);
               });
             }
             
           });
          }else{
           Swal.fire({
             icon: 'error',
             title: 'ERROR',
             text: 'No se encontro el código postal ingresado',
             footer: 'Intenta de nuevo'
           })
          }
         });
  
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Contraseñas',
            text: 'Las contraseñas no coinciden'
          })
        }
        
      
     }
     
 

   }
  ngOnInit(): void {
  }

}
