import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public bandera: Boolean = true;
  forma: FormGroup;
  datos: any;
  constructor(private formBuilder: FormBuilder, public activatedRoute: ActivatedRoute,
    private router: Router){
    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'categoria': new FormControl('',Validators.required)
     });

  }

  guardarCambios():void{
    this.datos = this.forma.value
      console.log(this.datos);
      this.router.navigate(['/buscadorcat', this.datos.nombre, this.datos.categoria]);
   }
  ngOnInit(): void {
  }
   iniciar(correo:any, contra:any){
    let timerInterval;
Swal.fire({
  title: 'INICIANDO SESION',
  html: 'La sesión comienza en:  <b></b>',
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
   }
}
