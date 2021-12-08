import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { CruduserService } from 'src/app/contenido/servicios/cruduser.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-actualizaruser',
  templateUrl: './actualizaruser.component.html',
  styleUrls: ['./actualizaruser.component.css']
})
export class ActualizaruserComponent implements OnInit {
  forma: FormGroup;
  datos: any;
  public id: any;
  public tipoUser: String ="";
  public fecha: string="";
  public load: boolean = false;
  public cp: any;
  public id_cp: any;
  public id_dir: any;
  public tipo: number;
  public contra: any;
  constructor(private formBuilder: FormBuilder,public servicio: CruduserService,
    private router: Router, public activated: ActivatedRoute){
      this.id = this.activated.snapshot.params.id;
      this.servicio.obtenerUsuarioActualizar(this.id).subscribe((r)=>{
        console.log(r);
        this.servicio.obtenerDireccioUser(r["Id"]).subscribe((re)=>{
          console.log(re)
          this.servicio.buscarCodigoXiD(re[0].Codigo_postal).subscribe((res)=>{
            console.log(res);
            this.cp = res[0].ID_CP;
            this.id_cp = res[0]._id;
            this.id_dir = re[0]._id;
            this.contra = r["Contrasena"];
            this.tipo = r["Tipo"].Nivel;
            if(r["Tipo"].Nivel == 0){
              this.tipoUser = "Cliente";
            }else{
              this.tipoUser = "Administrador";
              this.fecha = r["Tipo"].FechaIngreso;
            }
            this.forma = new FormGroup({
              'Nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
              'ApePat': new FormControl('',Validators.required),
              'ApeMat': new FormControl('',Validators.required),
              'cod': new FormControl('',Validators.required),
              'int': new FormControl(''),
              'ext': new FormControl('',Validators.required),
              'calle': new FormControl('',Validators.required),
              'nivel': new FormControl(''),
              'Telefono': new FormControl('',Validators.required),
              'Email': new FormControl('',Validators.required),
              'fi': new FormControl(''),
              'sal': new FormControl(''),
              'Contrasena': new FormControl(''),
              'contra2': new FormControl(''),
             });
             this.forma.controls["Nombre"].setValue(r["Nombre"]);
             this.forma.controls["ApePat"].setValue(r["ApePat"]);
             this.forma.controls["ApeMat"].setValue(r["ApeMat"]);
             this.forma.controls["Telefono"].setValue(r["Telefono"]);
             this.forma.controls["Email"].setValue(r["Email"]);
             this.forma.controls["sal"].setValue(r["Tipo"].Salario);
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
    this.datos = this.forma.value;
    if(this.forma.invalid){
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'Tienes que añadir todos los campos requeridos',
        footer: 'Intenta de nuevo'
      })
     }else{
        if(this.forma.value.Contrasena == ""){
          this.forma.controls["Contrasena"].setValue(this.contra);
        }else if(this.datos.Contrasena != this.datos.contra2){
          Swal.fire({
            icon: 'error',
            title: 'Contraseñas',
            text: 'Las contraseñas no coinciden'
          });
        }
       if(this.forma.value.nivel == ""){
        this.forma.controls["nivel"].setValue(this.tipo);
       }
       if(this.forma.value.fi == ""){
        this.forma.controls["fi"].setValue(this.fecha);
       }
       this.servicio.buscarCodigo(this.datos.cod).subscribe((res)=>{
           if(res[0]){
             console.log(res);
            this.servicio.modificarUsuario(this.id,this.forma.value).subscribe((resp)=>{
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
                  title: 'Se actualizo correctamente el usuario',
                  showConfirmButton: false,
                  timer: 1500
                });
                this.router.navigate(["/menuusuario"]);
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
