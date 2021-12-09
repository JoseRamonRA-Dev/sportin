import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import { CruduserService } from 'src/app/contenido/servicios/cruduser.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-insertaruser',
  templateUrl: './insertaruser.component.html',
  styleUrls: ['./insertaruser.component.css']
})
export class InsertaruserComponent implements OnInit {
  forma: FormGroup;
  datos: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router, public servicio: CruduserService){
    this.forma = new FormGroup({
      'Nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'ApePat': new FormControl('',Validators.required),
      'ApeMat': new FormControl('',Validators.required),
      'cod': new FormControl('',Validators.required),
      'int': new FormControl(''),
      'ext': new FormControl('',Validators.required),
      'calle': new FormControl('',Validators.required),
      'nivel': new FormControl('',Validators.required),
      'Telefono': new FormControl('',Validators.required),
      'fi': new FormControl(''),
      'sal': new FormControl(''),
      'Email': new FormControl('',Validators.required),
      'Contrasena': new FormControl('',Validators.required),
      'contra2': new FormControl('',Validators.required),
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
      this.servicio.buscarCodigo(this.datos.cod).subscribe((res)=>{
           
        if(res[0]){
         console.log(res[0]._id);
         let body1 ={
             Nombre: this.datos.Nombre,
             ApePat: this.datos.ApePat,
             ApeMat: this.datos.ApeMat,
             Email: this.datos.Email,
             Telefono: this.datos.Telefono,
             Contrasena: this.datos.Contrasena,
             fi: this.datos.fi,
             sal: this.datos.sal,
             nivel: this.datos.nivel
         }
         this.servicio.insertarUsuario(body1).subscribe((resp)=>{
           console.log(resp);
           console.log(resp._id);
           if(resp == "Email registrado" ){
             Swal.fire({
               icon: 'error',
               title: 'ERROR',
               text: 'El email ingresado ya esta registrado',
               footer: 'Intenta de nuevo'
             });

           }else{
             let body ={
               id_us: resp._id,
               cod:res[0]._id,
               calle: this.datos.calle,
               int: this.datos.int,
               ext: this.datos.ext
              }
              this.servicio.crearDireccion(body).subscribe((respu)=>{
               console.log(respu);
               Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se inserto correctamente el usuario',
                showConfirmButton: false,
                timer: 1500
              });
              this.router.navigate(["/menuusuario"]);
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
