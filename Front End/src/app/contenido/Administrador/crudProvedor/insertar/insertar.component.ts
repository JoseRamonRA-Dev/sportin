import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
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
    private router: Router){
    this.forma = new FormGroup({
      'Nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'ApePat': new FormControl('',Validators.required),
      'ApeMat': new FormControl('',Validators.required),
      'cod': new FormControl('',Validators.required),
      'int': new FormControl('',Validators.required),
      'ext': new FormControl('',Validators.required),
      'calle': new FormControl('',Validators.required),
      'Email': new FormControl('',Validators.required),
      'Telefono': new FormControl('',Validators.required)
     });

  }

  guardarCambios():void{
    this.datos = this.forma.value


    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se inserto correctamente el proveedor',
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigate(["/menuproveedor"]);
   }
  ngOnInit(): void {
  }

}
