import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-insertarprod',
  templateUrl: './insertarprod.component.html',
  styleUrls: ['./insertarprod.component.css']
})
export class InsertarprodComponent implements OnInit {

  forma: FormGroup;
  datos: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router){
    this.forma = new FormGroup({
      'Nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'Marca': new FormControl('',Validators.required),
      'Precio': new FormControl('',Validators.required),
      'Stock': new FormControl('',Validators.required),
      'Color': new FormControl('',Validators.required),
      'Tamaño': new FormControl('',Validators.required),
      'Descripcion': new FormControl('',Validators.required),
      'Proveedor': new FormControl('',Validators.required),
      'Departamento': new FormControl('',Validators.required)
     });

  }

  guardarCambios():void{
    this.datos = this.forma.value
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se inserto correctamente el producto',
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigate(["/menuproducto"]);
   }
  ngOnInit(): void {
  }

}
