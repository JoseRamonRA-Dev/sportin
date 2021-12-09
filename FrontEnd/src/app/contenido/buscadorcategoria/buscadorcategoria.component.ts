import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudproductoService } from '../servicios/crudproducto.service';
import { ServicioGeneralService } from '../servicios/servicio-general.service';
@Component({
  selector: 'app-buscadorcategoria',
  templateUrl: './buscadorcategoria.component.html',
  styleUrls: ['./buscadorcategoria.component.css']
})
export class BuscadorcategoriaComponent implements OnInit {
  public bandera: boolean = false;
  public nombre: string = "";
  public categoria: string = "";
  public datos: any;
  public id_cat: any;
  constructor(public activatedRoute: ActivatedRoute, public servicioDep: ServicioGeneralService,
    public servicio: CrudproductoService) { 
    this.nombre = this.activatedRoute.snapshot.params.nom;
    this.categoria = this.activatedRoute.snapshot.params.cat;
    if(this.categoria == "todas"){
       this.servicio.obtenerProductosTodasCat(this.nombre).subscribe((res)=>{
          console.log(res);
       });
    }else{
      this.servicioDep.obtenerNomDepartemento(this.categoria).subscribe((resp)=>{
        this.id_cat = resp[0]._id;
        this.servicio.obtenerProductosTodasCat(this.nombre).subscribe((res)=>{
          console.log(res);
          this.datos = res;
       });
        // this.servicio.obtenerBuscador1(resp[0]._id, this.nombre).subscribe((respuesta)=>{
        //    console.log(respuesta);
        // });
   });
    }
 
  }

  ngOnInit(): void {
  }

}
