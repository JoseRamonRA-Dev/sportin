import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CruduserService } from 'src/app/contenido/servicios/cruduser.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-mostrar-dirs',
  templateUrl: './mostrar-dirs.component.html',
  styleUrls: ['./mostrar-dirs.component.css']
})
export class MostrarDirsComponent implements OnInit {

  public datos:any;
  public idUser:any;
  public load: boolean = false;
 public forma: any;
  constructor(public activated: ActivatedRoute,
    private router: Router, public servicio: CruduserService) {
      this.idUser = this.activated.snapshot.params.id;
    this.datos = [];
    this.forma = new FormGroup({
      'iduser': new FormControl('',Validators.required)
     });
   }

  ngOnInit(): void {
    this.servicio.obtenerDireccioUser(this.idUser).subscribe((respuesta)=>{
       this.datos = respuesta;
       this.load = true;
    });
  }
  guardarCambios(){
    console.log(this.forma.value);
    this.router.navigate(['/actualizarDir/',this.forma.value.iduser]);
  }
}
