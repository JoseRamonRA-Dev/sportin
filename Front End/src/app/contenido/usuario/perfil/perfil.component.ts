import { Component, OnInit } from '@angular/core';
import { CruduserService } from '../../servicios/cruduser.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  id=localStorage.getItem('id_usuario')
  user:any
  constructor(private crudUser:CruduserService) { }

  ngOnInit() {
    console.log(this.id)
    this.crudUser.obtenerUsuarioActualizar(this.id).subscribe(
      data => {
        this.user = data
        console.log("USER: ",this.user)
        localStorage.setItem("nombre",this.user.Nombre)
      }
    )
    
  }

}
