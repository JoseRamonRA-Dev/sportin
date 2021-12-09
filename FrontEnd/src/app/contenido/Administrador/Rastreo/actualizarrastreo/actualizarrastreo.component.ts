import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-actualizarrastreo',
  templateUrl: './actualizarrastreo.component.html',
  styleUrls: ['./actualizarrastreo.component.css']
})
export class ActualizarrastreoComponent implements OnInit {
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

   }
  ngOnInit(): void {
  }

}
