import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicioGeneralService } from '../../servicios/servicio-general.service';
@Component({
  selector: 'app-pagobanco',
  templateUrl: './pagobanco.component.html',
  styleUrls: ['./pagobanco.component.css']
})
export class PagobancoComponent implements OnInit {
  forma: FormGroup;
  datos: any;
  constructor(private formBuilder: FormBuilder,public carrito: ServicioGeneralService,
    private router: Router){
    this.forma = new FormGroup({
      'numerotarjeta': new FormControl('', [Validators.required, Validators.minLength(3)]),
     });

  }

  guardarCambios():void{
    this.datos = this.forma.value
    let body ={
      id_us: localStorage.getItem("id_usuario"),
      fp: new Date(),
      de: "Se realizo la compra",
      Tipo: "Pago Banco",
      NoTarjeta: this.datos.numerotarjeta,
      Banco: "BBVA"
     }
  this.carrito.carritoAcompra( localStorage.getItem("id_carrito"),body).subscribe((res)=>{
    this.router.navigate(['/home']);
    localStorage.setItem("id_carrito","" );
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se realizo la compra',
      showConfirmButton: false,
      timer: 1500
    })
  });
   }
  ngOnInit(): void {
  }

}
