import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudproductoService } from 'src/app/contenido/servicios/crudproducto.service';
import { CrudproveedorService } from 'src/app/contenido/servicios/crudproveedor.service';
import { ServicioGeneralService } from 'src/app/contenido/servicios/servicio-general.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-actualizarprod',
  templateUrl: './actualizarprod.component.html',
  styleUrls: ['./actualizarprod.component.css']
})
export class ActualizarprodComponent implements OnInit {
  public forma: FormGroup;
  public datos: any;
  public datos2: any;
  public id: any;
  public nombre = "hj";
  public load: boolean = false;
  public departamentos: any;
  public proveedores:any;
  public NomDepartamento: string = "";
  public NomProveedor: string = "";
  constructor(private formBuilder: FormBuilder, public activated: ActivatedRoute, public servicio: CrudproductoService,
    private router: Router, public servicio2: CrudproveedorService, public servicio3: ServicioGeneralService) {
    this.id = this.activated.snapshot.params.id;
    console.log(this.id);
    this.servicio.obtenerPrductoActualizar(this.id).subscribe((res) => {
      this.datos2 = res[0];
      this.servicio2.obtenerProveedores().subscribe((res)=>{
        this.proveedores = res;
      });
      this.servicio3.obtenerDepartementos().subscribe((res)=>{
        this.departamentos = res;
      });
      console.log(this.datos2);
      this.servicio2.obtenerProveedorId(this.datos2.ID_PROVEEDOR).subscribe((respu) => {
        this.servicio3.obtenerDepartamento(this.datos2.ID_Departamento).subscribe((respuesta) => {
          //this.nombre = res.Nombre;
          this.load = true;
          console.log(respu);

          console.log(respuesta);
          this.NomDepartamento = respuesta[0].Nombre;
          this.NomProveedor = respu.Nombre;
          this.forma = new FormGroup({
            'nom': new FormControl('', [Validators.required, Validators.minLength(3)]),
            'marca': new FormControl('', Validators.required),
            'precio': new FormControl('', Validators.required),
            'stock': new FormControl('', Validators.required),
            'color': new FormControl('', Validators.required),
            'tam': new FormControl('', Validators.required),
            'id_desc': new FormControl('', Validators.required),
            'id_prov': new FormControl('', Validators.required),
            'id_dep': new FormControl('', Validators.required)
          });
          this.forma.controls["nom"].setValue(this.datos2.Nombre);
          this.forma.controls["marca"].setValue(this.datos2.Marca);
          this.forma.controls["precio"].setValue(this.datos2.Precio);
          this.forma.controls["stock"].setValue(this.datos2.Stock);
          this.forma.controls["color"].setValue(this.datos2["Caracteristicas"].Color);
          this.forma.controls["tam"].setValue(this.datos2["Caracteristicas"].Tamaño);
          this.forma.controls["id_desc"].setValue(this.datos2["Caracteristicas"].Descripcion);
        });
      });

    });


  }

  guardarCambios(): void {
    this.datos = this.forma.value
    console.log(this.forma.value)
    let timerInterval;
    Swal.fire({
      title: 'ACTUALIZANDO PRODUCTO',
      html: ' <b></b>',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft().toString()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })

    this.router.navigate(['/menuproducto']);
  }
  ngOnInit(): void {

  }

}
