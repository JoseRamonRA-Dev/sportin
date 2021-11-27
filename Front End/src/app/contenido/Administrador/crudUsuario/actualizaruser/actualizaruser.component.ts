import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-actualizaruser',
  templateUrl: './actualizaruser.component.html',
  styleUrls: ['./actualizaruser.component.css']
})
export class ActualizaruserComponent implements OnInit {
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
        'Tipo': new FormControl('',Validators.required),
        'Telefono': new FormControl('',Validators.required),
        'Email': new FormControl('',Validators.required),
        'Contrasena': new FormControl('',Validators.required),
        'contra2': new FormControl('',Validators.required),
       });
  

  }
  guardarCambios():void{
    this.datos = this.forma.value

   }
  ngOnInit(): void {
  }

}
