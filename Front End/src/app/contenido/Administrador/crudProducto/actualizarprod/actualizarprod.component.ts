import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-actualizarprod',
  templateUrl: './actualizarprod.component.html',
  styleUrls: ['./actualizarprod.component.css']
})
export class ActualizarprodComponent implements OnInit {
  forma: FormGroup;
  datos: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router){
      this.forma = new FormGroup({
        'Nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'Marca': new FormControl('',Validators.required),
        'Precio': new FormControl('',Validators.required),
        'Stock': new FormControl('',Validators.required),
        'Color': new FormControl('',Validators.required),
        'Tamaño': new FormControl('',Validators.required),
        'Descripcion': new FormControl('',Validators.required),
        'Proveedor': new FormControl('',Validators.required),
        'Departamento': new FormControl('',Validators.required)
       });

  }

  guardarCambios():void{
    this.datos = this.forma.value
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
