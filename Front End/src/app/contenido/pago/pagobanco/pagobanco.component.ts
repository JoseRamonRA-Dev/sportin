import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-pagobanco',
  templateUrl: './pagobanco.component.html',
  styleUrls: ['./pagobanco.component.css']
})
export class PagobancoComponent implements OnInit {
  forma: FormGroup;
  datos: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router){
    this.forma = new FormGroup({
      'numerotarjeta': new FormControl('', [Validators.required, Validators.minLength(3)]),
     });

  }

  guardarCambios():void{
    this.datos = this.forma.value

   }
  ngOnInit(): void {
  }

}
