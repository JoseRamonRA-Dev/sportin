import { Component, OnInit } from '@angular/core';
import { CruduserService } from '../servicios/cruduser.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  id="61b181cd14cfb09a9a53458a"
  user:any
  constructor(private crudUser:CruduserService) { }

  ngOnInit() {
    this.crudUser.obtenerUsuarioActualizar(this.id).subscribe(
      data => {
        this.user = data
        console.log("USER: ",this.user)
      }
    )
  }

}
