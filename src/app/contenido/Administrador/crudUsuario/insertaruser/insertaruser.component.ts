import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-insertaruser',
  templateUrl: './insertaruser.component.html',
  styleUrls: ['./insertaruser.component.css']
})
export class InsertaruserComponent implements OnInit {
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
      'celular': new FormControl('',Validators.required)
     });

  }

  guardarCambios():void{
    this.datos = this.forma.value

   }
  ngOnInit(): void {
  }

}
