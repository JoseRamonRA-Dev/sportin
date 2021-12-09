import { Component, OnInit } from '@angular/core';
import { CruduserService } from '../../servicios/cruduser.service';

@Component({
  selector: 'app-membresia',
  templateUrl: './membresia.component.html',
  styleUrls: ['./membresia.component.css']
})
export class MembresiaComponent implements OnInit {

  membresia:any
  propietarioID = localStorage.getItem("id_usuario");
  propietario = localStorage.getItem("nombre");
  
  constructor(private crudUser:CruduserService) { }

  ngOnInit() {
    this.crudUser.obtenerUsuarioActualizar(this.propietarioID).subscribe(
      data => {
        this.membresia = data
        console.log("USER: ",this.membresia)
      }
    )
  }

}
