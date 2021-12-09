import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { ServicioGeneralService } from 'src/app/contenido/servicios/servicio-general.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-actualizarrastreo',
  templateUrl: './actualizarrastreo.component.html',
  styleUrls: ['./actualizarrastreo.component.css']
})
export class ActualizarrastreoComponent implements OnInit {
  forma: FormGroup;
  datos: any;
  public idrastreo:any;
  constructor(private formBuilder: FormBuilder,public activated: ActivatedRoute,
    private router: Router, public servicio: ServicioGeneralService){
      this.idrastreo = this.activated.snapshot.params.id;
    this.forma = new FormGroup({
      'fec': new FormControl('',Validators.required),
      'hora': new FormControl('',Validators.required),
      'est': new FormControl('',Validators.required)
     });

  }

  guardarCambios():void{
    this.datos = this.forma.value
    this.servicio.crearRastreoDetalle(this.idrastreo, this.datos).subscribe((res)=>{
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se inserto correctamente el detalle del rastreo',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(["/menurastreo"]);
    })
   }
  ngOnInit(): void {
  }
}
