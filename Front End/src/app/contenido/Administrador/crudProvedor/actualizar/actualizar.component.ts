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
  public load: boolean = false;
  public id_dir: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router, private activated: ActivatedRoute, private servicio: CrudproveedorService){
      this.id = this.activated.snapshot.params.id;
      this.servicio.obtenerProveedorActualizar(this.id).subscribe((r)=>{
        this.servicio.obtenerDireccioUser(this.id).subscribe((re)=>{
          this.servicio.buscarCodigoXiD(re[0].Codigo_postal).subscribe((res)=>{
            this.id_dir = re[0]._id;
            this.forma = new FormGroup({
              'Nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
              'ApePat': new FormControl(''),
              'ApeMat': new FormControl(''),
              'cod': new FormControl('',Validators.required),
              'int': new FormControl(''),
              'ext': new FormControl('',Validators.required),
              'calle': new FormControl('',Validators.required),
              'Email': new FormControl('',Validators.required),
              'Telefono': new FormControl('',Validators.required)
             });
             this.forma.controls["Nombre"].setValue(r.Nombre);
             this.forma.controls["ApePat"].setValue(r.ApePat);
             this.forma.controls["ApeMat"].setValue(r.ApeMat);
             this.forma.controls["Telefono"].setValue(r.Telefono);
             this.forma.controls["Email"].setValue(r.Email);
             this.forma.controls["calle"].setValue(re[0].Calle);
             this.forma.controls["int"].setValue(re[0].Numero_int);
             this.forma.controls["ext"].setValue(re[0].Numero_ext);
             this.forma.controls["cod"].setValue(res[0].ID_CP);
             // this.forma.controls[""].setValue();
            this.load = true;
          });
          
        });
          
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
          console.log(res);
         this.servicio.modificarProveedor(this.id,this.forma.value).subscribe((resp)=>{
           this.datos = this.forma.value;
           let body ={
             id_us: this.id,
             cod:res[0]._id,
             calle: this.datos.calle,
             int: this.datos.int,
             ext: this.datos.ext
           }
           this.servicio.modificarDireccion(this.id_dir, body).subscribe((respuesta)=>{
             Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Se actualizo correctamente el proveedor',
               showConfirmButton: false,
               timer: 1500
             });
             this.router.navigate(["/menuproveedor"]);
           });
        })
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
