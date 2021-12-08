import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicioGeneralService {
  constructor(public http: HttpClient) { }
  private getHeaders(){
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin','*');
    return headers
  }
  // insertarUsuario(usuario: any){
  //   return this.http.post(`${environment.ip}/Usuario/Insertar`,usuario,{headers:this.getHeaders()});
  // }
  // obtenerUsuarios(){
  //   return this.http.get(`${environment.ip}/Productos/MostrarTodos`,{headers:this.getHeaders()});
  // }
   insertarWishList(wish:any){
    return this.http.post(`${environment.ip}/Wish/Insertar`,wish,{headers:this.getHeaders()});
   }
   obtenerDepartementos(){
    return this.http.get(`${environment.ip}/Departamento/MostrarTodos`,{headers:this.getHeaders()}).pipe(map (  data => data['departamentos']));
  }
  obtenerNomDepartemento(nombre:any){
    return this.http.get(`${environment.ip}/Departamento/BuscarNombre/${nombre}`,{headers:this.getHeaders()}).pipe(map (  data => data['departamento']));
  }
  obtenerDepartamento(id:any){
    return this.http.get(`${environment.ip}/Departamento/Buscar/${id}`,{headers:this.getHeaders()}).pipe(map (  data => data['departamento']));
  }
  obtenerWish(id_user:any){
    return this.http.get(`${environment.ip}/Wish/MostrarWishes/${id_user}`,{headers:this.getHeaders()}).pipe(map (  data => data['wish']));
  }
  eliminarProdWish(id_w:any){
    return this.http.get(`${environment.ip}/Wish/Eliminar/${id_w}`,{headers:this.getHeaders()});
  }
  crearPedido(id_user:any){
    return this.http.post(`${environment.ip}/Pedido/Insertar`,id_user,{headers:this.getHeaders()});
  }

  obtenerCarrito(carr:any){
    return this.http.get(`${environment.ip}/Pedido/Carrito/${carr}`,{headers:this.getHeaders()}).pipe(map (  data => data['ped']));
  }
  carritoAcompra(id:any, data:any){
    return this.http.put(`${environment.ip}/Pedido/Compra/${id}`, data,{headers:this.getHeaders()});
  }
  crearDetallePedido(data:any){
    return this.http.post(`${environment.ip}/Detalle/Insertar`,data,{headers:this.getHeaders()});
  }
  modificarDetalle(id:any, data:any){
    return this.http.put(`${environment.ip}/Detalle/Modificar/${id}`, data,{headers:this.getHeaders()});
  }
  
  eliminarDetalle(carr:any){
    return this.http.get(`${environment.ip}/Detalle/Eliminar/${carr}`,{headers:this.getHeaders()});
  }

  mostrarDetalles(carr:any){
    return this.http.get(`${environment.ip}/Detalle/MostrarPedido/${carr}`,{headers:this.getHeaders()}).pipe(map (  data => data['detalles']));
  }

  crearRastreo(data:any){
    return this.http.post(`${environment.ip}/Rastreo/Insertar`,data,{headers:this.getHeaders()});
  }
  obtenerDireccionUserUnica(iddir:any){
    return this.http.get(`${environment.ip}/Direccion/MostrarPorDireccion/${iddir}`,{headers:this.getHeaders()}).pipe(map (  data => data['dirs']));
  }
  
}
