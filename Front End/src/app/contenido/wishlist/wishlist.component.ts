import { Component, OnInit } from '@angular/core';
import { ServicioGeneralService } from '../servicios/servicio-general.service';
import Swal from 'sweetalert2';
import { CrudproductoService } from '../servicios/crudproducto.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  datos:any;
  public bandera: boolean = false;
  constructor(public servicio: ServicioGeneralService, public servicio2: CrudproductoService) {
    this.datos = [];
    if(localStorage.getItem("id_usuario") ==""){
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'Tienes que iniciar sesión',
        footer: 'Intenta de nuevo'
      });
       this.bandera = false;
    }else{
      this.servicio.obtenerWish(localStorage.getItem("id_usuario")).subscribe((res)=>{
         console.log(res);
         if(res["length"] == 0){
              
         }else{
           this.bandera = true;
           let i = 0;
             for(let dato of res){
               //console.log(dato);
               this.servicio2.obtenerPrductoActualizar(dato.ID_PRODDUCTO).subscribe((respuesta)=>{
                  console.log(respuesta);
                  let temp ={
                    Nombre: respuesta[0].Nombre,
                    Marca: respuesta[0].Marca,
                    Precio: dato.PrecioInicial,
                    Id_wish: res[i]._id
                  }
                  i++;
                  this.datos.push(temp);
               });
             }
         }
      });
    }
    
   }
  ngOnInit(): void {
  }
  eliminarProd(id:any){
    console.log(id);
    this.servicio.eliminarProdWish(id).subscribe((respuesta)=>{
       if(respuesta["response"] == "Wish eliminado"){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se elimino de manera correcta el producto de tu wishlist',
          showConfirmButton: false,
          timer: 1500
        });
       }else{
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'No se pudo eliminar el producto de tu wishlist',
          footer: 'Intenta de nuevo'
        })
       }
    });

  }

}
