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
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'marca': new FormControl('',Validators.required),
      'precio': new FormControl('',Validators.required),
      'stock': new FormControl('',Validators.required),
      'color': new FormControl('',Validators.required),
      'tamano': new FormControl('',Validators.required),
      'desc': new FormControl('',Validators.required),
      'proveedor': new FormControl('',Validators.required),
      'departamento': new FormControl('',Validators.required)
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
