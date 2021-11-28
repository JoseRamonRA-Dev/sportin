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
      'nom': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'marca': new FormControl('',Validators.required),
      'precio': new FormControl('',Validators.required),
      'stock': new FormControl('',Validators.required),
      'color': new FormControl('',Validators.required),
      'tam': new FormControl('',Validators.required),
      'desc': new FormControl('',Validators.required),
      'id_us': new FormControl('',Validators.required),
      'id_dep': new FormControl('',Validators.required)
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
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se inserto correctamente el producto',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(["/menuproducto"]);
     }
   
   }
  ngOnInit(): void {
  }

}
