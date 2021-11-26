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
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'marca': new FormControl('',Validators.required),
      'precio': new FormControl('',Validators.required),
      'stock': new FormControl('',Validators.required),
      'color': new FormControl('',Validators.required),
      'tamano': new FormControl('',Validators.required),
      'desc': new FormControl('',Validators.required),
      'proveedor': new FormControl('',Validators.required),
      'departamento': new FormControl('',Validators.required)
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
