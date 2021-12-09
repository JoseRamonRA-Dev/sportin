import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { CruduserService } from 'src/app/contenido/servicios/cruduser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insertar-dir',
  templateUrl: './insertar-dir.component.html',
  styleUrls: ['./insertar-dir.component.css']
})
export class InsertarDirComponent implements OnInit {

  forma: FormGroup;
  datos: any;
  public idUser:any;
  constructor(private formBuilder: FormBuilder,public activated: ActivatedRoute,
    private router: Router, public servicio: CruduserService){
      this.idUser = this.activated.snapshot.params.iduser;
    this.forma = new FormGroup({
      'cod': new FormControl('',Validators.required),
      'int': new FormControl(''),
      'ext': new FormControl('',Validators.required),
      'calle': new FormControl('',Validators.required)
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
      this.servicio.buscarCodigo(this.datos.cod).subscribe((res)=>{
           
        if(res[0]){
             let body ={
               id_us: this.idUser,
               cod:res[0]._id,
               calle: this.datos.calle,
               int: this.datos.int,
               ext: this.datos.ext
              }
              this.servicio.crearDireccion(body).subscribe((respu)=>{
               console.log(respu);
               Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se inserto correctamente la nueva dirección',
                showConfirmButton: false,
                timer: 1500
              });
              this.router.navigate(["/administrador"]);
             });   
        }else{
         Swal.fire({
           icon: 'error',
           title: 'ERROR',
           text: 'No se encontro el código postal ingresado',
           footer: 'Intenta de nuevo'
         })
        }
       });

      
     }
    
   }
  ngOnInit(): void {
  }

}
