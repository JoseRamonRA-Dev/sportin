import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { CruduserService } from 'src/app/contenido/servicios/cruduser.service';
import { ServicioGeneralService } from 'src/app/contenido/servicios/servicio-general.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-dir',
  templateUrl: './actualizar-dir.component.html',
  styleUrls: ['./actualizar-dir.component.css']
})
export class ActualizarDirComponent implements OnInit {
  forma: FormGroup;
  datos: any;
  public idDir:any;
  public load:boolean = false;
  public iduser:any;
  public idCp:any;
  constructor(private formBuilder: FormBuilder,public activated: ActivatedRoute,public servicioGeneral:ServicioGeneralService,
    private router: Router, public servicio: CruduserService){
      this.idDir = this.activated.snapshot.params.idDir;
      this.servicioGeneral.obtenerDireccionUserUnica(this.idDir).subscribe((res)=>{
        console.log(res);
        this.iduser = res[0].Id_usuario;
        this.idCp = res[0].Codigo_postal;
        this.forma = new FormGroup({
          'int': new FormControl(''),
          'ext': new FormControl('',Validators.required),
          'calle': new FormControl('',Validators.required)
         });
         this.forma.controls["calle"].setValue(res[0].Calle);
         this.forma.controls["int"].setValue(res[0].Numero_int);
         this.forma.controls["ext"].setValue(res[0].Numero_ext);
         this.load = true;
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
             let body ={
               id_us: this.iduser,
               cod:this.idCp,
               calle: this.datos.calle,
               int: this.datos.int,
               ext: this.datos.ext
              }
              this.servicio.modificarDireccion(this.idDir,body).subscribe((respu)=>{
               console.log(respu);
               Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se modifico correctamente la dirección',
                showConfirmButton: false,
                timer: 1500
              });
              this.router.navigate(["/administrador"]);
             });   
      
     }
    
   }
  ngOnInit(): void {
  }

}
