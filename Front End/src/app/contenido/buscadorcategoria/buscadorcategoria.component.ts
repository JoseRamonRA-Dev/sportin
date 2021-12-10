import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudproductoService } from '../servicios/crudproducto.service';
import { ServicioGeneralService } from '../servicios/servicio-general.service';
import Swal from 'sweetalert2';
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
          if(res["length"] >0){
            this.bandera= true;
            this.datos = res;
          }
       });
    }else{
      this.servicioDep.obtenerNomDepartemento(this.categoria).subscribe((resp)=>{
        this.id_cat = resp[0]._id;
        this.servicio.obtenerProductosTodasCat(this.nombre).subscribe((res)=>{
          console.log(res);
          if(res["length"] >0){
            this.bandera= true;
            this.datos = res;
          }
       });
        // this.servicio.obtenerBuscador1(resp[0]._id, this.nombre).subscribe((respuesta)=>{
        //    console.log(respuesta);
        // });
   });
    }
 
  }

  ngOnInit(): void {
  }
  agregarCarrito(data:any){
    if(localStorage.getItem("id_carrito") != ""){
      let body={
        id_prod: data._id,
        id_ped: localStorage.getItem("id_carrito"),
        cantidad: 1,
        precio: data.Precio,
        estado:0,
        descuento:0.1
      }
      this.servicioDep.crearDetallePedido(body).subscribe((respuesta)=>{
          if(respuesta["error"] == "El producto esta en la lista"){
            Swal.fire({
              icon: 'error',
              title: 'ERROR',
              text: 'Este producto ya esta en tu carrito',
              footer: 'Intenta de nuevo'
            })
          }else{
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Se inserto correctamente el producto a tu carrito',
              showConfirmButton: false,
              timer: 1500
            });
          }
      });
       console.log(body);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'No puedes añadir cosas hasta que inicies sesión',
        footer: 'Intenta de nuevo'
      })
    }
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
