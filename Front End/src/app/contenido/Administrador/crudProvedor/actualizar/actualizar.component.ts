import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CrudproveedorService } from 'src/app/contenido/servicios/crudproveedor.service';
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  forma: FormGroup;
  datos: any;
  public id: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router, private activated: ActivatedRoute, private servicio: CrudproveedorService){
      this.id = this.activated.snapshot.params.id;
      this.servicio.obtenerProveedorActualizar(this.id).subscribe((res)=>{
        console.log(res.Nombre);
        this.datos = res;
     });
      this.forma = new FormGroup({
        'Nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'ApePat': new FormControl('',Validators.required),
        'ApeMat': new FormControl('',Validators.required),
        'cod': new FormControl('',Validators.required),
        'int': new FormControl('',Validators.required),
        'ext': new FormControl('',Validators.required),
        'calle': new FormControl('',Validators.required),
        'Email': new FormControl('',Validators.required),
        'Telefono': new FormControl('',Validators.required)
       });

  }
  guardarCambios():void{
    this.datos = this.forma.value
    
    
   }
  ngOnInit(): void {
     
  }

}
