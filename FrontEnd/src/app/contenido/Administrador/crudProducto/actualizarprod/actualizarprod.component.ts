import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { CrudproductoService } from 'src/app/contenido/servicios/crudproducto.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-actualizarprod',
  templateUrl: './actualizarprod.component.html',
  styleUrls: ['./actualizarprod.component.css']
})
export class ActualizarprodComponent implements OnInit {
  forma: FormGroup;
  datos: any;
  public datos2:any;
  public id: any;
  public nombre = "hj";
  constructor(private formBuilder: FormBuilder, public activated: ActivatedRoute,public servicio: CrudproductoService,
    private router: Router){
      this.id = this.activated.snapshot.params.id;
      console.log(this.id);
      this.servicio.obtenerPrductoActualizar(this.id).subscribe((res)=>{
        this.datos2 = res;
        console.log(res);
        this.nombre = res.Nombre;
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
