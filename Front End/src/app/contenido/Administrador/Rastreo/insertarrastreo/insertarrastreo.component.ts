import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-insertarrastreo',
  templateUrl: './insertarrastreo.component.html',
  styleUrls: ['./insertarrastreo.component.css']
})
export class InsertarrastreoComponent implements OnInit {
  forma: FormGroup;
  datos: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router){
    this.forma = new FormGroup({
      'numrastreo': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'distribuidor': new FormControl('',Validators.required),
      'observaciones': new FormControl('',Validators.required),
      'fecha': new FormControl('',Validators.required),
      'hora': new FormControl('',Validators.required),
      'estado': new FormControl('',Validators.required)
     });

  }

  guardarCambios():void{
    this.datos = this.forma.value
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se inserto correctamente el rastreo',
      showConfirmButton: false,
      timer: 1500
    });
    this.router.navigate(["/menurastreo"]);
   }
  ngOnInit(): void {
  }

}
