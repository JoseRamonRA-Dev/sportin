import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import { CrudproductoService } from 'src/app/contenido/servicios/crudproducto.service';
import { CrudproveedorService } from 'src/app/contenido/servicios/crudproveedor.service';
import { ServicioGeneralService } from 'src/app/contenido/servicios/servicio-general.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-insertarprod',
  templateUrl: './insertarprod.component.html',
  styleUrls: ['./insertarprod.component.css']
})
export class InsertarprodComponent implements OnInit {

  forma: FormGroup;
  datos: any;
  departamentos: any;
  proveedores:any;
  constructor(private formBuilder: FormBuilder,
    private router: Router, public servicio: CrudproveedorService, public servicio2: ServicioGeneralService, 
    public servicio3: CrudproductoService){
      this.servicio.obtenerProveedores().subscribe((res)=>{
        this.proveedores = res;
      });
      this.servicio2.obtenerDepartementos().subscribe((res)=>{
        this.departamentos = res;
      });
    this.forma = new FormGroup({
      'nom': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'marca': new FormControl('',Validators.required),
      'precio': new FormControl('',Validators.required),
      'stock': new FormControl('',Validators.required),
      'color': new FormControl('',Validators.required),
      'tam': new FormControl('',Validators.required),
      'id_desc': new FormControl('',Validators.required),
      'id_prov': new FormControl('',Validators.required),
      'id_dep': new FormControl('',Validators.required)
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
       this.servicio3.insertarProducto(this.forma.value).subscribe((res)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se inserto correctamente el producto',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(["/menuproducto"]);
       });
       //console.log(this.forma.value);
      
     }
   
   }
  ngOnInit(): void {
  }

}
