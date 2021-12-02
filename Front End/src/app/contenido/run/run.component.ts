import { Component, OnInit } from '@angular/core';
import { CrudproductoService } from '../servicios/crudproducto.service';
import { ServicioGeneralService } from '../servicios/servicio-general.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {

  datos:any;
  public id_cat: any;
  constructor( public servicioDep: ServicioGeneralService,
    public servicio: CrudproductoService) {
    this.datos = [];
    this.servicioDep.obtenerNomDepartemento('Running').subscribe((resp)=>{
      this.id_cat = resp[0]._id;
        this.servicio.obtenerProductosCat(this.id_cat).subscribe((res)=>{
            this.datos = res;
        });
      });
   }
  ngOnInit(): void {
  }
  agregarwishlist(item: any){
      console.log(item);
      console.log(localStorage.getItem("id_usuario"));
      if(localStorage.getItem("id_usuario") ==""){
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'No puedes añadir cosas hasta que inicies sesión',
          footer: 'Intenta de nuevo'
        })
      }else{
        let body ={
          id_us:localStorage.getItem("id_usuario"),
          id_prod: item._id,
          pi:item.Precio
        }
        this.servicioDep.insertarWishList(body).subscribe((res)=>{
           console.log(res);
           if(res["error"] =="El producto esta en la lista"){
            Swal.fire({
              icon: 'error',
              title: 'ERROR',
              text: 'Este producto ya esta en tu wishlist'
            })
           }else{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Se inserto correctamente el producto a tu wishlist',
              showConfirmButton: false,
              timer: 1500
            });
           }
        });
      }
      
  }
}
