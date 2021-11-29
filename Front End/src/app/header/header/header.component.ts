import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'
import { CruduserService } from 'src/app/contenido/servicios/cruduser.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public banderaAdmin: Boolean = false;
  public banderaCliente: boolean = false;
  public banderaEstado: boolean = true;
  forma: FormGroup;
  datos: any;
  constructor(private formBuilder: FormBuilder, public activatedRoute: ActivatedRoute,
    private router: Router, public servicio: CruduserService){
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
     
     this.servicio.iniciarSesion(correo,contra).subscribe((res)=>{
        console.log(res);
        
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
    console.log('I was closed by the timer');
    this.banderaEstado = false;
    localStorage.setItem("id_usuario",res["id"] );
    if(res["Tipo"] == 0){
      //Aqui va para irse al menu del cliente
      this.banderaCliente = true;
      this.router.navigate([`/home`]);
    }else{
      this.banderaAdmin=true
      this.router.navigate([`/administrador`]);
    }
     
  }
})
     });
    
   }

   cerrar(){
     this.banderaEstado = true;
     this.banderaAdmin = false;
     this.banderaCliente = false;
     localStorage.setItem("id_usuario","" );
    this.router.navigate([`/home`]);
   }
}
