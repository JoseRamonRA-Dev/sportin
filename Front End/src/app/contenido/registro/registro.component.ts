import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  forma: FormGroup;
  datos: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router){
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apep': new FormControl('',Validators.required),
      'apem': new FormControl('',Validators.required),
      'codigo': new FormControl('',Validators.required),
      'numinterior': new FormControl('',Validators.required),
      'numexterior': new FormControl('',Validators.required),
      'calle': new FormControl('',Validators.required),
      'celular': new FormControl('',Validators.required),
      'contra': new FormControl('',Validators.required),
      'contra2': new FormControl('',Validators.required),
     });

  }

  guardarCambios():void{
    this.datos = this.forma.value
    if(this.datos.contra == this.datos.contra2){
      if(this.forma.invalid){
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'Tienes que añadir todos los campos requeridos',
          footer: 'Intenta de nuevo'
        })
       }else{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registro realizado con éxito',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(["/home"]);
       }
      
      
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Contraseñas',
        text: 'Las contraseñas no coinciden'
      })
    }
   }
  ngOnInit(): void {
  }

}
